import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Modal,
    ModalContent,
    ModalActions,
    ModalScrollable,
    ModalScrollableContent,
    ModalScrollableFooter,
    ModalCloseButton,
    ModalActionButton,
    UnifiedModal,
    useModal,
    useConfirmModal
} from "@/components/ui/modal";
import {
    ConfirmationModal,
    FormModal,
    InfoModal,
    ExampleWithUseModal,
    ExampleWithConfirmModal,
    ExampleFormModal
} from "@/components/ui/modal-examples";
import {
    Edit,
    Trash,
    UserPlus,
    Settings,
    Download,
    AlertTriangle,
    CheckCircle,
    FileText,
    Users,
    BarChart3,
    Calendar,
    Mail,
    Phone,
    MapPin,
    Building,
    Star,
    Heart,
    Share2,
    Filter
} from "lucide-react";

const ModalsPage = () => {
    // Usando os novos hooks para gerenciar estado
    const basicModal = useModal();
    const profileModal = useModal();
    const settingsModal = useModal();
    const reportModal = useModal();
    const formModal = useModal();

    // Hook de confirmação para exclusão
    const deleteConfirmModal = useConfirmModal({
        title: "Confirmar Exclusão",
        description: "Esta ação não pode ser desfeita. Isso excluirá permanentemente o item selecionado.",
        confirmText: "Excluir",
        cancelText: "Cancelar",
        onConfirm: async () => {
            // Simula operação de exclusão
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Item excluído com sucesso!");
        }
    });

    // Hook de confirmação para download
    const downloadConfirmModal = useConfirmModal({
        title: "Confirmar Download",
        description: "O relatório será baixado em formato PDF. Este processo pode levar alguns minutos.",
        confirmText: "Baixar",
        cancelText: "Cancelar",
        onConfirm: async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log("Download iniciado!");
        }
    });

    // Hook de confirmação para logout
    const logoutConfirmModal = useConfirmModal({
        title: "Sair do Sistema?",
        description: "Você será desconectado e redirecionado para a página de login. Certifique-se de salvar seu trabalho.",
        confirmText: "Sair",
        cancelText: "Ficar Conectado",
        onConfirm: () => {
            console.log("Usuário desconectado!");
        }
    });

    // Estados para formulários
    const [userFormLoading, setUserFormLoading] = useState(false);
    const [enterpriseFormLoading, setEnterpriseFormLoading] = useState(false);

    // Handlers para formulários
    const handleUserFormSubmit = async (data: Record<string, any>) => {
        setUserFormLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Usuário criado:", data);
            profileModal.close();
        } finally {
            setUserFormLoading(false);
        }
    };

    const handleEnterpriseFormSubmit = async (data: Record<string, any>) => {
        setEnterpriseFormLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log("Cliente enterprise cadastrado:", data);
            formModal.close();
        } finally {
            setEnterpriseFormLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Modais Simplificados</h1>
                <p className="text-muted-foreground">
                    Componentes de modal otimizados para diferentes tipos de conteúdo
                </p>
            </div>

            {/* Visão Geral */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Tipos de Modal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                Modal Básico
                            </CardTitle>
                            <CardDescription>
                                Para conteúdo simples como confirmações, formulários pequenos e informações rápidas.
                                Não possui scroll interno.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Badge variant="secondary">Sem scroll</Badge>
                                <Badge variant="secondary">Tamanho fixo</Badge>
                                <Badge variant="secondary">Conteúdo simples</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-blue-600" />
                                Modal Scrollable
                            </CardTitle>
                            <CardDescription>
                                Para conteúdo extenso com header e footer fixos. O conteúdo central possui scroll automático
                                quando necessário.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Badge variant="secondary">Header fixo</Badge>
                                <Badge variant="secondary">Footer fixo</Badge>
                                <Badge variant="secondary">Scroll no conteúdo</Badge>
                                <Badge variant="secondary">Tamanhos variados</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Exemplos de Modal Básico */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Modal Básico</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Confirmação com Hook */}
                    <div className="space-y-2">
                        <Button
                            variant="destructive"
                            className="w-full"
                            onClick={deleteConfirmModal.open}
                        >
                            <Trash className="mr-2 h-4 w-4" />
                            Excluir Item
                        </Button>
                        <deleteConfirmModal.ConfirmModal />
                    </div>

                    {/* Formulário com FormModal */}
                    <div className="space-y-2">
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={profileModal.open}
                        >
                            <Edit className="mr-2 h-4 w-4" />
                            Editar Perfil
                        </Button>

                        <FormModal
                            isOpen={profileModal.isOpen}
                            onClose={profileModal.close}
                            onSubmit={handleUserFormSubmit}
                            title="Editar Perfil"
                            description="Atualize suas informações pessoais"
                            loading={userFormLoading}
                            size="md"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input id="name" name="name" defaultValue="João Silva" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" defaultValue="joao@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone</Label>
                                    <Input id="phone" name="phone" defaultValue="(11) 99999-9999" />
                                </div>
                            </div>
                        </FormModal>
                    </div>

                    {/* Modal de Informação com InfoModal */}
                    <div className="space-y-2">
                        <Button
                            className="w-full"
                            onClick={basicModal.open}
                        >
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Ver Estatísticas
                        </Button>

                        <InfoModal
                            isOpen={basicModal.isOpen}
                            onClose={basicModal.close}
                            title="Estatísticas Rápidas"
                            description="Resumo da performance hoje"
                            size="md"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">247</div>
                                    <div className="text-sm text-blue-700">Vendas</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">R$ 12.5K</div>
                                    <div className="text-sm text-green-700">Receita</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600">89%</div>
                                    <div className="text-sm text-purple-700">Satisfação</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-lg">
                                    <div className="text-2xl font-bold text-orange-600">156</div>
                                    <div className="text-sm text-orange-700">Novos Clientes</div>
                                </div>
                            </div>
                        </InfoModal>
                    </div>
                </div>
            </section>

            {/* Exemplos de Modal Scrollable */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Modal Scrollable</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Relatório Extenso */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Relatório com Muito Conteúdo</CardTitle>
                            <CardDescription>
                                Exemplo de modal com header e footer fixos, conteúdo extenso com scroll
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                className="w-full mb-4"
                                onClick={reportModal.open}
                            >
                                Abrir Relatório Completo
                            </Button>

                            <InfoModal
                                isOpen={reportModal.isOpen}
                                onClose={reportModal.close}
                                title="Relatório de Vendas Q4 2024"
                                description="Análise completa de performance, métricas e insights estratégicos"
                                size="4xl"
                                scrollable={true}
                                closeText="Fechar"
                                actions={
                                    <>
                                        <Button variant="outline" onClick={() => console.log("Compartilhar relatório")}>
                                            <Share2 className="mr-2 h-4 w-4" />
                                            Compartilhar
                                        </Button>
                                        <Button onClick={() => console.log("Exportar PDF")}>
                                            <Download className="mr-2 h-4 w-4" />
                                            Exportar PDF
                                        </Button>
                                    </>
                                }
                            >
                                <div className="space-y-8">
                                    {/* Resumo Executivo */}
                                    <section className="space-y-4">
                                        <h3 className="text-xl font-semibold border-b pb-2">Resumo Executivo</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                            <div className="p-4 border rounded-lg text-center">
                                                <div className="text-2xl font-bold text-green-600">R$ 2.8M</div>
                                                <div className="text-sm text-muted-foreground">Receita Total</div>
                                            </div>
                                            <div className="p-4 border rounded-lg text-center">
                                                <div className="text-2xl font-bold text-blue-600">1,847</div>
                                                <div className="text-sm text-muted-foreground">Novos Clientes</div>
                                            </div>
                                            <div className="p-4 border rounded-lg text-center">
                                                <div className="text-2xl font-bold text-purple-600">94%</div>
                                                <div className="text-sm text-muted-foreground">Retenção</div>
                                            </div>
                                            <div className="p-4 border rounded-lg text-center">
                                                <div className="text-2xl font-bold text-orange-600">+47%</div>
                                                <div className="text-sm text-muted-foreground">Crescimento</div>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            O quarto trimestre de 2024 superou todas as expectativas, com crescimento de 47%
                                            comparado ao mesmo período do ano anterior. A estratégia de expansão para novos
                                            mercados mostrou resultados excepcionais, especialmente na região Nordeste.
                                        </p>
                                    </section>

                                    {/* Performance Mensal */}
                                    <section className="space-y-4">
                                        <h3 className="text-xl font-semibold border-b pb-2">Performance Mensal</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border">
                                                <thead>
                                                    <tr className="bg-muted">
                                                        <th className="border p-3 text-left">Mês</th>
                                                        <th className="border p-3 text-left">Vendas</th>
                                                        <th className="border p-3 text-left">Receita</th>
                                                        <th className="border p-3 text-left">Novos Clientes</th>
                                                        <th className="border p-3 text-left">Crescimento</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {[
                                                        { mes: 'Outubro', vendas: 287, receita: 'R$ 890K', clientes: 156, crescimento: '+42%' },
                                                        { mes: 'Novembro', vendas: 312, receita: 'R$ 965K', clientes: 189, crescimento: '+48%' },
                                                        { mes: 'Dezembro', vendas: 345, receita: 'R$ 1.1M', clientes: 234, crescimento: '+52%' }
                                                    ].map((row) => (
                                                        <tr key={row.mes}>
                                                            <td className="border p-3 font-medium">{row.mes}</td>
                                                            <td className="border p-3">{row.vendas}</td>
                                                            <td className="border p-3">{row.receita}</td>
                                                            <td className="border p-3">{row.clientes}</td>
                                                            <td className="border p-3 text-green-600 font-medium">{row.crescimento}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* Top Produtos */}
                                    <section className="space-y-4">
                                        <h3 className="text-xl font-semibold border-b pb-2">Top 10 Produtos</h3>
                                        <div className="space-y-3">
                                            {[
                                                { produto: 'Plano Enterprise Pro', vendas: 145, receita: 'R$ 725K' },
                                                { produto: 'Analytics Premium', vendas: 234, receita: 'R$ 468K' },
                                                { produto: 'Security Suite', vendas: 189, receita: 'R$ 378K' },
                                                { produto: 'API Gateway', vendas: 156, receita: 'R$ 234K' },
                                                { produto: 'Cloud Storage Plus', vendas: 267, receita: 'R$ 201K' },
                                                { produto: 'AI Assistant Pro', vendas: 98, receita: 'R$ 196K' },
                                                { produto: 'Backup Enterprise', vendas: 178, receita: 'R$ 142K' },
                                                { produto: 'Monitoring Suite', vendas: 134, receita: 'R$ 107K' },
                                                { produto: 'Integration Hub', vendas: 89, receita: 'R$ 89K' },
                                                { produto: 'Mobile SDK', vendas: 123, receita: 'R$ 74K' }
                                            ].map((item, index) => (
                                                <div key={item.produto} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                                            {index + 1}
                                                        </div>
                                                        <span className="font-medium">{item.produto}</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-semibold">{item.receita}</div>
                                                        <div className="text-sm text-muted-foreground">{item.vendas} vendas</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Análise Regional */}
                                    <section className="space-y-4">
                                        <h3 className="text-xl font-semibold border-b pb-2">Análise por Região</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { regiao: 'Sudeste', participacao: '48%', receita: 'R$ 1.34M', crescimento: '+45%', cor: 'blue' },
                                                { regiao: 'Sul', participacao: '28%', receita: 'R$ 784K', crescimento: '+41%', cor: 'green' },
                                                { regiao: 'Nordeste', participacao: '18%', receita: 'R$ 504K', crescimento: '+67%', cor: 'purple' },
                                                { regiao: 'Norte/Centro-Oeste', participacao: '6%', receita: 'R$ 168K', crescimento: '+52%', cor: 'orange' }
                                            ].map((regiao) => (
                                                <div key={regiao.regiao} className="p-4 border rounded-lg space-y-3">
                                                    <h4 className="font-semibold text-lg">{regiao.regiao}</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Participação:</span>
                                                            <span className="font-medium">{regiao.participacao}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Receita:</span>
                                                            <span className="font-medium">{regiao.receita}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Crescimento:</span>
                                                            <span className="font-medium text-green-600">{regiao.crescimento}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Insights e Recomendações */}
                                    <section className="space-y-4">
                                        <h3 className="text-xl font-semibold border-b pb-2">Insights e Recomendações</h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                                <h4 className="font-semibold text-green-800 mb-2">🎯 Pontos Fortes</h4>
                                                <ul className="text-sm text-green-700 space-y-1">
                                                    <li>• Crescimento excepcional no Nordeste (+67%)</li>
                                                    <li>• Alta retenção de clientes enterprise (94%)</li>
                                                    <li>• Produtos premium com margem crescente</li>
                                                    <li>• Performance consistente em todos os meses</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                                <h4 className="font-semibold text-blue-800 mb-2">💡 Oportunidades</h4>
                                                <ul className="text-sm text-blue-700 space-y-1">
                                                    <li>• Expandir agressivamente no Norte/Centro-Oeste</li>
                                                    <li>• Desenvolver produtos para mercado SMB</li>
                                                    <li>• Investir em automação de vendas</li>
                                                    <li>• Criar programa de parceiros regionais</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                                <h4 className="font-semibold text-orange-800 mb-2">⚠️ Pontos de Atenção</h4>
                                                <ul className="text-sm text-orange-700 space-y-1">
                                                    <li>• Dependência alta da região Sudeste</li>
                                                    <li>• Necessidade de diversificar portfolio</li>
                                                    <li>• Competição crescente em analytics</li>
                                                    <li>• Pressão por preços em produtos básicos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </InfoModal>
                        </CardContent>
                    </Card>

                    {/* Formulário Extenso */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Formulário Completo</CardTitle>
                            <CardDescription>
                                Formulário longo com múltiplas seções e scroll no conteúdo
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full mb-4"
                                onClick={formModal.open}
                            >
                                Cadastro Completo
                            </Button>

                            <ModalScrollable
                                open={formModal.isOpen}
                                onOpenChange={formModal.close}
                                title="Cadastro de Cliente Enterprise"
                                description="Complete todas as informações para criar uma conta enterprise"
                                size="2xl"
                            >
                                <ModalScrollableContent>
                                    <div className="space-y-8">
                                        {/* Informações Pessoais */}
                                        <section className="space-y-4">
                                            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
                                                <Users className="h-5 w-5" />
                                                Informações Pessoais
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="nome">Nome Completo *</Label>
                                                    <Input id="nome" placeholder="Digite seu nome completo" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email *</Label>
                                                    <Input id="email" type="email" placeholder="seu@email.com" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="telefone">Telefone *</Label>
                                                    <Input id="telefone" placeholder="(11) 99999-9999" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="cargo">Cargo *</Label>
                                                    <Input id="cargo" placeholder="CEO, CTO, Diretor..." />
                                                </div>
                                            </div>
                                        </section>

                                        {/* Informações da Empresa */}
                                        <section className="space-y-4">
                                            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
                                                <Building className="h-5 w-5" />
                                                Informações da Empresa
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="empresa">Nome da Empresa *</Label>
                                                    <Input id="empresa" placeholder="Nome da sua empresa" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="cnpj">CNPJ *</Label>
                                                    <Input id="cnpj" placeholder="00.000.000/0000-00" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="setor">Setor de Atuação *</Label>
                                                    <select className="w-full p-2 border border-border rounded-md">
                                                        <option>Selecione o setor</option>
                                                        <option>Tecnologia</option>
                                                        <option>Financeiro</option>
                                                        <option>Varejo</option>
                                                        <option>Saúde</option>
                                                        <option>Educação</option>
                                                        <option>Manufatura</option>
                                                        <option>Serviços</option>
                                                        <option>Outro</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="funcionarios">Número de Funcionários</Label>
                                                    <select className="w-full p-2 border border-border rounded-md">
                                                        <option>Selecione o tamanho</option>
                                                        <option>1-10</option>
                                                        <option>11-50</option>
                                                        <option>51-200</option>
                                                        <option>201-1000</option>
                                                        <option>1000+</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Endereço */}
                                        <section className="space-y-4">
                                            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
                                                <MapPin className="h-5 w-5" />
                                                Endereço da Empresa
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="cep">CEP *</Label>
                                                    <Input id="cep" placeholder="00000-000" />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <Label htmlFor="endereco">Endereço *</Label>
                                                    <Input id="endereco" placeholder="Rua, Avenida, número" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="cidade">Cidade *</Label>
                                                    <Input id="cidade" placeholder="São Paulo" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="estado">Estado *</Label>
                                                    <select className="w-full p-2 border border-border rounded-md">
                                                        <option>Selecione</option>
                                                        <option>SP</option>
                                                        <option>RJ</option>
                                                        <option>MG</option>
                                                        <option>RS</option>
                                                        <option>PR</option>
                                                        <option>SC</option>
                                                        <option>BA</option>
                                                        <option>GO</option>
                                                        <option>PE</option>
                                                        <option>CE</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="complemento">Complemento</Label>
                                                    <Input id="complemento" placeholder="Andar, sala, bloco" />
                                                </div>
                                            </div>
                                        </section>

                                        {/* Necessidades */}
                                        <section className="space-y-4">
                                            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
                                                <Star className="h-5 w-5" />
                                                Necessidades e Interesses
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="space-y-3">
                                                    <Label>Produtos de Interesse (múltipla escolha)</Label>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {[
                                                            'Plano Enterprise',
                                                            'Analytics Premium',
                                                            'Security Suite',
                                                            'API Gateway',
                                                            'Cloud Storage',
                                                            'AI Assistant',
                                                            'Backup Enterprise',
                                                            'Monitoring Suite',
                                                            'Integration Hub',
                                                            'Mobile SDK',
                                                            'Consultoria Técnica',
                                                            'Treinamento'
                                                        ].map((produto) => (
                                                            <div key={produto} className="flex items-center space-x-2">
                                                                <input type="checkbox" id={produto} className="rounded" />
                                                                <Label htmlFor={produto} className="text-sm cursor-pointer">
                                                                    {produto}
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="usuarios">Número estimado de usuários</Label>
                                                        <Input id="usuarios" type="number" placeholder="Ex: 50" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="orcamento">Orçamento mensal previsto</Label>
                                                        <select className="w-full p-2 border border-border rounded-md">
                                                            <option>Selecione a faixa</option>
                                                            <option>Até R$ 5.000</option>
                                                            <option>R$ 5.000 - R$ 15.000</option>
                                                            <option>R$ 15.000 - R$ 30.000</option>
                                                            <option>R$ 30.000 - R$ 50.000</option>
                                                            <option>Acima de R$ 50.000</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="observacoes">Necessidades Especiais e Observações</Label>
                                                    <textarea
                                                        id="observacoes"
                                                        className="w-full p-3 border border-border rounded-md min-h-[100px]"
                                                        placeholder="Descreva suas necessidades específicas, integrações necessárias, requisitos de compliance, etc."
                                                    />
                                                </div>
                                            </div>
                                        </section>

                                        {/* Contato Adicional */}
                                        <section className="space-y-4">
                                            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
                                                <Mail className="h-5 w-5" />
                                                Contatos Adicionais
                                            </h3>
                                            <div className="space-y-4">
                                                <p className="text-sm text-muted-foreground">
                                                    Adicione outros contatos importantes na empresa que devem receber informações sobre a conta.
                                                </p>
                                                {[1, 2].map((index) => (
                                                    <div key={index} className="p-4 border rounded-lg space-y-4">
                                                        <h4 className="font-medium">Contato {index}</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            <div className="space-y-2">
                                                                <Label htmlFor={`contato${index}_nome`}>Nome</Label>
                                                                <Input id={`contato${index}_nome`} placeholder="Nome completo" />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label htmlFor={`contato${index}_email`}>Email</Label>
                                                                <Input id={`contato${index}_email`} type="email" placeholder="email@empresa.com" />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label htmlFor={`contato${index}_cargo`}>Cargo</Label>
                                                                <Input id={`contato${index}_cargo`} placeholder="Função na empresa" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </ModalScrollableContent>
                                <ModalScrollableFooter>
                                    <Button variant="outline" onClick={formModal.close}>
                                        Salvar Rascunho
                                    </Button>
                                    <ModalActionButton
                                        onClick={() => handleEnterpriseFormSubmit({})}
                                        loading={enterpriseFormLoading}
                                    >
                                        Enviar Solicitação
                                    </ModalActionButton>
                                </ModalScrollableFooter>
                            </ModalScrollable>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Exemplos de Tamanhos */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Tamanhos Disponíveis</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                    {[
                        { size: 'sm', label: 'Small' },
                        { size: 'md', label: 'Medium' },
                        { size: 'lg', label: 'Large' },
                        { size: 'xl', label: 'X-Large' },
                        { size: '2xl', label: '2X-Large' },
                        { size: '3xl', label: '3X-Large' },
                        { size: '4xl', label: '4X-Large' },
                        { size: 'full', label: 'Full Width' }
                    ].map(({ size, label }) => (
                        <ModalScrollable
                            key={size}
                            title={`Modal ${label}`}
                            description={`Exemplo de modal no tamanho ${size}`}
                            size={size as any}
                            trigger={
                                <Button variant="outline" size="sm" className="w-full">
                                    {size.toUpperCase()}
                                </Button>
                            }
                        >
                            <ModalScrollableContent>
                                <div className="space-y-4">
                                    <p>Este é um modal no tamanho <strong>{size}</strong>.</p>
                                    <p>
                                        O conteúdo se adapta automaticamente ao tamanho escolhido,
                                        mantendo sempre o header e footer fixos quando há muito conteúdo.
                                    </p>
                                    <div className="p-4 bg-muted rounded-lg">
                                        <p className="text-sm text-muted-foreground">
                                            Tamanho: {label} ({size})
                                        </p>
                                    </div>
                                </div>
                            </ModalScrollableContent>
                            <ModalScrollableFooter>
                                <ModalCloseButton>Fechar</ModalCloseButton>
                            </ModalScrollableFooter>
                        </ModalScrollable>
                    ))}
                </div>
            </section>

            {/* Componentes Reutilizáveis */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Componentes Reutilizáveis</h2>
                <p className="text-muted-foreground">
                    Componentes pré-construídos para casos comuns com hooks personalizados para facilitar o gerenciamento de estado.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hook useModal</CardTitle>
                            <CardDescription>Gerenciamento simples de estado do modal</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ExampleWithUseModal />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Hook useConfirmModal</CardTitle>
                            <CardDescription>Modal de confirmação com loading automático</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ExampleWithConfirmModal />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>FormModal Reutilizável</CardTitle>
                            <CardDescription>Componente de formulário pré-configurado</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ExampleFormModal />
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Guia de Uso */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Como Usar</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Modal Básico - Exemplo de Código</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
                                {`<Modal 
  title="Título do Modal"
  description="Descrição opcional"
  trigger={<Button>Abrir Modal</Button>}
>
  <ModalContent>
    <p>Seu conteúdo aqui</p>
  </ModalContent>
  <ModalActions>
    <ModalCloseButton>Cancelar</ModalCloseButton>
    <Button>Confirmar</Button>
  </ModalActions>
</Modal>`}
                            </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Modal Scrollable - Exemplo de Código</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
                                {`<ModalScrollable
  title="Título do Modal"
  description="Descrição opcional"
  size="2xl"
  trigger={<Button>Abrir Modal</Button>}
>
  <ModalScrollableContent>
    {/* Conteúdo extenso com scroll */}
  </ModalScrollableContent>
  
  <ModalScrollableFooter>
    <ModalCloseButton>Fechar</ModalCloseButton>
    <Button>Ação Principal</Button>
  </ModalScrollableFooter>
</ModalScrollable>`}
                            </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Hook useModal - Exemplo de Código</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
                                {`const modal = useModal()

return (
  <>
    <Button onClick={modal.open}>
      Abrir Modal
    </Button>
    
    <Modal
      open={modal.isOpen}
      onOpenChange={modal.close}
      title="Título"
    >
      <ModalContent>
        Conteúdo
      </ModalContent>
      <ModalActions>
        <ModalCloseButton onClick={modal.close}>
          Fechar
        </ModalCloseButton>
      </ModalActions>
    </Modal>
  </>
)`}
                            </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Hook useConfirmModal - Exemplo de Código</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
                                {`const confirmModal = useConfirmModal({
  title: "Excluir item",
  description: "Esta ação não pode ser desfeita",
  confirmText: "Excluir",
  onConfirm: async () => {
    await deleteItem()
  }
})

return (
  <>
    <Button onClick={confirmModal.open}>
      Excluir
    </Button>
    <confirmModal.ConfirmModal />
  </>
)`}
                            </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>UnifiedModal - Exemplo de Código</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
                                {`// Modal básico
<UnifiedModal
  title="Modal Básico"
  variant="basic"
  trigger={<Button>Abrir</Button>}
>
  <ModalContent>Conteúdo</ModalContent>
</UnifiedModal>

// Modal com scroll
<UnifiedModal
  title="Modal com Scroll"
  variant="scrollable"
  size="2xl"
  trigger={<Button>Abrir</Button>}
>
  <ModalScrollableContent>
    Conteúdo extenso
  </ModalScrollableContent>
</UnifiedModal>`}
                            </pre>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default ModalsPage;
