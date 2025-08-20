import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { useSupabaseAuthContext } from './SupabaseAuthProvider'
import {
    User,
    Settings,
    LogOut,
    Shield,
    Mail,
    Calendar,
    ChevronDown,
    CheckCircle,
    XCircle
} from 'lucide-react'

interface SupabaseUserMenuProps {
    showUserInfo?: boolean
    showSettings?: boolean
    onLogout?: () => void
    onProfileClick?: () => void
    onSettingsClick?: () => void
    className?: string
}

export const SupabaseUserMenu = ({
    showUserInfo = true,
    showSettings = true,
    onLogout,
    onProfileClick,
    onSettingsClick,
    className
}: SupabaseUserMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, signOut, isLoading } = useSupabaseAuthContext()

    if (!user) {
        return null
    }

    const handleLogout = async () => {
        const { error } = await signOut()
        if (!error) {
            onLogout?.()
        }
    }

    const getUserName = () => {
        return user.user_metadata?.name ||
            user.user_metadata?.full_name ||
            user.email?.split('@')[0] ||
            'Usuário'
    }

    const getUserInitials = () => {
        const name = getUserName()
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    const getProviderIcon = () => {
        const provider = user.app_metadata?.provider
        switch (provider) {
            case 'google':
                return '🔍'
            case 'github':
                return '🐙'
            case 'discord':
                return '🎮'
            default:
                return null
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className={`relative h-10 w-10 rounded-full ${className}`}
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src={user.user_metadata?.avatar_url}
                            alt={getUserName()}
                        />
                        <AvatarFallback className="text-sm">
                            {getUserInitials()}
                        </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end" forceMount>
                {showUserInfo && (
                    <>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src={user.user_metadata?.avatar_url}
                                            alt={getUserName()}
                                        />
                                        <AvatarFallback className="text-xs">
                                            {getUserInitials()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {getUserName()}
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                    {getProviderIcon() && (
                                        <span className="text-lg">{getProviderIcon()}</span>
                                    )}
                                </div>

                                <div className="flex items-center space-x-2 pt-2">
                                    <Badge variant="outline" className="text-xs">
                                        {user.role || 'user'}
                                    </Badge>
                                    <Badge
                                        variant={user.email_confirmed_at ? "default" : "secondary"}
                                        className="text-xs"
                                    >
                                        {user.email_confirmed_at ? (
                                            <>
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                Verificado
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Não verificado
                                            </>
                                        )}
                                    </Badge>
                                </div>

                                <div className="flex items-center space-x-4 pt-2 text-xs text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>Membro desde {formatDate(user.created_at)}</span>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                    </>
                )}

                <DropdownMenuItem onClick={onProfileClick}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                </DropdownMenuItem>

                {showSettings && (
                    <DropdownMenuItem onClick={onSettingsClick}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Configurações</span>
                    </DropdownMenuItem>
                )}

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={handleLogout}
                    disabled={isLoading}
                    className="text-red-600 focus:text-red-600"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{isLoading ? 'Saindo...' : 'Sair'}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

// Componente simplificado para header
export const SupabaseUserMenuSimple = ({
    onLogout,
    className
}: {
    onLogout?: () => void
    className?: string
}) => {
    const { user, signOut, isLoading } = useSupabaseAuthContext()

    if (!user) {
        return null
    }

    const handleLogout = async () => {
        const { error } = await signOut()
        if (!error) {
            onLogout?.()
        }
    }

    const getUserName = () => {
        return user.user_metadata?.name ||
            user.user_metadata?.full_name ||
            user.email?.split('@')[0] ||
            'Usuário'
    }

    const getUserInitials = () => {
        const name = getUserName()
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`relative h-8 w-8 rounded-full ${className}`}>
                    <Avatar className="h-6 w-6">
                        <AvatarImage
                            src={user.user_metadata?.avatar_url}
                            alt={getUserName()}
                        />
                        <AvatarFallback className="text-xs">
                            {getUserInitials()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{getUserName()}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleLogout}
                    disabled={isLoading}
                    className="text-red-600 focus:text-red-600"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{isLoading ? 'Saindo...' : 'Sair'}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
