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
import { PasswordStrength } from '../PasswordStrength'
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from 'lucide-react'

const registerSchema = z.object({
    name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string()
        .min(8, 'Senha deve ter pelo menos 8 caracteres')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número'),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos de uso'),
    acceptMarketing: z.boolean().optional()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
})

type RegisterFormData = z.infer<typeof registerSchema>

interface SupabaseRegisterFormProps {
    onSuccess?: () => void
    onError?: (error: string) => void
    showSocialLogin?: boolean
    requireEmailConfirmation?: boolean
    className?: string
}

export const SupabaseRegisterForm = ({
    onSuccess,
    onError,
    showSocialLogin = true,
    requireEmailConfirmation = true,
    className
}: SupabaseRegisterFormProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const { signUp, signInWithProvider, isLoading } = useSupabaseAuthContext()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })

    const password = watch('password')

    const onSubmit = async (data: RegisterFormData) => {
        setError(null)
        setSuccess(null)

        const { error } = await signUp(data.email, data.password, {
            name: data.name
        })

        if (error) {
            let errorMessage = error.message

            if (error.message.includes('User already registered')) {
                errorMessage = 'Este email já está cadastrado'
            } else if (error.message.includes('Password should be at least')) {
                errorMessage = 'Senha deve ter pelo menos 6 caracteres'
            }

            setError(errorMessage)
            onError?.(errorMessage)
        } else {
            const successMessage = requireEmailConfirmation
                ? 'Conta criada com sucesso! Verifique seu email para confirmar a conta.'
                : 'Conta criada com sucesso! Você já pode fazer login.'

            setSuccess(successMessage)
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
                <CardTitle className="text-2xl text-center">Criar Conta</CardTitle>
                <CardDescription className="text-center">
                    Preencha os dados abaixo para criar sua conta
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {success && (
                        <Alert>
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Seu nome completo"
                                className="pl-10"
                                {...register('name')}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                    </div>

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
                        {password && <PasswordStrength password={password} />}
                        {errors.password && (
                            <p className="text-sm text-destructive">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                className="pl-10 pr-10"
                                {...register('confirmPassword')}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="acceptTerms" {...register('acceptTerms')} />
                            <Label htmlFor="acceptTerms" className="text-sm font-normal">
                                Eu aceito os{' '}
                                <a href="/terms" className="text-primary hover:underline">
                                    termos de uso
                                </a>{' '}
                                e{' '}
                                <a href="/privacy" className="text-primary hover:underline">
                                    política de privacidade
                                </a>
                            </Label>
                        </div>
                        {errors.acceptTerms && (
                            <p className="text-sm text-destructive">{errors.acceptTerms.message}</p>
                        )}

                        <div className="flex items-center space-x-2">
                            <Checkbox id="acceptMarketing" {...register('acceptMarketing')} />
                            <Label htmlFor="acceptMarketing" className="text-sm font-normal">
                                Aceito receber emails promocionais e novidades
                            </Label>
                        </div>
                    </div>

                    <LoadingButton
                        type="submit"
                        className="w-full"
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        Criar Conta
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
