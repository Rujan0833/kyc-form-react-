import React from 'react';
import { Check } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface StepProgressProps {
    steps: string[];
    currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
    return (
        <div className="mb-12">
            <div className="flex items-center justify-between relative">
                {/* Line background */}
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;

                    return (
                        <div key={step} className="flex flex-col items-center flex-1">
                            <div
                                className={cn(
                                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                                    isActive
                                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                                        : isCompleted
                                            ? 'bg-green-500 text-white'
                                            : 'bg-white border-2 border-gray-200 text-gray-400'
                                )}
                            >
                                {isCompleted ? <Check size={20} /> : index + 1}
                            </div>
                            <span
                                className={cn(
                                    'mt-3 text-xs font-semibold uppercase tracking-wider text-center',
                                    isActive ? 'text-blue-600' : 'text-gray-400'
                                )}
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { StepProgress };
