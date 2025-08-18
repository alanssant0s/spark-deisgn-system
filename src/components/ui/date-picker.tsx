import * as React from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addDays, subDays, isBefore, isAfter, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

export interface DatePickerProps {
    selected?: Date;
    onSelect?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    trigger?: React.ReactNode;
    // Novas props para restrições
    minDate?: Date;
    maxDate?: Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    disabledDates?: Date[];
    enabledDates?: Date[];
}

export function DatePicker({
    selected,
    onSelect,
    placeholder = "Selecionar data",
    disabled = false,
    className,
    trigger,
    minDate,
    maxDate,
    disablePast = false,
    disableFuture = false,
    disabledDates = [],
    enabledDates = []
}: DatePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentMonth, setCurrentMonth] = React.useState(selected || new Date());

    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);

    // Ajustar para começar na segunda-feira
    const startDate = start.getDay() === 0 ? subDays(start, 6) : subDays(start, start.getDay() - 1);
    const endDate = end.getDay() === 0 ? end : addDays(end, 7 - end.getDay());

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // Função para verificar se uma data está desabilitada
    const isDateDisabled = (date: Date): boolean => {
        const today = startOfDay(new Date());
        const dateToCheck = startOfDay(date);

        // Verificar restrições de data mínima e máxima
        if (minDate && isBefore(dateToCheck, startOfDay(minDate))) {
            return true;
        }
        if (maxDate && isAfter(dateToCheck, startOfDay(maxDate))) {
            return true;
        }

        // Verificar restrições de passado/futuro
        if (disablePast && isBefore(dateToCheck, today)) {
            return true;
        }
        if (disableFuture && isAfter(dateToCheck, today)) {
            return true;
        }

        // Verificar datas específicas desabilitadas
        if (disabledDates.some(disabledDate => isSameDay(dateToCheck, disabledDate))) {
            return true;
        }

        // Se enabledDates estiver definido, apenas essas datas são permitidas
        if (enabledDates.length > 0 && !enabledDates.some(enabledDate => isSameDay(dateToCheck, enabledDate))) {
            return true;
        }

        return false;
    };

    const handleDateSelect = (date: Date) => {
        if (!isDateDisabled(date)) {
            onSelect?.(date);
            setIsOpen(false);
        }
    };

    const handlePreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const defaultTrigger = (
        <button
            className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start text-left font-normal",
                !selected && "text-muted-foreground",
                className
            )}
            disabled={disabled}
            aria-label={selected ? `Data selecionada: ${format(selected, "dd/MM/yyyy", { locale: ptBR })}` : placeholder}
        >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? (
                format(selected, "dd/MM/yyyy", { locale: ptBR })
            ) : (
                <span>{placeholder}</span>
            )}
        </button>
    );

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                {trigger || defaultTrigger}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="p-3">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={handlePreviousMonth}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "h-8 w-8 p-0"
                            )}
                            aria-label="Mês anterior"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <h2 className="text-sm font-medium" role="heading" aria-level={2}>
                            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h2>
                        <button
                            onClick={handleNextMonth}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "h-8 w-8 p-0"
                            )}
                            aria-label="Próximo mês"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-1 mb-2" role="rowgroup">
                        {daysOfWeek.map((day) => (
                            <div
                                key={day}
                                className="h-8 flex items-center justify-center text-xs font-medium text-muted-foreground"
                                role="columnheader"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1" role="grid">
                        {days.map((day) => {
                            const isCurrentMonth = isSameMonth(day, currentMonth);
                            const isSelected = selected && isSameDay(day, selected);
                            const isCurrentDay = isToday(day);
                            const isDisabled = isDateDisabled(day);

                            return (
                                <button
                                    key={day.toISOString()}
                                    onClick={() => handleDateSelect(day)}
                                    disabled={isDisabled}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "h-8 w-8 p-0 text-xs",
                                        !isCurrentMonth && "text-muted-foreground opacity-50",
                                        isSelected && "bg-primary text-primary-foreground hover:bg-primary/90",
                                        isCurrentDay && !isSelected && "bg-accent text-accent-foreground font-semibold border border-primary/30",
                                        isDisabled && "opacity-50 cursor-not-allowed text-muted-foreground",
                                        !isDisabled && "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                    aria-label={`${day.getDate()} de ${months[day.getMonth()]} de ${day.getFullYear()}`}
                                    aria-selected={isSelected}
                                    aria-disabled={isDisabled}
                                >
                                    {day.getDate()}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export interface DateRangePickerProps {
    selected?: { from: Date; to: Date };
    onSelect?: (range: { from: Date; to: Date } | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    // Novas props para restrições
    minDate?: Date;
    maxDate?: Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    disabledDates?: Date[];
    enabledDates?: Date[];
}

export function DateRangePicker({
    selected,
    onSelect,
    placeholder = "Selecionar período",
    disabled = false,
    className,
    minDate,
    maxDate,
    disablePast = false,
    disableFuture = false,
    disabledDates = [],
    enabledDates = []
}: DateRangePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    const [tempRange, setTempRange] = React.useState<{ from: Date; to?: Date } | undefined>(selected);

    // Sincronizar tempRange com selected quando selected mudar
    React.useEffect(() => {
        console.log('DateRangePicker - useEffect selected:', selected);
        setTempRange(selected);
    }, [selected]);

    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);

    // Ajustar para começar na segunda-feira
    const startDate = start.getDay() === 0 ? subDays(start, 6) : subDays(start, start.getDay() - 1);
    const endDate = end.getDay() === 0 ? end : addDays(end, 7 - end.getDay());

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // Função para verificar se uma data está desabilitada
    const isDateDisabled = (date: Date): boolean => {
        const today = startOfDay(new Date());
        const dateToCheck = startOfDay(date);

        // Verificar restrições de data mínima e máxima
        if (minDate && isBefore(dateToCheck, startOfDay(minDate))) {
            return true;
        }
        if (maxDate && isAfter(dateToCheck, startOfDay(maxDate))) {
            return true;
        }

        // Verificar restrições de passado/futuro
        if (disablePast && isBefore(dateToCheck, today)) {
            return true;
        }
        if (disableFuture && isAfter(dateToCheck, today)) {
            return true;
        }

        // Verificar datas específicas desabilitadas
        if (disabledDates.some(disabledDate => isSameDay(dateToCheck, disabledDate))) {
            return true;
        }

        // Se enabledDates estiver definido, apenas essas datas são permitidas
        if (enabledDates.length > 0 && !enabledDates.some(enabledDate => isSameDay(dateToCheck, enabledDate))) {
            return true;
        }

        return false;
    };

    const handleDateSelect = (date: Date) => {
        if (isDateDisabled(date)) return;

        console.log('DateRangePicker - handleDateSelect:', {
            date: format(date, "dd/MM/yyyy"),
            tempRange,
            hasFrom: !!tempRange?.from,
            hasTo: !!tempRange?.to
        });

        if (!tempRange?.from || (tempRange.from && tempRange.to)) {
            // Primeira seleção ou nova seleção - começar um novo range
            console.log('Primeira seleção - definindo from:', format(date, "dd/MM/yyyy"));
            setTempRange({ from: date });
        } else {
            // Segunda seleção - completar o range
            const newRange = {
                from: tempRange.from < date ? tempRange.from : date,
                to: tempRange.from < date ? date : tempRange.from
            };
            console.log('Segunda seleção - completando range:', {
                from: format(newRange.from, "dd/MM/yyyy"),
                to: format(newRange.to, "dd/MM/yyyy")
            });
            setTempRange(newRange);
            onSelect?.(newRange);
            setIsOpen(false);
        }
    };

    const handlePreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const isInRange = (date: Date) => {
        if (!tempRange?.from) return false;
        if (!tempRange.to) return isSameDay(date, tempRange.from);
        return date >= tempRange.from && date <= tempRange.to;
    };

    const isRangeStart = (date: Date) => {
        return tempRange?.from && isSameDay(date, tempRange.from);
    };

    const isRangeEnd = (date: Date) => {
        return tempRange?.to && isSameDay(date, tempRange.to);
    };

    const isRangeHover = (date: Date) => {
        if (!tempRange?.from || tempRange.to) return false;
        return date >= tempRange.from;
    };

    const handleClose = () => {
        console.log('DateRangePicker - handleClose');
        setIsOpen(false);
        // Reset tempRange se não foi completado
        if (tempRange?.from && !tempRange.to) {
            console.log('DateRangePicker - resetando tempRange');
            setTempRange(selected);
        }
    };

    return (
        <Popover open={isOpen} onOpenChange={handleClose}>
            <PopoverTrigger asChild>
                <button
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full justify-start text-left font-normal",
                        !selected && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                    onClick={() => {
                        console.log('DateRangePicker - trigger clicked');
                        setIsOpen(true);
                    }}
                    aria-label={selected ? `Período selecionado: ${format(selected.from, "dd/MM/yyyy", { locale: ptBR })} - ${format(selected.to, "dd/MM/yyyy", { locale: ptBR })}` : placeholder}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selected ? (
                        `${format(selected.from, "dd/MM/yyyy", { locale: ptBR })} - ${format(selected.to, "dd/MM/yyyy", { locale: ptBR })}`
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="p-3">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={handlePreviousMonth}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "h-8 w-8 p-0"
                            )}
                            aria-label="Mês anterior"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <h2 className="text-sm font-medium" role="heading" aria-level={2}>
                            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h2>
                        <button
                            onClick={handleNextMonth}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "h-8 w-8 p-0"
                            )}
                            aria-label="Próximo mês"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-1 mb-2" role="rowgroup">
                        {daysOfWeek.map((day) => (
                            <div
                                key={day}
                                className="h-8 flex items-center justify-center text-xs font-medium text-muted-foreground"
                                role="columnheader"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1" role="grid">
                        {days.map((day) => {
                            const isCurrentMonth = isSameMonth(day, currentMonth);
                            const inRange = isInRange(day);
                            const isStart = isRangeStart(day);
                            const isEnd = isRangeEnd(day);
                            const isCurrentDay = isToday(day);
                            const isDisabled = isDateDisabled(day);
                            const isHover = isRangeHover(day);

                            return (
                                <button
                                    key={day.toISOString()}
                                    onClick={() => handleDateSelect(day)}
                                    disabled={isDisabled}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "h-8 w-8 p-0 text-xs relative",
                                        !isCurrentMonth && "text-muted-foreground opacity-50",
                                        inRange && "bg-primary/20 text-primary-foreground",
                                        isStart && "bg-primary text-primary-foreground rounded-l-md",
                                        isEnd && "bg-primary text-primary-foreground rounded-r-md",
                                        isHover && !inRange && "bg-primary/10",
                                        isCurrentDay && !inRange && "bg-accent text-accent-foreground font-semibold border border-primary/30",
                                        isDisabled && "opacity-50 cursor-not-allowed text-muted-foreground",
                                        !isDisabled && "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                    aria-label={`${day.getDate()} de ${months[day.getMonth()]} de ${day.getFullYear()}`}
                                    aria-selected={inRange}
                                    aria-disabled={isDisabled}
                                >
                                    {day.getDate()}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback visual para seleção em andamento */}
                    {tempRange?.from && !tempRange.to && (
                        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
                            <p>Selecione a data final para completar o período</p>
                            <p className="font-medium">De: {format(tempRange.from, "dd/MM/yyyy", { locale: ptBR })}</p>
                        </div>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
}
