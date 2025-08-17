import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
    Wrench,
    Clock,
    Bell,
    CheckCircle,
    AlertTriangle,
    RefreshCw,
    Twitter,
    Mail,
    Globe
} from "lucide-react";
import { useState, useEffect } from "react";

const Maintenance = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(65);
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 15,
        seconds: 30
    });

    // Simula progresso da manutenção
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 2;
                return newProgress > 95 ? 95 : newProgress;
            });
        }, 5000);

        return () => clearInterval(progressInterval);
    }, []);

    // Simula countdown
    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    const maintenanceTasks = [
        {
            task: "Atualização do banco de dados",
            status: "completed",
            time: "14:30"
        },
        {
            task: "Migração de servidores",
            status: "in-progress",
            time: "15:45"
        },
        {
            task: "Otimização de performance",
            status: "pending",
            time: "16:20"
        },
        {
            task: "Testes de segurança",
            status: "pending",
            time: "17:00"
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'in-progress':
                return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
            default:
                return <Clock className="h-4 w-4 text-gray-400" />;
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-100 text-green-800 border-green-200">Concluído</Badge>;
            case 'in-progress':
                return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Em Progresso</Badge>;
            default:
                return <Badge variant="outline">Pendente</Badge>;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-background flex items-center justify-center p-4">
            <div className="max-w-3xl w-full space-y-8">
                {/* Maintenance Illustration */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="p-8 bg-blue-100 rounded-full">
                            <Wrench className="h-24 w-24 text-blue-600 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Main Maintenance Card */}
                <Card className="border-2 border-blue-200">
                    <CardHeader className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <AlertTriangle className="h-6 w-6 text-blue-600" />
                            <CardTitle className="text-2xl text-blue-700">Manutenção Programada</CardTitle>
                        </div>
                        <CardDescription className="text-lg">
                            Estamos realizando melhorias em nossos sistemas para oferecer uma experiência ainda melhor.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Status Alert */}
                        <Alert className="border-blue-200 bg-blue-50">
                            <Bell className="h-4 w-4 text-blue-600" />
                            <AlertDescription className="text-blue-700">
                                <strong>Status:</strong> Manutenção em andamento. Alguns recursos podem estar temporariamente indisponíveis.
                            </AlertDescription>
                        </Alert>

                        {/* Countdown Timer */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                            <h3 className="text-lg font-semibold text-center mb-4 flex items-center justify-center gap-2">
                                <Clock className="h-5 w-5 text-blue-600" />
                                Tempo Estimado para Conclusão
                            </h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-white rounded-lg p-4 border border-blue-200">
                                    <div className="text-3xl font-bold text-blue-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-muted-foreground">Horas</div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-blue-200">
                                    <div className="text-3xl font-bold text-blue-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-muted-foreground">Minutos</div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-blue-200">
                                    <div className="text-3xl font-bold text-blue-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-muted-foreground">Segundos</div>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Progresso da Manutenção</span>
                                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-3" />
                        </div>

                        {/* Maintenance Tasks */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-center">Tarefas em Andamento</h3>
                            <div className="grid gap-3">
                                {maintenanceTasks.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-blue-200/30">
                                        <div className="flex-shrink-0">
                                            {getStatusIcon(item.status)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-medium text-sm">{item.task}</h4>
                                                {getStatusBadge(item.status)}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Horário estimado: {item.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What's Being Improved */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                            <h3 className="text-lg font-semibold mb-4 text-green-800">O que estamos melhorando:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="text-sm">Performance 40% mais rápida</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="text-sm">Novos recursos de gráficos</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="text-sm">Segurança aprimorada</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="text-sm">Interface mais intuitiva</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="text-sm">Melhor experiência mobile</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="text-sm">Correção de bugs reportados</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Updates */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-sm">Mantenha-se Atualizado</h4>
                                <div className="space-y-2">
                                    <Button variant="outline" size="sm" className="w-full justify-start">
                                        <Twitter className="h-4 w-4 mr-2" />
                                        Seguir no Twitter
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-full justify-start">
                                        <Globe className="h-4 w-4 mr-2" />
                                        Status da Plataforma
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-sm">Precisa de Ajuda?</h4>
                                <div className="space-y-2">
                                    <Button variant="outline" size="sm" className="w-full justify-start">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Contatar Suporte
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-full justify-start">
                                        <Bell className="h-4 w-4 mr-2" />
                                        Notificações por Email
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Message */}
                        <div className="text-center text-sm text-muted-foreground border-t pt-4">
                            <p>
                                Obrigado pela sua paciência. Voltaremos em breve com melhorias incríveis! 🚀
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Technical Info */}
                <div className="text-center">
                    <p className="text-xs text-muted-foreground font-mono">
                        Maintenance Window: {new Date().toLocaleDateString('pt-BR')} | ID: MAINT-{Date.now().toString().slice(-6)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
