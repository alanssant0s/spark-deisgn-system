# 🔐 Autenticação com Supabase

Este módulo fornece componentes completos de autenticação integrados com o Supabase para o Spark Design System.

## 📦 Instalação

### 1. Dependências

```bash
npm install @supabase/supabase-js @supabase/ssr
```

### 2. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do seu projeto:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

## 🚀 Configuração Básica

### 1. Configurar o Provider

```tsx
import { SupabaseAuthProvider } from '@alanssant0s/spark-ds/auth/supabase'

function App() {
  return (
    <SupabaseAuthProvider>
      {/* Sua aplicação aqui */}
    </SupabaseAuthProvider>
  )
}
```

### 2. Configurar Rotas de Autenticação

```tsx
import { 
  SupabaseLoginForm, 
  SupabaseRegisterForm, 
  SupabasePasswordReset 
} from '@alanssant0s/spark-ds/auth/supabase'

// Página de Login
function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SupabaseLoginForm 
        onSuccess={() => navigate('/dashboard')}
        onError={(error) => console.error(error)}
      />
    </div>
  )
}

// Página de Registro
function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SupabaseRegisterForm 
        onSuccess={() => navigate('/login')}
        onError={(error) => console.error(error)}
      />
    </div>
  )
}

// Página de Reset de Senha
function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SupabasePasswordReset 
        onSuccess={() => navigate('/login')}
        onError={(error) => console.error(error)}
      />
    </div>
  )
}
```

## 🛡️ Proteção de Rotas

### 1. Proteção Básica

```tsx
import { SupabaseAuthGuard } from '@alanssant0s/spark-ds/auth/supabase'

function ProtectedPage() {
  return (
    <SupabaseAuthGuard>
      <div>Conteúdo protegido</div>
    </SupabaseAuthGuard>
  )
}
```

### 2. Proteção com Verificação de Email

```tsx
<SupabaseAuthGuard requireEmailVerification={true}>
  <div>Conteúdo que requer email verificado</div>
</SupabaseAuthGuard>
```

### 3. Proteção com Role Específica

```tsx
<SupabaseAuthGuard requiredRole="admin">
  <div>Conteúdo apenas para administradores</div>
</SupabaseAuthGuard>
```

### 4. Hook de Verificação de Permissões

```tsx
import { useAuthGuard } from '@alanssant0s/spark-ds/auth/supabase'

function MyComponent() {
  const { hasRole, hasAnyRole, isEmailVerified } = useAuthGuard()

  return (
    <div>
      {hasRole('admin') && <AdminPanel />}
      {hasAnyRole(['admin', 'moderator']) && <ModeratorPanel />}
      {isEmailVerified() && <VerifiedContent />}
    </div>
  )
}
```

## 👤 Menu do Usuário

### 1. Menu Completo

```tsx
import { SupabaseUserMenu } from '@alanssant0s/spark-ds/auth/supabase'

function Header() {
  return (
    <header>
      <SupabaseUserMenu 
        onProfileClick={() => navigate('/profile')}
        onSettingsClick={() => navigate('/settings')}
        onLogout={() => navigate('/login')}
      />
    </header>
  )
}
```

### 2. Menu Simplificado

```tsx
import { SupabaseUserMenuSimple } from '@alanssant0s/spark-ds/auth/supabase'

function Header() {
  return (
    <header>
      <SupabaseUserMenuSimple onLogout={() => navigate('/login')} />
    </header>
  )
}
```

## 📝 Formulário de Perfil

```tsx
import { SupabaseProfileForm } from '@alanssant0s/spark-ds/auth/supabase'

function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <SupabaseProfileForm 
        onSuccess={() => toast.success('Perfil atualizado!')}
        onError={(error) => toast.error(error)}
      />
    </div>
  )
}
```

## 🔧 Hook Personalizado

```tsx
import { useSupabaseAuth } from '@alanssant0s/spark-ds/auth/supabase'

function MyComponent() {
  const { 
    user, 
    isAuthenticated, 
    isLoading,
    signIn,
    signUp,
    signOut,
    updateProfile 
  } = useSupabaseAuth()

  const handleLogin = async () => {
    const { error } = await signIn('user@example.com', 'password')
    if (error) {
      console.error('Erro no login:', error.message)
    }
  }

  return (
    <div>
      {isLoading ? (
        <div>Carregando...</div>
      ) : isAuthenticated ? (
        <div>Bem-vindo, {user?.user_metadata?.name}!</div>
      ) : (
        <button onClick={handleLogin}>Fazer Login</button>
      )}
    </div>
  )
}
```

