import React from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

const DeepLevel1 = () => {
    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/" className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            Nível 1
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">Nível 1</Badge>
                    <Badge variant="outline">2 níveis restantes</Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">Primeiro Nível de Navegação</h1>
                <p className="text-muted-foreground">
                    Este é o primeiro nível da navegação profunda. Continue navegando para testar o comportamento do breadcrumb em mobile.
                </p>
            </div>

            {/* Navigation Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Navegação</CardTitle>
                    <CardDescription>
                        Use os botões abaixo para navegar pelos níveis
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="outline">
                            <Link to="/components/breadcrumb">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Voltar para Breadcrumb
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link to="/breadcrumb-demo/deep/level1/level2">
                                Ir para Nível 2
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Content */}
            <Card>
                <CardHeader>
                    <CardTitle>Conteúdo do Nível 1</CardTitle>
                    <CardDescription>
                        Exemplo de conteúdo para demonstrar a navegação
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <p>
                            Este é o primeiro nível da demonstração de navegação profunda.
                            O breadcrumb deve mostrar claramente onde você está na hierarquia.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-semibold mb-2">📱 Teste Mobile</h3>
                                <p className="text-sm text-muted-foreground">
                                    Redimensione a janela ou acesse pelo celular para ver como o breadcrumb se adapta.
                                </p>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <h3 className="font-semibold mb-2">🔗 Navegação</h3>
                                <p className="text-sm text-muted-foreground">
                                    Clique nos links do breadcrumb para navegar rapidamente entre os níveis.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-medium mb-2">Próximos Níveis:</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Nível 2: Segundo nível da navegação</li>
                                <li>• Nível 3: Terceiro nível da navegação</li>
                                <li>• Nível 4: Quarto nível (teste mobile intensivo)</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DeepLevel1;
