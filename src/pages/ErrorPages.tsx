import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
    AlertTriangle,
    FileQuestion,
    Server,
    Shield,
    Wrench,
    Bug,
    ExternalLink,
    Eye
} from "lucide-react";

const ErrorPages = () => {
    const navigate = useNavigate();

    const errorPages = [
        {
            id: "404",
            title: "404 - Não Encontrado",
            description: "Página exibida quando um recurso não é encontrado",
            icon: FileQuestion,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            route: "/errors/404",
            features: [
                "Sugestões de páginas alternativas",
                "Botões de navegação",
                "Design amigável",
                "Ilustração interativa"
            ]
        },
        {
            id: "500",
            title: "500 - Erro do Servidor",
            description: "Página para erros internos do servidor",
            icon: Server,
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
            route: "/errors/500",
            features: [
                "Detalhes técnicos expansíveis",
                "Botão de refresh com loading",
                "Passos de troubleshooting",
                "Informações para desenvolvedores"
            ]
        },
        {
            id: "403",
            title: "403 - Acesso Negado",
            description: "Página para recursos com acesso restrito",
            icon: Shield,
            color: "text-amber-600",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
            route: "/errors/403",
            features: [
                "Motivos possíveis do bloqueio",
                "Informações da conta",
                "Ações alternativas",
                "Solicitação de acesso"
            ]
        },
        {
            id: "maintenance",
            title: "Manutenção Programada",
            description: "Página exibida durante manutenções do sistema",
            icon: Wrench,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            route: "/errors/maintenance",
            features: [
                "Countdown timer em tempo real",
                "Progresso da manutenção",
                "Lista de melhorias",
                "Links para atualizações"
            ]
        }
    ];

    const handleViewPage = (route: string) => {
        navigate(route);
    };

    const handleTestErrorBoundary = () => {
        // Força um erro para testar o ErrorBoundary
        throw new Error("Teste do Error Boundary - Este é um erro intencional para demonstração");
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Páginas de Erro</h1>
                <p className="text-muted-foreground">
                    Páginas personalizadas para diferentes tipos de erro e situações especiais
                </p>
            </div>

            {/* Error Pages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {errorPages.map((error) => (
                    <Card key={error.id} className={`${error.borderColor} hover:shadow-lg transition-all duration-200`}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 ${error.bgColor} rounded-lg`}>
                                        <error.icon className={`h-6 w-6 ${error.color}`} />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{error.title}</CardTitle>
                                        <CardDescription className="mt-1">
                                            {error.description}
                                        </CardDescription>
                                    </div>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                    {error.id}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Features */}
                            <div>
                                <h4 className="font-medium text-sm mb-2">Recursos inclusos:</h4>
                                <ul className="space-y-1">
                                    {error.features.map((feature, index) => (
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
                                    onClick={() => handleViewPage(error.route)}
                                    className="flex items-center gap-2 flex-1"
                                >
                                    <Eye className="h-4 w-4" />
                                    Visualizar
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open(error.route, '_blank')}
                                    className="flex items-center gap-2"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Error Boundary Demo */}
            <Card className="border-2 border-dashed border-orange-200">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 rounded-lg">
                            <Bug className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                            <CardTitle className="text-xl">Error Boundary</CardTitle>
                            <CardDescription>
                                Componente que captura erros JavaScript em qualquer lugar da árvore de componentes
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
                                Captura automática de erros JavaScript
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Interface de fallback personalizada
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Detalhes técnicos para desenvolvedores
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                Opção de copiar informações do erro
                            </li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-sm text-orange-800 mb-3">
                            <strong>Teste o Error Boundary:</strong> Clique no botão abaixo para simular um erro JavaScript e ver como o Error Boundary funciona.
                        </p>
                        <Button
                            variant="outline"
                            onClick={handleTestErrorBoundary}
                            className="border-orange-300 text-orange-700 hover:bg-orange-100"
                        >
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Simular Erro
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Implementation Guide */}
            <Card>
                <CardHeader>
                    <CardTitle>Como Usar</CardTitle>
                    <CardDescription>
                        Guia de implementação das páginas de erro
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-medium text-sm">1. Rotas Diretas</h4>
                            <p className="text-sm text-muted-foreground">
                                Acesse diretamente através das URLs: <code className="bg-muted px-1 rounded">/errors/404</code>,
                                <code className="bg-muted px-1 rounded ml-1">/errors/500</code>, etc.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm">2. Error Boundary</h4>
                            <p className="text-sm text-muted-foreground">
                                Já integrado na aplicação - captura automaticamente erros JavaScript não tratados.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm">3. Redirecionamento Programático</h4>
                            <p className="text-sm text-muted-foreground">
                                Use <code className="bg-muted px-1 rounded">navigate('/errors/500')</code> para redirecionar para páginas de erro específicas.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm">4. Personalização</h4>
                            <p className="text-sm text-muted-foreground">
                                Todas as páginas seguem o design system e podem ser facilmente personalizadas.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ErrorPages;
