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
import { Home, ShoppingBag, Folder, Package } from "lucide-react";

const EcommercePage = () => {
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
                            <ShoppingBag className="h-4 w-4" />
                            Loja Online
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                    Loja Online
                </h1>
                <p className="text-muted-foreground">
                    Bem-vindo à nossa loja online. Explore nossas categorias e produtos.
                </p>
            </div>

            {/* Categorias Principais */}
            <Card>
                <CardHeader>
                    <CardTitle>Categorias Principais</CardTitle>
                    <CardDescription>
                        Navegue por nossas principais categorias de produtos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                            <Link to="/breadcrumb-demo/ecommerce/categories" className="block">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Folder className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Todas as Categorias</h3>
                                        <p className="text-sm text-muted-foreground">Ver todas</p>
                                    </div>
                                </div>
                                <Badge variant="secondary">120+ produtos</Badge>
                            </Link>
                        </Card>

                        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics" className="block">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Package className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Eletrônicos</h3>
                                        <p className="text-sm text-muted-foreground">Smartphones, laptops</p>
                                    </div>
                                </div>
                                <Badge variant="secondary">45 produtos</Badge>
                            </Link>
                        </Card>
                    </div>
                </CardContent>
            </Card>

            {/* Navegação Rápida */}
            <Card>
                <CardHeader>
                    <CardTitle>Navegação Rápida</CardTitle>
                    <CardDescription>
                        Acesse rapidamente diferentes seções da loja
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories">Ver Categorias</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics">Eletrônicos</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/smartphones">Smartphones</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EcommercePage;