import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface FormLayoutProps {
    children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ne' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            R
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-gray-900 leading-tight">
                                R.B.B. SECURITIES
                            </h1>
                            <p className="text-[10px] text-gray-500 font-medium">COMPANY LTD.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleLanguage}
                            className="flex items-center gap-2"
                        >
                            <Globe size={16} />
                            {i18n.language === 'en' ? 'नेपाली' : 'English'}
                        </Button>
                        <div className="hidden sm:flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full text-xs font-medium">
                            <ShieldCheck size={14} />
                            Secure Form
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[600px] flex flex-col">
                    <div className="p-8 sm:p-10 flex-1">
                        {children}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-400 text-xs border-t border-gray-100 bg-white mt-10">
                <p>© 2026 R.B.B. Securities Company Ltd. All rights reserved.</p>
                <p className="mt-1">Durbarmarg, Kathmandu, Nepal</p>
            </footer>
        </div>
    );
};

export { FormLayout };
