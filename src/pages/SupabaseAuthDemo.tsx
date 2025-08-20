import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
    SupabaseAuthProvider,
    SupabaseLoginForm,
    SupabaseRegisterForm,
    SupabasePasswordReset,
    SupabaseProfileForm,
    SupabaseAuthGuard,
    SupabaseUserMenu,
    useSupabaseAuthContext
} from '@/components/auth/supabase'
import {
    User,
    Lock,
    Settings,
    Shield,
    Mail,
    Calendar,
    CheckCircle,
    XCircle
} from 'lucide-react'

// Componente para mostrar informações do usuário
const UserInfo = () => {
    const { user, isAuthenticated, isLoading } = useSupabaseAuthContext()

    if (isLoading) {
        return (
            <Card>
                <CardContent className="flex items-center justify-center p-6">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                </CardContent>
            </Card>
        )
    }

    if (!isAuthenticated) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Status da Autenticação
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span className="text-red-500 font-medium">Não autenticado</span>
                    </div>
                </CardContent>
            </Card>
        )
    }

    const getUserName = () => {
        return user?.user_metadata?.name ||
            user?.user_metadata?.full_name ||
            user?.email?.split('@')[0] ||
            'Usuário'
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Informações do Usuário
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-500 font-medium">Autenticado</span>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Nome:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">
                            {getUserName()}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Email:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">
                            {user?.email}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Role:</span>
                        </div>
                        <Badge variant="outline" className="ml-6">
                            {user?.role || 'user'}
                        </Badge>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Membro desde:</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">
                            {formatDate(user?.created_at || '')}
                        </p>
                    </div>
                </div>

                <Separator />

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Email verificado:</span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                        {user?.email_confirmed_at ? (
                            <>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-green-500">Sim</span>
                                <span className="text-xs text-muted-foreground">
                                    ({formatDate(user.email_confirmed_at)})
                                </span>
                            </>
                        ) : (
                            <>
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span className="text-sm text-red-500">Não</span>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// Componente principal da demonstração
const SupabaseAuthDemoContent = () => {
    const [activeTab, setActiveTab] = useState('login')

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">🔐 Autenticação com Supabase</h1>
                    <p className="text-xl text-muted-foreground">
                        Demonstração completa dos componentes de autenticação
                    </p>
                </div>

                {/* User Menu */}
                <div className="flex justify-end">
                    <SupabaseUserMenu
                        onProfileClick={() => setActiveTab('profile')}
                        onSettingsClick={() => setActiveTab('profile')}
                    />
                </div>

                {/* User Info */}
                <UserInfo />

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="login" className="flex items-center gap-2">
                            <Lock className="h-4 w-4" />
                            Login
                        </TabsTrigger>
                        <TabsTrigger value="register" className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Registro
                        </TabsTrigger>
                        <TabsTrigger value="reset" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Reset Senha
                        </TabsTrigger>
                        <TabsTrigger value="profile" className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Perfil
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Formulário de Login</CardTitle>
                                <CardDescription>
                                    Teste o login com email/senha ou provedores sociais
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SupabaseLoginForm
                                    onSuccess={() => {
                                        console.log('Login realizado com sucesso!')
                                        setActiveTab('profile')
                                    }}
                                    onError={(error) => {
                                        console.error('Erro no login:', error)
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Formulário de Registro</CardTitle>
                                <CardDescription>
                                    Crie uma nova conta com validação completa
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SupabaseRegisterForm
                                    onSuccess={() => {
                                        console.log('Registro realizado com sucesso!')
                                        setActiveTab('login')
                                    }}
                                    onError={(error) => {
                                        console.error('Erro no registro:', error)
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="reset" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Reset de Senha</CardTitle>
                                <CardDescription>
                                    Solicite um link para redefinir sua senha
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SupabasePasswordReset
                                    onSuccess={() => {
                                        console.log('Email de reset enviado!')
                                    }}
                                    onError={(error) => {
                                        console.error('Erro no reset:', error)
                                    }}
                                    onBack={() => setActiveTab('login')}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="profile" className="space-y-4">
                        <SupabaseAuthGuard
                            fallback={
                                <Card>
                                    <CardContent className="flex items-center justify-center p-8">
                                        <div className="text-center space-y-4">
                                            <Lock className="h-12 w-12 text-muted-foreground mx-auto" />
                                            <p className="text-muted-foreground">
                                                Faça login para acessar seu perfil
                                            </p>
                                            <Button onClick={() => setActiveTab('login')}>
                                                Ir para Login
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            }
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Formulário de Perfil</CardTitle>
                                    <CardDescription>
                                        Atualize suas informações pessoais
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <SupabaseProfileForm
                                        onSuccess={() => {
                                            console.log('Perfil atualizado com sucesso!')
                                        }}
                                        onError={(error) => {
                                            console.error('Erro ao atualizar perfil:', error)
                                        }}
                                    />
                                </CardContent>
                            </Card>
                        </SupabaseAuthGuard>
                    </TabsContent>
                </Tabs>

                {/* Exemplos de Proteção */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">🛡️ Exemplos de Proteção</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Conteúdo Protegido</CardTitle>
                                <CardDescription>
                                    Este conteúdo só aparece para usuários autenticados
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SupabaseAuthGuard
                                    fallback={
                                        <p className="text-muted-foreground">
                                            Faça login para ver este conteúdo
                                        </p>
                                    }
                                >
                                    <div className="space-y-2">
                                        <p className="text-green-600">✅ Conteúdo protegido visível!</p>
                                        <p className="text-sm text-muted-foreground">
                                            Você está autenticado e pode ver este conteúdo.
                                        </p>
                                    </div>
                                </SupabaseAuthGuard>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Conteúdo Admin</CardTitle>
                                <CardDescription>
                                    Este conteúdo só aparece para administradores
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SupabaseAuthGuard
                                    requiredRole="admin"
                                    fallback={
                                        <p className="text-muted-foreground">
                                            Acesso restrito a administradores
                                        </p>
                                    }
                                >
                                    <div className="space-y-2">
                                        <p className="text-green-600">👑 Painel de Administrador!</p>
                                        <p className="text-sm text-muted-foreground">
                                            Você tem permissões de administrador.
                                        </p>
                                    </div>
                                </SupabaseAuthGuard>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Wrapper com Provider
export const SupabaseAuthDemo = () => {
    return (
        <SupabaseAuthProvider>
            <SupabaseAuthDemoContent />
        </SupabaseAuthProvider>
    )
}
