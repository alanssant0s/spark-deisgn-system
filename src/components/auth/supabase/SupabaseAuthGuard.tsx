import { ReactNode } from 'react'
import { useSupabaseAuthContext } from './SupabaseAuthProvider'
import { LoadingButton } from '../LoadingButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock, Shield, UserCheck } from 'lucide-react'

interface SupabaseAuthGuardProps {
    children: ReactNode
    fallback?: ReactNode
    redirectTo?: string
    requireEmailVerification?: boolean
    requiredRole?: string
    showLoginPrompt?: boolean
}

export const SupabaseAuthGuard = ({
    children,
    fallback,
    redirectTo,
    requireEmailVerification = false,
    requiredRole,
    showLoginPrompt = true
}: SupabaseAuthGuardProps) => {
    const { user, isLoading, isAuthenticated } = useSupabaseAuthContext()

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        <p className="text-sm text-muted-foreground">Verificando autenticação...</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Not authenticated
    if (!isAuthenticated) {
        if (fallback) {
            return <>{fallback}</>
        }

        if (!showLoginPrompt) {
            return null
        }

        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center space-y-2">
                        <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Lock className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <CardTitle>Acesso Restrito</CardTitle>
                        <CardDescription>
                            Você precisa estar logado para acessar esta página
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button
                            className="w-full"
                            onClick={() => {
                                if (redirectTo) {
                                    window.location.href = redirectTo
                                } else {
                                    window.location.href = '/auth/login'
                                }
                            }}
                        >
                            Fazer Login
                        </Button>
                        <div className="text-center">
                            <Button
                                variant="link"
                                className="text-sm"
                                onClick={() => {
                                    if (redirectTo) {
                                        window.location.href = redirectTo
                                    } else {
                                        window.location.href = '/auth/register'
                                    }
                                }}
                            >
                                Não tem uma conta? Cadastre-se
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Email verification required
    if (requireEmailVerification && !user?.email_confirmed_at) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center space-y-2">
                        <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Shield className="h-6 w-6 text-yellow-600" />
                        </div>
                        <CardTitle>Verificação de Email Necessária</CardTitle>
                        <CardDescription>
                            Por favor, verifique seu email antes de continuar
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-sm text-muted-foreground text-center">
                            <p>Enviamos um link de verificação para:</p>
                            <p className="font-medium text-foreground mt-1">{user?.email}</p>
                        </div>
                        <Button
                            className="w-full"
                            variant="outline"
                            onClick={() => {
                                // Aqui você pode implementar o reenvio do email de verificação
                                alert('Funcionalidade de reenvio será implementada')
                            }}
                        >
                            Reenviar Email de Verificação
                        </Button>
                        <div className="text-center">
                            <Button
                                variant="link"
                                className="text-sm"
                                onClick={() => {
                                    // Logout e redirecionar para login
                                    window.location.href = '/auth/login'
                                }}
                            >
                                Usar outro email
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Role verification required
    if (requiredRole && user?.role !== requiredRole) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center space-y-2">
                        <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <Shield className="h-6 w-6 text-red-600" />
                        </div>
                        <CardTitle>Acesso Negado</CardTitle>
                        <CardDescription>
                            Você não tem permissão para acessar esta página
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-sm text-muted-foreground text-center">
                            <p>Esta página requer a role: <span className="font-medium text-foreground">{requiredRole}</span></p>
                            <p className="mt-1">Sua role atual: <span className="font-medium text-foreground">{user?.role || 'Nenhuma'}</span></p>
                        </div>
                        <Button
                            className="w-full"
                            onClick={() => {
                                window.location.href = '/'
                            }}
                        >
                            Voltar ao Início
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // All checks passed
    return <>{children}</>
}

// Hook para verificar permissões
export const useAuthGuard = () => {
    const { user, isAuthenticated, isLoading } = useSupabaseAuthContext()

    const hasRole = (role: string) => {
        return user?.role === role
    }

    const hasAnyRole = (roles: string[]) => {
        return roles.includes(user?.role || '')
    }

    const isEmailVerified = () => {
        return !!user?.email_confirmed_at
    }

    return {
        user,
        isAuthenticated,
        isLoading,
        hasRole,
        hasAnyRole,
        isEmailVerified
    }
}
