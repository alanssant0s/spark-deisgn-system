import { SaasLayout } from "@/components/saas/SaasLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Calendar, CreditCard, Mail, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  // Mock data - em um app real, isso viria do backend
  const orderData = {
    id: "ORD-2024-001",
    status: "confirmed",
    date: "17 de agosto de 2024",
    plan: "Premium",
    amount: "R$ 99,90",
    paymentMethod: "Cartão terminado em 4242",
    email: "usuario@email.com",
    features: [
      "Acesso ilimitado",
      "Suporte prioritário",
      "Relatórios avançados",
      "API Access",
      "Team collaboration"
    ]
  };

  return (
    <SaasLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pagamento Confirmado!</h1>
            <p className="text-muted-foreground">
              Obrigado pela sua assinatura. Seu plano foi ativado com sucesso.
            </p>
          </div>
        </div>

        {/* Order Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Detalhes do Pedido
              <Badge variant="default" className="bg-green-600">
                {orderData.status === "confirmed" ? "Confirmado" : "Pendente"}
              </Badge>
            </CardTitle>
            <CardDescription>
              Pedido #{orderData.id} - {orderData.date}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Data do Pedido</p>
                    <p className="text-sm text-muted-foreground">{orderData.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Pagamento</p>
                    <p className="text-sm text-muted-foreground">{orderData.paymentMethod}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{orderData.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Plano Selecionado</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{orderData.plan}</span>
                      <span className="text-lg font-bold">{orderData.amount}/mês</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Funcionalidades Incluídas</h4>
                  <ul className="space-y-1">
                    {orderData.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                Próximos Passos
              </h4>
              <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                <li>• Você receberá um email de confirmação em breve</li>
                <li>• Seu acesso ao plano Premium foi ativado imediatamente</li>
                <li>• A próxima cobrança será em 17 de setembro de 2024</li>
                <li>• Você pode gerenciar sua assinatura a qualquer momento</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Dashboard</span>
            </Link>
          </Button>
          <Button className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Baixar Recibo</span>
          </Button>
        </div>

        {/* Support */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-medium">Precisa de Ajuda?</h3>
              <p className="text-sm text-muted-foreground">
                Nossa equipe de suporte está disponível 24/7 para ajudar você.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
                <Button variant="outline" size="sm">
                  Central de Ajuda
                </Button>
                <Button variant="outline" size="sm">
                  Falar com Suporte
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SaasLayout>
  );
};

export default Confirmation;