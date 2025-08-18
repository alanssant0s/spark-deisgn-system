import { ErrorPageProps } from './BaseErrorPage';
import { Home, Search, FileQuestion, Server, Bug, Shield, Lock, User, LogIn, HelpCircle } from 'lucide-react';

export const errorConfigs = {
    notFound: (): ErrorPageProps => ({
        errorCode: "404",
        title: "Página Não Encontrada",
        description: "Ops! A página que você está procurando não existe ou foi movida.",
        icon: <FileQuestion className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "blue-600",
            secondary: "blue-100",
            background: "blue-50",
            border: "blue-200"
        },
        suggestions: [
            {
                title: "Dashboard",
                path: "/",
                icon: <Home className="h-4 w-4" />,
                description: "Volte para a página inicial"
            },
            {
                title: "Componentes",
                path: "/components",
                icon: <Search className="h-4 w-4" />,
                description: "Explore nossos componentes"
            },
            {
                title: "Gráficos",
                path: "/components/charts",
                icon: <Search className="h-4 w-4" />,
                description: "Visualize dados com gráficos"
            },
            {
                title: "Design System",
                path: "/design-system",
                icon: <Search className="h-4 w-4" />,
                description: "Conheça nosso sistema de design"
            },
        ],
        technicalInfo: {
            errorId: "404-Resource-Not-Found",
            timestamp: new Date().toISOString()
        }
    }),

    serverError: (): ErrorPageProps => ({
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
        technicalInfo: {
            errorId: "500-Internal-Server-Error",
            timestamp: new Date().toISOString()
        }
    }),

    forbidden: (): ErrorPageProps => ({
        errorCode: "403",
        title: "Acesso Negado",
        description: "Você não tem permissão para acessar esta página ou recurso.",
        icon: <Shield className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "amber-600",
            secondary: "amber-100",
            background: "amber-50",
            border: "amber-200"
        },
        actions: {
            primary: {
                label: "Fazer Login",
                onClick: () => window.location.href = "/login",
                icon: <LogIn className="h-4 w-4" />
            }
        },
        technicalInfo: {
            errorId: "403-Forbidden-Access",
            timestamp: new Date().toISOString()
        }
    }),

    unauthorized: (): ErrorPageProps => ({
        errorCode: "401",
        title: "Não Autorizado",
        description: "Você precisa estar autenticado para acessar este recurso.",
        icon: <Lock className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "orange-600",
            secondary: "orange-100",
            background: "orange-50",
            border: "orange-200"
        },
        actions: {
            primary: {
                label: "Fazer Login",
                onClick: () => window.location.href = "/login",
                icon: <LogIn className="h-4 w-4" />
            }
        },
        technicalInfo: {
            errorId: "401-Unauthorized",
            timestamp: new Date().toISOString()
        }
    }),

    badRequest: (): ErrorPageProps => ({
        errorCode: "400",
        title: "Requisição Inválida",
        description: "A requisição enviada não pôde ser processada pelo servidor.",
        icon: <Bug className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "purple-600",
            secondary: "purple-100",
            background: "purple-50",
            border: "purple-200"
        },
        technicalInfo: {
            errorId: "400-Bad-Request",
            timestamp: new Date().toISOString()
        }
    }),

    gatewayTimeout: (): ErrorPageProps => ({
        errorCode: "504",
        title: "Timeout do Gateway",
        description: "O servidor não respondeu dentro do tempo limite esperado.",
        icon: <Server className="h-16 w-16 animate-pulse" />,
        colorScheme: {
            primary: "indigo-600",
            secondary: "indigo-100",
            background: "indigo-50",
            border: "indigo-200"
        },
        technicalInfo: {
            errorId: "504-Gateway-Timeout",
            timestamp: new Date().toISOString()
        }
    })
};

export const commonSuggestions = {
    dashboard: {
        title: "Dashboard",
        path: "/",
        icon: <Home className="h-4 w-4" />,
        description: "Volte para a página inicial"
    },
    components: {
        title: "Componentes",
        path: "/components",
        icon: <Search className="h-4 w-4" />,
        description: "Explore nossos componentes"
    },
    support: {
        title: "Suporte",
        path: "/support",
        icon: <HelpCircle className="h-4 w-4" />,
        description: "Entre em contato conosco"
    },
    profile: {
        title: "Perfil",
        path: "/profile",
        icon: <User className="h-4 w-4" />,
        description: "Verifique suas permissões"
    }
};

export const colorSchemes = {
    blue: {
        primary: "blue-600",
        secondary: "blue-100",
        background: "blue-50",
        border: "blue-200"
    },
    red: {
        primary: "red-600",
        secondary: "red-100",
        background: "red-50",
        border: "red-200"
    },
    amber: {
        primary: "amber-600",
        secondary: "amber-100",
        background: "amber-50",
        border: "amber-200"
    },
    orange: {
        primary: "orange-600",
        secondary: "orange-100",
        background: "orange-50",
        border: "orange-200"
    },
    purple: {
        primary: "purple-600",
        secondary: "purple-100",
        background: "purple-50",
        border: "purple-200"
    },
    indigo: {
        primary: "indigo-600",
        secondary: "indigo-100",
        background: "indigo-50",
        border: "indigo-200"
    }
};
