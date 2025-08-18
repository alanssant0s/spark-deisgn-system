import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
    LogIn,
    UserPlus,
    KeyRound,
    Shield,
    Eye,
    ExternalLink,
    User,
    Mail,
    Lock,
    CheckCircle,
    AlertCircle,
    Info
} from "lucide-react";

const AuthPages = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuth();

    const authPages = [
        {
            id: "login",
            title: "Login",
            description: "Página de autenticação com validação completa",
            icon: LogIn,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            route: "/auth/login",
            features: [
                "Validação em tempo real",
                "Login social (Google, GitHub, Apple)",
                "Opção 'Lembrar de mim'",
                "Link para recuperação de senha",
                "Estados de loading",
                "Mensagens de erro personalizadas"
            ]
        },
        {
            id: "register",
            title: "Criar Conta",
            description: "Registro de usuário com validação avançada",
            icon: UserPlus,
            color: "text-green-600",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            route: "/auth/register",
            features: [
                "Medidor de força da senha",
                "Validação de confirmação de senha",
                "Aceite de termos obrigatório",
                "Registro social integrado",
                "Validação de email em tempo real",
                "Feedback visual de requisitos"
            ]
        },
        {
            id: "reset",
            title: "Reset de Senha",
            description: "Recuperação de senha em múltiplas etapas",
            icon: KeyRound,
            color: "text-amber-600",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
            route: "/auth/reset-password",
            features: [
                "Fluxo de 3 etapas",
                "Confirmação por email",
                "Validação de token",
                "Nova senha com força",
                "Opção de reenvio",
                "Instruções claras"
            ]
        }
    ];

    const handleViewPage = (route: string) => {
        if (route === "/auth/reset-password") {
            // Para demonstrar o formulário de nova senha
            const urlWithToken = `${route}?token=demo_token`;
            window.open(urlWithToken, '_blank');
        } else {
            window.open(route, '_blank');
        }
    };

    const handleTestAuth = () => {
        if (isAuthenticated) {
            logout();
        } else {
            navigate("/auth/login");
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Sistema de Autenticação</h1>
                <p className="text-muted-foreground">
                    Páginas completas de autenticação com validação avançada e experiência do usuário otimizada
                </p>
            </div>

            {/* Auth Status */}
            <Alert className={isAuthenticated ? "border-green-200 bg-green-50" : "border-blue-200 bg-blue-50"}>
                <Shield className={`h-4 w-4 ${isAuthenticated ? "text-green-600" : "text-blue-600"}`} />
                <AlertDescription className={isAuthenticated ? "text-green-700" : "text-blue-700"}>
                    <div className="flex items-center justify-between">
                        <div>
                            <strong>Status de Autenticação:</strong> {isAuthenticated ? "Conectado" : "Desconectado"}
                            {user && (
                                <div className="mt-1 text-sm">
                                    Usuário: {user.name} ({user.email})
                                </div>
                            )}
                        </div>
                        <Button
                            variant={isAuthenticated ? "outline" : "default"}
                            size="sm"
                            onClick={handleTestAuth}
                        >
                            {isAuthenticated ? "Logout" : "Fazer Login"}
                        </Button>
                    </div>
                </AlertDescription>
            </Alert>

            {/* Auth Pages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {authPages.map((page) => (
                    <Card key={page.id} className={`${page.borderColor} hover:shadow-lg transition-all duration-200`}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 ${page.bgColor} rounded-lg`}>
                                        <page.icon className={`h-6 w-6 ${page.color}`} />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{page.title}</CardTitle>
                                        <CardDescription className="mt-1">
                                            {page.description}
                                        </CardDescription>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Features */}
                            <div>
                                <h4 className="font-medium text-sm mb-2">Recursos inclusos:</h4>
                                <ul className="space-y-1">
                                    {page.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                                <Button
                                    onClick={() => handleViewPage(page.route)}
                                    className="flex items-center gap-2 flex-1"
                                >
                                    <Eye className="h-4 w-4" />
                                    Visualizar
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open(page.route, '_blank')}
                                    className="flex items-center gap-2"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Auth Context Demo */}
            <Card className="border-2 border-dashed border-purple-200">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <User className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                            <CardTitle className="text-xl">Contexto de Autenticação</CardTitle>
                            <CardDescription>
                                Sistema centralizado de gerenciamento de estado de autenticação
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-medium text-sm mb-2">Funcionalidades:</h4>
                        <ul className="space-y-1">
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Gerenciamento global de estado do usuário
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Persistência automática de sessão
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Hooks personalizados para acesso aos dados
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Integração com localStorage e tokens
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Métodos para login, registro e logout
                            </li>
                        </ul>
                    </div>

                    {/* Current User Info */}
                    {isAuthenticated && user && (
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <h4 className="font-semibold text-sm mb-3 text-purple-800">Usuário Atual:</h4>
                            <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="font-medium">ID:</span> {user.id}
                                </div>
                                <div>
                                    <span className="font-medium">Nome:</span> {user.name}
                                </div>
                                <div>
                                    <span className="font-medium">Email:</span> {user.email}
                                </div>
                                <div>
                                    <span className="font-medium">Função:</span>
                                    <Badge variant="outline" className="ml-2 text-xs">
                                        {user.role}
                                    </Badge>
                                </div>
                                <div>
                                    <span className="font-medium">Criado em:</span> {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                                </div>
                                {user.lastLogin && (
                                    <div>
                                        <span className="font-medium">Último login:</span> {new Date(user.lastLogin).toLocaleString('pt-BR')}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Implementation Guide */}
            <Card>
                <CardHeader>
                    <CardTitle>Como Usar</CardTitle>
                    <CardDescription>
                        Guia de implementação do sistema de autenticação
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                1. Rotas de Autenticação
                            </h4>
                            <p className="text-sm text-muted-foreground ml-6">
                                As páginas de autenticação são renderizadas sem layout, proporcionando uma experiência focada.
                            </p>
                            <div className="ml-6 mt-2 space-y-1">
                                <code className="bg-muted px-2 py-1 rounded text-xs block">/auth/login</code>
                                <code className="bg-muted px-2 py-1 rounded text-xs block">/auth/register</code>
                                <code className="bg-muted px-2 py-1 rounded text-xs block">/auth/reset-password</code>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-600" />
                                2. Contexto de Autenticação
                            </h4>
                            <p className="text-sm text-muted-foreground ml-6">
                                Use o hook <code className="bg-muted px-1 rounded">useAuth()</code> para acessar dados do usuário e métodos de autenticação.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                <Lock className="h-4 w-4 text-amber-600" />
                                3. Proteção de Rotas
                            </h4>
                            <p className="text-sm text-muted-foreground ml-6">
                                Implemente componentes de proteção usando <code className="bg-muted px-1 rounded">isAuthenticated</code> do contexto.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                <Mail className="h-4 w-4 text-purple-600" />
                                4. Credenciais de Teste
                            </h4>
                            <div className="ml-6 bg-muted p-3 rounded-lg text-sm">
                                <div><strong>Email:</strong> admin@exemplo.com</div>
                                <div><strong>Senha:</strong> 123456</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPages;
