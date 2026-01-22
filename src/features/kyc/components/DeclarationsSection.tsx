import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GridTableCell } from '../../../components/ui/GridTableCell';
import { Button } from '../../../components/ui/Button';
import { KYCFormData } from '../schema';

interface DeclarationsSectionProps {
    onNext: () => void;
    onPrev: () => void;
}

const DeclarationsSection: React.FC<DeclarationsSectionProps> = ({ onNext, onPrev }) => {
    const { t } = useTranslation();
    const { register } = useFormContext<KYCFormData>();

    const amlQuestions = [
        { ne: '१. के तपाई राजनीतिक वा उच्च पदस्थ व्यक्ति हुनुहुन्छ ?', en: 'Are you a PEP (Politically Exposed Person)?' },
        { ne: '२. के तपाई राजनीतिक वा उच्च पदस्थ व्यक्ति संग सम्बन्धित हुनुहुन्छ ?', en: 'Are you related to a PEP?' },
        { ne: '३. के तपाईको हितधिकारी व्यक्ति छ ?', en: 'Do you have a Beneficial Owner?' },
        { ne: '४. के तपाई विगतमा कुनै सम्बद्ध कसुरमा दोषी प्रमाणित हुनुभएको छ ?', en: 'Have you been convicted of any crime in the past?' },
        { ne: '५. के यस कम्पनीबाट हुने कारोवारका वास्तविक धनि फरक व्यक्ति हुन् ?', en: 'Are you the ultimate beneficial owner of the transactions?' },
    ];

    return (
        <div className="animate-in fade-in duration-500">

            {/* SECTION: AML/KYC QUESTIONS */}
            <div className="border-l border-t border-gray-400 mb-6 font-medium">
                <GridTableCell
                    labelNe="सम्पत्ति शुद्धिकरण तथा आतङ्ककारी कृयाकलापमा वित्तिय निवारण सम्बन्धि थप विवरण:"
                    labelEn="Additional Information on AML/CFT"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                {amlQuestions.map((q, idx) => (
                    <div key={idx} className="grid grid-cols-12 text-[10px]">
                        <GridTableCell labelNe={q.ne} labelEn={q.en} colSpan={9} />
                        <GridTableCell colSpan={3} noBorderRight className="flex gap-4 items-center justify-center">
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="radio" value="yes" {...register(`amlQuestions.${idx}` as any)} />
                                <b>छ (Yes)</b>
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="radio" value="no" {...register(`amlQuestions.${idx}` as any)} />
                                <b>छैन (No)</b>
                            </label>
                        </GridTableCell>
                    </div>
                ))}
            </div>

            {/* SECTION: ATTACHMENTS */}
            <div className="border border-gray-400 p-4 mb-6 bg-gray-50/50">
                <h3 className="text-xs font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">
                    संलग्न गर्नु पर्ने कागजात (Documents to be attached)
                </h3>
                <ul className="text-[10px] space-y-1 ml-4 list-decimal underline-offset-2">
                    <li>नेपाली नागरिकहरुको हकमा नागरिकताको प्रमाणपत्रको प्रतिलिपी ।</li>
                    <li>अन्य देशको नागरिकको हकमा पासपोर्टको प्रतिलिपी ।</li>
                    <li>नाबालकको हकमा संरक्षक तथा नाबालक दुवैको फोटो ।</li>
                    <li>कानूनी संरक्षक भए सो सम्बन्धी कागजात ।</li>
                    <li>आमा वा बाबु संरक्षक भएमा छोरा वा छोरीको जन्मदर्ता प्रमाणपत्र प्रतिलिपी ।</li>
                </ul>
            </div>

            {/* SECTION: THUMBPRINTS & SIGNATURE */}
            <div className="grid grid-cols-12 border border-gray-400 mb-6">
                <div className="col-span-12 p-2 border-b border-gray-400 text-center bg-gray-100 text-[10px] font-bold">
                    औंठाछाप (Thumb Print)
                </div>
                <div className="col-span-6 border-r border-gray-400 h-32 flex flex-col items-center justify-end pb-2">
                    <div className="w-20 h-24 border border-dashed border-gray-400 mb-2"></div>
                    <span className="text-[9px] font-bold">दाँया (Right)</span>
                </div>
                <div className="col-span-6 h-32 flex flex-col items-center justify-end pb-2">
                    <div className="w-20 h-24 border border-dashed border-gray-400 mb-2"></div>
                    <span className="text-[9px] font-bold">बाँया (Left)</span>
                </div>
            </div>

            {/* OFFICIAL USE ONLY REPEAT */}
            <div className="bg-[#da291c] text-white py-1.5 px-4 text-center mb-0 border border-red-800">
                <h4 className="text-sm font-bold leading-tight uppercase !text-white">
                    कार्यालय प्रयोजनका लागि मात्र (For Official Use Only)
                </h4>
            </div>
            <div className="grid grid-cols-2 border border-gray-400 h-24">
                <div className="border-r border-gray-400 p-2 text-[9px]">
                    <p>रुजु गर्ने :</p>
                    <p className="mt-2 font-bold">Verified By:</p>
                </div>
                <div className="p-2 text-[9px]">
                    <p>प्रमाणित गर्ने :</p>
                    <p className="mt-2 font-bold">Approved By:</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center no-print">
                <Button variant="ghost" onClick={onPrev} className="px-8 text-[#00468b] font-bold hover:bg-blue-50">
                    {t('kyc.actions.previous')}
                </Button>
                <Button onClick={onNext} size="lg" className="min-w-[140px] px-12 bg-[#00468b] hover:bg-blue-900 shadow-md">
                    {t('kyc.actions.next')}
                </Button>
            </div>
        </div>
    );
};

export { DeclarationsSection };
