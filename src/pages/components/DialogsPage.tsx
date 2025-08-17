import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash, UserPlus, Settings, Download, AlertTriangle, CheckCircle } from "lucide-react";

const DialogsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Diálogos</h1>
        <p className="text-muted-foreground">
          Componentes de modal e diálogo para interações complexas
        </p>
      </div>

      {/* Basic Dialogs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Diálogos Básicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Editar Perfil
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar Perfil</DialogTitle>
                <DialogDescription>
                  Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Nome</Label>
                  <Input id="name" defaultValue="João Silva" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">Email</Label>
                  <Input id="email" defaultValue="joao@email.com" className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar Usuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Usuário</DialogTitle>
                <DialogDescription>
                  Adicione um novo usuário ao sistema.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="newName">Nome completo</Label>
                  <Input id="newName" placeholder="Digite o nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newEmail">Email</Label>
                  <Input id="newEmail" type="email" placeholder="usuario@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Função</Label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Usuário</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Criar Usuário</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configurações do Sistema</DialogTitle>
                <DialogDescription>
                  Ajuste as configurações da aplicação.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between">
                  <Label>Notificações por email</Label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Modo escuro</Label>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Salvamento automático</Label>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Alert Dialogs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Diálogos de Confirmação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash className="mr-2 h-4 w-4" />
                Excluir Item
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Confirmar Exclusão
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso excluirá permanentemente o item selecionado.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                  Excluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Relatório
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Confirmar Download
                </AlertDialogTitle>
                <AlertDialogDescription>
                  O relatório será baixado em formato PDF. Este processo pode levar alguns minutos.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Baixar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Sair do Sistema</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sair do Sistema?</AlertDialogTitle>
                <AlertDialogDescription>
                  Você será desconectado e redirecionado para a página de login. Certifique-se de salvar seu trabalho.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Ficar Conectado</AlertDialogCancel>
                <AlertDialogAction>Sair</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Dialog Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Exemplos Avançados</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Modal Grande com Scroll</CardTitle>
              <CardDescription>Modal que suporta muito conteúdo com scroll interno</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Abrir Modal Grande</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>Relatório Completo de Vendas 2024</DialogTitle>
                    <DialogDescription>
                      Análise detalhada de performance de vendas com dados mensais e regionais
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Seção 1: Resumo Executivo */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Resumo Executivo</h3>
                      <p className="text-sm text-muted-foreground">
                        O ano de 2024 apresentou crescimento significativo nas vendas, com aumento de 45% comparado ao ano anterior. 
                        As principais métricas indicam uma performance excepcional em todas as regiões operacionais.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-green-600">R$ 2.5M</div>
                          <div className="text-sm text-muted-foreground">Receita Total</div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">1,247</div>
                          <div className="text-sm text-muted-foreground">Novos Clientes</div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">89%</div>
                          <div className="text-sm text-muted-foreground">Satisfação</div>
                        </div>
                      </div>
                    </div>

                    {/* Seção 2: Dados Mensais */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Performance Mensal</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-border">
                          <thead>
                            <tr className="bg-muted">
                              <th className="border border-border p-2 text-left">Mês</th>
                              <th className="border border-border p-2 text-left">Vendas</th>
                              <th className="border border-border p-2 text-left">Receita</th>
                              <th className="border border-border p-2 text-left">Crescimento</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { mes: 'Janeiro', vendas: '142', receita: 'R$ 185K', crescimento: '+12%' },
                              { mes: 'Fevereiro', vendas: '158', receita: 'R$ 201K', crescimento: '+15%' },
                              { mes: 'Março', vendas: '173', receita: 'R$ 223K', crescimento: '+18%' },
                              { mes: 'Abril', vendas: '167', receita: 'R$ 215K', crescimento: '+14%' },
                              { mes: 'Maio', vendas: '189', receita: 'R$ 245K', crescimento: '+22%' },
                              { mes: 'Junho', vendas: '201', receita: 'R$ 267K', crescimento: '+25%' },
                              { mes: 'Julho', vendas: '198', receita: 'R$ 259K', crescimento: '+23%' },
                              { mes: 'Agosto', vendas: '212', receita: 'R$ 278K', crescimento: '+28%' },
                              { mes: 'Setembro', vendas: '195', receita: 'R$ 254K', crescimento: '+21%' },
                              { mes: 'Outubro', vendas: '224', receita: 'R$ 295K', crescimento: '+32%' },
                              { mes: 'Novembro', vendas: '238', receita: 'R$ 312K', crescimento: '+36%' },
                              { mes: 'Dezembro', vendas: '251', receita: 'R$ 329K', crescimento: '+41%' }
                            ].map((item) => (
                              <tr key={item.mes}>
                                <td className="border border-border p-2">{item.mes}</td>
                                <td className="border border-border p-2">{item.vendas}</td>
                                <td className="border border-border p-2">{item.receita}</td>
                                <td className="border border-border p-2 text-green-600">{item.crescimento}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Seção 3: Análise Regional */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Análise Regional</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { regiao: 'Sudeste', vendas: '45%', receita: 'R$ 1.125M', crescimento: '+42%' },
                          { regiao: 'Sul', vendas: '25%', receita: 'R$ 625K', crescimento: '+38%' },
                          { regiao: 'Nordeste', vendas: '20%', receita: 'R$ 500K', crescimento: '+52%' },
                          { regiao: 'Norte/Centro-Oeste', vendas: '10%', receita: 'R$ 250K', crescimento: '+48%' }
                        ].map((regiao) => (
                          <div key={regiao.regiao} className="p-4 border rounded-lg space-y-2">
                            <h4 className="font-medium">{regiao.regiao}</h4>
                            <div className="text-sm space-y-1">
                              <div className="flex justify-between">
                                <span>Participação:</span>
                                <span className="font-medium">{regiao.vendas}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Receita:</span>
                                <span className="font-medium">{regiao.receita}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Crescimento:</span>
                                <span className="font-medium text-green-600">{regiao.crescimento}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Seção 4: Produtos Top */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Top 10 Produtos</h3>
                      <div className="space-y-2">
                        {[
                          { produto: 'Plano Enterprise', vendas: 234, receita: 'R$ 468K' },
                          { produto: 'Plano Professional', vendas: 456, receita: 'R$ 342K' },
                          { produto: 'Plano Starter', vendas: 789, receita: 'R$ 197K' },
                          { produto: 'Add-on Analytics', vendas: 321, receita: 'R$ 128K' },
                          { produto: 'Add-on Security', vendas: 287, receita: 'R$ 115K' },
                          { produto: 'Consultoria Premium', vendas: 45, receita: 'R$ 225K' },
                          { produto: 'Treinamento Avançado', vendas: 123, receita: 'R$ 98K' },
                          { produto: 'Suporte 24/7', vendas: 567, receita: 'R$ 142K' },
                          { produto: 'API Premium', vendas: 234, receita: 'R$ 87K' },
                          { produto: 'Custom Integration', vendas: 67, receita: 'R$ 134K' }
                        ].map((produto, index) => (
                          <div key={produto.produto} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                {index + 1}
                              </div>
                              <span className="font-medium">{produto.produto}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">{produto.receita}</div>
                              <div className="text-sm text-muted-foreground">{produto.vendas} vendas</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Seção 5: Conclusões */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Conclusões e Próximos Passos</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-medium text-green-800">Pontos Fortes</h4>
                          <ul className="text-sm text-green-700 mt-2 space-y-1">
                            <li>• Crescimento consistente em todas as regiões</li>
                            <li>• Alta taxa de retenção de clientes (94%)</li>
                            <li>• Produtos enterprise com maior margem</li>
                            <li>• Expansão bem-sucedida no Nordeste</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                          <h4 className="font-medium text-orange-800">Oportunidades</h4>
                          <ul className="text-sm text-orange-700 mt-2 space-y-1">
                            <li>• Aumentar penetração no Centro-Oeste</li>
                            <li>• Desenvolver produtos para PMEs</li>
                            <li>• Expandir ofertas de treinamento</li>
                            <li>• Investir em automação de vendas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 pt-4 border-t mt-6">
                    <Button variant="outline">Exportar PDF</Button>
                    <Button variant="outline">Compartilhar</Button>
                    <Button>Agendar Apresentação</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modal com Formulário Longo</CardTitle>
              <CardDescription>Formulário extenso com múltiplas seções e scroll</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Cadastro Completo</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Cadastro de Cliente Enterprise</DialogTitle>
                    <DialogDescription>
                      Preencha todas as informações para criar uma conta enterprise completa.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Informações Básicas */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Informações Básicas</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome Completo *</Label>
                          <Input id="nome" placeholder="Digite o nome completo" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Corporativo *</Label>
                          <Input id="email" type="email" placeholder="usuario@empresa.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone *</Label>
                          <Input id="telefone" placeholder="(11) 99999-9999" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cargo">Cargo *</Label>
                          <Input id="cargo" placeholder="CEO, CTO, etc." />
                        </div>
                      </div>
                    </div>

                    {/* Informações da Empresa */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Informações da Empresa</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="empresa">Nome da Empresa *</Label>
                          <Input id="empresa" placeholder="Nome da empresa" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cnpj">CNPJ *</Label>
                          <Input id="cnpj" placeholder="00.000.000/0000-00" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="setor">Setor de Atuação *</Label>
                          <select className="w-full p-2 border border-border rounded-md">
                            <option>Tecnologia</option>
                            <option>Varejo</option>
                            <option>Manufatura</option>
                            <option>Serviços</option>
                            <option>Saúde</option>
                            <option>Educação</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="funcionarios">Número de Funcionários</Label>
                          <select className="w-full p-2 border border-border rounded-md">
                            <option>1-10</option>
                            <option>11-50</option>
                            <option>51-200</option>
                            <option>201-1000</option>
                            <option>1000+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Endereço */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Endereço</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cep">CEP *</Label>
                          <Input id="cep" placeholder="00000-000" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="endereco">Endereço *</Label>
                          <Input id="endereco" placeholder="Rua, número" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cidade">Cidade *</Label>
                          <Input id="cidade" placeholder="São Paulo" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="estado">Estado *</Label>
                          <select className="w-full p-2 border border-border rounded-md">
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                            <option>RS</option>
                            <option>PR</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="complemento">Complemento</Label>
                          <Input id="complemento" placeholder="Andar, sala" />
                        </div>
                      </div>
                    </div>

                    {/* Necessidades */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Necessidades e Interesse</h3>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label>Produtos de Interesse (múltipla escolha)</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              'Plano Enterprise',
                              'Analytics Avançado',
                              'Security Plus',
                              'API Premium',
                              'Consultoria',
                              'Treinamento',
                              'Suporte 24/7',
                              'Custom Integration'
                            ].map((produto) => (
                              <div key={produto} className="flex items-center space-x-2">
                                <input type="checkbox" id={produto} />
                                <Label htmlFor={produto} className="text-sm">{produto}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="usuarios">Número estimado de usuários</Label>
                          <Input id="usuarios" type="number" placeholder="Ex: 50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="orcamento">Orçamento mensal previsto</Label>
                          <select className="w-full p-2 border border-border rounded-md">
                            <option>R$ 1.000 - R$ 5.000</option>
                            <option>R$ 5.000 - R$ 10.000</option>
                            <option>R$ 10.000 - R$ 25.000</option>
                            <option>R$ 25.000 - R$ 50.000</option>
                            <option>R$ 50.000+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="observacoes">Observações e Necessidades Especiais</Label>
                          <textarea 
                            id="observacoes"
                            className="w-full p-2 border border-border rounded-md"
                            rows={4}
                            placeholder="Descreva suas necessidades específicas, integrações necessárias, etc."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 pt-4 border-t mt-6">
                    <Button variant="outline">Salvar Rascunho</Button>
                    <Button>Enviar Solicitação</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DialogsPage;