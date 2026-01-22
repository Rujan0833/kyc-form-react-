import React from 'react';

interface CharacterInputProps {
    length: number;
    value?: string;
    onChange?: (val: string) => void;
    labelEn?: string;
    labelNe?: string;
    className?: string;
}

const CharacterInput: React.FC<CharacterInputProps> = ({
    length,
    value = '',
    onChange,
    labelEn,
    labelNe,
    className
}) => {
    const chars = value.padEnd(length, ' ').slice(0, length).split('');

    const handleChange = (index: number, char: string) => {
        if (!onChange) return;
        const newValue = value.split('');
        newValue[index] = char.toUpperCase().slice(-1);
        onChange(newValue.join('').trimEnd());
    };

    return (
        <div className={`flex flex-col ${className}`}>
            {(labelEn || labelNe) && (
                <div className="flex gap-2 text-[10px] items-baseline mb-1">
                    {labelNe && <span className="font-bold text-gray-700">{labelNe} :</span>}
                    {labelEn && <span className="text-gray-500 font-medium italic">{labelEn} :</span>}
                </div>
            )}
            <div
                className="grid border-l border-t border-b border-gray-400 w-full bg-white"
                style={{ gridTemplateColumns: `repeat(${length}, 1fr)` }}
            >
                {Array.from({ length }).map((_, i) => (
                    <input
                        key={i}
                        type="text"
                        maxLength={1}
                        value={chars[i] === ' ' ? '' : chars[i]}
                        onChange={(e) => handleChange(i, e.target.value)}
                        className="w-full h-5 flex-shrink-0 border-r border-gray-400 text-center text-[10px] font-mono font-bold focus:bg-blue-50 focus:outline-none uppercase bg-white"
                    />
                ))}
            </div>
        </div>
    );
};

export { CharacterInput };
