import * as React from "react";
import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  Filter,
  Download,
  RefreshCw,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

export interface DataTableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: number | string;
  align?: "left" | "center" | "right";
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sorter?: (a: T, b: T) => number;
  filterOptions?: Array<{ label: string; value: any }>;
}

export interface DataTableProps<T = any> {
  columns: DataTableColumn<T>[];
  data: T[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    pageSizeOptions?: string[];
  };
  rowSelection?: {
    selectedRowKeys: React.Key[];
    onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
    getCheckboxProps?: (record: T) => { disabled?: boolean };
  };
  rowKey?: string | ((record: T) => React.Key);
  scroll?: { x?: number; y?: number };
  size?: "small" | "middle" | "large";
  bordered?: boolean;
  showHeader?: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  expandable?: {
    expandedRowRender: (record: T, index: number) => React.ReactNode;
    expandedRowKeys?: React.Key[];
    onExpand?: (expanded: boolean, record: T) => void;
  };
  onRow?: (record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>;
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  emptyText?: React.ReactNode;
  actions?: {
    refresh?: () => void;
    export?: () => void;
    filters?: boolean;
    search?: boolean;
  };
}

type SortOrder = "asc" | "desc" | null;

interface SortState {
  key: string;
  order: SortOrder;
}

export function DataTable<T = any>({
  columns,
  data,
  loading = false,
  pagination,
  rowSelection,
  rowKey = "id",
  scroll,
  size = "middle",
  bordered = false,
  showHeader = true,
  title,
  footer,
  expandable,
  onRow,
  className,
  tableClassName,
  headerClassName,
  bodyClassName,
  emptyText = "Nenhum dado disponível",
  actions,
}: DataTableProps<T>) {
  const [searchText, setSearchText] = useState("");
  const [sortState, setSortState] = useState<SortState>({ key: "", order: null });
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columns.map((col) => col.key)
  );
  const [currentPage, setCurrentPage] = useState(pagination?.current || 1);
  const [pageSize, setPageSize] = useState(pagination?.pageSize || 10);

  const getRowKey = React.useCallback(
    (record: T, index: number): React.Key => {
      if (typeof rowKey === "function") {
        return rowKey(record);
      }
      return (record as any)[rowKey] || index;
    },
    [rowKey]
  );

