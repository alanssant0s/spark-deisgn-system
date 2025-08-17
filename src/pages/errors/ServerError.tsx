import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { Home, RefreshCw, AlertTriangle, Server, Bug, HelpCircle } from "lucide-react";
import { useState } from "react";

const ServerError = () => {
    const navigate = useNavigate();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleGoHome = () => {
        navigate("/");
    };

    const handleRefresh = async () => {
        setIsRefreshing(true);
        // Simula um delay de refresh
        await new Promise(resolve => setTimeout(resolve, 1500));
        window.location.reload();
    };

    const troubleshootingSteps = [
        {
            step: "1",
            title: "Aguarde alguns minutos",
            description: "O problema pode ser temporário e se resolver automaticamente."
        },
        {
            step: "2",
            title: "Atualize a página",
            description: "Pressione Ctrl+F5 (ou Cmd+R no Mac) para recarregar completamente."
        },
        {
            step: "3",
            title: "Limpe o cache",
            description: "Limpe o cache do navegador e tente novamente."
        },
        {
            step: "4",
            title: "Entre em contato",
            description: "Se o problema persistir, entre em contato com o suporte técnico."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-background flex items-center justify-center p-4">
            <div className="max-w-2xl w-full space-y-8">
                {/* Error Illustration */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="text-9xl font-bold text-red-200 select-none">500</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Server className="h-16 w-16 text-red-500 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Main Error Card */}
                <Card className="border-2 border-red-200">
                    <CardHeader className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Bug className="h-6 w-6 text-red-500" />
                            <CardTitle className="text-2xl text-red-700">Erro Interno do Servidor</CardTitle>
                        </div>
                        <CardDescription className="text-lg">
                            Algo deu errado em nossos servidores. Nossa equipe já foi notificada e está trabalhando para resolver o problema.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Alert */}
                        <Alert className="border-red-200 bg-red-50">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <AlertDescription className="text-red-700">
                                <strong>Status:</strong> Estamos investigando este problema. Tempo estimado de resolução: 15-30 minutos.
                            </AlertDescription>
                        </Alert>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={handleGoHome} className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Ir para Dashboard
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleRefresh}
                                disabled={isRefreshing}
                                className="flex items-center gap-2"
                            >
                                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                                {isRefreshing ? 'Recarregando...' : 'Tentar Novamente'}
                            </Button>
                        </div>

                        {/* Troubleshooting Steps */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 justify-center">
                                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                                <h3 className="text-lg font-semibold">O que você pode fazer:</h3>
                            </div>

                            <div className="grid gap-4">
                                {troubleshootingSteps.map((item, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                            {item.step}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-sm">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Details */}
                        <details className="border rounded-lg">
                            <summary className="p-4 cursor-pointer hover:bg-muted/50 rounded-lg font-medium text-sm">
                                Detalhes Técnicos (para desenvolvedores)
                            </summary>
                            <div className="p-4 border-t bg-muted/20 text-xs font-mono space-y-2">
                                <div><strong>Error ID:</strong> 500-{Date.now().toString().slice(-8)}</div>
                                <div><strong>Timestamp:</strong> {new Date().toISOString()}</div>
                                <div><strong>User Agent:</strong> {navigator.userAgent.slice(0, 50)}...</div>
                                <div><strong>URL:</strong> {window.location.href}</div>
                            </div>
                        </details>

                        {/* Contact Support */}
                        <div className="text-center text-sm text-muted-foreground border-t pt-4">
                            <p>
                                Precisa de ajuda imediata?
                                <Button variant="link" className="p-0 h-auto text-sm ml-1">
                                    Entre em contato com o suporte
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Error Code */}
                <div className="text-center">
                    <p className="text-xs text-muted-foreground font-mono">
                        Error Code: 500 - Internal Server Error
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServerError;
