import React, { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Badge,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Progress,
    Separator,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '../lib/index';

// Componente para mostrar código
const CodeBlock = ({ children, title }: { children: string; title: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{title}</h4>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={copyToClipboard}
                >
                    {copied ? "Copiado!" : "Copiar"}
                </Button>
            </div>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{children}</code>
            </pre>
        </div>
    );
};

// Componente para demonstrar um componente
const ComponentDemo = ({
    title,
    description,
    component,
    code
}: {
    title: string;
    description: string;
    component: React.ReactNode;
    code: string;
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-6 border rounded-lg bg-background">
                    {component}
                </div>
                <CodeBlock title="Código" children={code} />
            </CardContent>
        </Card>
    );
};

const ComponentShowcase = () => {
    const [progress, setProgress] = useState(65);

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Component Showcase</h1>
                    <p className="text-lg text-muted-foreground">
                        Documentação visual e exemplos de código dos componentes
                    </p>
                </div>

                <Separator />

                <Tabs defaultValue="buttons" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="buttons">Buttons</TabsTrigger>
                        <TabsTrigger value="forms">Forms</TabsTrigger>
                        <TabsTrigger value="display">Display</TabsTrigger>
                        <TabsTrigger value="feedback">Feedback</TabsTrigger>
                    </TabsList>

                    {/* Buttons Tab */}
                    <TabsContent value="buttons" className="space-y-6">
                        <ComponentDemo
                            title="Button Variants"
                            description="Diferentes estilos de botões disponíveis"
                            component={
                                <div className="flex flex-wrap gap-2">
                                    <Button>Default</Button>
                                    <Button variant="destructive">Destructive</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                            }
                            code={`import { Button } from '@alansantos/spark-design-system';

<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                        />

                        <ComponentDemo
                            title="Button Sizes"
                            description="Diferentes tamanhos de botões"
                            component={
                                <div className="flex items-center gap-2">
                                    <Button size="sm">Small</Button>
                                    <Button size="default">Default</Button>
                                    <Button size="lg">Large</Button>
                                    <Button size="icon">🚀</Button>
                                </div>
                            }
                            code={`import { Button } from '@alansantos/spark-design-system';

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>`}
                        />
                    </TabsContent>

                    {/* Forms Tab */}
                    <TabsContent value="forms" className="space-y-6">
                        <ComponentDemo
                            title="Input Fields"
                            description="Campos de entrada com labels"
                            component={
                                <div className="space-y-4 max-w-md">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="seu@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Senha</Label>
                                        <Input id="password" type="password" placeholder="••••••••" />
                                    </div>
                                </div>
                            }
                            code={`import { Input, Label } from '@alansantos/spark-design-system';

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="seu@email.com" />
</div>`}
                        />

                        <ComponentDemo
                            title="Form Card"
                            description="Exemplo de formulário completo"
                            component={
                                <Card className="max-w-md">
                                    <CardHeader>
                                        <CardTitle>Login</CardTitle>
                                        <CardDescription>
                                            Entre com suas credenciais
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="demo-email">Email</Label>
                                            <Input id="demo-email" type="email" placeholder="seu@email.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="demo-password">Senha</Label>
                                            <Input id="demo-password" type="password" placeholder="••••••••" />
                                        </div>
                                        <Button className="w-full">Entrar</Button>
                                    </CardContent>
                                </Card>
                            }
                            code={`import { Card, CardContent, CardHeader, CardTitle, CardDescription, Input, Label, Button } from '@alansantos/spark-design-system';

<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Entre com suas credenciais</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="seu@email.com" />
    </div>
    <Button className="w-full">Entrar</Button>
  </CardContent>
</Card>`}
                        />
                    </TabsContent>

                    {/* Display Tab */}
                    <TabsContent value="display" className="space-y-6">
                        <ComponentDemo
                            title="Badges"
                            description="Indicadores de status e categorias"
                            component={
                                <div className="flex flex-wrap gap-2">
                                    <Badge>Default</Badge>
                                    <Badge variant="secondary">Secondary</Badge>
                                    <Badge variant="destructive">Destructive</Badge>
                                    <Badge variant="outline">Outline</Badge>
                                </div>
                            }
                            code={`import { Badge } from '@alansantos/spark-design-system';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
                        />

                        <ComponentDemo
                            title="Avatar"
                            description="Componente para fotos de perfil"
                            component={
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">John Doe</p>
                                        <p className="text-xs text-muted-foreground">john@example.com</p>
                                    </div>
                                </div>
                            }
                            code={`import { Avatar, AvatarImage, AvatarFallback } from '@alansantos/spark-design-system';

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                        />

                        <ComponentDemo
                            title="Progress"
                            description="Barra de progresso interativa"
                            component={
                                <div className="space-y-4 max-w-md">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Progresso</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => setProgress(Math.max(0, progress - 10))}
                                        >
                                            -10%
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => setProgress(Math.min(100, progress + 10))}
                                        >
                                            +10%
                                        </Button>
                                    </div>
                                </div>
                            }
                            code={`import { Progress } from '@alansantos/spark-design-system';

const [progress, setProgress] = useState(65);

<Progress value={progress} />`}
                        />
                    </TabsContent>

                    {/* Feedback Tab */}
                    <TabsContent value="feedback" className="space-y-6">
                        <ComponentDemo
                            title="Cards"
                            description="Containers para organizar conteúdo"
                            component={
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Card Simples</CardTitle>
                                            <CardDescription>
                                                Descrição do card
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                Conteúdo do card aqui.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Card com Métricas</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">1,234</div>
                                            <p className="text-xs text-muted-foreground">
                                                +20% em relação ao mês passado
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            }
                            code={`import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@alansantos/spark-design-system';

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card aqui.</p>
  </CardContent>
</Card>`}
                        />
                    </TabsContent>
                </Tabs>

                {/* Instruções de Instalação */}
                <Card>
                    <CardHeader>
                        <CardTitle>Como Usar</CardTitle>
                        <CardDescription>
                            Instruções para instalar e usar a biblioteca
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-medium mb-2">1. Instalação</h4>
                            <CodeBlock title="" children="npm install @alansantos/spark-design-system" />
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">2. Importar Estilos</h4>
                            <CodeBlock title="" children={`import '@alansantos/spark-design-system/dist/style.css';`} />
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">3. Usar Componentes</h4>
                            <CodeBlock
                                title=""
                                children={`import { Button, Card, Input } from '@alansantos/spark-design-system';

function App() {
  return (
    <Card>
      <Input placeholder="Digite algo..." />
      <Button>Clique aqui</Button>
    </Card>
  );
}`}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ComponentShowcase;
