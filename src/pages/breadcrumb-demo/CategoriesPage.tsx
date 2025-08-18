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
import { Home, ShoppingBag, Folder, Package, Heart, Book, Gamepad2, Coffee, Car, Music } from "lucide-react";

const CategoriesPage = () => {
    const categories = [
        {
            name: "Eletrônicos",
            slug: "electronics",
            description: "Smartphones, laptops, tablets e mais",
            icon: Package,
            color: "bg-blue-100 text-blue-600",
            products: 45,
            path: "/breadcrumb-demo/ecommerce/categories/electronics"
        },
        {
            name: "Moda",
            slug: "fashion",
            description: "Roupas, calçados e acessórios",
            icon: Heart,
            color: "bg-pink-100 text-pink-600",
            products: 78,
            path: "/breadcrumb-demo/ecommerce/categories/fashion"
        },
        {
            name: "Livros",
            slug: "books",
            description: "Literatura, técnicos e educacionais",
            icon: Book,
            color: "bg-green-100 text-green-600",
            products: 234,
            path: "/breadcrumb-demo/ecommerce/categories/books"
        },
        {
            name: "Games",
            slug: "games",
            description: "Jogos, consoles e acessórios",
            icon: Gamepad2,
            color: "bg-purple-100 text-purple-600",
            products: 67,
            path: "/breadcrumb-demo/ecommerce/categories/games"
        },
        {
            name: "Casa & Cozinha",
            slug: "home",
            description: "Utensílios, decoração e móveis",
            icon: Coffee,
            color: "bg-orange-100 text-orange-600",
            products: 123,
            path: "/breadcrumb-demo/ecommerce/categories/home"
        },
        {
            name: "Automotivo",
            slug: "automotive",
            description: "Peças, acessórios e ferramentas",
            icon: Car,
            color: "bg-red-100 text-red-600",
            products: 89,
            path: "/breadcrumb-demo/ecommerce/categories/automotive"
        },
        {
            name: "Música",
            slug: "music",
            description: "Instrumentos, equipamentos de áudio",
            icon: Music,
            color: "bg-yellow-100 text-yellow-600",
            products: 56,
            path: "/breadcrumb-demo/ecommerce/categories/music"
        }
    ];

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
                        <BreadcrumbLink asChild>
                            <Link to="/breadcrumb-demo/ecommerce" className="flex items-center gap-2">
                                <ShoppingBag className="h-4 w-4" />
                                Loja Online
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex items-center gap-2">
                            <Folder className="h-4 w-4" />
                            Categorias
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                    <Folder className="h-8 w-8 text-primary" />
                    Categorias de Produtos
                </h1>
                <p className="text-muted-foreground">
                    Explore nossa ampla variedade de categorias e encontre exatamente o que você precisa.
                </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold text-center">7</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground text-center">Categorias Principais</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold text-center">692</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground text-center">Total de Produtos</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold text-center">45</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground text-center">Subcategorias</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold text-center">4.8</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground text-center">Avaliação Média</p>
                    </CardContent>
                </Card>
            </div>

            {/* Grid de Categorias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                        <Card key={category.slug} className="hover:shadow-lg transition-all duration-300 group">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{category.name}</CardTitle>
                                        <Badge variant="secondary">{category.products} produtos</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-4">
                                    {category.description}
                                </CardDescription>
                                <Button asChild className="w-full">
                                    <Link to={category.path}>
                                        Explorar Categoria
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Categorias Populares */}
            <Card>
                <CardHeader>
                    <CardTitle>Mais Populares</CardTitle>
                    <CardDescription>
                        As categorias com mais vendas este mês
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {[
                            { name: "Eletrônicos", growth: "+23%", sales: "1,234 vendas" },
                            { name: "Moda", growth: "+18%", sales: "987 vendas" },
                            { name: "Livros", growth: "+15%", sales: "756 vendas" },
                            { name: "Games", growth: "+12%", sales: "543 vendas" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Badge variant="outline" className="font-mono">
                                        #{index + 1}
                                    </Badge>
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-muted-foreground">{item.sales}</span>
                                    <Badge variant="default" className="bg-green-100 text-green-700">
                                        {item.growth}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Navegação */}
            <Card>
                <CardHeader>
                    <CardTitle>Navegação Rápida</CardTitle>
                    <CardDescription>
                        Acesse diretamente as subcategorias mais procuradas
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" size="sm">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics">Eletrônicos</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/smartphones">Smartphones</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/laptops">Laptops</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link to="/breadcrumb-demo/ecommerce/categories/fashion">Moda</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link to="/breadcrumb-demo/ecommerce/categories/fashion/clothing">Roupas</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link to="/breadcrumb-demo/ecommerce/categories/books">Livros</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CategoriesPage;
