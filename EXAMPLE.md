# Exemplos de Uso - Spark Design System

## 🚀 Instalação Rápida

```bash
npm install spark-design-system
```

## 🎨 Configuração Básica

### 1. Importe os Estilos

```tsx
// Em seu arquivo principal (main.tsx, App.tsx, ou index.tsx)
import 'spark-design-system/dist/style.css';
```

### 2. Configure o Tailwind (Opcional)

Se você usar Tailwind em seu projeto, adicione ao `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/spark-design-system/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // ... resto da configuração
}
```

## 📝 Exemplos Práticos

### Formulário de Login

```tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Separator
} from 'spark-design-system';

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>
            Digite suas credenciais para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full">
            Entrar
          </Button>
          <Separator />
          <Button variant="outline" className="w-full">
            Criar conta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
```

### Dashboard com Métricas

```tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Progress,
  Avatar,
  AvatarFallback,
  AvatarImage
} from 'spark-design-system';

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vendas Totais
            </CardTitle>
            <Badge variant="default">+20%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Usuários Ativos
            </CardTitle>
            <Badge variant="secondary">+12%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.350</div>
            <p className="text-xs text-muted-foreground">
              +180 novos usuários
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conversão
            </CardTitle>
            <Badge variant="outline">3.2%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <Progress value={32} className="mt-2" />
          </CardContent>
        </Card>
      </div>
      
      {/* Lista de Usuários */}
      <Card>
        <CardHeader>
          <CardTitle>Usuários Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/user${i}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Usuário {i}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    usuario{i}@exemplo.com
                  </p>
                </div>
                <Badge variant={i === 1 ? "default" : "secondary"}>
                  {i === 1 ? "Ativo" : "Inativo"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```



### Formulário com Validação

```tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch
} from 'spark-design-system';

function ContactForm() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Formulário de Contato</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nome</Label>
            <Input id="firstName" placeholder="João" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" placeholder="Silva" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="joao@exemplo.com" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um assunto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="support">Suporte</SelectItem>
              <SelectItem value="sales">Vendas</SelectItem>
              <SelectItem value="billing">Faturamento</SelectItem>
            </SelectContent>
          </Select>
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
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            placeholder="Digite sua mensagem aqui..."
            rows={4}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">
            Quero receber atualizações por email
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch id="notifications" />
          <Label htmlFor="notifications">
            Receber notificações push
          </Label>
        </div>
        
        <Button className="w-full">
          Enviar Mensagem
        </Button>
      </CardContent>
    </Card>
  );
}
```

## 🎨 Customização de Tema

### Cores Personalizadas

```css
/* Em seu CSS global */
:root {
  --primary: 210 40% 50%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  /* ... outras variáveis */
}

.dark {
  --primary: 210 40% 90%;
  --primary-foreground: 210 40% 20%;
  /* ... outras variáveis para modo escuro */
}
```

### Componentes Customizados

```tsx
import { Button, cn } from 'spark-design-system';

// Botão customizado
const CustomButton = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-purple-500 to-pink-500",
        "hover:from-purple-600 hover:to-pink-600",
        className
      )}
      {...props}
    />
  );
};
```

## 🔧 Hooks Úteis

### useToast

```tsx
import { useToast, Button } from 'spark-design-system';

function ToastExample() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Sucesso!",
          description: "Operação realizada com sucesso.",
        });
      }}
    >
      Mostrar Toast
    </Button>
  );
}
```

### useIsMobile

```tsx
import { useIsMobile } from 'spark-design-system';

function ResponsiveComponent() {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <p>Visualização mobile</p>
      ) : (
        <p>Visualização desktop</p>
      )}
    </div>
  );
}
```

## 📚 Componentes Disponíveis

- ✅ **Button** - Botões com múltiplas variantes
- ✅ **Card** - Containers para conteúdo
- ✅ **Input** - Campos de entrada
- ✅ **Label** - Rótulos para formulários
- ✅ **Badge** - Indicadores de status
- ✅ **Avatar** - Fotos de perfil
- ✅ **Skeleton** - Placeholders de carregamento
- ✅ **Separator** - Divisores visuais
- ✅ **Progress** - Barras de progresso
- ✅ **Form** - Componentes de formulário
- ✅ **Checkbox** - Caixas de seleção
- ✅ **RadioGroup** - Grupos de opções
- ✅ **Select** - Seletores dropdown
- ✅ **Switch** - Interruptores
- ✅ **Slider** - Controles deslizantes
- ✅ **Textarea** - Áreas de texto
- ✅ **Accordion** - Conteúdo expansível
- ✅ **Tabs** - Abas de navegação
- ✅ **Table** - Tabelas de dados

- ✅ **Sheet** - Painéis laterais
- ✅ **Popover** - Pop-ups contextuais
- ✅ **Tooltip** - Dicas de ferramentas
- ✅ **DropdownMenu** - Menus suspensos
- ✅ **Breadcrumb** - Navegação hierárquica
- ✅ **Toast** - Notificações
- ✅ **Alert** - Alertas e avisos

E muito mais! Consulte a documentação completa para ver todos os componentes disponíveis.
