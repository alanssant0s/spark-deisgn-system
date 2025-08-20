import { useState, useEffect, useCallback } from 'react'
import { supabase, SupabaseUser, SupabaseSession } from '@/lib/supabase'
import { AuthError } from '@supabase/supabase-js'

export interface AuthState {
    user: SupabaseUser | null
    session: SupabaseSession | null
    isLoading: boolean
    isAuthenticated: boolean
}

export interface AuthActions {
    signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
    signUp: (email: string, password: string, metadata?: { name?: string }) => Promise<{ error: AuthError | null }>
    signOut: () => Promise<{ error: AuthError | null }>
    resetPassword: (email: string) => Promise<{ error: AuthError | null }>
    updatePassword: (password: string) => Promise<{ error: AuthError | null }>
    updateProfile: (updates: { name?: string; avatar_url?: string }) => Promise<{ error: AuthError | null }>
    signInWithProvider: (provider: 'google' | 'github' | 'discord') => Promise<{ error: AuthError | null }>
}

export const useSupabaseAuth = (): AuthState & AuthActions => {
    const [user, setUser] = useState<SupabaseUser | null>(null)
    const [session, setSession] = useState<SupabaseSession | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const isAuthenticated = !!user

    // Função para obter dados do usuário
    const getUser = useCallback(async () => {
        try {
            const { data: { user }, error } = await supabase.auth.getUser()
            if (error) throw error
            return user
        } catch (error) {
            console.error('Error getting user:', error)
            return null
        }
    }, [])

    // Função para obter sessão atual
    const getSession = useCallback(async () => {
        try {
            const { data: { session }, error } = await supabase.auth.getSession()
            if (error) throw error
            return session
        } catch (error) {
            console.error('Error getting session:', error)
            return null
        }
    }, [])

    // Inicializar estado de autenticação
    useEffect(() => {
        const initializeAuth = async () => {
            setIsLoading(true)

            const [currentUser, currentSession] = await Promise.all([
                getUser(),
                getSession()
            ])

            setUser(currentUser)
            setSession(currentSession)
            setIsLoading(false)
        }

        initializeAuth()

        // Escutar mudanças de autenticação
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
                setIsLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [getUser, getSession])

    // Sign In
    const signIn = useCallback(async (email: string, password: string) => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Sign Up
    const signUp = useCallback(async (email: string, password: string, metadata?: { name?: string }) => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: metadata
                }
            })
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Sign Out
    const signOut = useCallback(async () => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signOut()
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Reset Password
    const resetPassword = useCallback(async (email: string) => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/reset-password`
            })
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Update Password
    const updatePassword = useCallback(async (password: string) => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.updateUser({
                password
            })
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Update Profile
    const updateProfile = useCallback(async (updates: { name?: string; avatar_url?: string }) => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.updateUser({
                data: updates
            })
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Sign In with Provider
    const signInWithProvider = useCallback(async (provider: 'google' | 'github' | 'discord') => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`
                }
            })
            return { error }
        } catch (error) {
            return { error: error as AuthError }
        } finally {
            setIsLoading(false)
        }
    }, [])

    return {
        user,
        session,
        isLoading,
        isAuthenticated,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updatePassword,
        updateProfile,
        signInWithProvider
    }
}
