// Provider e Context
export { SupabaseAuthProvider, useSupabaseAuthContext } from './SupabaseAuthProvider'

// Componentes de Formulário
export { SupabaseLoginForm } from './SupabaseLoginForm'
export { SupabaseRegisterForm } from './SupabaseRegisterForm'
export { SupabasePasswordReset } from './SupabasePasswordReset'
export { SupabaseProfileForm } from './SupabaseProfileForm'

// Componentes de Proteção e UI
export { SupabaseAuthGuard, useAuthGuard } from './SupabaseAuthGuard'
export { SupabaseUserMenu, SupabaseUserMenuSimple } from './SupabaseUserMenu'

// Hook principal
export { useSupabaseAuth } from '@/hooks/useSupabaseAuth'

// Tipos
export type { AuthState, AuthActions } from '@/hooks/useSupabaseAuth'
export type { SupabaseUser, SupabaseSession } from '@/lib/supabase'
