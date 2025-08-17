import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { 
  Download, 
  Plus, 
  Edit, 
  Trash, 
  Settings, 
  Search,
  Heart,
  Star,
  Upload,
  Send,
  Save,
  Copy,
  Share,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";

const ButtonsPage = () => {
  const handleClick = (action: string) => {
    toast({
      title: `Botão ${action}`,
      description: `Você clicou no botão ${action}`,
    });
  };

  return (
    <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Buttons</h1>
          <p className="text-muted-foreground">
            Coleção completa de botões para todas as necessidades da interface
          </p>
        </div>

        <Tabs defaultValue="variants" className="space-y-6">
          <TabsList>
            <TabsTrigger value="variants">Variantes</TabsTrigger>
            <TabsTrigger value="sizes">Tamanhos</TabsTrigger>
            <TabsTrigger value="states">Estados</TabsTrigger>
            <TabsTrigger value="groups">Grupos</TabsTrigger>
            <TabsTrigger value="usage">Como Usar</TabsTrigger>
          </TabsList>

          <TabsContent value="variants" className="space-y-6">
            {/* Primary Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes Principais</CardTitle>
                <CardDescription>Diferentes estilos visuais para botões</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <Button onClick={() => handleClick('Default')}>Default</Button>
                  <Button variant="destructive" onClick={() => handleClick('Destructive')}>Destructive</Button>
                  <Button variant="outline" onClick={() => handleClick('Outline')}>Outline</Button>
                  <Button variant="secondary" onClick={() => handleClick('Secondary')}>Secondary</Button>
                  <Button variant="ghost" onClick={() => handleClick('Ghost')}>Ghost</Button>
                  <Button variant="link" onClick={() => handleClick('Link')}>Link</Button>
                </div>
              </CardContent>
            </Card>

            {/* Icon Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Botões com Ícones</CardTitle>
                <CardDescription>Botões combinando texto e ícones para melhor usabilidade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button onClick={() => handleClick('Download')} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" onClick={() => handleClick('Upload')} className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                  <Button variant="secondary" onClick={() => handleClick('Save')} className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Salvar
                  </Button>
                  <Button variant="ghost" onClick={() => handleClick('Edit')} className="w-full">
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Button>
                  <Button variant="destructive" onClick={() => handleClick('Delete')} className="w-full">
                    <Trash className="mr-2 h-4 w-4" />
                    Excluir
                  </Button>
                  <Button onClick={() => handleClick('Send')} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Special Purpose Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Botões Especiais</CardTitle>
                <CardDescription>Botões para casos de uso específicos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-950"
                    onClick={() => handleClick('Like')}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Curtir
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-yellow-200 text-yellow-700 hover:bg-yellow-50 dark:border-yellow-800 dark:text-yellow-300 dark:hover:bg-yellow-950"
                    onClick={() => handleClick('Star')}
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Favoritar
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950"
                    onClick={() => handleClick('Share')}
                  >
                    <Share className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-950"
                    onClick={() => handleClick('Copy')}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
                    onClick={() => handleClick('External')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Link Externo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-950"
                    onClick={() => handleClick('Settings')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sizes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Diferentes Tamanhos</CardTitle>
                <CardDescription>Botões em diversos tamanhos para diferentes contextos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Tamanho Pequeno (sm)</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm">Pequeno</Button>
                      <Button size="sm" variant="outline">Outline</Button>
                      <Button size="sm" variant="secondary">Secondary</Button>
                      <Button size="sm" variant="ghost"><Edit className="mr-1 h-3 w-3" />Editar</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3">Tamanho Padrão (default)</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button>Padrão</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost"><Edit className="mr-2 h-4 w-4" />Editar</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3">Tamanho Grande (lg)</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button size="lg">Grande</Button>
                      <Button size="lg" variant="outline">Outline</Button>
                      <Button size="lg" variant="secondary">Secondary</Button>
                      <Button size="lg" variant="ghost"><Edit className="mr-2 h-5 w-5" />Editar</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3">Botões de Ícone</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button size="icon"><Settings className="h-4 w-4" /></Button>
                      <Button size="icon" variant="outline"><Search className="h-4 w-4" /></Button>
                      <Button size="icon" variant="secondary"><Plus className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost"><Trash className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="states" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estados dos Botões</CardTitle>
                <CardDescription>Diferentes estados visuais e funcionais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Estados Básicos</h4>
                    <div className="space-y-2">
                      <Button className="w-full">Normal</Button>
                      <Button className="w-full" disabled>Desabilitado</Button>
                      <Button className="w-full bg-primary/80">Hover (Simulado)</Button>
                      <Button className="w-full bg-primary/60">Pressed (Simulado)</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Estados de Loading</h4>
                    <div className="space-y-2">
                      <Button className="w-full" disabled>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Carregando...
                      </Button>
                      <Button className="w-full" variant="outline" disabled>
                        <div className="animate-pulse mr-2">⏳</div>
                        Processando...
                      </Button>
                      <Button className="w-full" variant="secondary" disabled>
                        <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                        Sincronizando...
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Estados Interativos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="transition-all hover:scale-105">
                      <Eye className="mr-2 h-4 w-4" />
                      Hover Scale
                    </Button>
                    <Button variant="outline" className="transition-all hover:shadow-lg">
                      <Lock className="mr-2 h-4 w-4" />
                      Hover Shadow
                    </Button>
                    <Button variant="outline" className="transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
                      <Unlock className="mr-2 h-4 w-4" />
                      Hover Gradient
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Grupos de Botões</CardTitle>
                <CardDescription>Botões organizados em grupos para ações relacionadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Grupo de Ações Principais</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Salvar
                    </Button>
                    <Button variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Visualizar
                    </Button>
                    <Button variant="secondary">
                      <Share className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Controles de Mídia</h4>
                  <div className="flex gap-1 p-2 bg-muted rounded-lg w-fit">
                    <Button size="sm" variant="ghost">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Pause className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Botões de Contato</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Telefone
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Floating Action Buttons</h4>
                  <div className="relative h-32 bg-muted/30 rounded-lg overflow-hidden">
                    <Button 
                      size="icon" 
                      className="absolute bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
                    >
                      <Plus className="h-6 w-6" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary"
                      className="absolute bottom-4 right-20 h-10 w-10 rounded-full shadow-md"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Como Usar</CardTitle>
                <CardDescription>Guia de implementação e boas práticas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Importação</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      {`import { Button } from "@/components/ui/button";`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Uso Básico</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large Button</Button>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Com Ícones</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Botão de Loading</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Button disabled>
  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
  Please wait
</Button>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Boas Práticas</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use botões primários para ações principais e secundários para ações complementares</li>
                    <li>Mantenha o texto dos botões conciso e acionável</li>
                    <li>Use ícones para melhorar a compreensão, mas não substitua texto completamente</li>
                    <li>Considere estados de loading para operações que demoram</li>
                    <li>Use variantes destrutivas apenas para ações irreversíveis</li>
                    <li>Mantenha consistência no tamanho dentro do mesmo contexto</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ButtonsPage;