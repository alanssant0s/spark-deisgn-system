import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useSupabaseAuthContext } from './SupabaseAuthProvider'
import { LoadingButton } from '../LoadingButton'
import { PasswordStrength } from '../PasswordStrength'
import { Eye, EyeOff, Mail, Lock, CheckCircle, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const resetPasswordSchema = z.object({
    email: z.string().email('Email inválido')
})

const updatePasswordSchema = z.object({
    password: z.string()
        .min(8, 'Senha deve ter pelo menos 8 caracteres')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
})

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>

interface SupabasePasswordResetProps {
    onSuccess?: () => void
    onError?: (error: string) => void
    onBack?: () => void
    className?: string
}

export const SupabasePasswordReset = ({
    onSuccess,
    onError,
    onBack,
    className
}: SupabasePasswordResetProps) => {
    const [step, setStep] = useState<'request' | 'update'>('request')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const { resetPassword, updatePassword, isLoading } = useSupabaseAuthContext()

    const resetForm = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema)
    })

    const updateForm = useForm<UpdatePasswordFormData>({
        resolver: zodResolver(updatePasswordSchema)
    })

    const password = updateForm.watch('password')

    const handleResetRequest = async (data: ResetPasswordFormData) => {
        setError(null)
        setSuccess(null)

        const { error } = await resetPassword(data.email)

        if (error) {
            setError('Erro ao enviar email de reset. Verifique se o email está correto.')
            onError?.(error.message)
        } else {
            setEmail(data.email)
            setSuccess('Email de reset enviado com sucesso! Verifique sua caixa de entrada.')
            setStep('update')
        }
    }

    const handlePasswordUpdate = async (data: UpdatePasswordFormData) => {
        setError(null)
        setSuccess(null)

        const { error } = await updatePassword(data.password)

        if (error) {
            setError('Erro ao atualizar senha. Tente novamente.')
            onError?.(error.message)
        } else {
            setSuccess('Senha atualizada com sucesso!')
            onSuccess?.()
        }
    }

    const handleBack = () => {
        setStep('request')
        setError(null)
        setSuccess(null)
        onBack?.()
    }

    if (step === 'update') {
        return (
            <Card className={className}>
                <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleBack}
                            className="p-0 h-auto"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <CardTitle className="text-2xl">Nova Senha</CardTitle>
                    </div>
                    <CardDescription>
                        Digite sua nova senha
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={updateForm.handleSubmit(handlePasswordUpdate)} className="space-y-4">
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
                            <Label htmlFor="password">Nova Senha</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10"
                                    {...updateForm.register('password')}
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
                            {updateForm.formState.errors.password && (
                                <p className="text-sm text-destructive">
                                    {updateForm.formState.errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10"
                                    {...updateForm.register('confirmPassword')}
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
                            {updateForm.formState.errors.confirmPassword && (
                                <p className="text-sm text-destructive">
                                    {updateForm.formState.errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <LoadingButton
                            type="submit"
                            className="w-full"
                            loading={isLoading}
                            disabled={isLoading}
                        >
                            Atualizar Senha
                        </LoadingButton>
                    </form>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className={className}>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Reset de Senha</CardTitle>
                <CardDescription className="text-center">
                    Digite seu email para receber um link de reset de senha
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form onSubmit={resetForm.handleSubmit(handleResetRequest)} className="space-y-4">
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
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                className="pl-10"
                                {...resetForm.register('email')}
                            />
                        </div>
                        {resetForm.formState.errors.email && (
                            <p className="text-sm text-destructive">
                                {resetForm.formState.errors.email.message}
                            </p>
                        )}
                    </div>

                    <LoadingButton
                        type="submit"
                        className="w-full"
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        Enviar Email de Reset
                    </LoadingButton>
                </form>

                {onBack && (
                    <div className="text-center">
                        <Button
                            variant="link"
                            onClick={onBack}
                            className="text-sm"
                        >
                            Voltar para login
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
