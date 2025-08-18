import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Plus, Download, Star, Settings, Heart, Edit, Trash, ArrowRight, Save, Send, Share, Copy, ExternalLink, Search, Filter, RefreshCw, Upload, Play, Pause, Square, Volume2, Bell, User, Mail, Phone, Calendar, Clock, MapPin, ShoppingCart, CreditCard, Bookmark, Flag, Award, Zap, Shield, Lock, Unlock, Eye, EyeOff, ThumbsUp, MessageCircle, MoreHorizontal, X, Check, AlertTriangle, Info, HelpCircle, Github, Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const ButtonsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Botões</h1>
        <p className="text-muted-foreground">
          Biblioteca completa de botões para aplicações SaaS
        </p>
      </div>

      {/* UI Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Botões UI Padrão</h2>
        <Card>
          <CardHeader>
            <CardTitle>Variantes</CardTitle>
            <CardDescription>Diferentes estilos de botões do sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tamanhos</h2>
        <Card>
          <CardHeader>
            <CardTitle>Diferentes Tamanhos</CardTitle>
            <CardDescription>Botões em vários tamanhos para diferentes contextos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Settings className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>
      </section>



      {/* Button States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Estados dos Botões</h2>
        <Card>
          <CardHeader>
            <CardTitle>Estados e Interações</CardTitle>
            <CardDescription>Diferentes estados visuais dos botões</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Estados Normais</h4>
                <div className="flex flex-wrap gap-2">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="pointer-events-none opacity-75">Loading...</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Com Ícones</h4>
                <div className="flex flex-wrap gap-2">
                  <Button>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Button>
                  <Button variant="destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Deletar
                  </Button>
                  <Button variant="outline">
                    Próximo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Exemplos de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Formulário de Ação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Call to Action</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Star className="mr-2 h-5 w-5" />
                Começar Gratuitamente
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Estados de Loading</h2>
        <Card>
          <CardHeader>
            <CardTitle>Botões com Loading</CardTitle>
            <CardDescription>Diferentes formas de mostrar estados de carregamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button disabled>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Carregando...
                </Button>
                <Button variant="outline" disabled>
                  <Upload className="mr-2 h-4 w-4 animate-pulse" />
                  Enviando...
                </Button>
                <Button variant="secondary" disabled>
                  <Save className="mr-2 h-4 w-4" />
                  Salvando...
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" disabled>
                  <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                  Processando
                </Button>
                <Button size="lg" disabled>
                  <Send className="mr-2 h-5 w-5 animate-pulse" />
                  Enviando Dados...
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Action Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Botões de Ação</h2>
        <Card>
          <CardHeader>
            <CardTitle>Ações Comuns</CardTitle>
            <CardDescription>Botões para ações frequentes em aplicações</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Primary Actions */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Ações Primárias</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar
                  </Button>
                  <Button>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Criar Novo
                  </Button>
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </div>
              </div>

              {/* Secondary Actions */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Ações Secundárias</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">
                    <Share className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                  <Button variant="outline">
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Abrir
                  </Button>
                </div>
              </div>

              {/* Utility Actions */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Utilitários</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost">
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                  </Button>
                  <Button variant="ghost">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar
                  </Button>
                  <Button variant="ghost">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Atualizar
                  </Button>
                  <Button variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Botões Interativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Media Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Controles de Mídia</CardTitle>
              <CardDescription>Botões para reprodução e controle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <Play className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Square className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Toggle Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Botões de Toggle</CardTitle>
              <CardDescription>Estados alternados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Mostrar
                </Button>
                <Button variant="outline">
                  <EyeOff className="mr-2 h-4 w-4" />
                  Ocultar
                </Button>
                <Button variant="outline">
                  <Lock className="mr-2 h-4 w-4" />
                  Bloquear
                </Button>
                <Button variant="outline">
                  <Unlock className="mr-2 h-4 w-4" />
                  Desbloquear
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Buttons with Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Botões com Badges</h2>
        <Card>
          <CardHeader>
            <CardTitle>Notificações e Contadores</CardTitle>
            <CardDescription>Botões com indicadores visuais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <Button variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Notificações
                  </Button>
                  <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs">3</Badge>
                </div>
                <div className="relative">
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Mensagens
                  </Button>
                  <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">12</Badge>
                </div>
                <div className="relative">
                  <Button variant="outline">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Carrinho
                  </Button>
                  <Badge variant="secondary" className="absolute -top-2 -right-2 px-2 py-1 text-xs">5</Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Award className="mr-2 h-4 w-4" />
                  Premium
                  <Badge variant="secondary" className="ml-2">NEW</Badge>
                </Button>
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Pro Features
                  <Badge className="ml-2 bg-yellow-500 text-yellow-900">HOT</Badge>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Status and Feedback Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Status e Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Estados de Status</CardTitle>
              <CardDescription>Botões para diferentes estados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Check className="mr-2 h-3 w-3" />
                    Aprovado
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X className="mr-2 h-3 w-3" />
                    Rejeitado
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                    <AlertTriangle className="mr-2 h-3 w-3" />
                    Pendente
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Info className="mr-2 h-3 w-3" />
                    Em Análise
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback Social</CardTitle>
              <CardDescription>Interações e reações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="mr-2 h-3 w-3" />
                    Curtir (24)
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="mr-2 h-3 w-3" />
                    Comentar
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="mr-2 h-3 w-3" />
                    Salvar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="mr-2 h-3 w-3" />
                    Reportar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social and Integration Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Redes Sociais e Integrações</h2>
        <Card>
          <CardHeader>
            <CardTitle>Botões Sociais</CardTitle>
            <CardDescription>Integração com redes sociais e serviços externos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Redes Sociais</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-[#4267B2] text-[#4267B2] hover:bg-[#4267B2] hover:text-white">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Plataformas</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-[#333] text-[#333] hover:bg-[#333] hover:text-white">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white">
                    <Youtube className="mr-2 h-4 w-4" />
                    YouTube
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact and Communication */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Comunicação e Contato</h2>
        <Card>
          <CardHeader>
            <CardTitle>Botões de Contato</CardTitle>
            <CardDescription>Ações relacionadas a comunicação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar
                </Button>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar
                </Button>
                <Button variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Localização
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <User className="mr-2 h-4 w-4" />
                  Ver Perfil
                </Button>
                <Button variant="secondary">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat
                </Button>
                <Button variant="ghost">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Ajuda
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* E-commerce Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">E-commerce</h2>
        <Card>
          <CardHeader>
            <CardTitle>Botões de Compra</CardTitle>
            <CardDescription>Ações relacionadas a vendas e pagamentos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
                <Button size="lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Comprar Agora
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  Favoritar
                </Button>
                <Button variant="outline">
                  <Share className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
                <Button variant="outline">
                  Comparar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ButtonsPage;