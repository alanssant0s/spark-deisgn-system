import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BaseErrorPage, ErrorPageProps, ErrorAlert } from "@/components/errors";
import { Home, Shield, Lock, User, LogIn, HelpCircle } from "lucide-react";

const Forbidden = () => {
    const possibleReasons = [
        {
            icon: <User className="h-5 w-5" />,
            title: "Não autenticado",
            description: "Você precisa fazer login para acessar esta página.",
            action: "Fazer Login"
        },
        {
            icon: <Shield className="h-5 w-5" />,
            title: "Permissões insuficientes",
            description: "Sua conta não possui as permissões necessárias.",
            action: "Solicitar Acesso"
        },
        {
            icon: <Lock className="h-5 w-5" />,
            title: "Recurso restrito",
            description: "Este conteúdo está disponível apenas para usuários premium.",
            action: "Fazer Upgrade"
        }
    ];

    const alternativeActions = [
        { title: "Dashboard", path: "/", icon: <Home className="h-4 w-4" />, description: "Volte para a página inicial" },
        { title: "Perfil", path: "/profile", icon: <User className="h-4 w-4" />, description: "Verifique suas permissões" },
        { title: "Suporte", path: "/support", icon: <HelpCircle className="h-4 w-4" />, description: "Entre em contato conosco" },
    ];

    const errorPageProps: ErrorPageProps = {
        errorCode: "403",
        title: "Acesso Negado",
        description: "Você não tem permissão para acessar esta página ou recurso.",
        icon: <Shield className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "amber-600",
            secondary: "amber-100",
            background: "amber-50",
            border: "amber-200"
        },
        actions: {
            primary: {
                label: "Fazer Login",
                onClick: () => window.location.href = "/login",
                icon: <LogIn className="h-4 w-4" />
            }
        },
        children: (
            <>
                <ErrorAlert
                    icon={<Lock className="h-4 w-4" />}
                    title="Acesso Restrito:"
                    description="Esta página requer permissões especiais ou autenticação."
                    variant="warning"
                />

                {/* Possible Reasons */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center">Possíveis motivos:</h3>
                    <div className="grid gap-4">
                        {possibleReasons.map((reason, index) => (
                            <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-lg border border-amber-200/50">
                                <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg text-amber-600">
                                    {reason.icon}
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
                                onClick={() => window.location.href = action.path}
                            >
                                <CardContent className="p-4 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                                            {action.icon}
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
            </>
        ),
        technicalInfo: {
            errorId: "403-Forbidden-Access",
            timestamp: new Date().toISOString()
        }
    };

    return <BaseErrorPage {...errorPageProps} />;
};

export default Forbidden;
