import React from 'react';

const LoadingSkeleton: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
    );
};

const FormSectionSkeleton: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-8">
                <div className="space-y-2">
                    <LoadingSkeleton className="h-8 w-64" />
                    <LoadingSkeleton className="h-4 w-48" />
                </div>
                <LoadingSkeleton className="h-8 w-24 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <LoadingSkeleton className="h-4 w-24" />
                        <LoadingSkeleton className="h-10 w-full" />
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-12 pt-6 border-t">
                <LoadingSkeleton className="h-10 w-32" />
                <LoadingSkeleton className="h-10 w-32" />
            </div>
        </div>
    );
};

export { LoadingSkeleton, FormSectionSkeleton };
