# Exemplo de Uso - Spark Design System

## Instalação

```bash
npm install @alanssant0s/spark-ds
```

## Importação dos Componentes

### Importação Básica

```jsx
import { Button, Card, Input, Label } from '@alanssant0s/spark-ds';
import '@alanssant0s/spark-ds/dist/style.css';

function App() {
  return (
    <div className="p-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com suas credenciais</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full">Entrar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

### Importação de Hooks

```jsx
import { useToast, toast } from '@alanssant0s/spark-ds';

function MyComponent() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Sucesso!",
      description: "Operação realizada com sucesso.",
    });
  };

  return (
    <Button onClick={handleClick}>
      Mostrar Toast
    </Button>
  );
}
```

### Importação de Contextos

```jsx
import { AuthProvider, useAuth } from '@alanssant0s/spark-ds';

function App() {
  return (
    <AuthProvider>
      <MyAuthenticatedComponent />
    </AuthProvider>
  );
}

function MyAuthenticatedComponent() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}!</p>
          <Button onClick={logout}>Sair</Button>
        </div>
      ) : (
        <Button onClick={() => login({ email: 'test@example.com', password: '123' })}>
          Entrar
        </Button>
      )}
    </div>
  );
}
```

### Importação de Componentes Avançados

```jsx
import { 
  AdvancedFormField, 
  FormSection, 
  PaymentForm,
  NotificationCenter 
} from '@alanssant0s/spark-ds';

function AdvancedForm() {
  return (
    <div className="space-y-6">
      <FormSection title="Informações Pessoais">
        <AdvancedFormField
          name="name"
          label="Nome Completo"
          placeholder="Digite seu nome"
          validation={{ required: true, minLength: 2 }}
        />
      </FormSection>
      
      <PaymentForm />
      
      <NotificationCenter />
    </div>
  );
}
```

## Configuração do Tailwind CSS

Certifique-se de que seu projeto tenha o Tailwind CSS configurado:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@alanssant0s/spark-ds/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Componentes Disponíveis

### Core UI Components
- `Button`, `Card`, `Input`, `Label`, `Badge`, `Avatar`, `Skeleton`, `Separator`, `Progress`
- `AspectRatio`, `Toggle`, `ToggleGroup`

### Form Components
- `Form`, `Checkbox`, `RadioGroup`, `Select`, `Switch`, `Slider`, `Textarea`, `InputOTP`

### Layout Components
- `Accordion`, `Tabs`, `Table`, `Collapsible`, `ResizableHandle`, `ScrollArea`

### Overlay Components
- `Dialog`, `Sheet`, `Popover`, `Tooltip`, `HoverCard`, `Drawer`

### Navigation Components
- `DropdownMenu`, `Breadcrumb`, `NavigationMenu`, `Menubar`, `Command`, `ContextMenu`

### Notification Components
- `Toast`, `Toaster`, `Alert`, `AlertDialog`

### Date Components
- `Calendar`, `DatePicker`, `DateRangePicker`

### Data Display Components
- `Carousel`, `Pagination`

### Hooks
- `useToast`, `useIsMobile`

### Contexts
- `AuthProvider`, `LayoutProvider`, `NotificationProvider`

### Auth Components
- `AuthField`, `AuthLayout`, `LoadingButton`, `PasswordStrength`, `SocialLogin`

### Form Components (Advanced)
- `CheckboxGroup`, `FormActions`, `AdvancedFormField`, `FormSection`, `MaskedInput`
- `PaymentForm`, `RadioGroupField`, `RegistrationForm`, `SwitchGroup`, `ValidatedFormField`

### Layout Components (Advanced)
- `LayoutProviderComponent`, `LayoutSettings`

### Notification Components (Advanced)
- `NotificationCenter`, `NotificationToast`

### SaaS Components
- `FeatureCard`, `MetricCard`, `StatCard`, `StatusBadge`

### Error Components
- `BaseErrorPage`, `ErrorAlert`, `TroubleshootingSteps`, `TechnicalDetails`, `MaintenancePage`

### Utility Components
- `LogoProcessor`

## Suporte

Para suporte e documentação completa, visite o repositório do projeto.
