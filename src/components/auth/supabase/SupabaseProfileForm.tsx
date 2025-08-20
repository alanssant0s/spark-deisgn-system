import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSupabaseAuthContext } from './SupabaseAuthProvider'
import { LoadingButton } from '../LoadingButton'
import { CheckCircle, Upload, User, Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const profileSchema = z.object({
    name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional(),
    location: z.string().optional(),
    bio: z.string().max(500, 'Bio deve ter no máximo 500 caracteres').optional(),
    avatar_url: z.string().url('URL inválida').optional().or(z.literal(''))
})

type ProfileFormData = z.infer<typeof profileSchema>

interface SupabaseProfileFormProps {
    onSuccess?: () => void
    onError?: (error: string) => void
    className?: string
}

export const SupabaseProfileForm = ({
    onSuccess,
    onError,
    className
}: SupabaseProfileFormProps) => {
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [isUploading, setIsUploading] = useState(false)

    const { user, updateProfile, isLoading } = useSupabaseAuthContext()

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isDirty }
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: user?.user_metadata?.name || user?.user_metadata?.full_name || '',
            email: user?.email || '',
            phone: user?.user_metadata?.phone || '',
            location: user?.user_metadata?.location || '',
            bio: user?.user_metadata?.bio || '',
            avatar_url: user?.user_metadata?.avatar_url || ''
        }
    })

    const avatarUrl = watch('avatar_url')
    const currentName = watch('name')

    const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        setIsUploading(true)
        setError(null)

        try {
            // Aqui você implementaria o upload para o Supabase Storage
            // Por enquanto, vamos simular um upload
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Simula URL do avatar
            const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${file.name}`
            setValue('avatar_url', avatarUrl, { shouldDirty: true })

            setSuccess('Avatar atualizado com sucesso!')
        } catch (error) {
            setError('Erro ao fazer upload do avatar. Tente novamente.')
        } finally {
            setIsUploading(false)
        }
    }

    const onSubmit = async (data: ProfileFormData) => {
        setError(null)
        setSuccess(null)

        const { error } = await updateProfile({
            name: data.name,
            avatar_url: data.avatar_url
        })

        if (error) {
            setError('Erro ao atualizar perfil. Tente novamente.')
            onError?.(error.message)
        } else {
            setSuccess('Perfil atualizado com sucesso!')
            onSuccess?.()
        }
    }

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <Card className={className}>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Perfil</CardTitle>
                <CardDescription>
                    Atualize suas informações pessoais
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {success && (
                        <Alert>
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>
                    )}

                    {/* Avatar Section */}
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={avatarUrl} alt={currentName} />
                            <AvatarFallback className="text-lg">
                                {getInitials(currentName)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <Label htmlFor="avatar" className="text-sm font-medium">
                                Foto do Perfil
                            </Label>
                            <div className="flex items-center space-x-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    disabled={isUploading}
                                    onClick={() => document.getElementById('avatar')?.click()}
                                >
                                    <Upload className="h-4 w-4 mr-2" />
                                    {isUploading ? 'Fazendo upload...' : 'Alterar foto'}
                                </Button>
                                <input
                                    id="avatar"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAvatarUpload}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="name"
                                placeholder="Seu nome completo"
                                className="pl-10"
                                {...register('name')}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                className="pl-10"
                                disabled
                                {...register('email')}
                            />
                        </div>
                        <p className="text-xs text-muted-foreground">
                            O email não pode ser alterado
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="(11) 99999-9999"
                                className="pl-10"
                                {...register('phone')}
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <Label htmlFor="location">Localização</Label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="location"
                                placeholder="Cidade, Estado"
                                className="pl-10"
                                {...register('location')}
                            />
                        </div>
                        {errors.location && (
                            <p className="text-sm text-destructive">{errors.location.message}</p>
                        )}
                    </div>

                    {/* Bio */}
                    <div className="space-y-2">
                        <Label htmlFor="bio">Biografia</Label>
                        <Textarea
                            id="bio"
                            placeholder="Conte um pouco sobre você..."
                            className="min-h-[100px]"
                            {...register('bio')}
                        />
                        {errors.bio && (
                            <p className="text-sm text-destructive">{errors.bio.message}</p>
                        )}
                    </div>

                    {/* Account Info */}
                    <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-medium text-sm">Informações da Conta</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Membro desde:</span>
                                <span>{new Date(user?.created_at || '').toLocaleDateString('pt-BR')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Email verificado:</span>
                                <span className={user?.email_confirmed_at ? 'text-green-600' : 'text-red-600'}>
                                    {user?.email_confirmed_at ? 'Sim' : 'Não'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <LoadingButton
                        type="submit"
                        className="w-full"
                        loading={isLoading}
                        disabled={isLoading || !isDirty}
                    >
                        Salvar Alterações
                    </LoadingButton>
                </form>
            </CardContent>
        </Card>
    )
}
