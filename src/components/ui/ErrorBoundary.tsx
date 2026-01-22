import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { Button } from './Button';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center p-12 text-center bg-red-50 rounded-lg border border-red-100">
                    <div className="p-3 bg-red-100 text-red-600 rounded-full mb-4">
                        <AlertTriangle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h3>
                    <p className="text-gray-600 mb-6 max-w-sm">
                        We encountered an error while loading this part of the form. Please try refreshing or clearing your progress.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            onClick={() => window.location.reload()}
                            className="flex items-center gap-2"
                        >
                            <RefreshCcw size={16} />
                            Reload Page
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                localStorage.removeItem('kyc-form-storage');
                                window.location.reload();
                            }}
                        >
                            Reset Progress
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export { ErrorBoundary };
