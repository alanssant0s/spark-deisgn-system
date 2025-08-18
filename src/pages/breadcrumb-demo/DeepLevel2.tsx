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
import { Home, ChevronRight, ArrowLeft, ArrowRight, Smartphone } from "lucide-react";

const DeepLevel2 = () => {
    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/" className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                <span className="hidden sm:inline">Home</span>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/breadcrumb-demo/deep/level1">Nível 1</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            Nível 2
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Mobile Navigation Helper */}
            <div className="flex items-center gap-2 sm:hidden p-3 bg-muted rounded-lg">
                <Smartphone className="h-4 w-4" />
                <span className="text-sm">Visualização Mobile Ativa</span>
                <Badge variant="secondary" className="ml-auto">Nível 2/4</Badge>
            </div>

            {/* Header */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="default">Nível 2</Badge>
                    <Badge variant="outline">2 níveis restantes</Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">Segundo Nível de Navegação</h1>
                <p className="text-muted-foreground">
                    Agora estamos no segundo nível. Note como o breadcrumb se adapta em telas menores.
                </p>
            </div>

            {/* Navigation Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Navegação Rápida</CardTitle>
                    <CardDescription>
                        Teste a navegação em diferentes direções
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/deep/level1">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Voltar (Nível 1)
                            </Link>
                        </Button>

                        <Button asChild variant="outline">
                            <Link to="/components/breadcrumb">
                                <Home className="h-4 w-4 mr-2" />
                                Início
                            </Link>
                        </Button>

                        <Button asChild>
                            <Link to="/breadcrumb-demo/deep/level1/level2/level3">
                                Nível 3
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Mobile Test Content */}
            <Card>
                <CardHeader>
                    <CardTitle>Teste de Responsividade</CardTitle>
                    <CardDescription>
                        Como o breadcrumb se comporta em diferentes tamanhos de tela
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-semibold">📱 Mobile (&lt; 640px)</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• Textos podem ser abreviados</li>
                                    <li>• Ícones ganham mais importância</li>
                                    <li>• Navegação por toque otimizada</li>
                                    <li>• Ellipsis para navegação longa</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-semibold">💻 Desktop (&gt; 640px)</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• Todos os níveis visíveis</li>
                                    <li>• Textos completos</li>
                                    <li>• Hover states ativos</li>
                                    <li>• Mais espaço para conteúdo</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-4 border-2 border-dashed border-primary/20 rounded-lg">
                            <h4 className="font-medium mb-2">💡 Dica para Teste</h4>
                            <p className="text-sm text-muted-foreground">
                                Redimensione a janela do navegador ou use as ferramentas de desenvolvedor (F12)
                                para simular diferentes dispositivos e ver como o breadcrumb se adapta.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Progress Indicator */}
            <Card>
                <CardHeader>
                    <CardTitle>Progresso da Navegação</CardTitle>
                    <CardDescription>
                        Acompanhe sua posição na hierarquia
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm">Nível 1 - Completo</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">Nível 2 - Atual</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                <span className="text-sm text-muted-foreground">Nível 3 - Pendente</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                <span className="text-sm text-muted-foreground">Nível 4 - Pendente</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DeepLevel2;
