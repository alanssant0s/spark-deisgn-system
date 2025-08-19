import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type PageHeaderBreadcrumbItem = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isCurrent?: boolean;
};

interface PageHeaderProps {
    items: PageHeaderBreadcrumbItem[];
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    className?: string;
}

export function PageHeader({ items, title, subtitle, actions, className }: PageHeaderProps) {
    return (
        <div className={`space-y-4 ${className ?? ""}`}>
            <Breadcrumb>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <React.Fragment key={`${item.label}-${index}`}>
                            <BreadcrumbItem>
                                {item.isCurrent ? (
                                    <BreadcrumbPage className="flex items-center gap-2 text-muted-foreground">
                                        {item.icon}
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={item.href} className="flex items-center gap-2">
                                        {item.icon}
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
                    {subtitle && (
                        <p className="text-muted-foreground mt-1">{subtitle}</p>
                    )}
                </div>
                {actions && <div className="flex items-center gap-2">{actions}</div>}
            </div>
        </div>
    );
}

export default PageHeader;


