import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Shield, Lock, User, AlertTriangle, LogIn, HelpCircle } from "lucide-react";

const Forbidden = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleLogin = () => {
        // Aqui você redirecionaria para a página de login
        navigate("/login");
    };

    const possibleReasons = [
        {
            icon: User,
            title: "Não autenticado",
            description: "Você precisa fazer login para acessar esta página.",
            action: "Fazer Login"
        },
        {
            icon: Shield,
            title: "Permissões insuficientes",
            description: "Sua conta não possui as permissões necessárias.",
            action: "Solicitar Acesso"
        },
        {
            icon: Lock,
            title: "Recurso restrito",
            description: "Este conteúdo está disponível apenas para usuários premium.",
            action: "Fazer Upgrade"
        }
    ];

    const alternativeActions = [
        { title: "Dashboard", path: "/", icon: Home, description: "Volte para a página inicial" },
        { title: "Perfil", path: "/profile", icon: User, description: "Verifique suas permissões" },
        { title: "Suporte", path: "/support", icon: HelpCircle, description: "Entre em contato conosco" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-background flex items-center justify-center p-4">
            <div className="max-w-2xl w-full space-y-8">
                {/* Error Illustration */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="text-9xl font-bold text-amber-200 select-none">403</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Shield className="h-16 w-16 text-amber-600 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Main Error Card */}
                <Card className="border-2 border-amber-200">
                    <CardHeader className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Lock className="h-6 w-6 text-amber-600" />
                            <CardTitle className="text-2xl text-amber-700">Acesso Negado</CardTitle>
                        </div>
                        <CardDescription className="text-lg">
                            Você não tem permissão para acessar esta página ou recurso.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Alert */}
                        <Alert className="border-amber-200 bg-amber-50">
                            <AlertTriangle className="h-4 w-4 text-amber-600" />
                            <AlertDescription className="text-amber-700">
                                <strong>Acesso Restrito:</strong> Esta página requer permissões especiais ou autenticação.
                            </AlertDescription>
                        </Alert>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={handleLogin} className="flex items-center gap-2">
                                <LogIn className="h-4 w-4" />
                                Fazer Login
                            </Button>
                            <Button variant="outline" onClick={handleGoHome} className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Ir para Dashboard
                            </Button>
                            <Button variant="ghost" onClick={handleGoBack} className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Voltar
                            </Button>
                        </div>

                        {/* Possible Reasons */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-center">Possíveis motivos:</h3>
                            <div className="grid gap-4">
                                {possibleReasons.map((reason, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-lg border border-amber-200/50">
                                        <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg">
                                            <reason.icon className="h-5 w-5 text-amber-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-medium text-sm">{reason.title}</h4>
                                                <Badge variant="outline" className="text-xs">
                                                    {reason.action}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Alternative Actions */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-center">O que você pode fazer:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {alternativeActions.map((action, index) => (
                                    <Card
                                        key={index}
                                        className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105 border-amber-200/50 hover:border-amber-300"
                                        onClick={() => navigate(action.path)}
                                    >
                                        <CardContent className="p-4 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="p-2 bg-amber-100 rounded-lg">
                                                    <action.icon className="h-4 w-4 text-amber-600" />
                                                </div>
                                                <h4 className="font-medium text-sm">{action.title}</h4>
                                                <p className="text-xs text-muted-foreground">
                                                    {action.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="bg-muted/30 rounded-lg p-4 border border-amber-200/30">
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                <User className="h-4 w-4" />
                                Informações da Conta
                            </h4>
                            <div className="text-xs text-muted-foreground space-y-1">
                                <div><strong>Status:</strong> <Badge variant="secondary" className="text-xs">Visitante</Badge></div>
                                <div><strong>Nível de Acesso:</strong> Público</div>
                                <div><strong>Última Atividade:</strong> {new Date().toLocaleString('pt-BR')}</div>
                            </div>
                        </div>

                        {/* Help Text */}
                        <div className="text-center text-sm text-muted-foreground border-t pt-4">
                            <p>
                                Precisa de ajuda com permissões?
                                <Button variant="link" className="p-0 h-auto text-sm ml-1">
                                    Entre em contato com o administrador
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Error Code */}
                <div className="text-center">
                    <p className="text-xs text-muted-foreground font-mono">
                        Error Code: 403 - Forbidden Access
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;
