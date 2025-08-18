import React, { useState, useMemo } from "react";
import { Search, Filter, Download, RefreshCw, Plus, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TableCard } from "@/components/ui/table-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// ============================================================================
// TYPES
// ============================================================================

export interface AdvancedTableColumn<T = any> {
    key: string;
    title: string;
    dataIndex?: string;
    width?: number | string;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    filterable?: boolean;
    filterOptions?: Array<{ label: string; value: any }>;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    sorter?: (a: T, b: T) => number;
}

export interface AdvancedTableProps<T = any> {
    // Data
    data: T[];
    columns: AdvancedTableColumn<T>[];
    rowKey?: string | ((record: T) => React.Key);

    // Table configuration
    title?: string;
    description?: string;
    size?: "sm" | "md" | "lg";
    bordered?: boolean;
    striped?: boolean;
    hoverable?: boolean;

    // Features
    searchable?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    selectable?: boolean;
    pagination?: {
        enabled?: boolean;
        pageSize?: number;
        pageSizeOptions?: number[];
        showSizeChanger?: boolean;
        showQuickJumper?: boolean;
    };

    // Actions
    actions?: {
        add?: {
            label?: string;
            onClick: () => void;
        };
        export?: {
            label?: string;
            onClick: () => void;
        };
        refresh?: {
            label?: string;
            onClick: () => void;
        };
        bulk?: {
            enabled?: boolean;
            actions?: Array<{
                key: string;
                label: string;
                onClick: (selectedRows: T[]) => void;
                variant?: "default" | "outline" | "destructive";
            }>;
        };
    };

    // Row actions
    rowActions?: {
        enabled?: boolean;
        actions?: Array<{
            key: string;
            label: string;
            onClick: (record: T) => void;
            variant?: "default" | "destructive";
        }>;
    };

    // States
    loading?: boolean;
    emptyText?: React.ReactNode;

    // Callbacks
    onRowClick?: (record: T, index: number) => void;
    onSelectionChange?: (selectedRows: T[], selectedRowKeys: React.Key[]) => void;

    // Styling
    className?: string;
    tableClassName?: string;
    headerClassName?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export function AdvancedTable<T = any>({
    data,
    columns,
    rowKey = "id",
    title,
    description,
    size = "md",
    bordered = false,
    striped = false,
    hoverable = true,
    searchable = true,
    filterable = true,
    sortable = true,
    selectable = false,
    pagination = { enabled: true, pageSize: 10, pageSizeOptions: [5, 10, 20, 50] },
    actions,
    rowActions,
    loading = false,
    emptyText = "Nenhum dado encontrado",
    onRowClick,
    onSelectionChange,
    className,
    tableClassName,
    headerClassName,
}: AdvancedTableProps<T>) {
    const { toast } = useToast();

    // States
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState<Record<string, any>>({});
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);
    const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(pagination.pageSize || 10);

    // Get row key
    const getRowKey = (record: T, index: number): React.Key => {
        if (typeof rowKey === "function") {
            return rowKey(record);
        }
        if (typeof rowKey === "string") {
            return (record as any)[rowKey];
        }
        return index;
    };

