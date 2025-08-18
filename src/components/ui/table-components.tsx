import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
    MoreHorizontal,
    Eye,
    Edit,
    Trash2,
    Star,
    CheckCircle,
    XCircle,
    Clock,
    TrendingUp,
    TrendingDown
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

// ============================================================================
// STATUS BADGES
// ============================================================================

export interface StatusBadgeProps {
    status: string;
    type: "user" | "product" | "order" | "general";
    size?: "sm" | "md" | "lg";
}

export function StatusBadge({ status, type, size = "md" }: StatusBadgeProps) {
    const variants = {
        user: {
            active: "bg-green-100 text-green-800 border-green-200",
            inactive: "bg-gray-100 text-gray-800 border-gray-200",
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
        },
        product: {
            available: "bg-green-100 text-green-800 border-green-200",
            out_of_stock: "bg-red-100 text-red-800 border-red-200",
            discontinued: "bg-gray-100 text-gray-800 border-gray-200",
            "baixo estoque": "bg-orange-100 text-orange-800 border-orange-200",
        },
        order: {
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
            processing: "bg-blue-100 text-blue-800 border-blue-200",
            shipped: "bg-purple-100 text-purple-800 border-purple-200",
            delivered: "bg-green-100 text-green-800 border-green-200",
            cancelled: "bg-red-100 text-red-800 border-red-200",
        },
        general: {
            ativo: "bg-green-100 text-green-800 border-green-200",
            inativo: "bg-gray-100 text-gray-800 border-gray-200",
            pendente: "bg-yellow-100 text-yellow-800 border-yellow-200",
            disponível: "bg-green-100 text-green-800 border-green-200",
            "sem estoque": "bg-red-100 text-red-800 border-red-200",
        },
    };

    const labels = {
        user: { active: "Ativo", inactive: "Inativo", pending: "Pendente" },
        product: {
            available: "Disponível",
            out_of_stock: "Sem Estoque",
            discontinued: "Descontinuado",
            "baixo estoque": "Baixo Estoque"
        },
        order: {
            pending: "Pendente",
            processing: "Processando",
            shipped: "Enviado",
            delivered: "Entregue",
            cancelled: "Cancelado"
        },
        general: {
            ativo: "Ativo",
            inativo: "Inativo",
            pendente: "Pendente",
            disponível: "Disponível",
            "sem estoque": "Sem Estoque"
        },
    };

    const sizeClasses = {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-2.5 py-1",
        lg: "text-base px-3 py-1.5",
    };

    const statusKey = status.toLowerCase() as keyof typeof variants[typeof type];
    const variantClass = variants[type][statusKey] || variants.general[statusKey as keyof typeof variants.general] || "bg-gray-100 text-gray-800 border-gray-200";
    const label = labels[type][statusKey] || labels.general[statusKey as keyof typeof labels.general] || status;

    return (
        <Badge
            variant="secondary"
            className={`${variantClass} ${sizeClasses[size]}`}
        >
            {label}
        </Badge>
    );
}

// ============================================================================
// USER CELL COMPONENTS
// ============================================================================

export interface UserCellProps {
    name: string;
    email: string;
    avatar?: string;
    size?: "sm" | "md" | "lg";
}

export function UserCell({ name, email, avatar, size = "md" }: UserCellProps) {
    const sizeClasses = {
        sm: { avatar: "h-6 w-6", name: "text-sm", email: "text-xs" },
        md: { avatar: "h-8 w-8", name: "text-sm", email: "text-xs" },
        lg: { avatar: "h-10 w-10", name: "text-base", email: "text-sm" },
    };

    const classes = sizeClasses[size];

    return (
        <div className="flex items-center space-x-3">
            <Avatar className={classes.avatar}>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="text-xs">
                    {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div>
                <div className={`font-medium ${classes.name}`}>{name}</div>
                <div className={`text-muted-foreground ${classes.email}`}>{email}</div>
            </div>
        </div>
    );
}

// ============================================================================
// PRODUCT CELL COMPONENTS
// ============================================================================

export interface ProductCellProps {
    name: string;
    id: string;
    category?: string;
}

export function ProductCell({ name, id, category }: ProductCellProps) {
    return (
        <div className="space-y-1">
            <p className="font-medium text-sm">{name}</p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>ID: {id}</span>
                {category && (
                    <>
                        <span>•</span>
                        <span>{category}</span>
                    </>
                )}
            </div>
        </div>
    );
}

export interface PriceCellProps {
    price: number | string;
    currency?: string;
    showSymbol?: boolean;
}

export function PriceCell({ price, currency = "BRL", showSymbol = true }: PriceCellProps) {
    const formatPrice = (value: number | string) => {
        if (typeof value === "string") return value;

        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
        }).format(value);
    };

    return (
        <span className="font-medium text-sm">
            {showSymbol ? formatPrice(price) : price.toString()}
        </span>
    );
}

export interface StockCellProps {
    stock: number;
    threshold?: number;
}

export function StockCell({ stock, threshold = 20 }: StockCellProps) {
    const getStockColor = (quantity: number) => {
        if (quantity === 0) return "text-red-600";
        if (quantity < threshold) return "text-orange-600";
        return "text-green-600";
    };

    return (
        <span className={`text-sm ${getStockColor(stock)}`}>
            {stock} unidades
        </span>
    );
}

export interface RatingCellProps {
    rating: number;
    maxRating?: number;
    showNumber?: boolean;
}

export function RatingCell({ rating, maxRating = 5, showNumber = true }: RatingCellProps) {
    return (
        <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {showNumber && <span className="text-sm">{rating}</span>}
        </div>
    );
}

