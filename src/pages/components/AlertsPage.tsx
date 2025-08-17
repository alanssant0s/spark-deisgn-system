import { SaasLayout } from "@/components/saas/SaasLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  XCircle, 
  Shield,
  Bell,
  Zap,
  Heart,
  Star,
  Download
} from "lucide-react";

const AlertsPage = () => {
  return (
    <SaasLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Alerts</h1>
          <p className="text-muted-foreground">
            Componentes de alerta para comunicar informações importantes aos usuários
          </p>
        </div>

        <Tabs defaultValue="examples" className="space-y-6">
          <TabsList>
            <TabsTrigger value="examples">Exemplos</TabsTrigger>
            <TabsTrigger value="variants">Variações</TabsTrigger>
            <TabsTrigger value="usage">Como Usar</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-6">
            {/* Basic Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alertas Básicos</CardTitle>
                <CardDescription>Alertas simples com diferentes níveis de importância</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Informação</AlertTitle>
                  <AlertDescription>
                    Esta é uma mensagem informativa para orientar o usuário sobre alguma funcionalidade.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Erro!</AlertTitle>
                  <AlertDescription>
                    Ocorreu um erro durante o processamento da sua solicitação. Tente novamente em alguns instantes.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Success & Warning Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alertas de Status</CardTitle>
                <CardDescription>Alertas para indicar sucesso, aviso e outros estados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Sucesso!</AlertTitle>
                  <AlertDescription>
                    Operação realizada com sucesso. Todos os dados foram salvos corretamente.
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Atenção!</AlertTitle>
                  <AlertDescription>
                    Sua sessão expirará em 5 minutos. Salve seu trabalho para evitar perda de dados.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Complex Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alertas Complexos</CardTitle>
                <CardDescription>Alertas com múltiplos elementos e ações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
                  <Bell className="h-4 w-4" />
                  <AlertTitle className="flex items-center justify-between">
                    Nova Atualização Disponível
                    <Badge variant="secondary" className="ml-2">v2.1.0</Badge>
                  </AlertTitle>
                  <AlertDescription className="space-y-3">
                    <p>Uma nova versão do sistema está disponível com melhorias de performance e novas funcionalidades.</p>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Baixar atualização (15.2 MB)</span>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert className="border-purple-200 bg-purple-50 text-purple-800 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-200">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Configuração de Segurança</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>Recomendamos ativar a autenticação de dois fatores para aumentar a segurança da sua conta.</p>
                    <Separator className="my-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status: Desativado</span>
                      <Badge variant="outline">Configurar</Badge>
                    </div>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variants" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Variações de Design</CardTitle>
                <CardDescription>Diferentes estilos visuais para alertas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Minimal Alerts */}
                <div className="space-y-2">
                  <h4 className="font-medium">Estilo Minimalista</h4>
                  <Alert className="border-l-4 border-l-blue-500 border-y-0 border-r-0 rounded-none bg-blue-50/50 dark:bg-blue-950/20">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Alerta com borda lateral destacada e fundo sutil.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Gradient Alerts */}
                <div className="space-y-2">
                  <h4 className="font-medium">Com Gradiente</h4>
                  <Alert className="border-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950">
                    <Heart className="h-4 w-4 text-pink-600" />
                    <AlertTitle className="text-pink-800 dark:text-pink-200">Obrigado!</AlertTitle>
                    <AlertDescription className="text-pink-700 dark:text-pink-300">
                      Agradecemos pelo seu feedback. Ele nos ajuda a melhorar continuamente.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Icon-only Alerts */}
                <div className="space-y-2">
                  <h4 className="font-medium">Somente com Ícone</h4>
                  <Alert className="flex items-center space-x-3 py-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <AlertDescription className="mb-0">
                      Você ganhou uma estrela! Continue assim para desbloquear mais conquistas.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Elevated Alerts */}
                <div className="space-y-2">
                  <h4 className="font-medium">Com Elevação</h4>
                  <Alert className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <Zap className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800 dark:text-green-200">Performance Otimizada</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-300">
                      Sistema 40% mais rápido após as últimas otimizações implementadas.
                    </AlertDescription>
                  </Alert>
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
                      {`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Uso Básico</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Alert>
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Variante Destrutiva</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Boas Práticas</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use ícones consistentes com o tipo de alerta (info, warning, error, success)</li>
                    <li>Mantenha o texto conciso e acionável</li>
                    <li>Posicione alertas próximos ao contexto relevante</li>
                    <li>Use cores semânticas para diferentes tipos de mensagem</li>
                    <li>Considere auto-dismiss para alertas de sucesso temporários</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SaasLayout>
  );
};

export default AlertsPage;