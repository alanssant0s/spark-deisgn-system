import React, { useState } from 'react';
import {
    // Importar da biblioteca local
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Badge,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Skeleton,
    Separator,
    Progress,
    Checkbox,
    RadioGroup,
    RadioGroupItem,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Switch,
    Slider,
    Textarea,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Toast,
    Toaster,
    Alert,
    AlertDescription,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    useToast,
    useIsMobile
} from '../lib/index';

const LibraryPlayground = () => {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(33);
    const [switchValue, setSwitchValue] = useState(false);
    const [sliderValue, setSliderValue] = useState([50]);
    const { toast } = useToast();
    const isMobile = useIsMobile();

    const handleToast = () => {
        toast({
            title: "Teste de Toast",
            description: "Este é um teste do componente Toast da biblioteca!",
        });
    };

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Spark Design System</h1>
                    <p className="text-lg text-muted-foreground">
                        Playground para testar os componentes da biblioteca
                    </p>
                    <Badge variant={isMobile ? "destructive" : "default"}>
                        {isMobile ? "Mobile" : "Desktop"}
                    </Badge>
                </div>

                <Separator />

                {/* Buttons Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Buttons</CardTitle>
                        <CardDescription>
                            Diferentes variantes e tamanhos de botões
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Button onClick={() => setCount(count + 1)}>
                                Default ({count})
                            </Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size="icon">🚀</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Form Components */}
                <Card>
                    <CardHeader>
                        <CardTitle>Form Components</CardTitle>
                        <CardDescription>
                            Componentes para formulários e entrada de dados
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="seu@email.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="select">Categoria</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione uma categoria" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tech">Tecnologia</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="business">Negócios</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" placeholder="Digite sua mensagem..." />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Aceito os termos e condições</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Switch
                                    checked={switchValue}
                                    onCheckedChange={setSwitchValue}
                                />
                                <Label>Receber notificações ({switchValue ? 'Ativo' : 'Inativo'})</Label>
                            </div>

                            <div className="space-y-2">
                                <Label>Prioridade</Label>
                                <RadioGroup defaultValue="medium">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="low" id="low" />
                                        <Label htmlFor="low">Baixa</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="medium" id="medium" />
                                        <Label htmlFor="medium">Média</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="high" id="high" />
                                        <Label htmlFor="high">Alta</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-2">
                                <Label>Volume: {sliderValue[0]}%</Label>
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Display Components */}
                <Card>
                    <CardHeader>
                        <CardTitle>Display Components</CardTitle>
                        <CardDescription>
                            Componentes para exibição de informações
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>

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

                        <div className="space-y-2">
                            <Label>Progress: {progress}%</Label>
                            <Progress value={progress} />
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    onClick={() => setProgress(Math.max(0, progress - 10))}
                                >
                                    -10%
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => setProgress(Math.min(100, progress + 10))}
                                >
                                    +10%
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Loading Skeletons</Label>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[150px]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Layout Components */}
                <Card>
                    <CardHeader>
                        <CardTitle>Layout Components</CardTitle>
                        <CardDescription>
                            Componentes para organização de conteúdo
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="accordion" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="accordion">Accordion</TabsTrigger>
                                <TabsTrigger value="tabs">Tabs Example</TabsTrigger>
                            </TabsList>
                            <TabsContent value="accordion" className="mt-4">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Como usar a biblioteca?</AccordionTrigger>
                                        <AccordionContent>
                                            Instale com npm install spark-design-system e importe os componentes necessários.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Suporte ao TypeScript?</AccordionTrigger>
                                        <AccordionContent>
                                            Sim, a biblioteca inclui definições TypeScript completas.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Customização de temas?</AccordionTrigger>
                                        <AccordionContent>
                                            Você pode customizar as cores através de variáveis CSS.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>
                            <TabsContent value="tabs" className="mt-4">
                                <div className="space-y-4">
                                    <p>Este é um exemplo de como as tabs funcionam na biblioteca.</p>
                                    <p>Você pode ter qualquer conteúdo dentro das tabs.</p>
                                    <Button onClick={handleToast}>Testar Toast</Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Dialog Components */}
                <Card>
                    <CardHeader>
                        <CardTitle>Dialog & Alert Components</CardTitle>
                        <CardDescription>
                            Componentes para modais e alertas
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Alert>
                            <AlertDescription>
                                Este é um alerta informativo da biblioteca Spark Design System.
                            </AlertDescription>
                        </Alert>

                        <div className="flex flex-wrap gap-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Abrir Dialog</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Exemplo de Dialog</DialogTitle>
                                        <DialogDescription>
                                            Este é um exemplo de como usar o componente Dialog da biblioteca.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="py-4">
                                        <p>Conteúdo do dialog aqui...</p>
                                    </div>
                                    <DialogFooter>
                                        <Button>Confirmar</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive">Alert Dialog</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Esta ação não pode ser desfeita. Isso excluirá permanentemente os dados.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction>Continuar</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            <Button onClick={handleToast}>
                                Mostrar Toast
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center text-sm text-muted-foreground">
                            <p>Spark Design System - Biblioteca de Componentes React</p>
                            <p>Testando {isMobile ? 'no mobile' : 'no desktop'}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Toaster />
        </div>
    );
};

export default LibraryPlayground;
