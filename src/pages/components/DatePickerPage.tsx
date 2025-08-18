import { useState } from "react";
import { format, addDays, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isToday, isSameDay, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Calendar as CalendarLucide, Clock, Zap, Filter, CalendarDays, Target, TrendingUp, Users, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Form schema for date picker form example
const DateFormSchema = z.object({
  birthDate: z.date({
    required_error: "Data de nascimento é obrigatória.",
  }),
  startDate: z.date({
    required_error: "Data de início é obrigatória.",
  }),
  endDate: z.date().optional(),
  eventDate: z.date({
    required_error: "Data do evento é obrigatória.",
  }),
  reminderDate: z.date().optional(),
});

// Componente para seleção múltipla de datas
function MultipleDatePicker({ selected, onSelect, placeholder }: {
  selected: Date[];
  onSelect: (dates: Date[]) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateToggle = (date: Date) => {
    const isSelected = selected.some(d => isSameDay(d, date));
    if (isSelected) {
      onSelect(selected.filter(d => !isSameDay(d, date)));
    } else {
      onSelect([...selected, date]);
    }
  };

  const clearSelection = () => {
    onSelect([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Datas Selecionadas ({selected.length})</Label>
        {selected.length > 0 && (
          <Button variant="outline" size="sm" onClick={clearSelection}>
            Limpar
          </Button>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 border rounded-md",
            "hover:bg-accent hover:text-accent-foreground",
            isOpen && "ring-2 ring-ring ring-offset-2"
          )}
        >
          <span className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {selected.length > 0 ? (
              <span>{selected.length} data(s) selecionada(s)</span>
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 p-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="p-1 hover:bg-accent rounded"
              >
                ←
              </button>
              <span className="font-medium">
                {format(currentMonth, "MMMM yyyy", { locale: ptBR })}
              </span>
              <button
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="p-1 hover:bg-accent rounded"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(day => (
                <div key={day} className="p-2 text-center font-medium text-muted-foreground">
                  {day}
                </div>
              ))}

              {Array.from({ length: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() }, (_, i) => (
                <div key={`empty-${i}`} className="p-2" />
              ))}

              {Array.from({ length: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate() }, (_, i) => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
                const isSelected = selected.some(d => isSameDay(d, date));
                const isCurrentDay = isToday(date);

                return (
                  <button
                    key={i}
                    onClick={() => handleDateToggle(date)}
                    className={cn(
                      "p-2 rounded hover:bg-accent",
                      isSelected && "bg-primary text-primary-foreground",
                      isCurrentDay && !isSelected && "border-2 border-primary"
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((date, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {format(date, "dd/MM", { locale: ptBR })}
              <button
                onClick={() => handleDateToggle(date)}
                className="ml-1 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

// Componente para presets de datas rápidas
function QuickDatePresets({ onSelect }: { onSelect: (range: { from: Date; to: Date }) => void }) {
  const presets = [
    { label: "Hoje", range: { from: new Date(), to: new Date() } },
    { label: "Ontem", range: { from: subDays(new Date(), 1), to: subDays(new Date(), 1) } },
    { label: "Últimos 7 dias", range: { from: subDays(new Date(), 6), to: new Date() } },
    { label: "Últimos 30 dias", range: { from: subDays(new Date(), 29), to: new Date() } },
    { label: "Este mês", range: { from: startOfMonth(new Date()), to: endOfMonth(new Date()) } },
    { label: "Mês passado", range: { from: startOfMonth(subMonths(new Date(), 1)), to: endOfMonth(subMonths(new Date(), 1)) } },
    { label: "Esta semana", range: { from: startOfWeek(new Date(), { weekStartsOn: 1 }), to: endOfWeek(new Date(), { weekStartsOn: 1 }) } },
  ];

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Presets Rápidos</Label>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            variant="outline"
            size="sm"
            onClick={() => onSelect(preset.range)}
            className="text-xs"
          >
            <Zap className="w-3 h-3 mr-1" />
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function DatePickerPage() {
  const [singleDate, setSingleDate] = useState<Date>();
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [rangeDate, setRangeDate] = useState<{ from: Date; to: Date } | undefined>();
  const [futureDate, setFutureDate] = useState<Date>();
  const [pastDate, setPastDate] = useState<Date>();
  const [inlineDate, setInlineDate] = useState<Date>(new Date());
  const [dateFormat, setDateFormat] = useState("dd/MM/yyyy");
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [restrictedDate, setRestrictedDate] = useState<Date>();

  const { toast } = useToast();

  // Form setup
  const form = useForm<z.infer<typeof DateFormSchema>>({
    resolver: zodResolver(DateFormSchema),
  });

  function onSubmit(data: z.infer<typeof DateFormSchema>) {
    toast({
      title: "Formulário enviado com sucesso!",
      description: `Data de nascimento: ${format(data.birthDate, "dd/MM/yyyy", { locale: ptBR })}`,
    });
  }

  const handleQuickPreset = (range: { from: Date; to: Date }) => {
    setRangeDate(range);
    toast({
      title: "Período selecionado",
      description: `${format(range.from, "dd/MM/yyyy")} - ${format(range.to, "dd/MM/yyyy")}`,
    });
  };

  // Função para testar o DateRangePicker
  const handleRangeChange = (range: { from: Date; to: Date } | undefined) => {
    console.log('DatePickerPage - handleRangeChange:', range);
    setRangeDate(range);
    if (range) {
      toast({
        title: "Período selecionado via DateRangePicker",
        description: `${format(range.from, "dd/MM/yyyy")} - ${format(range.to, "dd/MM/yyyy")}`,
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Date Picker</h1>
        <p className="text-muted-foreground">
          Componentes avançados de seleção de data com calendário interativo e múltiplas funcionalidades
        </p>
      </div>

      {/* Tabs para organizar os exemplos */}
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Básico</TabsTrigger>
          <TabsTrigger value="advanced">Avançado</TabsTrigger>
          <TabsTrigger value="examples">Exemplos</TabsTrigger>
          <TabsTrigger value="forms">Formulários</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Seleção Simples
                </CardTitle>
                <CardDescription>
                  Permite selecionar uma única data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DatePicker
                  selected={singleDate}
                  onSelect={setSingleDate}
                  placeholder="Selecionar data"
                />
                {singleDate && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm">
                      <strong>Data selecionada:</strong><br />
                      {format(singleDate, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Seleção Múltipla
                </CardTitle>
                <CardDescription>
                  Permite selecionar múltiplas datas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MultipleDatePicker
                  selected={multipleDates}
                  onSelect={setMultipleDates}
                  placeholder="Selecionar múltiplas datas"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Seleção de Período
                </CardTitle>
                <CardDescription>
                  Permite selecionar um intervalo de datas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DateRangePicker
                  selected={rangeDate}
                  onSelect={handleRangeChange}
                  placeholder="Selecionar período"
                />
                {rangeDate?.from && rangeDate?.to && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm">
                      <strong>Período:</strong><br />
                      De {format(rangeDate.from, "dd/MM/yyyy", { locale: ptBR })}<br />
                      Até {format(rangeDate.to, "dd/MM/yyyy", { locale: ptBR })}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Teste simples do DateRangePicker */}
          <Card>
            <CardHeader>
              <CardTitle>Teste DateRangePicker</CardTitle>
              <CardDescription>
                Teste simples para verificar se o componente está funcionando
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Estado atual: {rangeDate ? 'Selecionado' : 'Não selecionado'}</Label>
                {rangeDate && (
                  <p className="text-sm">
                    De: {format(rangeDate.from, "dd/MM/yyyy")} -
                    Para: {format(rangeDate.to, "dd/MM/yyyy")}
                  </p>
                )}
              </div>
              <DateRangePicker
                selected={rangeDate}
                onSelect={(range) => {
                  console.log('Teste - onSelect chamado:', range);
                  setRangeDate(range);
                }}
                placeholder="Teste de seleção"
              />
              <Button
                onClick={() => {
                  console.log('Teste - resetando range');
                  setRangeDate(undefined);
                }}
                variant="outline"
              >
                Resetar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Datas Futuras
                </CardTitle>
                <CardDescription>
                  Restrição para selecionar apenas datas futuras
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DatePicker
                  selected={futureDate}
                  onSelect={setFutureDate}
                  placeholder="Selecionar data futura"
                  disablePast={true}
                />
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Restrição:</strong> Apenas datas futuras podem ser selecionadas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Datas Passadas
                </CardTitle>
                <CardDescription>
                  Restrição para selecionar apenas datas passadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DatePicker
                  selected={pastDate}
                  onSelect={setPastDate}
                  placeholder="Selecionar data passada"
                  disableFuture={true}
                />
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Restrição:</strong> Apenas datas passadas podem ser selecionadas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarLucide className="h-5 w-5" />
                Calendário Inline
              </CardTitle>
              <CardDescription>
                Calendário sempre visível para seleção direta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Label>Data selecionada: {format(inlineDate, "dd/MM/yyyy", { locale: ptBR })}</Label>
                  <Switch
                    checked={showWeekNumbers}
                    onCheckedChange={setShowWeekNumbers}
                  />
                  <Label className="text-sm">Mostrar números da semana</Label>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setInlineDate(subMonths(inlineDate, 1))}
                    className="p-2 hover:bg-accent rounded"
                  >
                    ←
                  </button>
                  <span className="font-medium">
                    {format(inlineDate, "MMMM yyyy", { locale: ptBR })}
                  </span>
                  <button
                    onClick={() => setInlineDate(addMonths(inlineDate, 1))}
                    className="p-2 hover:bg-accent rounded"
                  >
                    →
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-xs">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(day => (
                    <div key={day} className="p-2 text-center font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: new Date(inlineDate.getFullYear(), inlineDate.getMonth(), 1).getDay() }, (_, i) => (
                    <div key={`empty-${i}`} className="p-2" />
                  ))}

                  {Array.from({ length: new Date(inlineDate.getFullYear(), inlineDate.getMonth() + 1, 0).getDate() }, (_, i) => {
                    const date = new Date(inlineDate.getFullYear(), inlineDate.getMonth(), i + 1);
                    const isSelected = isSameDay(date, inlineDate);
                    const isCurrentDay = isToday(date);

                    return (
                      <button
                        key={i}
                        onClick={() => setInlineDate(date)}
                        className={cn(
                          "p-2 rounded hover:bg-accent",
                          isSelected && "bg-primary text-primary-foreground",
                          isCurrentDay && !isSelected && "border-2 border-primary"
                        )}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Datas Restritas
              </CardTitle>
              <CardDescription>
                Date picker com datas específicas desabilitadas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <DatePicker
                selected={restrictedDate}
                onSelect={setRestrictedDate}
                placeholder="Selecionar data (fins de semana desabilitados)"
                disabledDates={[
                  new Date(2024, 11, 7), // Sábado
                  new Date(2024, 11, 8), // Domingo
                  new Date(2024, 11, 14), // Sábado
                  new Date(2024, 11, 15), // Domingo
                  new Date(2024, 11, 21), // Sábado
                  new Date(2024, 11, 22), // Domingo
                  new Date(2024, 11, 28), // Sábado
                  new Date(2024, 11, 29), // Domingo
                ]}
              />
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Restrição:</strong> Fins de semana estão desabilitados
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Presets Rápidos
              </CardTitle>
              <CardDescription>
                Seleção rápida de períodos comuns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuickDatePresets onSelect={handleQuickPreset} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Agendamento de Reunião
                </CardTitle>
                <CardDescription>
                  Exemplo prático para agendamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Data da Reunião</Label>
                  <DatePicker
                    selected={singleDate}
                    onSelect={setSingleDate}
                    placeholder="Selecionar data da reunião"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Horário</Label>
                  <Input type="time" placeholder="Selecionar horário" />
                </div>
                <div className="space-y-2">
                  <Label>Duração</Label>
                  <select className="w-full p-2 border rounded">
                    <option>30 minutos</option>
                    <option>1 hora</option>
                    <option>1.5 horas</option>
                    <option>2 horas</option>
                  </select>
                </div>
                <Button className="w-full">Agendar Reunião</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Relatório de Período
                </CardTitle>
                <CardDescription>
                  Exemplo para geração de relatórios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <QuickDatePresets onSelect={handleQuickPreset} />
                <Separator />
                <div className="space-y-2">
                  <Label>Período Personalizado</Label>
                  <DateRangePicker
                    selected={rangeDate}
                    onSelect={setRangeDate}
                    placeholder="Selecionar período personalizado"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Tipo de Relatório</Label>
                  <select className="w-full p-2 border rounded">
                    <option>Vendas</option>
                    <option>Usuários</option>
                    <option>Financeiro</option>
                    <option>Atividades</option>
                  </select>
                </div>
                <Button className="w-full">Gerar Relatório</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros Avançados
              </CardTitle>
              <CardDescription>
                Sistema de filtros com múltiplas datas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Datas de Início</Label>
                  <MultipleDatePicker
                    selected={multipleDates}
                    onSelect={setMultipleDates}
                    placeholder="Selecionar datas de início"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Período de Análise</Label>
                  <DateRangePicker
                    selected={rangeDate}
                    onSelect={setRangeDate}
                    placeholder="Período de análise"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Data de Referência</Label>
                  <DatePicker
                    selected={singleDate}
                    onSelect={setSingleDate}
                    placeholder="Data de referência"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button>Aplicar Filtros</Button>
                <Button variant="outline">Limpar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Formulário com Validação</CardTitle>
              <CardDescription>
                Date picker integrado com React Hook Form e validação Zod
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="birthDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Data de Nascimento</FormLabel>
                          <FormControl>
                            <DatePicker
                              selected={field.value}
                              onSelect={field.onChange}
                              placeholder="Selecionar data de nascimento"
                            />
                          </FormControl>
                          <FormDescription>
                            Sua data de nascimento é usada para calcular sua idade.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Data de Início</FormLabel>
                          <FormControl>
                            <DatePicker
                              selected={field.value}
                              onSelect={field.onChange}
                              placeholder="Selecionar data de início"
                            />
                          </FormControl>
                          <FormDescription>
                            Data de início do projeto ou atividade.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Data do Evento</FormLabel>
                          <FormControl>
                            <DatePicker
                              selected={field.value}
                              onSelect={field.onChange}
                              placeholder="Selecionar data do evento"
                            />
                          </FormControl>
                          <FormDescription>
                            Data em que o evento acontecerá.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="reminderDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Data do Lembrete (Opcional)</FormLabel>
                          <FormControl>
                            <DatePicker
                              selected={field.value}
                              onSelect={field.onChange}
                              placeholder="Selecionar data do lembrete"
                            />
                          </FormControl>
                          <FormDescription>
                            Data para enviar um lembrete sobre o evento.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    Enviar Formulário
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Diretrizes de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarLucide className="h-5 w-5 text-green-600" />
                <span>Boas Práticas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Use formatação de data consistente (dd/MM/yyyy)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Forneça feedback visual para datas selecionadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Use validação adequada para campos obrigatórios</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Implemente restrições quando necessário</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Use localização apropriada (pt-BR)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Ofereça presets para períodos comuns</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarLucide className="h-5 w-5 text-orange-600" />
                <span>Considerações</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Teste em diferentes dispositivos e tamanhos de tela</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Considere fuso horário em aplicações globais</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Forneça alternativas para entrada manual</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Implemente navegação por teclado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Use ARIA labels para acessibilidade</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Considere performance com muitas datas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}