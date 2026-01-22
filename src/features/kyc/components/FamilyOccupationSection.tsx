import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GridTableCell } from '../../../components/ui/GridTableCell';
import { CharacterInput } from '../../../components/ui/CharacterInput';
import { Button } from '../../../components/ui/Button';
import { KYCFormData } from '../schema';

interface FamilyOccupationSectionProps {
    onNext: () => void;
    onPrev: () => void;
}

const FamilyOccupationSection: React.FC<FamilyOccupationSectionProps> = ({ onNext, onPrev }) => {
    const { t } = useTranslation();
    const { register } = useFormContext<KYCFormData>();

    const familyMembers = [
        { ne: 'बाजेको नाम', en: "Grand Father's Name", field: 'grandFatherName' },
        { ne: 'बुवाको नाम', en: "Father's Name", field: 'fatherName' },
        { ne: 'आमाको नाम', en: "Mother's Name", field: 'motherName' },
        { ne: 'पति/पत्नीको नाम', en: "Spouse's Name", field: 'spouseName' },
        { ne: 'छोराको नाम', en: "Son's Name", field: 'sonName' },
        { ne: 'छोरीको नाम (अविवाहित)', en: "Daughter's Name", field: 'daughterName' },
        { ne: 'बुहारीको नाम', en: "Daughter in-Law's Name", field: 'daughterInLawName' },
        { ne: 'ससुराको नाम', en: "Father in Law's Name", field: 'fatherInLawName' },
        { ne: 'सासुको नाम', en: "Mother in Law's Name", field: 'motherInLawName' },
    ];

    return (
        <div className="animate-in fade-in duration-500">
            <div
                className="bg-[#00468b] py-1.5 px-4 rounded-sm text-center mb-4 shadow-sm border border-blue-900"
                style={{ backgroundColor: '#00468b', color: 'white' }}
            >
                <h3 className="text-base font-bold leading-tight" style={{ color: 'white' }}>परिवारका सदस्यहरूको विवरण र पेशागत विवरण</h3>
                <p className="text-[11px] font-bold uppercase opacity-90" style={{ color: 'white' }}>Family Members and Occupation Details</p>
            </div>

            {/* SECTION: FAMILY MEMBERS */}
            <div className="border-l border-t border-gray-400 mb-6">
                <GridTableCell
                    labelNe="परिवारका सदस्यहरूको विवरण (ठाउँ नपुग भएमा थप गर्न सकिने)"
                    labelEn="(Details of Family Members)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                {familyMembers.map((member, idx) => (
                    <div key={idx} className="grid grid-cols-12">
                        <GridTableCell labelNe={member.ne} labelEn={`${member.en} (In Block Letter)`} colSpan={4} />
                        <GridTableCell colSpan={8} noBorderRight className="p-0 flex items-center">
                            <input {...register(`familyDetails.${member.field}`)} className="w-full h-full px-2 text-xs font-bold focus:bg-blue-50 focus:outline-none" />
                        </GridTableCell>
                    </div>
                ))}
            </div>

            {/* SECTION: BANK ACCOUNT DETAILS */}
            <div className="border-l border-t border-gray-400 mb-6">
                <GridTableCell
                    labelNe="बैंक खाताको विवरण"
                    labelEn="(Bank Account Details)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="बैंक खाताको किसिम" labelEn="Types of Bank Account" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="flex flex-row gap-8 items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="saving" {...register('bankDetails.accountType')} className="w-4 h-4 text-blue-600" />
                            <span className="text-[10px] font-bold">बचत खाता (Saving Account)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="current" {...register('bankDetails.accountType')} className="w-4 h-4 text-blue-600" />
                            <span className="text-[10px] font-bold">चल्ती खाता (Current Account)</span>
                        </label>
                    </GridTableCell>
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="बैंक खाता नम्बर" labelEn="Bank Account No:" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="p-0 flex items-center">
                        <input {...register('bankDetails.accountNumber')} className="w-full h-full px-2 text-xs font-bold focus:bg-blue-50 focus:outline-none" />
                    </GridTableCell>
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="बैंक खाता भएको बैंकको नाम र ठेगाना" labelEn="Name & Adress of Bank" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="p-0 flex items-center">
                        <input {...register('bankDetails.bankName')} className="w-full h-full px-2 text-xs font-bold focus:bg-blue-50 focus:outline-none" />
                    </GridTableCell>
                </div>
            </div>

            {/* SECTION: DETAILS OF OCCUPATION */}
            <div className="border-l border-t border-gray-400">
                <GridTableCell
                    labelNe="पेशागत विवरण"
                    labelEn="(Details of Occupation)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="पेशा" labelEn="Occupation" colSpan={2} />
                    <GridTableCell colSpan={10} noBorderRight className="grid grid-cols-4 gap-y-2 p-2">
                        {[
                            { ne: 'सेवा', en: 'Service' },
                            { ne: 'सरकारी', en: 'Govt.' },
                            { ne: 'सार्वजनिक/निजी क्षेत्र', en: 'Public/Private Sector' },
                            { ne: 'एन.जी.ओ./आई.एन.जी.ओ.', en: 'NGO/INGO' },
                            { ne: 'विशेषज्ञ', en: 'Expert' },
                            { ne: 'व्यापारी', en: 'Businessperson' },
                            { ne: 'कृषि', en: 'Agriculture' },
                            { ne: 'सेवा निवृत्त', en: 'Retired' },
                            { ne: 'गृहिणी', en: 'House Wife' },
                            { ne: 'विद्यार्थी', en: 'Student' },
                        ].map((occ, idx) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value={occ.en.toLowerCase()} {...register('occupation.type')} className="w-3 h-3 text-blue-600" />
                                <span className="text-[9px] font-bold">{occ.ne} ({occ.en})</span>
                            </label>
                        ))}
                        <label className="flex items-center gap-2 cursor-pointer col-span-2">
                            <input type="radio" value="others" {...register('occupation.type')} className="w-3 h-3 text-blue-600" />
                            <span className="text-[9px] font-bold">अन्य (Others) ....................</span>
                        </label>
                    </GridTableCell>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center no-print">
                <Button variant="ghost" onClick={onPrev} className="px-8 text-[#00468b] font-bold hover:bg-blue-50">
                    {t('kyc.actions.previous')}
                </Button>
                <button onClick={onNext} className="min-w-[140px] px-12 py-3 text-lg font-semibold bg-[#00468b] hover:bg-blue-900 shadow-md text-white rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 inline-flex items-center justify-center" style={{ color: 'white' }}>
                    {t('kyc.actions.next')}
                </button>
            </div>
        </div>
    );
};

export { FamilyOccupationSection };
