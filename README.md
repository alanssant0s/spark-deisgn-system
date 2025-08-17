# ⚡ Spark Design System

Um design system profissional e moderno construído com React, TypeScript, Tailwind CSS e Shadcn/ui. Spark oferece uma base sólida para desenvolvimento de aplicações SaaS com componentes reutilizáveis e tokens de design semânticos.

## ✨ Características

- 🎨 **Design Tokens Semânticos** - Sistema de cores e estilos consistente
- 🌙 **Modo Escuro/Claro** - Suporte completo a temas
- 📱 **Totalmente Responsivo** - Design adaptável para todos os dispositivos
- ⚡ **Performance Otimizada** - Construído com Vite e React 18
- 🔧 **TypeScript** - Tipagem completa para melhor DX
- 🎯 **Componentes Prontos** - Biblioteca completa de UI components
- 📊 **Gráficos e Métricas** - Componentes para dashboards
- 🔔 **Sistema de Notificações** - Toast e centro de notificações
- 📅 **Date Picker** - Seletor de datas com localização pt-BR
- 📋 **Tabelas Avançadas** - TableCard com filtros e ações

## 🛠️ Stack Tecnológica

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Notifications**: Sonner + Custom Toast System

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [seu-repositório]
cd spark-design-system
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Shadcn/ui)
│   ├── layouts/        # Layouts da aplicação
│   ├── notifications/  # Sistema de notificações
│   └── saas/          # Componentes específicos SaaS
├── contexts/           # Context providers
├── hooks/             # Custom hooks
├── lib/              # Utilitários e configurações
├── pages/            # Páginas da aplicação
│   └── components/   # Páginas de demonstração de componentes
└── assets/           # Recursos estáticos
```

## 🎨 Design System

### Tokens de Design

O Spark utiliza tokens semânticos definidos em `src/index.css`:

- **Cores**: Primary, Secondary, Accent, Background, Foreground
- **Gradientes**: Gradientes predefinidos para efeitos visuais
- **Sombras**: Sistema de sombras consistente
- **Tipografia**: Hierarquia tipográfica clara
- **Espaçamento**: Grid system baseado em Tailwind

### Componentes Disponíveis

#### Layout & Navegação
- `VerticalLayout` - Layout com sidebar vertical
- `HorizontalLayout` - Layout com navegação horizontal
- `SaasLayout` - Layout específico para dashboards SaaS

#### UI Components
- `Button` - Botões com múltiplas variantes
- `Card` - Cards para organização de conteúdo
- `TableCard` - Cards especializados para tabelas
- `Badge` - Indicadores de status
- `Avatar` - Componente de avatar com fallback
- `Input` - Campos de entrada customizáveis
- `Select` - Seletores dropdown
- `Dialog` - Modais e dialogs
- `Toast` - Notificações temporárias

#### Componentes Avançados
- `NotificationCenter` - Centro de notificações
- `DatePicker` - Seletor de datas localizado
- `Charts` - Gráficos usando Recharts
- `MetricCard` - Cards para métricas e KPIs
- `StatusBadge` - Badges de status customizáveis

## 📱 Layouts Disponíveis

### Vertical Layout
Layout com sidebar fixa à esquerda, ideal para dashboards administrativos.

### Horizontal Layout
Layout com navegação horizontal no topo, ideal para aplicações com menos itens de menu.

### SaaS Layout
Layout otimizado para aplicações SaaS com navegação hierárquica e seções organizadas.

## 🔔 Sistema de Notificações

O Spark inclui um sistema completo de notificações:

- **Toast Notifications**: Notificações temporárias com tipos (success, error, warning, info)
- **Notification Center**: Centro persistente de notificações com contadores
- **Custom Actions**: Suporte a ações customizadas nas notificações

## 📅 Date Picker

Componente de seleção de datas com:

- Localização pt-BR
- Seleção única, múltipla e por intervalo
- Integração com React Hook Form
- Validação com Zod
- Restrições de datas
- Modo inline disponível

## 📊 Gráficos e Métricas

Componentes para visualização de dados:

- **Line Charts**: Gráficos de linha
- **Bar Charts**: Gráficos de barras
- **Area Charts**: Gráficos de área
- **Pie Charts**: Gráficos de pizza
- **Metric Cards**: Cards para exibição de KPIs

## 🎯 Páginas de Demonstração

- `/` - Landing page do design system
- `/design-system` - Tokens e cores
- `/components` - Galeria de componentes
- `/components/buttons` - Demonstração de botões
- `/components/cards` - Demonstração de cards
- `/components/forms` - Demonstração de formulários
- `/components/charts` - Demonstração de gráficos
- `/components/dialogs` - Demonstração de dialogs
- `/components/tables` - Demonstração de tabelas
- `/components/datepicker` - Demonstração do date picker
- `/notifications` - Centro de notificações
- `/users` - Gestão de usuários
- `/metrics` - Dashboard de métricas

## 🔧 Customização

### Cores e Temas

Edite o arquivo `src/index.css` para customizar as cores do tema:

```css
:root {
  --primary: [sua-cor-primária];
  --secondary: [sua-cor-secundária];
  /* ... outros tokens */
}
```

### Componentes

Todos os componentes Shadcn/ui podem ser customizados editando os arquivos em `src/components/ui/`.

### Layouts

Crie novos layouts estendendo os componentes existentes em `src/components/layouts/`.

## 📚 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói a aplicação para produção
- `npm run build:dev` - Constrói em modo de desenvolvimento
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🌟 Créditos

Construído com:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vite](https://vitejs.dev/)

---

⚡ **Spark Design System** - Criando interfaces modernas e consistentes