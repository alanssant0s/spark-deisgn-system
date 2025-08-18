import React from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ChevronRight, ArrowLeft, ArrowRight, Smartphone, Monitor, Tablet } from "lucide-react";

const DeepLevel3 = () => {
    return (
        <div className="space-y-8">
            {/* Breadcrumb Responsivo */}
            <div className="space-y-4">
                {/* Mobile Version */}
                <div className="block md:hidden">
                    <Badge variant="outline" className="mb-2">Mobile View</Badge>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">
                                        <Home className="h-4 w-4" />
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbEllipsis />
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/breadcrumb-demo/deep/level1/level2">Nível 2</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Nível 3</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Desktop Version */}
                <div className="hidden md:block">
                    <Badge variant="outline" className="mb-2">Desktop View</Badge>
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
                                <BreadcrumbLink asChild>
                                    <Link to="/breadcrumb-demo/deep/level1">Nível 1</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/breadcrumb-demo/deep/level1/level2">Nível 2</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4" />
                                    Nível 3
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Device Indicator */}
            <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2 md:hidden">
                    <Smartphone className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Mobile</span>
                </div>
                <div className="hidden md:flex lg:hidden items-center gap-2">
                    <Tablet className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Tablet</span>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">Desktop</span>
                </div>
                <Badge variant="destructive" className="ml-auto">Nível 3/4</Badge>
            </div>

            {/* Header */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="default">Nível 3</Badge>
                    <Badge variant="destructive">Quase no Final!</Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Terceiro Nível - Teste Intensivo</h1>
                <p className="text-muted-foreground">
                    Este nível demonstra como o breadcrumb usa ellipsis em mobile para economizar espaço.
                </p>
            </div>

            {/* Navigation with More Options */}
            <Card>
                <CardHeader>
                    <CardTitle>Navegação Avançada</CardTitle>
                    <CardDescription>
                        Múltiplas opções de navegação para teste completo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <Button asChild variant="outline" size="sm">
                                <Link to="/">
                                    <Home className="h-4 w-4 mr-2" />
                                    Home
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="sm">
                                <Link to="/breadcrumb-demo/deep/level1">
                                    Nível 1
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="sm">
                                <Link to="/breadcrumb-demo/deep/level1/level2">
                                    Nível 2
                                </Link>
                            </Button>

                            <Button asChild size="sm">
                                <Link to="/breadcrumb-demo/deep/level1/level2/level3/level4">
                                    Final
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button asChild variant="ghost" size="sm">
                                <Link to="/breadcrumb-demo/deep/level1/level2">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Voltar um Nível
                                </Link>
                            </Button>

                            <Button asChild variant="ghost" size="sm">
                                <Link to="/components/breadcrumb">
                                    Voltar para Demonstração Principal
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Mobile-Specific Features */}
            <Card>
                <CardHeader>
                    <CardTitle>Recursos Mobile</CardTitle>
                    <CardDescription>
                        Como o breadcrumb se adapta para dispositivos móveis
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Smartphone className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-semibold">Mobile</h3>
                                </div>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>• Ellipsis (...) oculta níveis intermediários</li>
                                    <li>• Ícones substituem texto quando possível</li>
                                    <li>• Touch targets maiores</li>
                                    <li>• Scroll horizontal quando necessário</li>
                                </ul>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Tablet className="h-5 w-5 text-green-600" />
                                    <h3 className="font-semibold">Tablet</h3>
                                </div>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>• Mais níveis visíveis que mobile</li>
                                    <li>• Textos parcialmente abreviados</li>
                                    <li>• Boa área de toque</li>
                                    <li>• Híbrido entre mobile e desktop</li>
                                </ul>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Monitor className="h-5 w-5 text-purple-600" />
                                    <h3 className="font-semibold">Desktop</h3>
                                </div>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>• Todos os níveis sempre visíveis</li>
                                    <li>• Textos completos</li>
                                    <li>• Hover effects</li>
                                    <li>• Máxima informação disponível</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                                <Smartphone className="h-4 w-4" />
                                Teste Atual
                            </h4>
                            <p className="text-sm">
                                <span className="block sm:hidden">
                                    ✅ Você está visualizando em <strong>Mobile</strong> - O breadcrumb usa ellipsis para economizar espaço
                                </span>
                                <span className="hidden sm:block md:hidden">
                                    ✅ Você está visualizando em <strong>Tablet</strong> - Breadcrumb com níveis intermediários
                                </span>
                                <span className="hidden md:block">
                                    ✅ Você está visualizando em <strong>Desktop</strong> - Todos os níveis do breadcrumb são visíveis
                                </span>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Test */}
            <Card>
                <CardHeader>
                    <CardTitle>Teste Interativo</CardTitle>
                    <CardDescription>
                        Experimente diferentes cenários de navegação
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <h4 className="font-medium">Navegação Rápida</h4>
                                <div className="space-y-2">
                                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                        <Link to="/breadcrumb-demo/ecommerce">
                                            <ChevronRight className="h-4 w-4 mr-2" />
                                            Ir para E-commerce Demo
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                        <Link to="/breadcrumb-demo/ecommerce/categories/electronics/smartphones">
                                            <ChevronRight className="h-4 w-4 mr-2" />
                                            Testar 4 Níveis E-commerce
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-medium">Próximo Passo</h4>
                                <div className="space-y-2">
                                    <Button asChild size="sm" className="w-full">
                                        <Link to="/breadcrumb-demo/deep/level1/level2/level3/level4">
                                            <ArrowRight className="h-4 w-4 mr-2" />
                                            Ir para Nível Final (4)
                                        </Link>
                                    </Button>
                                    <p className="text-xs text-muted-foreground">
                                        O nível 4 é o teste mais intensivo para mobile
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DeepLevel3;
