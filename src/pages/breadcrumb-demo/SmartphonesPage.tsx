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
import { Home, ShoppingBag, Folder, Package, Smartphone, Star, ShoppingCart, Heart, Eye, Filter } from "lucide-react";

const SmartphonesPage = () => {
    const smartphones = [
        {
            id: 1,
            name: "iPhone 15 Pro Max",
            brand: "Apple",
            price: "R$ 10.999",
            originalPrice: "R$ 12.999",
            rating: 4.9,
            reviews: 1234,
            image: "📱",
            specs: ["256GB", "Titânio Natural", "6.7\"", "48MP"],
            discount: 15,
            inStock: true,
            isNew: true,
            colors: ["Titânio Natural", "Titânio Azul", "Titânio Branco", "Titânio Preto"]
        },
        {
            id: 2,
            name: "Samsung Galaxy S24 Ultra",
            brand: "Samsung",
            price: "R$ 8.999",
            originalPrice: "R$ 9.999",
            rating: 4.8,
            reviews: 856,
            image: "📱",
            specs: ["512GB", "Phantom Black", "6.8\"", "200MP"],
            discount: 10,
            inStock: true,
            isNew: true,
            colors: ["Phantom Black", "Phantom Silver", "Phantom Violet"]
        },
        {
            id: 3,
            name: "Xiaomi 14 Ultra",
            brand: "Xiaomi",
            price: "R$ 4.999",
            originalPrice: "R$ 5.999",
            rating: 4.7,
            reviews: 432,
            image: "📱",
            specs: ["256GB", "Preto", "6.73\"", "50MP"],
            discount: 17,
            inStock: true,
            isNew: false,
            colors: ["Preto", "Branco"]
        },
        {
            id: 4,
            name: "Google Pixel 8 Pro",
            brand: "Google",
            price: "R$ 6.999",
            originalPrice: "R$ 7.999",
            rating: 4.6,
            reviews: 321,
            image: "📱",
            specs: ["128GB", "Obsidian", "6.7\"", "50MP"],
            discount: 13,
            inStock: false,
            isNew: false,
            colors: ["Obsidian", "Porcelain", "Bay"]
        },
        {
            id: 5,
            name: "OnePlus 12",
            brand: "OnePlus",
            price: "R$ 4.499",
            originalPrice: "R$ 4.999",
            rating: 4.5,
            reviews: 267,
            image: "📱",
            specs: ["256GB", "Verde", "6.82\"", "50MP"],
            discount: 10,
            inStock: true,
            isNew: false,
            colors: ["Verde", "Preto", "Branco"]
        },
        {
            id: 6,
            name: "iPhone 14 Pro",
            brand: "Apple",
            price: "R$ 7.999",
            originalPrice: "R$ 9.999",
            rating: 4.8,
            reviews: 1891,
            image: "📱",
            specs: ["128GB", "Deep Purple", "6.1\"", "48MP"],
            discount: 20,
            inStock: true,
            isNew: false,
            colors: ["Deep Purple", "Gold", "Silver", "Space Black"]
        }
    ];

    const brands = [
        { name: "Apple", count: 12, logo: "🍎" },
        { name: "Samsung", count: 8, logo: "⭐" },
        { name: "Xiaomi", count: 6, logo: "🔥" },
        { name: "Google", count: 4, logo: "🔍" },
        { name: "OnePlus", count: 3, logo: "➕" }
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
                        <BreadcrumbLink asChild>
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics" className="flex items-center gap-2">
                                <Package className="h-4 w-4" />
                                Eletrônicos
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            Smartphones
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <Smartphone className="h-8 w-8 text-blue-600" />
                        Smartphones
                    </h1>
                    <p className="text-muted-foreground">
                        Encontre o smartphone perfeito para suas necessidades. Últimos lançamentos e melhores preços.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                        33 produtos
                    </Badge>
                    <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtros
                    </Button>
                </div>
            </div>

            {/* Banner de Oferta */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">📱 Mega Promoção Smartphones!</h2>
                            <p className="text-purple-100 mb-4">Até 25% OFF + Frete Grátis para todo o Brasil</p>
                            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                                Ver Todas as Ofertas
                            </Button>
                        </div>
                        <div className="text-6xl">🔥</div>
                    </div>
                </CardContent>
            </Card>

            {/* Filtros Rápidos */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filtros Rápidos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">Todos</Button>
                        <Button variant="outline" size="sm">Novos Lançamentos</Button>
                        <Button variant="outline" size="sm">Em Promoção</Button>
                        <Button variant="outline" size="sm">Mais Vendidos</Button>
                        <Button variant="outline" size="sm">Melhor Avaliados</Button>
                        <Button variant="outline" size="sm">Até R$ 5.000</Button>
                        <Button variant="outline" size="sm">Premium</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Marcas Populares */}
            <Card>
                <CardHeader>
                    <CardTitle>Marcas em Destaque</CardTitle>
                    <CardDescription>
                        Escolha sua marca favorita
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {brands.map((brand, index) => (
                            <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                                <div className="text-2xl mb-2">{brand.logo}</div>
                                <h3 className="font-semibold">{brand.name}</h3>
                                <Badge variant="secondary" className="mt-1">
                                    {brand.count} modelos
                                </Badge>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Grid de Produtos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {smartphones.map((phone) => (
                    <Card key={phone.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
                        <CardContent className="p-0">
                            {/* Imagem/Header do Produto */}
                            <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                                <div className="absolute top-3 right-3 flex gap-1">
                                    {phone.isNew && (
                                        <Badge variant="default" className="bg-green-500">
                                            Novo
                                        </Badge>
                                    )}
                                    {phone.discount > 0 && (
                                        <Badge variant="destructive">
                                            -{phone.discount}%
                                        </Badge>
                                    )}
                                </div>

                                <div className="text-center">
                                    <div className="text-6xl mb-3">{phone.image}</div>
                                    <Badge variant="outline" className="mb-2">
                                        {phone.brand}
                                    </Badge>
                                </div>

                                {!phone.inStock && (
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <Badge variant="secondary" className="text-lg px-4 py-2">
                                            Esgotado
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            {/* Informações do Produto */}
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                    {phone.name}
                                </h3>

                                {/* Especificações */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {phone.specs.slice(0, 3).map((spec, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {spec}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Avaliação */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium">{phone.rating}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        ({phone.reviews} avaliações)
                                    </span>
                                </div>

                                {/* Preços */}
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl font-bold text-primary">
                                            {phone.price}
                                        </span>
                                        {phone.originalPrice && (
                                            <span className="text-sm text-muted-foreground line-through">
                                                {phone.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-green-600 font-medium">
                                        Em até 12x sem juros
                                    </p>
                                </div>

                                {/* Cores Disponíveis */}
                                <div className="mb-4">
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {phone.colors.length} cores disponíveis
                                    </p>
                                    <div className="flex gap-1">
                                        {phone.colors.slice(0, 3).map((color, index) => (
                                            <div
                                                key={index}
                                                className="w-4 h-4 rounded-full border border-gray-300 bg-gradient-to-br from-gray-300 to-gray-500"
                                                title={color}
                                            />
                                        ))}
                                        {phone.colors.length > 3 && (
                                            <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                <span className="text-xs">+</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Ações */}
                                <div className="flex gap-2">
                                    <Button
                                        className="flex-1"
                                        disabled={!phone.inStock}
                                        size="sm"
                                    >
                                        <ShoppingCart className="h-4 w-4 mr-2" />
                                        {phone.inStock ? 'Comprar' : 'Indisponível'}
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Informações Adicionais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">🚚 Entrega</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                            Frete grátis para compras acima de R$ 299
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Entrega expressa em até 24h para capitais
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">🔒 Garantia</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                            12 meses de garantia nacional
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Suporte técnico especializado
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">💳 Pagamento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                            Até 12x sem juros no cartão
                        </p>
                        <p className="text-sm text-muted-foreground">
                            PIX com 5% de desconto
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Navegação para outras categorias */}
            <Card>
                <CardHeader>
                    <CardTitle>Continue Explorando</CardTitle>
                    <CardDescription>
                        Veja outras categorias de eletrônicos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/laptops">
                                💻 Laptops
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/headphones">
                                🎧 Fones de Ouvido
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/cameras">
                                📷 Câmeras
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/breadcrumb-demo/ecommerce/categories/electronics/smartwatches">
                                ⌚ Smartwatches
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SmartphonesPage;
