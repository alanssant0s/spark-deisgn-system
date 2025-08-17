import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Calendar,
  Shield,
  Bell,
  CreditCard,
  Activity,
  Settings,
  Camera,
  Edit,
  Save
} from "lucide-react";

const UserProfile = () => {
  // Mock user data - em um app real, isso viria do backend/Supabase
  const userData = {
    id: "usr_123456",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "+55 11 99999-9999",
    avatar: "",
    company: "TechCorp",
    position: "Desenvolvedor Senior",
    location: "São Paulo, Brasil",
    bio: "Desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência em React e Node.js.",
    joinDate: "Janeiro 2023",
    plan: "Premium",
    planExpiry: "17 de setembro de 2024",
    storageUsed: 45,
    storageLimit: 100
  };

  const handleSave = () => {
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleAvatarUpload = () => {
    toast({
      title: "Upload de avatar",
      description: "Funcionalidade disponível com integração Supabase.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={userData.avatar} />
                  <AvatarFallback className="text-xl">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  onClick={handleAvatarUpload}
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  <Badge variant="default">{userData.plan}</Badge>
                </div>
                <p className="text-muted-foreground">{userData.position} • {userData.company}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>{userData.email}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{userData.location}</span>
                  </span>
                </div>
              </div>

              <div className="text-right space-y-2">
                <p className="text-sm text-muted-foreground">Membro desde</p>
                <p className="font-medium">{userData.joinDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="usage">Uso</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Informações Pessoais</span>
                </CardTitle>
                <CardDescription>
                  Atualize suas informações pessoais e profissionais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue={userData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={userData.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue={userData.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" defaultValue={userData.company} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input id="position" defaultValue={userData.position} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Localização</Label>
                    <Input id="location" defaultValue={userData.location} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Conte um pouco sobre você..."
                    defaultValue={userData.bio}
                    rows={4}
                  />
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSave} className="flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Salvar Alterações</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Segurança da Conta</span>
                </CardTitle>
                <CardDescription>
                  Gerencie sua senha e configurações de segurança
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autenticação de dois fatores</p>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma camada extra de segurança à sua conta
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alertas de login</p>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações para novos logins
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Atualizar Senha</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Plano e Cobrança</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Plano {userData.plan}</p>
                    <p className="text-sm text-muted-foreground">
                      Válido até {userData.planExpiry}
                    </p>
                  </div>
                  <Button variant="outline">Gerenciar Plano</Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Próxima cobrança</span>
                    <span>R$ 99,90</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Método de pagamento</span>
                    <span>•••• 4242</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Preferências de Notificação</span>
                </CardTitle>
                <CardDescription>
                  Configure como e quando você quer receber notificações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações por email</p>
                      <p className="text-sm text-muted-foreground">
                        Receba updates importantes por email
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações push</p>
                      <p className="text-sm text-muted-foreground">
                        Notificações no navegador em tempo real
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">
                        Receba dicas e novidades semanais
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações de cobrança</p>
                      <p className="text-sm text-muted-foreground">
                        Alertas sobre pagamentos e faturas
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usage Tab */}
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Uso da Conta</span>
                </CardTitle>
                <CardDescription>
                  Acompanhe seu uso de recursos e limites
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Armazenamento</span>
                      <span className="text-sm text-muted-foreground">
                        {userData.storageUsed}GB de {userData.storageLimit}GB
                      </span>
                    </div>
                    <Progress value={(userData.storageUsed / userData.storageLimit) * 100} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">API Calls</span>
                      <span className="text-sm text-muted-foreground">
                        8.2k de 10k este mês
                      </span>
                    </div>
                    <Progress value={82} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Usuários Ativos</span>
                      <span className="text-sm text-muted-foreground">
                        23 de 50 usuários
                      </span>
                    </div>
                    <Progress value={46} />
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold">156</p>
                    <p className="text-sm text-muted-foreground">Projetos criados</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold">2.3k</p>
                    <p className="text-sm text-muted-foreground">Arquivos enviados</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-sm text-muted-foreground">Integrações ativas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;