import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/saas/GradientButton";
import { Plus, Download, Star, Settings, Heart, Edit, Trash, ArrowRight } from "lucide-react";

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

      {/* Gradient Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Botões com Gradiente</h2>
        <Card>
          <CardHeader>
            <CardTitle>Gradient Buttons</CardTitle>
            <CardDescription>Botões especiais com gradientes para ações importantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="primary" size="sm" icon={Plus}>
                Adicionar
              </GradientButton>
              <GradientButton variant="primary" size="md" icon={Download}>
                Download
              </GradientButton>
              <GradientButton variant="primary" size="lg" icon={Star}>
                Começar Agora
              </GradientButton>
              <GradientButton variant="secondary" size="md">
                Cancelar
              </GradientButton>
              <GradientButton variant="accent" size="md" icon={Heart}>
                Premium
              </GradientButton>
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
              <GradientButton variant="primary" size="lg" icon={Star}>
                Começar Gratuitamente
              </GradientButton>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ButtonsPage;