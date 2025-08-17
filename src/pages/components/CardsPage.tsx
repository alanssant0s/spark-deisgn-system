import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Calendar, 
  MapPin, 
  Star, 
  TrendingUp, 
  DollarSign,
  Users,
  Activity,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  Shield,
  Award,
  Target,
  Briefcase,
  Mail,
  Phone
} from "lucide-react";

const CardsPage = () => {
  return (
    <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Cards</h1>
          <p className="text-muted-foreground">
            Componentes de cartão versáteis para organizar e apresentar conteúdo
          </p>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList>
            <TabsTrigger value="basic">Básicos</TabsTrigger>
            <TabsTrigger value="interactive">Interativos</TabsTrigger>
            <TabsTrigger value="complex">Complexos</TabsTrigger>
            <TabsTrigger value="layouts">Layouts</TabsTrigger>
            <TabsTrigger value="usage">Como Usar</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            {/* Simple Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards Simples</CardTitle>
                <CardDescription>Cards básicos para conteúdo essencial</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Título do Card</CardTitle>
                      <CardDescription>
                        Descrição simples do conteúdo do card
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Conteúdo principal do card com informações relevantes para o usuário.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                        Card com Tema
                      </CardTitle>
                      <CardDescription>
                        Card com cores temáticas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Este card usa cores temáticas para destacar informações importantes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Card Elevado</CardTitle>
                      <CardDescription>
                        Com sombra para destaque
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Card com sombra mais pronunciada para criar hierarquia visual.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Metric Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards de Métricas</CardTitle>
                <CardDescription>Cards para exibir dados e estatísticas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-900/20">
                          <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">2,543</p>
                          <p className="text-sm text-muted-foreground">Usuários Totais</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900/20">
                          +12% vs mês anterior
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900/20">
                          <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">R$ 45.2k</p>
                          <p className="text-sm text-muted-foreground">Receita Mensal</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900/20">
                          +8.5% vs mês anterior
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900/20">
                          <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">3.24%</p>
                          <p className="text-sm text-muted-foreground">Taxa Conversão</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline" className="text-red-600">
                          -2.1% vs mês anterior
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-100 rounded-lg dark:bg-orange-900/20">
                          <Activity className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">1,247</p>
                          <p className="text-sm text-muted-foreground">Atividade Diária</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">
                          Sem alterações
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactive" className="space-y-6">
            {/* Interactive Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards Interativos</CardTitle>
                <CardDescription>Cards com ações e elementos interativos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Post do Blog</CardTitle>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Imagem do Post</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Como Criar uma Interface Moderna</h3>
                        <p className="text-sm text-muted-foreground">
                          Dicas e técnicas para desenvolver interfaces que encantam usuários...
                        </p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 mr-1" />
                            42
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            8
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share className="h-4 w-4 mr-1" />
                            Compartilhar
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-base">João Silva</CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3" />
                            <span>São Paulo, Brasil</span>
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          Seguir
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm">
                          Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis. 
                          Sempre aprendendo e compartilhando conhecimento.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>4.9</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>1.2k seguidores</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Desde 2020</span>
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Mail className="h-4 w-4 mr-1" />
                          Mensagem
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          Contato
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Status Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards de Status</CardTitle>
                <CardDescription>Cards para exibir diferentes estados e progresso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800 dark:text-green-200">Concluído</h3>
                          <p className="text-sm text-green-600 dark:text-green-400">
                            Projeto finalizado com sucesso
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-8 w-8 text-yellow-600" />
                        <div>
                          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Em Progresso</h3>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">
                            75% concluído
                          </p>
                          <Progress value={75} className="mt-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <XCircle className="h-8 w-8 text-red-600" />
                        <div>
                          <h3 className="font-semibold text-red-800 dark:text-red-200">Erro</h3>
                          <p className="text-sm text-red-600 dark:text-red-400">
                            Falha na validação
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complex" className="space-y-6">
            {/* Complex Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards Complexos</CardTitle>
                <CardDescription>Cards com múltiplos elementos e funcionalidades avançadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Project Card */}
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold">Projeto SaaS</h3>
                          <p className="text-blue-100">Sistema de gestão empresarial</p>
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          Premium
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>PM</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">Maria Costa</p>
                          <p className="text-muted-foreground">Project Manager</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} />
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">24</p>
                          <p className="text-xs text-muted-foreground">Tarefas</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">18</p>
                          <p className="text-xs text-muted-foreground">Concluídas</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-orange-600">6</p>
                          <p className="text-xs text-muted-foreground">Pendentes</p>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Entrega: 25/08/2024</span>
                        </div>
                        <Button size="sm">Ver Detalhes</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feature Card */}
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900/20">
                          <Zap className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Performance Pro</CardTitle>
                          <CardDescription>Otimização avançada de velocidade</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Cache inteligente automático</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Compressão de imagens</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">CDN global</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Monitoramento em tempo real</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Performance Score</span>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            95/100
                          </Badge>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-sm text-muted-foreground">
                          <span>A partir de </span>
                          <span className="text-2xl font-bold text-purple-600">$29</span>
                          <span>/mês</span>
                        </div>
                        <Button>Upgrade</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layouts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Layouts de Cards</CardTitle>
                <CardDescription>Diferentes organizações e estruturas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Grid Layout */}
                <div>
                  <h4 className="font-medium mb-4">Grid Responsivo</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1,2,3,4].map((i) => (
                      <Card key={i} className="text-center">
                        <CardContent className="pt-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-blue-600" />
                          </div>
                          <h4 className="font-medium">Feature {i}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Descrição da funcionalidade
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Masonry Layout Simulation */}
                <div>
                  <h4 className="font-medium mb-4">Layout Masonry (Simulado)</h4>
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    <Card className="break-inside-avoid">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Card Alto</h4>
                        <p className="text-sm text-muted-foreground">
                          Este card tem mais conteúdo e ocupa mais espaço vertical. 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="break-inside-avoid">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Card Médio</h4>
                        <p className="text-sm text-muted-foreground">
                          Card com conteúdo moderado que se ajusta bem ao layout.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="break-inside-avoid">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Card Baixo</h4>
                        <p className="text-sm text-muted-foreground">Card compacto.</p>
                      </CardContent>
                    </Card>
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
                      {`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Estrutura Básica</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here.
  </CardContent>
</Card>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Card com Classes Customizadas</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Card className="hover:shadow-lg transition-shadow">
  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <CardTitle>Featured Card</CardTitle>
  </CardHeader>
  <CardContent className="pt-6">
    Enhanced card with custom styling.
  </CardContent>
</Card>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Boas Práticas</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use CardHeader para títulos e descrições principais</li>
                    <li>Mantenha o conteúdo organizado e hierárquico</li>
                    <li>Considere estados hover para cards interativos</li>
                    <li>Use cores semânticas para diferentes tipos de conteúdo</li>
                    <li>Mantenha proporções consistentes em grids de cards</li>
                    <li>Adicione ações relevantes quando apropriado</li>
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

export default CardsPage;