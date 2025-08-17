import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { Bell, CheckCircle, AlertCircle, AlertTriangle, Info, Settings, Volume2, VolumeX } from 'lucide-react';

export default function NotificationsPage() {
  const { showToast, addNotification } = useNotifications();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    soundEnabled: true,
    frequency: 'immediate',
    quietHours: false,
  });

  const handleTestNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
    const notifications = {
      success: {
        title: 'Operação Realizada!',
        message: 'Sua ação foi executada com sucesso.',
        type: 'success' as const,
      },
      error: {
        title: 'Erro Encontrado',
        message: 'Ocorreu um erro durante a operação. Tente novamente.',
        type: 'error' as const,
      },
      warning: {
        title: 'Atenção Necessária',
        message: 'Esta ação requer sua confirmação antes de prosseguir.',
        type: 'warning' as const,
      },
      info: {
        title: 'Nova Informação',
        message: 'Há uma atualização importante disponível para você.',
        type: 'info' as const,
        action: {
          label: 'Ver Detalhes',
          onClick: () => console.log('Ver detalhes clicado'),
        },
      },
    };

    showToast(notifications[type]);
  };

  const handleAddNotification = () => {
    addNotification({
      title: 'Notificação de Teste',
      message: 'Esta é uma notificação adicionada diretamente ao centro de notificações.',
      type: 'info',
      action: {
        label: 'Ação',
        onClick: () => console.log('Ação executada'),
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Sistema de Notificações</h1>
        <p className="text-muted-foreground">
          Gerencie notificações, toasts e configurações do sistema
        </p>
      </div>

      {/* Notification Center Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Centro de Notificações</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Demonstração</span>
            </CardTitle>
            <CardDescription>
              O centro de notificações aparece no cabeçalho da aplicação
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Centro de Notificações</h4>
                <p className="text-sm text-muted-foreground">
                  Clique no ícone do sino no cabeçalho para ver suas notificações
                </p>
              </div>
              <NotificationCenter />
            </div>
            
            <Button onClick={handleAddNotification} variant="outline" className="w-full">
              Adicionar Notificação de Teste
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Toast Notifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Toast Notifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span>Sucesso</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleTestNotification('success')}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Testar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span>Erro</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleTestNotification('error')}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Testar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-orange-700">
                <AlertTriangle className="h-5 w-5" />
                <span>Aviso</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleTestNotification('warning')}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                Testar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-blue-700">
                <Info className="h-5 w-5" />
                <span>Informação</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleTestNotification('info')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Testar
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Configurações</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Preferências de Notificação</span>
            </CardTitle>
            <CardDescription>
              Configure como e quando você deseja receber notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações importantes por email
                </p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({ ...prev, emailNotifications: checked }))
                }
              />
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações push no navegador
                </p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({ ...prev, pushNotifications: checked }))
                }
              />
            </div>

            {/* Sound */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5 flex items-center">
                <div>
                  <Label className="text-base">Som das Notificações</Label>
                  <p className="text-sm text-muted-foreground">
                    Reproduzir som ao receber notificações
                  </p>
                </div>
                {settings.soundEnabled ? (
                  <Volume2 className="h-4 w-4 ml-2 text-muted-foreground" />
                ) : (
                  <VolumeX className="h-4 w-4 ml-2 text-muted-foreground" />
                )}
              </div>
              <Switch
                checked={settings.soundEnabled}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({ ...prev, soundEnabled: checked }))
                }
              />
            </div>

            {/* Frequency */}
            <div className="space-y-2">
              <Label className="text-base">Frequência das Notificações</Label>
              <Select
                value={settings.frequency}
                onValueChange={(value) =>
                  setSettings(prev => ({ ...prev, frequency: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Imediata</SelectItem>
                  <SelectItem value="hourly">A cada hora</SelectItem>
                  <SelectItem value="daily">Diariamente</SelectItem>
                  <SelectItem value="weekly">Semanalmente</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Define com que frequência você recebe notificações em lote
              </p>
            </div>

            {/* Quiet Hours */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Modo Silencioso</Label>
                <p className="text-sm text-muted-foreground">
                  Desabilitar notificações durante horários específicos
                </p>
              </div>
              <Switch
                checked={settings.quietHours}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({ ...prev, quietHours: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Boas Práticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Uso de Toast</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Use para feedback imediato de ações</li>
                <li>• Mantenha mensagens concisas</li>
                <li>• Inclua ações quando aplicável</li>
                <li>• Auto-dismissible após 5-7 segundos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Centro de Notificações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Para notificações persistentes</li>
                <li>• Agrupe por categoria</li>
                <li>• Permita marcar como lida</li>
                <li>• Inclua timestamps</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}