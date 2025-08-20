import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useSupabaseAuthContext } from './SupabaseAuthProvider'
import { SocialLogin } from '../SocialLogin'
import { LoadingButton } from '../LoadingButton'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
    rememberMe: z.boolean().optional()
})

type LoginFormData = z.infer<typeof loginSchema>

interface SupabaseLoginFormProps {
    onSuccess?: () => void
    onError?: (error: string) => void
    showSocialLogin?: boolean
    redirectTo?: string
    className?: string
}

export const SupabaseLoginForm = ({
    onSuccess,
    onError,
    showSocialLogin = true,
    redirectTo,
    className
}: SupabaseLoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const { signIn, signInWithProvider, isLoading } = useSupabaseAuthContext()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data: LoginFormData) => {
        setError(null)

        const { error } = await signIn(data.email, data.password)

        if (error) {
            const errorMessage = error.message === 'Invalid login credentials'
                ? 'Email ou senha incorretos'
                : error.message

            setError(errorMessage)
            onError?.(errorMessage)
        } else {
            onSuccess?.()
        }
    }

    const handleSocialLogin = async (provider: 'google' | 'github' | 'discord') => {
        setError(null)

        const { error } = await signInWithProvider(provider)

        if (error) {
            setError(error.message)
            onError?.(error.message)
        }
    }

    return (
        <Card className={className}>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Entrar</CardTitle>
                <CardDescription className="text-center">
                    Digite suas credenciais para acessar sua conta
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                className="pl-10"
                                {...register('email')}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                className="pl-10 pr-10"
                                {...register('password')}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        {errors.password && (
                            <p className="text-sm text-destructive">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="rememberMe" {...register('rememberMe')} />
                        <Label htmlFor="rememberMe" className="text-sm font-normal">
                            Lembrar de mim
                        </Label>
                    </div>

                    <LoadingButton
                        type="submit"
                        className="w-full"
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        Entrar
                    </LoadingButton>
                </form>

                {showSocialLogin && (
                    <>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Ou continue com
                                </span>
                            </div>
                        </div>

                        <SocialLogin
                            onGoogleClick={() => handleSocialLogin('google')}
                            onGithubClick={() => handleSocialLogin('github')}
                            onDiscordClick={() => handleSocialLogin('discord')}
                            disabled={isLoading}
                        />
                    </>
                )}
            </CardContent>
        </Card>
    )
}
