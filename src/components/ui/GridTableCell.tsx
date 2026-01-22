import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GridTableCellProps {
    labelNe?: string;
    labelEn?: string;
    children?: React.ReactNode;
    className?: string;
    noBorderRight?: boolean;
    noBorderBottom?: boolean;
    isHeader?: boolean;
    colSpan?: number;
    rowSpan?: number;
    labelPosition?: 'top' | 'side';
}

const GridTableCell: React.FC<GridTableCellProps> = ({
    labelNe,
    labelEn,
    children,
    className,
    noBorderRight = false,
    noBorderBottom = false,
    isHeader = false,
    colSpan = 1,
    rowSpan = 1,
    labelPosition = 'top',
}) => {
    return (
        <div
            style={{
                gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
                gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
            }}
            className={cn(
                'p-1.5 flex flex-col justify-start border-gray-400',
                !noBorderRight && 'border-r',
                !noBorderBottom && 'border-b',
                isHeader && 'bg-[#00468b] text-white !text-white font-bold text-xs py-1.5',
                className
            )}
        >
            {(labelNe || labelEn) && (
                <div className={cn(
                    'flex mb-1',
                    labelPosition === 'top' ? 'flex-col' : 'flex-row gap-2 items-center'
                )}>
                    {labelNe && (
                        <span
                            className={cn('text-[10px] font-bold leading-tight', isHeader ? 'text-white' : 'text-gray-900')}
                            style={isHeader ? { color: 'white' } : {}}
                        >
                            {labelNe}
                        </span>
                    )}
                    {labelEn && (
                        <span
                            className={cn('text-[9px] italic leading-tight', isHeader ? 'text-white' : 'text-gray-500')}
                            style={isHeader ? { color: 'white' } : {}}
                        >
                            {labelEn}
                        </span>
                    )}
                </div>
            )}
            <div className="flex-1 w-full">
                {children}
            </div>
        </div>
    );
};

export { GridTableCell };
