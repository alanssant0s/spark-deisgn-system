import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, RefreshCw, Home, Bug, Copy, CheckCircle } from "lucide-react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
    copied: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
        copied: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
            errorInfo: null,
            copied: false
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    private handleReload = () => {
        window.location.reload();
    };

    private handleGoHome = () => {
        window.location.href = '/';
    };

    private handleCopyError = async () => {
        const errorText = `
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
    `.trim();

        try {
            await navigator.clipboard.writeText(errorText);
            this.setState({ copied: true });
            setTimeout(() => this.setState({ copied: false }), 2000);
        } catch (err) {
            console.error('Failed to copy error details:', err);
        }
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-gradient-to-br from-red-50 to-background flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full space-y-6">
                        {/* Error Illustration */}
                        <div className="text-center">
                            <div className="relative inline-block">
                                <div className="p-6 bg-red-100 rounded-full">
                                    <Bug className="h-16 w-16 text-red-600 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Main Error Card */}
                        <Card className="border-2 border-red-200">
                            <CardHeader className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <AlertTriangle className="h-6 w-6 text-red-600" />
                                    <CardTitle className="text-2xl text-red-700">Algo deu errado</CardTitle>
                                </div>
                                <CardDescription className="text-lg">
                                    Ocorreu um erro inesperado na aplicação. Nossa equipe foi notificada automaticamente.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Alert */}
                                <Alert className="border-red-200 bg-red-50">
                                    <AlertTriangle className="h-4 w-4 text-red-600" />
                                    <AlertDescription className="text-red-700">
                                        <strong>Erro detectado:</strong> {this.state.error?.message || 'Erro desconhecido'}
                                    </AlertDescription>
                                </Alert>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button onClick={this.handleReload} className="flex items-center gap-2">
                                        <RefreshCw className="h-4 w-4" />
                                        Recarregar Página
                                    </Button>
                                    <Button variant="outline" onClick={this.handleGoHome} className="flex items-center gap-2">
                                        <Home className="h-4 w-4" />
                                        Ir para Início
                                    </Button>
                                </div>

                                {/* Error Details for Developers */}
                                {(this.state.error || this.state.errorInfo) && (
                                    <details className="border rounded-lg">
                                        <summary className="p-4 cursor-pointer hover:bg-muted/50 rounded-lg font-medium text-sm">
                                            Detalhes do Erro (para desenvolvedores)
                                        </summary>
                                        <div className="p-4 border-t bg-muted/20 space-y-4">
                                            {/* Copy Button */}
                                            <div className="flex justify-end">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={this.handleCopyError}
                                                    className="flex items-center gap-2"
                                                >
                                                    {this.state.copied ? (
                                                        <>
                                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                                            Copiado!
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="h-4 w-4" />
                                                            Copiar Detalhes
                                                        </>
                                                    )}
                                                </Button>
                                            </div>

                                            {/* Error Message */}
                                            {this.state.error && (
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2">Mensagem de Erro:</h4>
                                                    <pre className="text-xs bg-red-50 p-3 rounded border overflow-auto">
                                                        {this.state.error.message}
                                                    </pre>
                                                </div>
                                            )}

                                            {/* Stack Trace */}
                                            {this.state.error?.stack && (
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>
                                                    <pre className="text-xs bg-muted p-3 rounded border overflow-auto max-h-40">
                                                        {this.state.error.stack}
                                                    </pre>
                                                </div>
                                            )}

                                            {/* Component Stack */}
                                            {this.state.errorInfo?.componentStack && (
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2">Component Stack:</h4>
                                                    <pre className="text-xs bg-muted p-3 rounded border overflow-auto max-h-40">
                                                        {this.state.errorInfo.componentStack}
                                                    </pre>
                                                </div>
                                            )}

                                            {/* Additional Info */}
                                            <div>
                                                <h4 className="font-semibold text-sm mb-2">Informações Adicionais:</h4>
                                                <div className="text-xs space-y-1 bg-muted p-3 rounded border">
                                                    <div><strong>Timestamp:</strong> {new Date().toISOString()}</div>
                                                    <div><strong>URL:</strong> {window.location.href}</div>
                                                    <div><strong>User Agent:</strong> {navigator.userAgent.slice(0, 100)}...</div>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                )}

                                {/* Help Text */}
                                <div className="text-center text-sm text-muted-foreground border-t pt-4">
                                    <p>
                                        Se o problema persistir, entre em contato com o suporte técnico.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Error ID */}
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground font-mono">
                                Error ID: ERR-{Date.now().toString().slice(-8)}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