// ============================================================================
// ORDER CELL COMPONENTS
// ============================================================================

export interface OrderIdCellProps {
    id: string;
    prefix?: string;
}

export function OrderIdCell({ id, prefix = "ORD" }: OrderIdCellProps) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {prefix}-{id}
        </code>
    );
}

// ============================================================================
// DATE CELL COMPONENTS
// ============================================================================

export interface DateCellProps {
    date: string | Date;
    format?: string;
    showTime?: boolean;
}

export function DateCell({ date, format = "dd/MM/yyyy", showTime = false }: DateCellProps) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const formatString = showTime ? `${format} HH:mm` : format;

    return (
        <span className="text-sm">
            {format(dateObj, formatString, { locale: ptBR })}
        </span>
    );
}

// ============================================================================
// ACTION COMPONENTS
// ============================================================================

export interface ActionsMenuProps {
    record: any;
    type: string;
    actions?: Array<{
        key: string;
        label: string;
        icon: React.ReactNode;
        onClick: (record: any) => void;
        variant?: "default" | "destructive";
    }>;
    onView?: (record: any) => void;
    onEdit?: (record: any) => void;
    onDelete?: (record: any) => void;
}

export function ActionsMenu({
    record,
    type,
    actions,
    onView,
    onEdit,
    onDelete
}: ActionsMenuProps) {
    const { toast } = useToast();

    const defaultActions = [
        ...(onView ? [{
            key: "view",
            label: "Visualizar",
            icon: <Eye className="mr-2 h-4 w-4" />,
            onClick: onView,
            variant: "default" as const,
        }] : []),
        ...(onEdit ? [{
            key: "edit",
            label: "Editar",
            icon: <Edit className="mr-2 h-4 w-4" />,
            onClick: onEdit,
            variant: "default" as const,
        }] : []),
        ...(onDelete ? [{
            key: "delete",
            label: "Excluir",
            icon: <Trash2 className="mr-2 h-4 w-4" />,
            onClick: onDelete,
            variant: "destructive" as const,
        }] : []),
    ];

    const menuActions = actions || defaultActions;

    const handleAction = (action: typeof menuActions[0]) => {
        try {
            action.onClick(record);
        } catch (error) {
            toast({
                title: "Erro",
                description: `Erro ao executar ação: ${action.label}`,
                variant: "destructive",
            });
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                {menuActions.map((action) => (
                    <DropdownMenuItem
                        key={action.key}
                        onClick={() => handleAction(action)}
                        className={action.variant === "destructive" ? "text-red-600" : ""}
                    >
                        {action.icon}
                        {action.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export interface ActionButtonsProps {
    record: any;
    actions?: Array<{
        key: string;
        label: string;
        variant?: "default" | "outline" | "destructive";
        size?: "sm" | "md";
        onClick: (record: any) => void;
    }>;
    onView?: (record: any) => void;
    onEdit?: (record: any) => void;
    onDelete?: (record: any) => void;
}

export function ActionButtons({
    record,
    actions,
    onView,
    onEdit,
    onDelete
}: ActionButtonsProps) {
    const defaultActions = [
        ...(onView ? [{
            key: "view",
            label: "Ver",
            variant: "outline" as const,
            size: "sm" as const,
            onClick: onView,
        }] : []),
        ...(onEdit ? [{
            key: "edit",
            label: "Editar",
            variant: "outline" as const,
            size: "sm" as const,
            onClick: onEdit,
        }] : []),
        ...(onDelete ? [{
            key: "delete",
            label: "Excluir",
            variant: "destructive" as const,
            size: "sm" as const,
            onClick: onDelete,
        }] : []),
    ];

    const buttonActions = actions || defaultActions;

    return (
        <div className="flex space-x-1">
            {buttonActions.map((action) => (
                <Button
                    key={action.key}
                    size={action.size}
                    variant={action.variant}
                    className="h-7 px-2 text-xs"
                    onClick={() => action.onClick(record)}
                >
                    {action.label}
                </Button>
            ))}
        </div>
    );
}

// ============================================================================
// METRIC CELL COMPONENTS
// ============================================================================

export interface MetricCellProps {
    value: number;
    previousValue?: number;
    format?: "number" | "currency" | "percentage";
    currency?: string;
    showTrend?: boolean;
}

export function MetricCell({
    value,
    previousValue,
    format = "number",
    currency = "BRL",
    showTrend = false
}: MetricCellProps) {
    const formatValue = (val: number) => {
        switch (format) {
            case "currency":
                return new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency,
                }).format(val);
            case "percentage":
                return `${val}%`;
            default:
                return val.toLocaleString("pt-BR");
        }
    };

    const getTrendIcon = () => {
        if (!previousValue || !showTrend) return null;

        const trend = value - previousValue;
        if (trend > 0) {
            return <TrendingUp className="h-3 w-3 text-green-600" />;
        } else if (trend < 0) {
            return <TrendingDown className="h-3 w-3 text-red-600" />;
        }
        return null;
    };

    const getTrendColor = () => {
        if (!previousValue || !showTrend) return "";

        const trend = value - previousValue;
        if (trend > 0) return "text-green-600";
        if (trend < 0) return "text-red-600";
        return "text-gray-600";
    };

    return (
        <div className="flex items-center space-x-1">
            {getTrendIcon()}
            <span className={`font-medium text-sm ${getTrendColor()}`}>
                {formatValue(value)}
            </span>
        </div>
    );
}

// ============================================================================
// END OF FILE
// ============================================================================
