import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
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
        <div className="min-h-screen bg-gray-200 py-10 flex flex-col items-center">
            {/* Language Switcher Fixed */}
            <div className="fixed top-6 right-8 z-[100] no-print">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 shadow-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-all"
                >
                    <Globe size={16} className="text-[#00468b]" />
                    <span className="font-bold text-[#00468b] text-[11px]">
                        {i18n.language === 'en' ? 'नेपाली' : 'English'}
                    </span>
                </Button>
            </div>

            {/* Page Container (A4 Width Approximation) */}
            <div className="w-full max-w-[1000px] bg-white shadow-2xl min-h-[1200px] flex flex-col overflow-hidden">
                <div className="p-6 sm:p-10 flex-1 overflow-x-auto overflow-y-visible">
                    {children}
                </div>

                {/* Print Instruction */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-center uppercase tracking-widest no-print">
                    R.B.B. SECURITIES COMPANY LTD. • OFFICIAL ACCOUNT OPENING FORM
                </div>
            </div>

            <footer className="mt-8 text-gray-500 text-xs text-center pb-10 no-print">
                <p>© 2026 R.B.B. Securities Company Ltd. All rights reserved.</p>
            </footer>
        </div>
    );
};

export { FormLayout };