    // Filter data
    const filteredData = useMemo(() => {
        let result = [...data];

        // Search
        if (searchTerm) {
            result = result.filter((record) => {
                return columns.some((column) => {
                    const value = column.dataIndex ? (record as any)[column.dataIndex] : "";
                    return String(value).toLowerCase().includes(searchTerm.toLowerCase());
                });
            });
        }

        // Filters
        Object.entries(filters).forEach(([key, value]) => {
            if (value && value !== "all") {
                result = result.filter((record) => {
                    const recordValue = (record as any)[key];
                    return recordValue === value;
                });
            }
        });

        return result;
    }, [data, searchTerm, filters, columns]);

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortConfig) return filteredData;

        const { key, direction } = sortConfig;
        const column = columns.find((col) => col.key === key);

        if (!column) return filteredData;

        return [...filteredData].sort((a, b) => {
            let aValue = column.dataIndex ? (a as any)[column.dataIndex] : "";
            let bValue = column.dataIndex ? (b as any)[column.dataIndex] : "";

            // Use custom sorter if available
            if (column.sorter) {
                return direction === "asc" ? column.sorter(a, b) : column.sorter(b, a);
            }

            // Default sorting
            if (typeof aValue === "string") aValue = aValue.toLowerCase();
            if (typeof bValue === "string") bValue = bValue.toLowerCase();

            if (aValue < bValue) return direction === "asc" ? -1 : 1;
            if (aValue > bValue) return direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortConfig, columns]);

    // Paginate data
    const paginatedData = useMemo(() => {
        if (!pagination.enabled) return sortedData;

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return sortedData.slice(startIndex, endIndex);
    }, [sortedData, currentPage, pageSize, pagination.enabled]);

    // Handle sorting
    const handleSort = (key: string) => {
        if (!sortable) return;

        setSortConfig((current) => {
            if (current?.key === key) {
                if (current.direction === "asc") {
                    return { key, direction: "desc" };
                } else {
                    return null;
                }
            }
            return { key, direction: "asc" };
        });
    };

    // Handle selection
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            const allKeys = paginatedData.map((record, index) => getRowKey(record, index));
            setSelectedRows(allKeys);
            onSelectionChange?.(paginatedData, allKeys);
        } else {
            setSelectedRows([]);
            onSelectionChange?.([], []);
        }
    };

    const handleSelectRow = (record: T, index: number, checked: boolean) => {
        const key = getRowKey(record, index);
        const newSelectedRows = checked
            ? [...selectedRows, key]
            : selectedRows.filter((k) => k !== key);

        setSelectedRows(newSelectedRows);

        const selectedRecords = data.filter((_, i) =>
            newSelectedRows.includes(getRowKey(_, i))
        );
        onSelectionChange?.(selectedRecords, newSelectedRows);
    };

    // Handle pagination
    const totalPages = Math.ceil(sortedData.length / pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setCurrentPage(1);
    };

    // Handle actions
    const handleRefresh = () => {
        actions?.refresh?.onClick();
    };

    const handleExport = () => {
        actions?.export?.onClick();
    };

    const handleAdd = () => {
        actions?.add?.onClick();
    };

    // Render sort indicator
    const renderSortIndicator = (column: AdvancedTableColumn<T>) => {
        if (!sortable || !column.sortable) return null;

        const isSorted = sortConfig?.key === column.key;
        const direction = sortConfig?.direction;

        return (
            <span className="ml-1">
                {isSorted ? (
                    direction === "asc" ? "↑" : "↓"
                ) : (
                    <span className="text-muted-foreground">↕</span>
                )}
            </span>
        );
    };

    // Render filter
    const renderFilter = (column: AdvancedTableColumn<T>) => {
        if (!filterable || !column.filterable || !column.filterOptions) return null;

        return (
            <Select
                value={filters[column.key] || "all"}
                onValueChange={(value) => {
                    setFilters((prev) => ({
                        ...prev,
                        [column.key]: value,
                    }));
                    setCurrentPage(1);
                }}
            >
                <SelectTrigger className="h-8 w-32">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    {column.filterOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
    };

    // Render cell
    const renderCell = (column: AdvancedTableColumn<T>, record: T, index: number) => {
        const value = column.dataIndex ? (record as any)[column.dataIndex] : "";

        if (column.render) {
            return column.render(value, record, index);
        }

        return value;
    };

    // Render row actions
    const renderRowActions = (record: T, index: number) => {
        if (!rowActions?.enabled) return null;

        const actions = rowActions.actions || [];

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
                    {actions.map((action) => (
                        <DropdownMenuItem
                            key={action.key}
                            onClick={() => action.onClick(record)}
                            className={action.variant === "destructive" ? "text-red-600" : ""}
                        >
                            {action.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    };

    return (
        <div className={cn("space-y-4", className)}>
            <TableCard
                title={title}
                description={description}
                headerClassName={headerClassName}
                actions={
                    <div className="flex items-center space-x-2">
                        {/* Search */}
                        {searchable && (
                            <div className="relative">
                                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Buscar..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-8 w-64"
                                />
                            </div>
                        )}

                        {/* Filters */}
                        {filterable && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <Filter className="h-4 w-4 mr-2" />
                                        Filtros
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>Filtros</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {columns
                                        .filter((col) => col.filterable && col.filterOptions)
                                        .map((column) => (
                                            <DropdownMenuItem key={column.key} className="flex flex-col items-start">
                                                <span className="text-sm font-medium">{column.title}</span>
                                                {renderFilter(column)}
                                            </DropdownMenuItem>
                                        ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}

                        {/* Actions */}
                        {actions?.refresh && (
                            <Button variant="outline" size="sm" onClick={handleRefresh}>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                {actions.refresh.label || "Atualizar"}
                            </Button>
                        )}

                        {actions?.export && (
                            <Button variant="outline" size="sm" onClick={handleExport}>
                                <Download className="h-4 w-4 mr-2" />
                                {actions.export.label || "Exportar"}
                            </Button>
                        )}

                        {actions?.add && (
                            <Button size="sm" onClick={handleAdd}>
                                <Plus className="h-4 w-4 mr-2" />
                                {actions.add.label || "Adicionar"}
                            </Button>
                        )}

                        {/* Bulk Actions */}
                        {actions?.bulk?.enabled && selectedRows.length > 0 && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        {selectedRows.length} selecionado(s)
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Ações em Lote</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {actions.bulk.actions?.map((action) => (
                                        <DropdownMenuItem
                                            key={action.key}
                                            onClick={() => {
                                                const selectedRecords = data.filter((_, i) =>
                                                    selectedRows.includes(getRowKey(_, i))
                                                );
                                                action.onClick(selectedRecords);
                                            }}
                                            className={action.variant === "destructive" ? "text-red-600" : ""}
                                        >
                                            {action.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                }
            >
                <div className={cn("overflow-x-auto", tableClassName)}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {/* Selection checkbox */}
                                {selectable && (
                                    <TableHead className="w-12">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                                            onChange={(e) => handleSelectAll(e.target.checked)}
                                            className="rounded border-gray-300"
                                        />
                                    </TableHead>
                                )}

                                {/* Columns */}
                                {columns.map((column) => (
                                    <TableHead
                                        key={column.key}
                                        className={cn(
                                            column.align === "center" && "text-center",
                                            column.align === "right" && "text-right",
                                            sortable && column.sortable && "cursor-pointer hover:bg-muted/50"
                                        )}
                                        onClick={() => handleSort(column.key)}
                                        style={{ width: column.width }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{column.title}</span>
                                            {renderSortIndicator(column)}
                                        </div>
                                    </TableHead>
                                ))}

                                {/* Row actions */}
                                {rowActions?.enabled && (
                                    <TableHead className="w-12 text-center">Ações</TableHead>
                                )}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={columns.length + (selectable ? 1 : 0) + (rowActions?.enabled ? 1 : 0)} className="text-center py-8">
                                        <div className="flex items-center justify-center space-x-2">
                                            <RefreshCw className="h-4 w-4 animate-spin" />
                                            <span>Carregando...</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : paginatedData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={columns.length + (selectable ? 1 : 0) + (rowActions?.enabled ? 1 : 0)} className="text-center py-8">
                                        {emptyText}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                paginatedData.map((record, index) => (
                                    <TableRow
                                        key={getRowKey(record, index)}
                                        className={cn(
                                            striped && index % 2 === 1 && "bg-muted/50",
                                            hoverable && "hover:bg-muted/50",
                                            onRowClick && "cursor-pointer"
                                        )}
                                        onClick={() => onRowClick?.(record, index)}
                                    >
                                        {/* Selection checkbox */}
                                        {selectable && (
                                            <TableCell>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRows.includes(getRowKey(record, index))}
                                                    onChange={(e) => handleSelectRow(record, index, e.target.checked)}
                                                    className="rounded border-gray-300"
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </TableCell>
                                        )}

                                        {/* Data cells */}
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.key}
                                                className={cn(
                                                    column.align === "center" && "text-center",
                                                    column.align === "right" && "text-right"
                                                )}
                                            >
                                                {renderCell(column, record, index)}
                                            </TableCell>
                                        ))}

                                        {/* Row actions */}
                                        {rowActions?.enabled && (
                                            <TableCell className="text-center">
                                                {renderRowActions(record, index)}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                {pagination.enabled && totalPages > 1 && (
                    <div className="flex items-center justify-between px-6 py-4 border-t">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">
                                Mostrando {((currentPage - 1) * pageSize) + 1} a {Math.min(currentPage * pageSize, sortedData.length)} de {sortedData.length} resultados
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            {/* Page size selector */}
                            {pagination.showSizeChanger && (
                                <Select value={pageSize.toString()} onValueChange={(value) => handlePageSizeChange(Number(value))}>
                                    <SelectTrigger className="w-20">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {pagination.pageSizeOptions?.map((size) => (
                                            <SelectItem key={size} value={size.toString()}>
                                                {size}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}

                            {/* Page navigation */}
                            <div className="flex items-center space-x-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePageChange(1)}
                                    disabled={currentPage === 1}
                                >
                                    Primeira
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Anterior
                                </Button>

                                <span className="px-2 text-sm">
                                    Página {currentPage} de {totalPages}
                                </span>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Próxima
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePageChange(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    Última
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </TableCard>
        </div>
    );
}
