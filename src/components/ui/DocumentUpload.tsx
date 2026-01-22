import React, { useState, useRef } from 'react';
import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from './Button';

interface DocumentUploadProps {
    label: string;
    accept?: string;
    onFileSelect: (file: File) => void;
    error?: string;
    value?: string | File;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ label, accept = 'image/*', onFileSelect, error, value }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) onFileSelect(file);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onFileSelect(file);
    };

    const fileName = value instanceof File ? value.name : typeof value === 'string' ? 'Existing Document' : null;

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
                    } ${error ? 'border-red-500 bg-red-50' : ''}`}
            >
                {fileName ? (
                    <div className="flex items-center gap-3 w-full">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded">
                            {accept.includes('image') ? <ImageIcon size={20} /> : <FileText size={20} />}
                        </div>
                        <span className="text-sm font-medium text-gray-700 truncate flex-1">{fileName}</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => {
                                if (fileInputRef.current) fileInputRef.current.value = '';
                                // Logic to clear would go here
                            }}
                        >
                            <X size={16} />
                        </Button>
                    </div>
                ) : (
                    <>
                        <Upload className="mb-2 h-8 w-8 text-gray-400" />
                        <p className="text-sm text-gray-600">
                            <button
                                type="button"
                                className="font-semibold text-blue-600 hover:text-blue-700 focus:outline-none"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Click to upload
                            </button>{' '}
                            or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG or PDF up to 5MB</p>
                    </>
                )}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={handleChange}
                />
            </div>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
};

export { DocumentUpload };