## 🎨 Personalização

### 1. Estilização dos Componentes

Todos os componentes aceitam a prop `className` para personalização:

```tsx
<SupabaseLoginForm className="max-w-sm mx-auto" />
<SupabaseUserMenu className="ml-auto" />
```

### 2. Configuração de Callbacks

```tsx
<SupabaseLoginForm 
  onSuccess={() => {
    // Redirecionar após login
    navigate('/dashboard')
    // Mostrar toast de sucesso
    toast.success('Login realizado com sucesso!')
  }}
  onError={(error) => {
    // Mostrar erro personalizado
    toast.error(`Erro no login: ${error}`)
  }}
  showSocialLogin={false} // Desabilitar login social
/>
```

## 🔐 Configuração do Supabase

### 1. Configurar Provedores OAuth

No dashboard do Supabase, vá para **Authentication > Providers** e configure:

- **Google**
- **GitHub** 
- **Discord**

### 2. Configurar URLs de Redirecionamento

Adicione as seguintes URLs em **Authentication > URL Configuration**:

```
http://localhost:3000/auth/callback
https://seu-dominio.com/auth/callback
```

### 3. Configurar Templates de Email

Personalize os templates de email em **Authentication > Email Templates**:

- **Confirm signup**
- **Reset password**
- **Change email address**

## 📱 Exemplo Completo de Aplicação

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SupabaseAuthProvider, SupabaseAuthGuard } from '@alanssant0s/spark-ds/auth/supabase'

function App() {
  return (
    <SupabaseAuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          
          {/* Rotas protegidas */}
          <Route path="/dashboard" element={
            <SupabaseAuthGuard>
              <DashboardPage />
            </SupabaseAuthGuard>
          } />
          
          <Route path="/admin" element={
            <SupabaseAuthGuard requiredRole="admin">
              <AdminPage />
            </SupabaseAuthGuard>
          } />
          
          <Route path="/profile" element={
            <SupabaseAuthGuard requireEmailVerification={true}>
              <ProfilePage />
            </SupabaseAuthGuard>
          } />
        </Routes>
      </BrowserRouter>
    </SupabaseAuthProvider>
  )
}
```

## 🐛 Troubleshooting

### Erro: "Missing Supabase environment variables"

Verifique se as variáveis de ambiente estão configuradas corretamente:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Erro: "Invalid login credentials"

- Verifique se o usuário existe no Supabase
- Confirme se o email foi verificado (se necessário)
- Verifique se a senha está correta

### Erro: "User already registered"

- O usuário já existe no sistema
- Use a funcionalidade de reset de senha se necessário

## 📚 API Reference

### SupabaseAuthProvider

Provider principal que gerencia o estado de autenticação.

### SupabaseLoginForm

Formulário de login com validação e suporte a login social.

**Props:**
- `onSuccess?: () => void`
- `onError?: (error: string) => void`
- `showSocialLogin?: boolean`
- `className?: string`

### SupabaseRegisterForm

Formulário de registro com validação de senha e termos.

**Props:**
- `onSuccess?: () => void`
- `onError?: (error: string) => void`
- `showSocialLogin?: boolean`
- `requireEmailConfirmation?: boolean`
- `className?: string`

### SupabaseAuthGuard

Componente para proteger rotas e verificar permissões.

**Props:**
- `children: ReactNode`
- `fallback?: ReactNode`
- `requireEmailVerification?: boolean`
- `requiredRole?: string`
- `showLoginPrompt?: boolean`

### useSupabaseAuth

Hook principal para gerenciar autenticação.

**Retorna:**
- `user: SupabaseUser | null`
- `session: SupabaseSession | null`
- `isLoading: boolean`
- `isAuthenticated: boolean`
- `signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>`
- `signUp: (email: string, password: string, metadata?: { name?: string }) => Promise<{ error: AuthError | null }>`
- `signOut: () => Promise<{ error: AuthError | null }>`
- `updateProfile: (updates: { name?: string; avatar_url?: string }) => Promise<{ error: AuthError | null }>`
- `signInWithProvider: (provider: 'google' | 'github' | 'discord') => Promise<{ error: AuthError | null }>`
