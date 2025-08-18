import { BaseErrorPage, ErrorPageProps } from "@/components/errors";
import { Home, Search, FileQuestion } from "lucide-react";

const NotFound = () => {
    const errorPageProps: ErrorPageProps = {
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
    };

    return <BaseErrorPage {...errorPageProps} />;
};

export default NotFound;
