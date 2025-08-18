import { ReactNode } from "react";

interface TroubleshootingStep {
    step: string;
    title: string;
    description: string;
    icon?: ReactNode;
}

interface TroubleshootingStepsProps {
    title: string;
    steps: TroubleshootingStep[];
    className?: string;
}

const TroubleshootingSteps = ({
    title,
    steps,
    className = ""
}: TroubleshootingStepsProps) => {
    return (
        <div className={`space-y-4 ${className}`}>
            <h3 className="text-lg font-semibold text-center">{title}</h3>
            <div className="grid gap-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                {step.icon && (
                                    <div className="text-muted-foreground">
                                        {step.icon}
                                    </div>
                                )}
                                <h4 className="font-medium text-sm">{step.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TroubleshootingSteps;
