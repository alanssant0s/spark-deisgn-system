import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "./dialog"
import { Button } from "./button"
import { cn } from "@/lib/utils"

// ============================================================================
// TIPOS COMPARTILHADOS
// ============================================================================

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full"

interface BaseModalProps {
    children: React.ReactNode
    trigger?: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
    title?: string
    description?: string
    className?: string
}

interface ModalHeaderProps {
    title?: string
    description?: string
    children?: React.ReactNode
    className?: string
}

interface ModalBodyProps {
    children: React.ReactNode
    className?: string
    scrollable?: boolean
}

interface ModalFooterProps {
    children: React.ReactNode
    className?: string
}

// ============================================================================
// CONSTANTES E UTILITÁRIOS
// ============================================================================

const SIZE_CLASSES: Record<ModalSize, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    full: "max-w-[95vw]"
}

// ============================================================================
// COMPONENTES COMPARTILHADOS
// ============================================================================

const ModalHeaderComponent = ({ title, description, children, className }: ModalHeaderProps) => {
    if (!title && !description && !children) return null

    return (
        <DialogHeader className={cn("flex-shrink-0", className)}>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
            {children}
        </DialogHeader>
    )
}
ModalHeaderComponent.displayName = "DialogHeader"

const ModalBodyComponent = ({ children, className, scrollable = false }: ModalBodyProps) => {
    const baseClasses = scrollable
        ? "flex-1 overflow-y-auto p-6 min-h-0"
        : "p-6"

    return (
        <div className={cn(baseClasses, className)}>
            {children}
        </div>
    )
}
ModalBodyComponent.displayName = "DialogBody"

const ModalFooterComponent = ({ children, className }: ModalFooterProps) => {
    return (
        <div className={cn(
            "flex-shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-6 pt-4 pb-6",
            className
        )}>
            {children}
        </div>
    )
}
ModalFooterComponent.displayName = "DialogFooter"

// ============================================================================
// COMPONENTE BASE UNIFICADO
// ============================================================================

interface UnifiedModalProps extends BaseModalProps {
    size?: ModalSize
    scrollable?: boolean
    variant?: "basic" | "scrollable"
}

const UnifiedModal = ({
    children,
    trigger,
    open,
    onOpenChange,
    title,
    description,
    className,
    size = "lg",
    scrollable = false,
    variant = "basic"
}: UnifiedModalProps) => {
    const isScrollable = variant === "scrollable" || scrollable
    const modalSize = variant === "basic" ? "md" : size

    const contentClasses = cn(
        SIZE_CLASSES[modalSize],
        isScrollable ? "max-h-[90vh] flex flex-col p-0" : "p-0",
        className
    )

    const headerClasses = isScrollable ? "px-6 pt-6 pb-4 border-b" : "px-6 pt-6 pb-4"

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className={contentClasses}>
                <ModalHeaderComponent
                    title={title}
                    description={description}
                    className={headerClasses}
                />

                {isScrollable ? (
                    // Para modals scrollable, renderizamos children diretamente
                    // O footer deve estar fora da área de scroll
                    children
                ) : (
                    children
                )}
            </DialogContent>
        </Dialog>
    )
}

// ============================================================================
// MODAL BÁSICO - Wrapper para compatibilidade
// ============================================================================

interface ModalProps extends BaseModalProps { }

const Modal = (props: ModalProps) => {
    return <UnifiedModal {...props} variant="basic" />
}

const ModalContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <ModalBodyComponent children={children} className={className} />
}
ModalContent.displayName = "DialogBody"

const ModalActions = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <ModalFooterComponent children={children} className={className} />
}
ModalActions.displayName = "DialogFooter"

// ============================================================================
// MODAL SCROLLABLE - Wrapper para compatibilidade
// ============================================================================

interface ModalScrollableProps extends BaseModalProps {
    size?: ModalSize
}

const ModalScrollable = (props: ModalScrollableProps) => {
    return <UnifiedModal {...props} variant="scrollable" />
}

const ModalScrollableHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <DialogHeader className={cn("flex-shrink-0 px-6 pt-6 pb-4 border-b", className)}>
            {children}
        </DialogHeader>
    )
}

const ModalScrollableContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("flex-1 overflow-y-auto min-h-0 p-6", className)}>
            {children}
        </div>
    )
}

const ModalScrollableFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn(
            "flex-shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-6 pt-4 pb-6 border-t bg-background",
            className
        )}>
            {children}
        </div>
    )
}

// ============================================================================
// COMPONENTES DE CONVENIÊNCIA
// ============================================================================

interface ModalCloseButtonProps {
    children?: React.ReactNode
    variant?: "outline" | "ghost" | "secondary" | "default"
    className?: string
    onClick?: () => void
}

const ModalCloseButton = ({
    children = "Cancelar",
    variant = "outline",
    className,
    onClick
}: ModalCloseButtonProps) => {
    return (
        <DialogClose asChild>
            <Button variant={variant} className={className} onClick={onClick}>
                {children}
            </Button>
        </DialogClose>
    )
}

// Componente de botão de ação primária para modais
interface ModalActionButtonProps {
    children: React.ReactNode
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    className?: string
    onClick?: () => void
    disabled?: boolean
    loading?: boolean
}

const ModalActionButton = ({
    children,
    variant = "default",
    className,
    onClick,
    disabled,
    loading
}: ModalActionButtonProps) => {
    return (
        <Button
            variant={variant}
            className={className}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? "Carregando..." : children}
        </Button>
    )
}

// ============================================================================
// HOOKS PERSONALIZADOS PARA MODAIS
// ============================================================================

interface UseModalReturn {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

export const useModal = (defaultOpen = false): UseModalReturn => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    const open = React.useCallback(() => setIsOpen(true), [])
    const close = React.useCallback(() => setIsOpen(false), [])
    const toggle = React.useCallback(() => setIsOpen(prev => !prev), [])

    return { isOpen, open, close, toggle }
}

// Hook para modais com confirmação
interface UseConfirmModalOptions {
    title?: string
    description?: string
    confirmText?: string
    cancelText?: string
    onConfirm?: () => void | Promise<void>
    onCancel?: () => void
}

export const useConfirmModal = (options: UseConfirmModalOptions = {}) => {
    const { isOpen, open, close } = useModal()
    const [loading, setLoading] = React.useState(false)

    const {
        title = "Confirmar ação",
        description = "Tem certeza que deseja continuar?",
        confirmText = "Confirmar",
        cancelText = "Cancelar",
        onConfirm,
        onCancel
    } = options

    const handleConfirm = React.useCallback(async () => {
        if (onConfirm) {
            setLoading(true)
            try {
                await onConfirm()
                close()
            } catch (error) {
                console.error("Erro ao confirmar:", error)
            } finally {
                setLoading(false)
            }
        } else {
            close()
        }
    }, [onConfirm, close])

    const handleCancel = React.useCallback(() => {
        onCancel?.()
        close()
    }, [onCancel, close])

    const ConfirmModal = React.useCallback(() => (
        <Modal
            open={isOpen}
            onOpenChange={close}
            title={title}
            description={description}
        >
            <ModalActions>
                <ModalCloseButton onClick={handleCancel}>
                    {cancelText}
                </ModalCloseButton>
                <ModalActionButton
                    onClick={handleConfirm}
                    loading={loading}
                    variant="default"
                >
                    {confirmText}
                </ModalActionButton>
            </ModalActions>
        </Modal>
    ), [isOpen, close, title, description, handleCancel, cancelText, handleConfirm, loading, confirmText])

    return {
        isOpen,
        open,
        close,
        loading,
        ConfirmModal
    }
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
    // Componente base unificado
    UnifiedModal,

    // Modal Básico (compatibilidade)
    Modal,
    ModalContent,
    ModalActions,

    // Modal Scrollable (compatibilidade)
    ModalScrollable,
    ModalScrollableHeader,
    ModalScrollableContent,
    ModalScrollableFooter,

    // Componentes reutilizáveis
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,

    // Utilitários
    ModalCloseButton,
    ModalActionButton,

    // Constantes
    SIZE_CLASSES,

    // Re-exports do Dialog original para casos avançados
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,

    // Types
    type ModalSize,
    type BaseModalProps,
    type UnifiedModalProps
}