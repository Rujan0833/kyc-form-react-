import React from 'react';
import { useTranslation } from 'react-i18next';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
    labelKey: string;
    error?: string;
    helperText?: string;
    as?: 'input' | 'select' | 'textarea';
    options?: { value: string; label: string }[];
}

const FormField = React.forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, FormFieldProps>(
    ({ labelKey, error, helperText, as = 'input', options, className, ...props }, ref) => {
        const { t } = useTranslation();

        const Component = as as any;

        return (
            <div className={cn('flex flex-col gap-1.5 w-full', className)}>
                <label className="text-sm font-medium text-gray-700 flex flex-col">
                    <span className="text-gray-900">{t(`kyc.fields.${labelKey}`)}</span>
                    {/* This matches the bilingual physical form requirement */}
                    <span className="text-xs text-gray-400 font-normal uppercase italic">
                        {labelKey}
                    </span>
                </label>

                <Component
                    ref={ref}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
                        error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
                    )}
                    {...props}
                >
                    {as === 'select' && options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </Component>

                {error ? (
                    <p className="text-xs text-red-500 font-medium">{error}</p>
                ) : helperText ? (
                    <p className="text-xs text-gray-500">{helperText}</p>
                ) : null}
            </div>
        );
    }
);

FormField.displayName = 'FormField';

export { FormField };
