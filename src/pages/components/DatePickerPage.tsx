import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Calendar as CalendarLucide } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
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
import { Badge } from "@/components/ui/badge";
import { DateRange } from "react-day-picker";

// Form schema for date picker form example
const DateFormSchema = z.object({
  birthDate: z.date({
    required_error: "Data de nascimento é obrigatória.",
  }),
  startDate: z.date({
    required_error: "Data de início é obrigatória.",
  }),
  endDate: z.date().optional(),
});

export default function DatePickerPage() {
  const [singleDate, setSingleDate] = useState<Date>();
  const [multipleDate, setMultipleDate] = useState<Date[]>([]);
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>();
  const [disabledDate, setDisabledDate] = useState<Date>();

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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Date Picker</h1>
        <p className="text-muted-foreground">
          Componentes de seleção de data com calendário interativo
        </p>
      </div>

      {/* Basic Date Picker */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Date Picker Básico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Seleção Simples</CardTitle>
              <CardDescription>
                Permite selecionar uma única data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Data Selecionada</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !singleDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {singleDate ? (
                        format(singleDate, "dd/MM/yyyy", { locale: ptBR })
                      ) : (
                        <span>Selecionar data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={singleDate}
                      onSelect={setSingleDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
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
              <CardTitle>Seleção Múltipla</CardTitle>
              <CardDescription>
                Permite selecionar múltiplas datas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Datas Selecionadas</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {multipleDate.length > 0 ? (
                        `${multipleDate.length} data(s) selecionada(s)`
                      ) : (
                        <span className="text-muted-foreground">Selecionar datas</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="multiple"
                      selected={multipleDate}
                      onSelect={setMultipleDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {multipleDate.length > 0 && (
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {multipleDate.map((date, index) => (
                      <Badge key={index} variant="secondary">
                        {format(date, "dd/MM", { locale: ptBR })}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMultipleDate([])}
                    className="w-full"
                  >
                    Limpar seleção
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seleção de Período</CardTitle>
              <CardDescription>
                Permite selecionar um intervalo de datas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Período Selecionado</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !rangeDate?.from && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {rangeDate?.from ? (
                        rangeDate.to ? (
                          <>
                            {format(rangeDate.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                            {format(rangeDate.to, "dd/MM/yyyy", { locale: ptBR })}
                          </>
                        ) : (
                          format(rangeDate.from, "dd/MM/yyyy", { locale: ptBR })
                        )
                      ) : (
                        <span>Selecionar período</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      defaultMonth={rangeDate?.from}
                      selected={rangeDate}
                      onSelect={setRangeDate}
                      numberOfMonths={2}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
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
      </section>

      {/* Advanced Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Exemplos Avançados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Com Restrições</CardTitle>
              <CardDescription>
                Date picker com datas desabilitadas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Data (somente futuras)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !disabledDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {disabledDate ? (
                        format(disabledDate, "dd/MM/yyyy", { locale: ptBR })
                      ) : (
                        <span>Selecionar data futura</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={disabledDate}
                      onSelect={setDisabledDate}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className="p-3 pointer-events-auto"
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Restrição:</strong> Apenas datas futuras podem ser selecionadas
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendário Inline</CardTitle>
              <CardDescription>
                Calendário sempre visível
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
                className="rounded-md border pointer-events-auto"
                locale={ptBR}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Integration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Integração com Formulários</h2>
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
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy", { locale: ptBR })
                                ) : (
                                  <span>Selecionar data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="p-3 pointer-events-auto"
                              locale={ptBR}
                            />
                          </PopoverContent>
                        </Popover>
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
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy", { locale: ptBR })
                                ) : (
                                  <span>Selecionar data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              className="p-3 pointer-events-auto"
                              locale={ptBR}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Data de início do projeto ou atividade.
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
      </section>

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
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}