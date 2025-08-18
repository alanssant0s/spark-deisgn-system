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
    Eye,
    Code,
    Layers,
    Package
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
            ],
            component: "BaseErrorPage + errorConfigs.notFound()"
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
            ],
            component: "BaseErrorPage + ErrorAlert + TroubleshootingSteps"
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
            ],
            component: "BaseErrorPage + ErrorAlert + custom content"
        },
        {
            id: "401",
            title: "401 - Não Autorizado",
            description: "Página para usuários não autenticados",
            icon: Shield,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            borderColor: "border-orange-200",
            route: "/errors/401",
            features: [
                "Redirecionamento para login",
                "Mensagem clara",
                "Design consistente",
                "Configuração simples"
            ],
            component: "BaseErrorPage + errorConfigs.unauthorized()"
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
            ],
            component: "MaintenancePage (especializado)"
        }
    ];

    const components = [
        {
            name: "BaseErrorPage",
            description: "Componente base para todas as páginas de erro",
            features: [
                "Layout consistente",
                "Sistema de cores configurável",
                "Ações personalizáveis",
                "Sugestões de navegação"
            ],
            icon: Layers
        },
        {
            name: "ErrorAlert",
            description: "Componente para exibir alertas de status",
            features: [
                "Variantes de cor (destructive, warning, info)",
                "Ícones personalizáveis",
                "Texto estruturado",
                "Reutilizável"
            ],
            icon: AlertTriangle
        },
        {
            name: "TroubleshootingSteps",
            description: "Lista de passos para resolução de problemas",
            features: [
                "Numeração automática",
                "Ícones opcionais",
                "Layout responsivo",
                "Fácil customização"
            ],
            icon: Code
        },
        {
            name: "TechnicalDetails",
            description: "Detalhes técnicos expansíveis",
            features: [
                "Collapsible por padrão",
                "Formatação de código",
                "Informações estruturadas",
                "Para desenvolvedores"
            ],
            icon: Package
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
                <h1 className="text-3xl font-bold text-foreground">Páginas de Erro Componentizadas</h1>
                <p className="text-muted-foreground">
                    Sistema modular e reutilizável para páginas de erro com componentes compartilhados
                </p>
            </div>

            {/* Architecture Overview */}
            <Card className="border-2 border-dashed border-green-200">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                            <Layers className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <CardTitle className="text-xl">Nova Arquitetura</CardTitle>
                            <CardDescription>
                                Sistema componentizado com reutilização máxima e facilidade de manutenção
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-sm mb-2">Benefícios:</h4>
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Reutilização de componentes
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Configurações pré-definidas
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Manutenção simplificada
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Consistência visual
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm mb-2">Componentes:</h4>
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    BaseErrorPage (base)
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    ErrorAlert (alerta)
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    TroubleshootingSteps (passos)
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    MaintenancePage (especializado)
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

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
                            {/* Component Used */}
                            <div className="bg-muted/50 rounded-lg p-3">
                                <p className="text-xs font-mono text-muted-foreground">
                                    <strong>Componente:</strong> {error.component}
                                </p>
                            </div>

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

            {/* Components Showcase */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Componentes Compartilhados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {components.map((component) => (
                        <Card key={component.name} className="border-2 border-dashed border-blue-200">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <component.icon className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{component.name}</CardTitle>
                                        <CardDescription>{component.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-1">
                                    {component.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
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
                    <CardTitle>Como Usar a Nova Arquitetura</CardTitle>
                    <CardDescription>
                        Guia de implementação das páginas de erro componentizadas
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-medium text-sm">1. Página Simples (404)</h4>
                            <p className="text-sm text-muted-foreground">
                                Use <code className="bg-muted px-1 rounded">errorConfigs.notFound()</code> para criar uma página 404 rapidamente.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm">2. Página com Conteúdo Customizado (500)</h4>
                            <p className="text-sm text-muted-foreground">
                                Use <code className="bg-muted px-1 rounded">BaseErrorPage</code> com <code className="bg-muted px-1 rounded">children</code> para conteúdo personalizado.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm">3. Página Especializada (Maintenance)</h4>
                            <p className="text-sm text-muted-foreground">
                                Use <code className="bg-muted px-1 rounded">MaintenancePage</code> para páginas de manutenção com funcionalidades específicas.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-sm">4. Componentes Compartilhados</h4>
                            <p className="text-sm text-muted-foreground">
                                Reutilize <code className="bg-muted px-1 rounded">ErrorAlert</code>, <code className="bg-muted px-1 rounded">TroubleshootingSteps</code> e <code className="bg-muted px-1 rounded">TechnicalDetails</code> em qualquer página.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ErrorPages;
