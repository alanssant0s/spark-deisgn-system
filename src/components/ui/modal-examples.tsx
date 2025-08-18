import React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import {
    Modal,
    ModalScrollable,
    UnifiedModal,
    ModalContent,
    ModalActions,
    ModalScrollableContent,
    ModalScrollableFooter,
    ModalCloseButton,
    ModalActionButton,
    useModal,
    useConfirmModal,
    SIZE_CLASSES
} from "./modal"
import { cn } from "@/lib/utils"

// ============================================================================
// EXEMPLOS DE COMPONENTES DE MODAL REUTILIZÁVEIS
// ============================================================================

// Componente de confirmação reutilizável
interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title?: string
    description?: string
    confirmText?: string
    cancelText?: string
    variant?: "default" | "destructive"
    loading?: boolean
}

export const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirmar ação",
    description = "Tem certeza que deseja continuar?",
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    variant = "default",
    loading = false
}: ConfirmationModalProps) => (
    <Modal
        open={isOpen}
        onOpenChange={onClose}
        title={title}
        description={description}
    >
        <ModalActions>
            <ModalCloseButton onClick={onClose}>
                {cancelText}
            </ModalCloseButton>
            <ModalActionButton
                onClick={onConfirm}
                variant={variant}
                loading={loading}
            >
                {confirmText}
            </ModalActionButton>
        </ModalActions>
    </Modal>
)

// Componente de formulário reutilizável
interface FormModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: Record<string, any>) => void
    title: string
    description?: string
    children: React.ReactNode
    submitText?: string
    cancelText?: string
    loading?: boolean
    size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const FormModal = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    description,
    children,
    submitText = "Salvar",
    cancelText = "Cancelar",
    loading = false,
    size = "md"
}: FormModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        onSubmit(data)
    }

    return (
        <ModalScrollable
            open={isOpen}
            onOpenChange={onClose}
            title={title}
            description={description}
            size={size}
        >
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <ModalScrollableContent>
                    {children}
                </ModalScrollableContent>
                <ModalScrollableFooter>
                    <ModalCloseButton onClick={onClose}>
                        {cancelText}
                    </ModalCloseButton>
                    <ModalActionButton
                        type="submit"
                        loading={loading}
                    >
                        {submitText}
                    </ModalActionButton>
                </ModalScrollableFooter>
            </form>
        </ModalScrollable>
    )
}

// Componente de informações reutilizável
interface InfoModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description?: string
    children: React.ReactNode
    closeText?: string
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
    scrollable?: boolean
    actions?: React.ReactNode
}

export const InfoModal = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    closeText = "Fechar",
    size = "lg",
    scrollable = false,
    actions
}: InfoModalProps) => {
    if (scrollable) {
        return (
            <ModalScrollable
                open={isOpen}
                onOpenChange={onClose}
                title={title}
                description={description}
                size={size}
            >
                <ModalScrollableContent>
                    {children}
                </ModalScrollableContent>
                <ModalScrollableFooter>
                    <ModalCloseButton onClick={onClose}>
                        {closeText}
                    </ModalCloseButton>
                    {actions}
                </ModalScrollableFooter>
            </ModalScrollable>
        )
    }

    return (
        <Modal
            open={isOpen}
            onOpenChange={onClose}
            title={title}
            description={description}
            className={cn(SIZE_CLASSES[size])}
        >
            <ModalContent>
                {children}
            </ModalContent>
            <ModalActions>
                <ModalCloseButton onClick={onClose}>
                    {closeText}
                </ModalCloseButton>
                {actions}
            </ModalActions>
        </Modal>
    )
}

// ============================================================================
// EXEMPLOS DE USO DOS HOOKS
// ============================================================================

// Exemplo usando useModal
export const ExampleWithUseModal = () => {
    const modal = useModal()

    return (
        <>
            <Button onClick={modal.open}>
                Abrir Modal
            </Button>

            <Modal
                open={modal.isOpen}
                onOpenChange={modal.close}
                title="Exemplo com Hook"
                description="Este modal usa o hook useModal"
            >
                <ModalContent>
                    <p>Conteúdo do modal gerenciado pelo hook useModal.</p>
                </ModalContent>
                <ModalActions>
                    <ModalCloseButton onClick={modal.close}>
                        Fechar
                    </ModalCloseButton>
                </ModalActions>
            </Modal>
        </>
    )
}

// Exemplo usando useConfirmModal
export const ExampleWithConfirmModal = () => {
    const confirmModal = useConfirmModal({
        title: "Excluir item",
        description: "Esta ação não pode ser desfeita. Tem certeza?",
        confirmText: "Excluir",
        cancelText: "Cancelar",
        onConfirm: async () => {
            // Simula uma operação assíncrona
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log("Item excluído!")
        }
    })

    return (
        <>
            <Button onClick={confirmModal.open} variant="destructive">
                Excluir Item
            </Button>

            <confirmModal.ConfirmModal />
        </>
    )
}

// Exemplo de formulário reutilizável
export const ExampleFormModal = () => {
    const modal = useModal()
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (data: Record<string, any>) => {
        setLoading(true)
        try {
            // Simula envio
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log("Dados enviados:", data)
            modal.close()
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Button onClick={modal.open}>
                Novo Usuário
            </Button>

            <FormModal
                isOpen={modal.isOpen}
                onClose={modal.close}
                onSubmit={handleSubmit}
                title="Criar Usuário"
                description="Preencha os dados do novo usuário"
                loading={loading}
                size="lg"
            >
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Função</Label>
                        <select name="role" className="w-full p-2 border rounded">
                            <option value="user">Usuário</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
            </FormModal>
        </>
    )
}
