# Exemplo de Uso Modular - Spark Design System

## Estrutura Melhorada

A biblioteca agora está estruturada de forma modular, permitindo:

- ✅ **Tree-shaking** - Importar apenas os componentes necessários
- ✅ **Bundles menores** - Cada componente em arquivo separado
- ✅ **Melhor performance** - Carregamento sob demanda
- ✅ **Flexibilidade** - Importação individual ou completa

## Formas de Importação

### 1. Importação Completa (Recomendado para projetos pequenos)

```jsx
import { Button, Card, Input, Label } from '@alanssant0s/spark-ds';
import '@alanssant0s/spark-ds/styles';
```

### 2. Importação Individual (Recomendado para projetos grandes)

```jsx
// Importar apenas os componentes necessários
import { Button } from '@alanssant0s/spark-ds/button';
import { Card, CardContent, CardHeader, CardTitle } from '@alanssant0s/spark-ds/card';
import { Input } from '@alanssant0s/spark-ds/input';
import { Label } from '@alanssant0s/spark-ds/label';
import { useToast } from '@alanssant0s/spark-ds/toast';
import { cn } from '@alanssant0s/spark-ds/utils';

// Importar estilos
import '@alanssant0s/spark-ds/styles';
```

### 3. Importação de Componentes Específicos

```jsx
// Componentes de formulário
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@alanssant0s/spark-ds/form';
import { Checkbox } from '@alanssant0s/spark-ds/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@alanssant0s/spark-ds/select';

// Componentes de layout
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@alanssant0s/spark-ds/tabs';

// Componentes de notificação
import { Toast, ToastProvider } from '@alanssant0s/spark-ds/toast';
import { Alert, AlertDescription, AlertTitle } from '@alanssant0s/spark-ds/alert';
```

## Exemplos Práticos

### Exemplo 1: Formulário de Login

```jsx
import { Button } from '@alanssant0s/spark-ds/button';
import { Card, CardContent, CardHeader, CardTitle } from '@alanssant0s/spark-ds/card';
import { Input } from '@alanssant0s/spark-ds/input';
import { Label } from '@alanssant0s/spark-ds/label';
import { useToast } from '@alanssant0s/spark-ds/toast';

function LoginForm() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Login realizado!",
      description: "Bem-vindo ao sistema.",
    });
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

### Exemplo 2: Dashboard com Múltiplos Componentes

```jsx
import { Card, CardContent, CardHeader, CardTitle } from '@alanssant0s/spark-ds/card';
import { Badge } from '@alanssant0s/spark-ds/badge';
import { Button } from '@alanssant0s/spark-ds/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@alanssant0s/spark-ds/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@alanssant0s/spark-ds/table';


function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Usuários Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <Badge variant="success">+12%</Badge>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,678</div>
            <Badge variant="success">+8%</Badge>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <Badge variant="warning">-3%</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Tabs com dados */}
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>João Silva</TableCell>
                <TableCell>joao@email.com</TableCell>
                <TableCell><Badge variant="success">Ativo</Badge></TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Editar</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
```

### Exemplo 3: Formulário Avançado

```jsx
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@alanssant0s/spark-ds/form';
import { Input } from '@alanssant0s/spark-ds/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@alanssant0s/spark-ds/select';
import { Checkbox } from '@alanssant0s/spark-ds/checkbox';
import { Button } from '@alanssant0s/spark-ds/button';
import { Card, CardContent, CardHeader, CardTitle } from '@alanssant0s/spark-ds/card';

function AdvancedForm() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Cadastro de Usuário</CardTitle>
      </CardHeader>
      <CardContent>
        <Form>
          <div className="grid grid-cols-2 gap-4">
            <FormField name="firstName">
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Digite seu nome" />
                <FormMessage />
              </FormItem>
            </FormField>
            
            <FormField name="lastName">
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <Input placeholder="Digite seu sobrenome" />
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          
          <FormField name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="seu@email.com" />
              <FormMessage />
            </FormItem>
          </FormField>
          
          <FormField name="role">
            <FormItem>
              <FormLabel>Cargo</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um cargo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="user">Usuário</SelectItem>
                  <SelectItem value="manager">Gerente</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          </FormField>
          
          <FormField name="terms">
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <Checkbox id="terms" />
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="terms">
                  Aceito os termos e condições
                </FormLabel>
              </div>
            </FormItem>
          </FormField>
          
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
}
```

## Vantagens da Nova Estrutura

### 1. **Tree-shaking Otimizado**
```jsx
// Apenas o Button será incluído no bundle final
import { Button } from '@alanssant0s/spark-ds/button';
```

### 2. **Bundles Menores**
- Cada componente em arquivo separado
- Dependências compartilhadas otimizadas
- Carregamento sob demanda

### 3. **Melhor Performance**
- Menos código JavaScript carregado
- Parsing mais rápido
- Menor tempo de carregamento

### 4. **Flexibilidade**
- Importação individual ou completa
- Fácil atualização de componentes específicos
- Melhor controle de dependências

## Configuração do Bundle Analyzer

Para verificar o impacto do tree-shaking:

```bash
# Instalar bundle analyzer
npm install -D webpack-bundle-analyzer

# Analisar o bundle
npm run build
npx webpack-bundle-analyzer dist/stats.json
```

## Comparação de Tamanhos

### Antes (Bundle único)
- `index.esm.js`: ~57MB (todos os componentes)

### Depois (Modular)
- `button.esm.js`: ~1.7KB
- `card.esm.js`: ~1.5KB
- `input.esm.js`: ~794B
- `index.esm.js`: ~14KB (apenas re-exports)

**Resultado**: Redução significativa no tamanho do bundle quando apenas alguns componentes são usados!
