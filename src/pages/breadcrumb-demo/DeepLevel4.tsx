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
import {
    Home,
    ChevronRight,
    ArrowLeft,
    Smartphone,
    Monitor,
    Tablet,
    CheckCircle,
    Target,
    Zap,
    Award,
    Share,
    Copy,
    Download
} from "lucide-react";

const DeepLevel4 = () => {
    return (
        <div className="space-y-8">
            {/* Breadcrumb Ultra Responsivo */}
            <div className="space-y-4">
                {/* Mobile Version - Ultra Compacto */}
                <div className="block sm:hidden">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">Mobile</Badge>
                        <Badge variant="outline">Nível Máximo</Badge>
                    </div>
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
                                <BreadcrumbPage className="font-semibold">Nível 4</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Tablet Version */}
                <div className="hidden sm:block lg:hidden">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">Tablet</Badge>
                        <Badge variant="outline">Responsivo</Badge>
                    </div>
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
                                <BreadcrumbLink asChild>
                                    <Link to="/breadcrumb-demo/deep/level1/level2/level3">Nível 3</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Nível 4</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Desktop Version - Completa */}
                <div className="hidden lg:block">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">Desktop</Badge>
                        <Badge variant="outline">Completa</Badge>
                    </div>
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
                                    <Link to="/breadcrumb-demo/deep/level1">Primeiro Nível</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/breadcrumb-demo/deep/level1/level2">Segundo Nível</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/breadcrumb-demo/deep/level1/level2/level3">Terceiro Nível</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="flex items-center gap-2">
                                    <Target className="h-4 w-4" />
                                    Quarto Nível (Final)
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Success Banner */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h2 className="text-xl font-bold">🎉 Parabéns! Você chegou ao nível mais profundo!</h2>
                </div>
                <p className="text-muted-foreground">
                    Este é o teste mais intensivo para breadcrumb mobile. Você navegou através de 4 níveis de hierarquia.
                </p>
            </div>

            {/* Device Analysis */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Análise do Dispositivo Atual
                    </CardTitle>
                    <CardDescription>
                        Como o breadcrumb se comporta no seu dispositivo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Mobile Analysis */}
                        <div className="block sm:hidden">
                            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Smartphone className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-semibold">Análise Mobile</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Ellipsis funcionando corretamente</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Apenas 3 itens visíveis (Home + ... + Atual)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Economia de espaço maximizada</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Touch targets adequados</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tablet Analysis */}
                        <div className="hidden sm:block lg:hidden">
                            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Tablet className="h-5 w-5 text-green-600" />
                                    <h3 className="font-semibold">Análise Tablet</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Mostra mais níveis que mobile</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Ellipsis ainda presente para economia</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Balanço entre informação e espaço</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Navegação fluida</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Analysis */}
                        <div className="hidden lg:block">
                            <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Monitor className="h-5 w-5 text-purple-600" />
                                    <h3 className="font-semibold">Análise Desktop</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Todos os 5 níveis visíveis</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Textos completos com ícones</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Hover effects ativos</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Máxima informação disponível</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Ações do Nível Final
                    </CardTitle>
                    <CardDescription>
                        Teste completado! Explore mais funcionalidades
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <Button asChild variant="outline" size="sm">
                                <Link to="/components/breadcrumb">
                                    <Home className="h-4 w-4 mr-2" />
                                    Voltar ao Início
                                </Link>
                            </Button>

                            <Button variant="outline" size="sm">
                                <Share className="h-4 w-4 mr-2" />
                                Compartilhar Teste
                            </Button>

                            <Button variant="outline" size="sm">
                                <Copy className="h-4 w-4 mr-2" />
                                Copiar URL
                            </Button>

                            <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Baixar Relatório
                            </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button asChild variant="ghost" size="sm">
                                <Link to="/breadcrumb-demo/deep/level1/level2/level3">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Voltar para Nível 3
                                </Link>
                            </Button>

                            <Button asChild variant="ghost" size="sm">
                                <Link to="/breadcrumb-demo/ecommerce/categories/electronics/smartphones">
                                    Testar E-commerce (4 níveis)
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Test Results Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>📊 Resumo do Teste</CardTitle>
                    <CardDescription>
                        Resultados da navegação profunda de 4 níveis
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 border rounded-lg">
                                <div className="text-2xl font-bold text-green-600">4</div>
                                <div className="text-sm text-muted-foreground">Níveis Navegados</div>
                            </div>

                            <div className="text-center p-4 border rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">100%</div>
                                <div className="text-sm text-muted-foreground">Responsividade</div>
                            </div>

                            <div className="text-center p-4 border rounded-lg">
                                <div className="text-2xl font-bold text-purple-600">✓</div>
                                <div className="text-sm text-muted-foreground">Mobile Ready</div>
                            </div>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-lg">
                            <h4 className="font-semibold mb-2">🎯 Teste Concluído com Sucesso!</h4>
                            <p className="text-sm">
                                Você navegou através de 4 níveis de hierarquia e testou o breadcrumb em diferentes
                                dispositivos. O componente demonstrou excelente adaptabilidade e usabilidade.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-medium">Próximos Passos Sugeridos:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                    Teste o breadcrumb em outros cenários (E-commerce, Sistema de Arquivos)
                                </li>
                                <li className="flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                    Experimente redimensionar a janela para ver as transições
                                </li>
                                <li className="flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                    Teste em dispositivos reais (smartphone, tablet)
                                </li>
                                <li className="flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                    Explore outros componentes da biblioteca
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DeepLevel4;