  // Filter and search data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (searchText && actions?.search) {
      result = result.filter((item) =>
        columns.some((col) => {
          const value = col.dataIndex ? (item as any)[col.dataIndex] : item;
          return String(value).toLowerCase().includes(searchText.toLowerCase());
        })
      );
    }

    // Apply column filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        result = result.filter((item) => {
          const itemValue = (item as any)[key];
          if (Array.isArray(value)) {
            return value.includes(itemValue);
          }
          return itemValue === value;
        });
      }
    });

    return result;
  }, [data, searchText, filters, columns, actions?.search]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortState.key || !sortState.order) {
      return filteredData;
    }

    const column = columns.find((col) => col.key === sortState.key);
    if (!column) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (column.sorter) {
        const result = column.sorter(a, b);
        return sortState.order === "asc" ? result : -result;
      }

      const aValue = column.dataIndex ? (a as any)[column.dataIndex] : a;
      const bValue = column.dataIndex ? (b as any)[column.dataIndex] : b;

      if (aValue < bValue) return sortState.order === "asc" ? -1 : 1;
      if (aValue > bValue) return sortState.order === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortState, columns]);

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, pageSize, pagination]);

  const handleSort = (column: DataTableColumn<T>) => {
    if (!column.sortable) return;

    setSortState((prev) => {
      if (prev.key === column.key) {
        const nextOrder =
          prev.order === null ? "asc" : prev.order === "asc" ? "desc" : null;
        return { key: column.key, order: nextOrder };
      }
      return { key: column.key, order: "asc" };
    });
  };

  const getSortIcon = (column: DataTableColumn<T>) => {
    if (!column.sortable) return null;

    const isActive = sortState.key === column.key;
    if (!isActive) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }

    if (sortState.order === "asc") {
      return <ArrowUp className="ml-2 h-4 w-4" />;
    } else if (sortState.order === "desc") {
      return <ArrowDown className="ml-2 h-4 w-4" />;
    }

    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (pagination?.onChange) {
      (pagination as any).onChange(page, pageSize);
    }
  };

  const handlePageSizeChange = (size: string) => {
    const newSize = parseInt(size);
    setPageSize(newSize);
    setCurrentPage(1);
    if (pagination?.onChange) {
      (pagination as any).onChange(1, newSize);
    }
  };

  const totalPages = pagination
    ? Math.ceil((pagination.total || sortedData.length) / pageSize)
    : Math.ceil(sortedData.length / pageSize);

  const renderCell = (column: DataTableColumn<T>, record: T, index: number) => {
    const value = column.dataIndex ? (record as any)[column.dataIndex] : record;

    if (column.render) {
      return column.render(value, record, index);
    }

    return value;
  };

  const sizeClasses = {
    small: "text-xs",
    middle: "text-sm",
    large: "text-base",
  };

  const visibleColumnsData = columns.filter((col) =>
    visibleColumns.includes(col.key)
  );

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Header with title and actions */}
      {(title || actions) && (
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <div className="flex items-center space-x-2">
            {actions?.search && (
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
            )}

            {actions?.filters && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Colunas
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Colunas Visíveis</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {columns.map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.key}
                      checked={visibleColumns.includes(column.key)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setVisibleColumns([...visibleColumns, column.key]);
                        } else {
                          setVisibleColumns(
                            visibleColumns.filter((key) => key !== column.key)
                          );
                        }
                      }}
                    >
                      {column.title}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {actions?.refresh && (
              <Button variant="outline" size="sm" onClick={actions.refresh}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}

            {actions?.export && (
              <Button variant="outline" size="sm" onClick={actions.export}>
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
        <Table className={cn(sizeClasses[size], tableClassName)}>
          {showHeader && (
            <TableHeader className={headerClassName}>
              <TableRow>
                {rowSelection && (
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        paginatedData.length > 0 &&
                        paginatedData.every((record) =>
                          rowSelection.selectedRowKeys.includes(
                            getRowKey(record, 0)
                          )
                        )
                      }
                      onCheckedChange={(checked) => {
                        if (checked) {
                          const allKeys = paginatedData.map((record, index) =>
                            getRowKey(record, index)
                          );
                          rowSelection.onChange(
                            [...rowSelection.selectedRowKeys, ...allKeys],
                            [...paginatedData]
                          );
                        } else {
                          const currentKeys = paginatedData.map((record, index) =>
                            getRowKey(record, index)
                          );
                          rowSelection.onChange(
                            rowSelection.selectedRowKeys.filter(
                              (key) => !currentKeys.includes(key)
                            ),
                            []
                          );
                        }
                      }}
                    />
                  </TableHead>
                )}

                {visibleColumnsData.map((column) => (
                  <TableHead
                    key={column.key}
                    style={{ width: column.width }}
                    className={cn(
                      "select-none",
                      column.sortable && "cursor-pointer hover:bg-primary-hover-bg",
                      column.align === "center" && "text-center",
                      column.align === "right" && "text-right"
                    )}
                    onClick={() => handleSort(column)}
                  >
                    <div
                      className={cn(
                        "flex items-center",
                        column.align === "center" && "justify-center",
                        column.align === "right" && "justify-end"
                      )}
                    >
                      {column.title}
                      {getSortIcon(column)}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          )}

          <TableBody className={bodyClassName}>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={
                    visibleColumnsData.length + (rowSelection ? 1 : 0)
                  }
                  className="h-24 text-center"
                >
                  <div className="flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                    Carregando...
                  </div>
                </TableCell>
              </TableRow>
            ) : paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={
                    visibleColumnsData.length + (rowSelection ? 1 : 0)
                  }
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyText}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((record, index) => {
                const key = getRowKey(record, index);
                const rowProps = onRow?.(record, index) || {};
                const isSelected = rowSelection?.selectedRowKeys.includes(key);

                return (
                  <TableRow
                    key={key}
                    data-state={isSelected ? "selected" : undefined}
                    {...rowProps}
                  >
                    {rowSelection && (
                      <TableCell>
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={(checked) => {
                            const newSelectedKeys = checked
                              ? [...rowSelection.selectedRowKeys, key]
                              : rowSelection.selectedRowKeys.filter(
                                (k) => k !== key
                              );
                            rowSelection.onChange(newSelectedKeys, [record]);
                          }}
                          {...rowSelection.getCheckboxProps?.(record)}
                        />
                      </TableCell>
                    )}

                    {visibleColumnsData.map((column) => (
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
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              Mostrando{" "}
              <span className="font-medium">
                {Math.min((currentPage - 1) * pageSize + 1, sortedData.length)}
              </span>{" "}
              a{" "}
              <span className="font-medium">
                {Math.min(currentPage * pageSize, sortedData.length)}
              </span>{" "}
              de{" "}
              <span className="font-medium">
                {pagination.total || sortedData.length}
              </span>{" "}
              resultados
            </p>

            {pagination.showSizeChanger && (
              <div className="flex items-center space-x-2">
                <Label htmlFor="pageSize" className="text-sm">
                  Itens por página:
                </Label>
                <Select value={String(pageSize)} onValueChange={handlePageSizeChange}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(pagination.pageSizeOptions || ["10", "20", "50", "100"]).map(
                      (size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(pageNum)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}

DataTable.displayName = "DataTable";
