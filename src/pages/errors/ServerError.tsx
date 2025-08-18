import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BaseErrorPage, ErrorPageProps, ErrorAlert, TroubleshootingSteps, TechnicalDetails } from "@/components/errors";
import { RefreshCw, Server, Bug, HelpCircle } from "lucide-react";

const ServerError = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        // Simula um delay de refresh
        await new Promise(resolve => setTimeout(resolve, 1500));
        window.location.reload();
    };

    const troubleshootingSteps = [
        {
            step: "1",
            title: "Aguarde alguns minutos",
            description: "O problema pode ser temporário e se resolver automaticamente."
        },
        {
            step: "2",
            title: "Atualize a página",
            description: "Pressione Ctrl+F5 (ou Cmd+R no Mac) para recarregar completamente."
        },
        {
            step: "3",
            title: "Limpe o cache",
            description: "Limpe o cache do navegador e tente novamente."
        },
        {
            step: "4",
            title: "Entre em contato",
            description: "Se o problema persistir, entre em contato com o suporte técnico."
        }
    ];

    const technicalDetails = {
        "Error ID": `500-${Date.now().toString().slice(-8)}`,
        "Timestamp": new Date().toISOString(),
        "User Agent": `${navigator.userAgent.slice(0, 50)}...`,
        "URL": window.location.href
    };

    const errorPageProps: ErrorPageProps = {
        errorCode: "500",
        title: "Erro Interno do Servidor",
        description: "Algo deu errado em nossos servidores. Nossa equipe já foi notificada e está trabalhando para resolver o problema.",
        icon: <Server className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "red-600",
            secondary: "red-100",
            background: "red-50",
            border: "red-200"
        },
        actions: {
            primary: {
                label: "Tentar Novamente",
                onClick: handleRefresh,
                icon: <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            }
        },
        children: (
            <>
                <ErrorAlert
                    icon={<Bug className="h-4 w-4" />}
                    title="Status:"
                    description="Estamos investigando este problema. Tempo estimado de resolução: 15-30 minutos."
                    variant="destructive"
                />

                <TroubleshootingSteps
                    title="O que você pode fazer:"
                    steps={troubleshootingSteps}
                />

                <TechnicalDetails details={technicalDetails} />
            </>
        ),
        technicalInfo: {
            errorId: "500-Internal-Server-Error",
            timestamp: new Date().toISOString()
        }
    };

    return <BaseErrorPage {...errorPageProps} />;
};

export default ServerError;
