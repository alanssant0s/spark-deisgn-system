import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "inactive" | "pending" | "error" | "success";
  text?: string;
  className?: string;
}

export const SaasStatusBadge = ({ status, text, className }: StatusBadgeProps) => {
  const statusConfig = {
    active: {
      bg: "bg-success-light",
      text: "text-success",
      border: "border-success/30",
      dot: "bg-success",
      label: text || "Ativo"
    },
    inactive: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      border: "border-muted-foreground/30",
      dot: "bg-muted-foreground",
      label: text || "Inativo"
    },
    pending: {
      bg: "bg-warning-light",
      text: "text-warning",
      border: "border-warning/30",
      dot: "bg-warning",
      label: text || "Pendente"
    },
    error: {
      bg: "bg-destructive-light",
      text: "text-destructive",
      border: "border-destructive/30",
      dot: "bg-destructive",
      label: text || "Erro"
    },
    success: {
      bg: "bg-success-light",
      text: "text-success",
      border: "border-success/30",
      dot: "bg-success",
      label: text || "Sucesso"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
      config.bg,
      config.text,
      config.border,
      className
    )}>
      <div className={cn(
        "w-2 h-2 rounded-full animate-pulse",
        config.dot
      )} />
      {config.label}
    </div>
  );
};