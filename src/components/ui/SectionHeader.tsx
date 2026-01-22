import React from 'react';
import { useTranslation } from 'react-i18next';

interface SectionHeaderProps {
    titleKey: string;
    subtitleKey?: string;
    stepIndicator?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ titleKey, subtitleKey, stepIndicator }) => {
    const { t } = useTranslation();

    return (
        <div className="mb-8 border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        {t(`kyc.${titleKey}`)}
                    </h2>
                    {subtitleKey && (
                        <p className="mt-1 text-sm text-gray-500 uppercase tracking-wide">
                            {t(`kyc.${subtitleKey}`)}
                        </p>
                    )}
                </div>
                {stepIndicator && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {stepIndicator}
                    </div>
                )}
            </div>
        </div>
    );
};

export { SectionHeader };
