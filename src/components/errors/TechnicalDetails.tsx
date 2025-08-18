import { ReactNode } from "react";

interface TechnicalDetailsProps {
    title?: string;
    details: Record<string, string>;
    className?: string;
}

const TechnicalDetails = ({
    title = "Detalhes Técnicos (para desenvolvedores)",
    details,
    className = ""
}: TechnicalDetailsProps) => {
    return (
        <details className={`border rounded-lg ${className}`}>
            <summary className="p-4 cursor-pointer hover:bg-muted/50 rounded-lg font-medium text-sm">
                {title}
            </summary>
            <div className="p-4 border-t bg-muted/20 text-xs font-mono space-y-2">
                {Object.entries(details).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}:</strong> {value}
                    </div>
                ))}
            </div>
        </details>
    );
};

export default TechnicalDetails;
