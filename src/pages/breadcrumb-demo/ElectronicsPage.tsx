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
import { Home, ShoppingBag, Folder, Package, Smartphone, Laptop, Headphones, Camera, Watch, Monitor, Star, ShoppingCart } from "lucide-react";

const ElectronicsPage = () => {
    const subcategories = [
        {
            name: "Smartphones",
            slug: "smartphones",
            description: "iPhone, Samsung, Xiaomi e mais",
            icon: Smartphone,
            products: 24,
            path: "/breadcrumb-demo/ecommerce/categories/electronics/smartphones",
            featured: true
        },
        {
            name: "Laptops",
            slug: "laptops",
            description: "MacBooks, Dell, Lenovo, HP",
            icon: Laptop,
            products: 18,
            path: "/breadcrumb-demo/ecommerce/categories/electronics/laptops",
            featured: true
        },
        {
            name: "Fones de Ouvido",
            slug: "headphones",
            description: "Bluetooth, com fio, gaming",
            icon: Headphones,
            products: 32,
            path: "/breadcrumb-demo/ecommerce/categories/electronics/headphones",
            featured: false
        },
        {
            name: "Câmeras",
            slug: "cameras",
            description: "DSLR, mirrorless, action cams",
            icon: Camera,
            products: 15,
            path: "/breadcrumb-demo/ecommerce/categories/electronics/cameras",
            featured: false
        },
        {
            name: "Smartwatches",
            slug: "smartwatches",
            description: "Apple Watch, Samsung, Garmin",
            icon: Watch,
            products: 12,
            path: "/breadcrumb-demo/ecommerce/categories/electronics/smartwatches",
            featured: false
        },
        {
            name: "Monitores",
            slug: "monitors",
            description: "4K, gaming, ultrawide",
            icon: Monitor,
            products: 28,
            path: "/breadcrumb-demo/ecommerce/categories/electronics/monitors",
            featured: false
        }
    ];

    const featuredProducts = [
        {
            name: "iPhone 15 Pro Max",
            price: "R$ 10.999",
            originalPrice: "R$ 12.999",
            rating: 4.9,
            reviews: 1234,
            image: "📱",
            category: "smartphones",
            discount: 15,
            inStock: true
        },
        {
            name: "MacBook Air M3",
            price: "R$ 11.999",
            originalPrice: "R$ 13.999",
            rating: 4.8,
            reviews: 856,
            image: "💻",
            category: "laptops",
            discount: 14,
            inStock: true
        },
        {
            name: "AirPods Pro 2",
            price: "R$ 2.199",
            originalPrice: "R$ 2.499",
            rating: 4.7,
            reviews: 2341,
            image: "🎧",
            category: "headphones",
            discount: 12,
            inStock: false
        },
        {
            name: "Sony A7 IV",
            price: "R$ 18.999",
            originalPrice: "R$ 21.999",
            rating: 4.9,
            reviews: 432,
            image: "📷",
            category: "cameras",
            discount: 14,
            inStock: true
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
                        <BreadcrumbLink asChild>
                            <Link to="/breadcrumb-demo/ecommerce/categories" className="flex items-center gap-2">
                                <Folder className="h-4 w-4" />
                                Categorias
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex items-center gap-2">
                            <Package className="h-4 w-4" />
                            Eletrônicos
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <Package className="h-8 w-8 text-blue-600" />
                        Eletrônicos
                    </h1>
                    <p className="text-muted-foreground">
                        Descubra os mais recentes dispositivos eletrônicos com a melhor tecnologia do mercado.
                    </p>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                    129 produtos
                </Badge>
            </div>

            {/* Banner Promocional */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Super Oferta Eletrônicos!</h2>
                            <p className="text-blue-100 mb-4">Até 30% de desconto em produtos selecionados</p>
                            <Button variant="secondary" size="lg">
                                Ver Ofertas
                            </Button>
                        </div>
                        <div className="text-6xl">⚡</div>
                    </div>
                </CardContent>
            </Card>

            {/* Subcategorias */}
            <Card>
                <CardHeader>
                    <CardTitle>Subcategorias</CardTitle>
                    <CardDescription>
                        Explore nossas subcategorias de eletrônicos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {subcategories.map((subcategory) => {
                            const IconComponent = subcategory.icon;
                            return (
                                <Card
                                    key={subcategory.slug}
                                    className={`p-4 hover:shadow-md transition-all duration-300 group cursor-pointer ${subcategory.featured ? 'ring-2 ring-blue-200 bg-blue-50/50' : ''
                                        }`}
                                >
                                    <Link to={subcategory.path} className="block">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                                <IconComponent className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-semibold">{subcategory.name}</h3>
                                                    {subcategory.featured && (
                                                        <Badge variant="default" className="text-xs">Popular</Badge>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground">{subcategory.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Badge variant="secondary">{subcategory.products} produtos</Badge>
                                            <Button variant="ghost" size="sm">Ver todos →</Button>
                                        </div>
                                    </Link>
                                </Card>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Produtos em Destaque */}
            <Card>
                <CardHeader>
                    <CardTitle>Produtos em Destaque</CardTitle>
                    <CardDescription>
                        Os eletrônicos mais populares com ofertas especiais
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                                <CardContent className="p-4">
                                    <div className="relative mb-4">
                                        <div className="text-5xl text-center mb-2">{product.image}</div>
                                        {product.discount > 0 && (
                                            <Badge
                                                variant="destructive"
                                                className="absolute top-0 right-0 text-xs"
                                            >
                                                -{product.discount}%
                                            </Badge>
                                        )}
                                        {!product.inStock && (
                                            <Badge
                                                variant="secondary"
                                                className="absolute bottom-0 left-0 text-xs"
                                            >
                                                Esgotado
                                            </Badge>
                                        )}
                                    </div>

                                    <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center gap-1 mb-2">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium">{product.rating}</span>
                                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                                    </div>

                                    <div className="mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-primary">{product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    {product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full"
                                        size="sm"
                                        disabled={!product.inStock}
                                    >
                                        <ShoppingCart className="h-4 w-4 mr-2" />
                                        {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Filtros e Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Faixa de Preço</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Até R$ 500</span>
                                <Badge variant="outline">23</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span>R$ 500 - R$ 2.000</span>
                                <Badge variant="outline">45</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span>R$ 2.000 - R$ 10.000</span>
                                <Badge variant="outline">38</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span>Acima de R$ 10.000</span>
                                <Badge variant="outline">23</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Marcas Populares</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Apple</span>
                                <Badge variant="outline">18</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span>Samsung</span>
                                <Badge variant="outline">15</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span>Sony</span>
                                <Badge variant="outline">12</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span>Xiaomi</span>
                                <Badge variant="outline">9</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Avaliações</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>5 estrelas</span>
                                </div>
                                <Badge variant="outline">67</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>4+ estrelas</span>
                                </div>
                                <Badge variant="outline">45</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>3+ estrelas</span>
                                </div>
                                <Badge variant="outline">17</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ElectronicsPage;
