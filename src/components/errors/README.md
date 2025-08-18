# Error Pages Componentization

Este diretório contém um sistema modular e reutilizável para páginas de erro, projetado para maximizar a reutilização de código e facilitar a manutenção.

## Arquitetura

### Componentes Base

#### `BaseErrorPage`
Componente principal que fornece a estrutura base para todas as páginas de erro.

**Props:**
- `errorCode`: Código do erro (ex: "404", "500")
- `title`: Título da página
- `description`: Descrição do erro
- `icon`: Ícone principal (ReactNode)
- `colorScheme`: Esquema de cores personalizado
- `actions`: Ações personalizadas (botões)
- `children`: Conteúdo customizado
- `suggestions`: Sugestões de navegação
- `technicalInfo`: Informações técnicas

#### `ErrorAlert`
Componente para exibir alertas de status com variantes de cor.

**Props:**
- `icon`: Ícone do alerta
- `title`: Título do alerta
- `description`: Descrição do alerta
- `variant`: Variante de cor ("default", "destructive", "warning", "info")
- `className`: Classes CSS adicionais

#### `TroubleshootingSteps`
Lista numerada de passos para resolução de problemas.

**Props:**
- `title`: Título da seção
- `steps`: Array de passos com título, descrição e ícone opcional
- `className`: Classes CSS adicionais

#### `TechnicalDetails`
Seção expansível para detalhes técnicos.

**Props:**
- `title`: Título da seção (opcional)
- `details`: Objeto com informações técnicas
- `className`: Classes CSS adicionais

#### `MaintenancePage`
Componente especializado para páginas de manutenção com funcionalidades específicas.

**Props:**
- `title`: Título da manutenção
- `description`: Descrição da manutenção
- `estimatedTime`: Tempo estimado (horas, minutos, segundos)
- `progress`: Progresso atual (0-100)
- `tasks`: Lista de tarefas em andamento
- `improvements`: Lista de melhorias
- `contactInfo`: Informações de contato

## Configurações Pré-definidas

### `errorConfigs`
Configurações prontas para uso para diferentes tipos de erro:

- `notFound()`: Configuração para erro 404
- `serverError()`: Configuração para erro 500
- `forbidden()`: Configuração para erro 403
- `unauthorized()`: Configuração para erro 401
- `badRequest()`: Configuração para erro 400
- `gatewayTimeout()`: Configuração para erro 504

### `commonSuggestions`
Sugestões de navegação comuns:
- `dashboard`: Link para o dashboard
- `components`: Link para componentes
- `support`: Link para suporte
- `profile`: Link para perfil

### `colorSchemes`
Esquemas de cores pré-definidos:
- `blue`, `red`, `amber`, `orange`, `purple`, `indigo`

## Como Usar

### 1. Página Simples (404)
```tsx
import { BaseErrorPage, errorConfigs } from "@/components/errors";

const NotFound = () => {
  const errorPageProps = errorConfigs.notFound();
  return <BaseErrorPage {...errorPageProps} />;
};
```

### 2. Página com Conteúdo Customizado (500)
```tsx
import { BaseErrorPage, ErrorAlert, TroubleshootingSteps, TechnicalDetails, errorConfigs } from "@/components/errors";
import { RefreshCw, Server, Bug } from "lucide-react";

const ServerError = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    window.location.reload();
  };

  const errorPageProps = {
    ...errorConfigs.serverError(),
    actions: {
      primary: {
        label: "Tentar Novamente",
        onClick: handleRefresh,
        icon: <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
      }
    },
    children: (
      <>
        <ErrorAlert
          icon={<Bug className="h-4 w-4" />}
          title="Status:"
          description="Estamos investigando este problema."
          variant="destructive"
        />
        <TroubleshootingSteps
          title="O que você pode fazer:"
          steps={[
            { step: "1", title: "Aguarde alguns minutos", description: "O problema pode ser temporário." },
            { step: "2", title: "Atualize a página", description: "Pressione Ctrl+F5 para recarregar." }
          ]}
        />
        <TechnicalDetails details={{
          "Error ID": `500-${Date.now().toString().slice(-8)}`,
          "Timestamp": new Date().toISOString(),
          "URL": window.location.href
        }} />
      </>
    )
  };

  return <BaseErrorPage {...errorPageProps} />;
};
```

### 3. Página Especializada (Maintenance)
```tsx
import { MaintenancePage } from "@/components/errors";

const Maintenance = () => {
  return (
    <MaintenancePage
      title="Manutenção Programada"
      description="Estamos realizando melhorias em nossos sistemas."
      estimatedTime={{ hours: 2, minutes: 15, seconds: 30 }}
      progress={65}
      tasks={[
        { task: "Atualização do banco", status: "completed", time: "14:30" },
        { task: "Migração de servidores", status: "in-progress", time: "15:45" }
      ]}
      improvements={[
        "Performance 40% mais rápida",
        "Novos recursos de gráficos",
        "Segurança aprimorada"
      ]}
      contactInfo={{
        twitter: "https://twitter.com/status",
        statusPage: "https://status.example.com",
        supportEmail: "support@example.com"
      }}
    />
  );
};
```

## Benefícios

1. **Reutilização**: Componentes compartilhados reduzem duplicação de código
2. **Consistência**: Design visual consistente em todas as páginas de erro
3. **Manutenibilidade**: Mudanças centralizadas afetam todas as páginas
4. **Flexibilidade**: Fácil customização através de props e children
5. **Configurabilidade**: Configurações pré-definidas para uso rápido
6. **Tipagem**: TypeScript completo para melhor DX

## Estrutura de Arquivos

```
src/components/errors/
├── BaseErrorPage.tsx          # Componente base
├── ErrorAlert.tsx            # Componente de alerta
├── TroubleshootingSteps.tsx  # Lista de passos
├── TechnicalDetails.tsx      # Detalhes técnicos
├── MaintenancePage.tsx       # Página de manutenção
├── errorConfigs.ts           # Configurações pré-definidas
├── index.ts                  # Exports
└── README.md                 # Documentação
```

## Exemplos de Uso

Veja os exemplos implementados em:
- `src/pages/errors/NotFound.tsx` - Página 404 simples
- `src/pages/errors/ServerError.tsx` - Página 500 com conteúdo customizado
- `src/pages/errors/Forbidden.tsx` - Página 403 com conteúdo complexo
- `src/pages/errors/Maintenance.tsx` - Página de manutenção especializada
- `src/pages/errors/Unauthorized.tsx` - Página 401 usando configuração pré-definida
