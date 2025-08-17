import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, AlertTriangle, CheckCircle, XCircle, Bell, Star, AlertCircle } from "lucide-react";

const AlertsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Alertas</h1>
        <p className="text-muted-foreground">
          Componentes de alerta para comunicar informações importantes
        </p>
      </div>

      {/* Basic Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Alertas Básicos</h2>
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Informação</AlertTitle>
            <AlertDescription>
              Esta é uma mensagem informativa para comunicar detalhes importantes ao usuário.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>
              Ocorreu um erro durante o processamento da sua solicitação. Tente novamente.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Alert Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Variações de Alertas</h2>
        <div className="space-y-4">
          <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle>Sucesso!</AlertTitle>
            <AlertDescription>
              Operação realizada com sucesso. Todas as alterações foram salvas.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>
              Esta ação não pode ser desfeita. Certifique-se antes de continuar.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100">
            <Bell className="h-4 w-4 text-blue-600" />
            <AlertTitle>Nova funcionalidade</AlertTitle>
            <AlertDescription>
              Agora você pode exportar seus relatórios em formato PDF. Confira nas configurações.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Interactive Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Alertas Interativos</h2>
        <div className="space-y-4">
          <Alert>
            <Star className="h-4 w-4" />
            <AlertTitle>Upgrade disponível</AlertTitle>
            <AlertDescription className="mt-2">
              Faça upgrade para o plano Pro e tenha acesso a recursos avançados.
              <div className="mt-3 flex space-x-2">
                <Button size="sm">Fazer Upgrade</Button>
                <Button variant="outline" size="sm">Saber Mais</Button>
              </div>
            </AlertDescription>
          </Alert>

          <Alert className="border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100">
            <Bell className="h-4 w-4 text-purple-600" />
            <AlertTitle className="flex items-center gap-2">
              Novidades do Sistema
              <Badge variant="secondary">Novo</Badge>
            </AlertTitle>
            <AlertDescription className="mt-2">
              Confira as últimas atualizações e melhorias que implementamos para você.
              <div className="mt-3">
                <Button variant="outline" size="sm">Ver Changelog</Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Alert Examples in Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Alertas em Contexto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Formulário de Cadastro</CardTitle>
              <CardDescription>Exemplo de uso em formulários</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertTitle>Erro de validação</AlertTitle>
                <AlertDescription>
                  Por favor, corrija os campos obrigatórios destacados em vermelho.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email *</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-red-300 rounded-md" 
                  placeholder="Digite seu email"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status do Sistema</CardTitle>
              <CardDescription>Monitoramento em tempo real</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle>Todos os sistemas operacionais</AlertTitle>
                <AlertDescription>
                  API, banco de dados e serviços em funcionamento normal.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>API</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Database</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Toast-style Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Notificações Toast</h2>
        <Card>
          <CardHeader>
            <CardTitle>Exemplos de Toast</CardTitle>
            <CardDescription>Simulação de notificações temporárias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-green-100 border border-green-200 rounded-lg dark:bg-green-950 dark:border-green-800">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-100">Arquivo salvo com sucesso</p>
                    <p className="text-sm text-green-700 dark:text-green-200">Suas alterações foram salvas automaticamente</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-100 border border-blue-200 rounded-lg dark:bg-blue-950 dark:border-blue-800">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-100">Nova mensagem recebida</p>
                    <p className="text-sm text-blue-700 dark:text-blue-200">Você tem 3 mensagens não lidas</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AlertsPage;