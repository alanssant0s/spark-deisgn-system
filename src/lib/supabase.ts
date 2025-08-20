import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
})

// Tipos para o usuário do Supabase
export interface SupabaseUser {
    id: string
    email?: string
    phone?: string
    app_metadata: {
        provider?: string
        providers?: string[]
    }
    user_metadata: {
        name?: string
        avatar_url?: string
        full_name?: string
    }
    aud: string
    created_at: string
    updated_at?: string
    email_confirmed_at?: string
    phone_confirmed_at?: string
    last_sign_in_at?: string
    role?: string
}

// Tipos para sessão do Supabase
export interface SupabaseSession {
    access_token: string
    refresh_token: string
    expires_in: number
    expires_at?: number
    token_type: string
    user: SupabaseUser
}
