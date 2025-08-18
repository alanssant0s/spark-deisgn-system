import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export interface ErrorPageProps {
    errorCode: string;
    title: string;
    description: string;
    icon: ReactNode;
    colorScheme: {
        primary: string;
        secondary: string;
        background: string;
        border: string;
    };
    actions?: {
        primary?: {
            label: string;
            onClick: () => void;
            icon?: ReactNode;
        };
        secondary?: {
            label: string;
            onClick: () => void;
            icon?: ReactNode;
        };
    };
    children?: ReactNode;
    suggestions?: Array<{
        title: string;
        path: string;
        icon: ReactNode;
        description: string;
    }>;
    technicalInfo?: {
        errorId?: string;
        timestamp?: string;
        additionalInfo?: Record<string, string>;
    };
}

// Predefined class mappings for Tailwind CSS
const getColorClasses = (colorScheme: ErrorPageProps['colorScheme']) => {
    const colorMap: Record<string, any> = {
        'blue-600': {
            background: 'from-blue-50',
            primary: 'text-blue-600',
            primaryBg: 'bg-blue-600',
            primaryBg10: 'bg-blue-600/10',
            primary20: 'text-blue-600/20',
            border: 'border-blue-200',
            borderHover: 'hover:border-blue-600/50'
        },
        'red-600': {
            background: 'from-red-50',
            primary: 'text-red-600',
            primaryBg: 'bg-red-600',
            primaryBg10: 'bg-red-600/10',
            primary20: 'text-red-600/20',
            border: 'border-red-200',
            borderHover: 'hover:border-red-600/50'
        },
        'amber-600': {
            background: 'from-amber-50',
            primary: 'text-amber-600',
            primaryBg: 'bg-amber-600',
            primaryBg10: 'bg-amber-600/10',
            primary20: 'text-amber-600/20',
            border: 'border-amber-200',
            borderHover: 'hover:border-amber-600/50'
        },
        'orange-600': {
            background: 'from-orange-50',
            primary: 'text-orange-600',
            primaryBg: 'bg-orange-600',
            primaryBg10: 'bg-orange-600/10',
            primary20: 'text-orange-600/20',
            border: 'border-orange-200',
            borderHover: 'hover:border-orange-600/50'
        },
        'purple-600': {
            background: 'from-purple-50',
            primary: 'text-purple-600',
            primaryBg: 'bg-purple-600',
            primaryBg10: 'bg-purple-600/10',
            primary20: 'text-purple-600/20',
            border: 'border-purple-200',
            borderHover: 'hover:border-purple-600/50'
        },
        'indigo-600': {
            background: 'from-indigo-50',
            primary: 'text-indigo-600',
            primaryBg: 'bg-indigo-600',
            primaryBg10: 'bg-indigo-600/10',
            primary20: 'text-indigo-600/20',
            border: 'border-indigo-200',
            borderHover: 'hover:border-indigo-600/50'
        }
    };

    return colorMap[colorScheme.primary] || colorMap['blue-600'];
};

const BaseErrorPage = ({
    errorCode,
    title,
    description,
    icon,
    colorScheme,
    actions,
    children,
    suggestions,
    technicalInfo
}: ErrorPageProps) => {
    const navigate = useNavigate();
    const colors = getColorClasses(colorScheme);

    const handleGoHome = () => {
        navigate("/");
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br ${colors.background} to-background flex items-center justify-center p-4`}>
            <div className="max-w-2xl w-full space-y-8">
                {/* Error Illustration */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className={`text-9xl font-bold ${colors.primary20} select-none`}>
                            {errorCode}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className={colors.primary}>
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Error Card */}
                <Card className={`border-2 ${colors.border}`}>
                    <CardHeader className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <CardTitle className={`text-2xl ${colors.primary}`}>
                                {title}
                            </CardTitle>
                        </div>
                        <CardDescription className="text-lg">
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Custom Content */}
                        {children}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {actions?.primary && (
                                <Button
                                    onClick={actions.primary.onClick}
                                    className="flex items-center gap-2"
                                >
                                    {actions.primary.icon}
                                    {actions.primary.label}
                                </Button>
                            )}

                            {actions?.secondary && (
                                <Button
                                    variant="outline"
                                    onClick={actions.secondary.onClick}
                                    className="flex items-center gap-2"
                                >
                                    {actions.secondary.icon}
                                    {actions.secondary.label}
                                </Button>
                            )}

                            {/* Default actions if none provided */}
                            {!actions && (
                                <>
                                    <Button onClick={handleGoHome} className="flex items-center gap-2">
                                        <Home className="h-4 w-4" />
                                        Ir para Dashboard
                                    </Button>
                                    <Button variant="outline" onClick={handleGoBack} className="flex items-center gap-2">
                                        <ArrowLeft className="h-4 w-4" />
                                        Voltar
                                    </Button>
                                </>
                            )}
                        </div>

                        {/* Suggestions */}
                        {suggestions && suggestions.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-center">Que tal explorar estas páginas?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {suggestions.map((suggestion, index) => (
                                        <Card
                                            key={index}
                                            className={`cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105 ${colors.border} ${colors.borderHover}`}
                                            onClick={() => navigate(suggestion.path)}
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 ${colors.primaryBg10} rounded-lg`}>
                                                        <div className={colors.primary}>
                                                            {suggestion.icon}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-medium text-sm">{suggestion.title}</h4>
                                                        <p className="text-xs text-muted-foreground mt-1">
                                                            {suggestion.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Help Text */}
                        <div className="text-center text-sm text-muted-foreground border-t pt-4">
                            <p>
                                Se você acredita que isso é um erro, entre em contato com o suporte ou
                                <Button variant="link" className="p-0 h-auto text-sm ml-1" onClick={handleGoHome}>
                                    retorne ao início
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Technical Info */}
                {technicalInfo && (
                    <div className="text-center">
                        <p className="text-xs text-muted-foreground font-mono">
                            Error Code: {errorCode}
                            {technicalInfo.errorId && ` | ID: ${technicalInfo.errorId}`}
                            {technicalInfo.timestamp && ` | ${technicalInfo.timestamp}`}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BaseErrorPage;
