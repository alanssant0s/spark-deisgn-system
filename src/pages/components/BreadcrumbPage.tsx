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
    Settings,
    User,
    ChevronRight,
    Folder,
    FileText,
    ShoppingBag,
    Package,
    Smartphone,
    Laptop,
    Camera,
    Headphones,
    Monitor,
    ArrowLeft,
    ExternalLink,
    Copy,
    Share
} from "lucide-react";

const BreadcrumbDemoPage = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Breadcrumb</h1>
                <p className="text-muted-foreground">
                    Componente de navegação hierárquica que mostra a localização atual do usuário.
                </p>
            </div>

            {/* Breadcrumb Atual */}
            <Card>
                <CardHeader>
                    <CardTitle>Breadcrumb da Página Atual</CardTitle>
                    <CardDescription>
                        Este é o breadcrumb da página atual
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
                                <BreadcrumbLink asChild>
                                    <Link to="/components">Componentes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </CardContent>
            </Card>

            {/* Exemplo Básico */}
            <Card>
                <CardHeader>
                    <CardTitle>Breadcrumb Básico</CardTitle>
                    <CardDescription>
                        Exemplo simples de breadcrumb com links
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/docs">Documentação</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Componentes</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </CardContent>
            </Card>

            {/* Breadcrumb com Ícones */}
            <Card>
                <CardHeader>
                    <CardTitle>Breadcrumb com Ícones</CardTitle>
                    <CardDescription>
                        Breadcrumb usando ícones para melhor identificação visual
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="p-4 border rounded-lg">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="flex items-center gap-2">
                                        <Home className="h-4 w-4" />
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/settings" className="flex items-center gap-2">
                                        <Settings className="h-4 w-4" />
                                        Configurações
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Perfil
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </CardContent>
            </Card>

            {/* Breadcrumb com Botões de Ação */}
            <Card>
                <CardHeader>
                    <CardTitle>Breadcrumb com Botões de Ação</CardTitle>
                    <CardDescription>
                        Breadcrumb integrado com botões para ações rápidas
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg">
                        <Breadcrumb className="flex-1">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="flex items-center gap-2">
                                        <Home className="h-4 w-4" />
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/products" className="flex items-center gap-2">
                                        <Package className="h-4 w-4" />
                                        Produtos
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>iPhone 15 Pro</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                                <Copy className="h-4 w-4 mr-2" />
                                Copiar Link
                            </Button>
                            <Button size="sm" variant="outline">
                                <Share className="h-4 w-4 mr-2" />
                                Compartilhar
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Navegação Profunda - 5+ Níveis */}
            <Card>
                <CardHeader>
                    <CardTitle>Navegação Profunda (5+ Níveis)</CardTitle>
                    <CardDescription>
                        Teste com navegação de múltiplos níveis para verificar comportamento mobile
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Exemplo 1: E-commerce com 6 níveis */}
                    <div>
                        <h4 className="font-medium mb-3">E-commerce - 6 Níveis</h4>
                        <div className="p-4 border rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <Button asChild size="sm" variant="outline">
                                    <Link to="/breadcrumb-demo/ecommerce">
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Voltar
                                    </Link>
                                </Button>
                                <Badge variant="secondary">Nível 6</Badge>
                            </div>

                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">
                                            <Home className="h-4 w-4" />
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/store">Loja</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/store/categories">Categorias</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/store/categories/electronics">Eletrônicos</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/store/categories/electronics/smartphones">Smartphones</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>iPhone 15 Pro Max 256GB</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {/* Exemplo 2: Com Ellipsis para Mobile */}
                    <div>
                        <h4 className="font-medium mb-3">Com Ellipsis (Responsivo)</h4>
                        <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <Badge variant="outline">Mobile Friendly</Badge>
                                <Button size="sm" variant="ghost">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Ver Produto
                                </Button>
                            </div>

                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">
                                            <Home className="h-4 w-4" />
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem className="hidden md:flex">
                                        <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:flex" />
                                    <BreadcrumbItem>
                                        <BreadcrumbEllipsis className="md:hidden" />
                                        <BreadcrumbLink href="/admin/products" className="hidden md:flex">Produtos</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/admin/products/electronics">Eletrônicos</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Smartphone XYZ</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {/* Exemplo 3: Sistema de Arquivos */}
                    <div>
                        <h4 className="font-medium mb-3">Sistema de Arquivos - 7 Níveis</h4>
                        <div className="p-4 border rounded-lg">
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <Button size="sm" variant="outline">
                                    <Folder className="h-4 w-4 mr-2" />
                                    Nova Pasta
                                </Button>
                                <Button size="sm" variant="outline">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Novo Arquivo
                                </Button>
                                <Badge variant="destructive" className="ml-auto">Nível Profundo</Badge>
                            </div>

                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/files">
                                            <Folder className="h-4 w-4" />
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/files/projects">projects</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/files/projects/web">web</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/files/projects/web/react">react</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/files/projects/web/react/components">components</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/files/projects/web/react/components/ui">ui</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>breadcrumb.tsx</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Exemplos Interativos com Botões */}
            <Card>
                <CardHeader>
                    <CardTitle>Exemplos Interativos</CardTitle>
                    <CardDescription>
                        Navegue pelos exemplos abaixo para testar o breadcrumb em diferentes cenários
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* E-commerce Navigation */}
                        <div className="space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                                <ShoppingBag className="h-5 w-5 text-primary" />
                                E-commerce
                            </h4>
                            <div className="space-y-2">
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/ecommerce">
                                        <Home className="h-4 w-4 mr-2" />
                                        Loja Principal
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/ecommerce/categories">
                                        <Folder className="h-4 w-4 mr-2" />
                                        Todas as Categorias
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/ecommerce/categories/electronics">
                                        <Package className="h-4 w-4 mr-2" />
                                        Eletrônicos
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/ecommerce/categories/electronics/smartphones">
                                        <Smartphone className="h-4 w-4 mr-2" />
                                        Smartphones
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Deep Navigation Test */}
                        <div className="space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Monitor className="h-5 w-5 text-blue-600" />
                                Teste Mobile
                            </h4>
                            <div className="space-y-2">
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/deep/level1">
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        Nível 1
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/deep/level1/level2">
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        Nível 2
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/deep/level1/level2/level3">
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        Nível 3
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                                    <Link to="/breadcrumb-demo/deep/level1/level2/level3/level4">
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        Nível 4 (Mobile Test)
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Breadcrumb Responsivo */}
            <Card>
                <CardHeader>
                    <CardTitle>Comportamento Mobile</CardTitle>
                    <CardDescription>
                        Diferentes abordagens para breadcrumb em dispositivos móveis
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Versão Mobile Compacta */}
                    <div>
                        <h4 className="font-medium mb-3">Versão Mobile Compacta</h4>
                        <div className="p-4 border rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <Button size="sm" variant="ghost" className="md:hidden">
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                                <span className="text-sm text-muted-foreground md:hidden">Voltar</span>
                            </div>

                            <div className="block md:hidden">
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/">
                                                <Home className="h-4 w-4" />
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbEllipsis />
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>Produto Atual</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>

                            <div className="hidden md:block">
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/store">Loja</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/store/electronics">Eletrônicos</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/store/electronics/laptops">Laptops</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>MacBook Pro M3</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>

                    {/* Com Scroll Horizontal */}
                    <div>
                        <h4 className="font-medium mb-3">Com Scroll Horizontal (Mobile)</h4>
                        <div className="p-4 border rounded-lg">
                            <div className="overflow-x-auto">
                                <Breadcrumb className="min-w-max">
                                    <BreadcrumbList className="flex-nowrap">
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/" className="whitespace-nowrap">Home</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/categories" className="whitespace-nowrap">Categorias</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/categories/electronics" className="whitespace-nowrap">Eletrônicos</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/categories/electronics/computers" className="whitespace-nowrap">Computadores</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/categories/electronics/computers/laptops" className="whitespace-nowrap">Laptops</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage className="whitespace-nowrap">Dell XPS 13 Plus Intel i7</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                💡 Deslize horizontalmente para ver toda a navegação
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Código de exemplo */}
            <Card>
                <CardHeader>
                    <CardTitle>Como Usar</CardTitle>
                    <CardDescription>
                        Exemplo de código para usar o breadcrumb
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{`import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@alanssant0s/spark-ds';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Página Atual</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
                    </pre>
                </CardContent>
            </Card>
        </div>
    );
};

export default BreadcrumbDemoPage;