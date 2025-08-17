import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, FileQuestion, AlertTriangle } from "lucide-react";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const suggestions = [
        { title: "Dashboard", path: "/", icon: Home, description: "Volte para a página inicial" },
        { title: "Componentes", path: "/components", icon: Search, description: "Explore nossos componentes" },
        { title: "Gráficos", path: "/components/charts", icon: Search, description: "Visualize dados com gráficos" },
        { title: "Design System", path: "/design-system", icon: Search, description: "Conheça nosso sistema de design" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
            <div className="max-w-2xl w-full space-y-8">
                {/* Error Illustration */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="text-9xl font-bold text-primary/20 select-none">404</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FileQuestion className="h-16 w-16 text-primary animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Main Error Card */}
                <Card className="border-2 border-dashed border-primary/30">
                    <CardHeader className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <AlertTriangle className="h-6 w-6 text-amber-500" />
                            <CardTitle className="text-2xl">Página Não Encontrada</CardTitle>
                        </div>
                        <CardDescription className="text-lg">
                            Ops! A página que você está procurando não existe ou foi movida.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={handleGoHome} className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Ir para Dashboard
                            </Button>
                            <Button variant="outline" onClick={handleGoBack} className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Voltar
                            </Button>
                        </div>

                        {/* Helpful Suggestions */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-center">Que tal explorar estas páginas?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {suggestions.map((suggestion, index) => (
                                    <Card
                                        key={index}
                                        className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105 border-primary/20 hover:border-primary/50"
                                        onClick={() => navigate(suggestion.path)}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    <suggestion.icon className="h-4 w-4 text-primary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-sm">{suggestion.title}</h4>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        {suggestion.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Help Text */}
                        <div className="text-center text-sm text-muted-foreground border-t pt-4">
                            <p>
                                Se você acredita que isso é um erro, entre em contato com o suporte ou
                                <Button variant="link" className="p-0 h-auto text-sm ml-1" onClick={handleGoHome}>
                                    retorne ao início
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Error Code */}
                <div className="text-center">
                    <p className="text-xs text-muted-foreground font-mono">
                        Error Code: 404 - Resource Not Found
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
