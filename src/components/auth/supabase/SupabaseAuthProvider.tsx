import { createContext, useContext, ReactNode } from 'react'
import { useSupabaseAuth, AuthState, AuthActions } from '@/hooks/useSupabaseAuth'

interface SupabaseAuthContextType extends AuthState, AuthActions { }

const SupabaseAuthContext = createContext<SupabaseAuthContextType | undefined>(undefined)

interface SupabaseAuthProviderProps {
    children: ReactNode
}

export const SupabaseAuthProvider = ({ children }: SupabaseAuthProviderProps) => {
    const auth = useSupabaseAuth()

    return (
        <SupabaseAuthContext.Provider value={auth}>
            {children}
        </SupabaseAuthContext.Provider>
    )
}

export const useSupabaseAuthContext = () => {
    const context = useContext(SupabaseAuthContext)
    if (context === undefined) {
        throw new Error('useSupabaseAuthContext must be used within a SupabaseAuthProvider')
    }
    return context
}
