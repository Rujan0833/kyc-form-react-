import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GridTableCell } from '../../../components/ui/GridTableCell';
import { CharacterInput } from '../../../components/ui/CharacterInput';
import { Button } from '../../../components/ui/Button';
import { KYCFormData } from '../schema';

interface TransactionGuardianSectionProps {
    onNext: () => void;
    onPrev: () => void;
}

const TransactionGuardianSection: React.FC<TransactionGuardianSectionProps> = ({ onNext, onPrev }) => {
    const { t } = useTranslation();
    const { register } = useFormContext<KYCFormData>();

    return (
        <div className="animate-in fade-in duration-500">

            {/* SECTION: TRANSACTION RELATED ADDITIONAL INFO */}
            <div className="border-l border-t border-gray-400 mb-6">
                <GridTableCell
                    labelNe="कारोबार सम्बन्धि थप विवरण"
                    labelEn="(Transaction Related Additional Information)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                <div className="grid grid-cols-12 text-[9px]">
                    <GridTableCell labelNe="१. आम्दानीको स्रोत (√) लगाउनु होस् :" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="grid grid-cols-4 gap-2 items-center p-2">
                        {[
                            'Business', 'Salary', 'Investment', 'Rent', 'Trading', 'Remittance', 'Inheritance', 'Interest'
                        ].map((source, i) => (
                            <label key={i} className="flex items-center gap-1">
                                <input type="checkbox" {...register(`transactionInfo.incomeSources.${source}` as any)} className="w-3 h-3" />
                                <span className="font-bold">{source}</span>
                            </label>
                        ))}
                        <label className="flex items-center gap-1 col-span-2">
                            <input type="checkbox" {...register('transactionInfo.incomeSources.others' as any)} className="w-3 h-3" />
                            <span className="font-bold">अन्य (Specify) ....................</span>
                        </label>
                    </GridTableCell>
                </div>

                <div className="grid grid-cols-12 text-[9px]">
                    <GridTableCell labelNe="२. अन्य धितोपत्र दलाल कम्पनी सँग कारोवार गर्ने गरेको :" colSpan={6} labelPosition="side">
                        <div className="flex gap-4">
                            <label className="flex items-center gap-1"><input type="radio" value="no" {...register('transactionInfo.otherBroker')} /> <b>छैन (No)</b></label>
                            <label className="flex items-center gap-1"><input type="radio" value="yes" {...register('transactionInfo.otherBroker')} /> <b>छ (Yes)</b></label>
                        </div>
                    </GridTableCell>
                    <GridTableCell labelNe="३. तपाई कर्जा सूचना केन्द्रको कालो सूचीमा रहनुभएको :" colSpan={6} noBorderRight labelPosition="side">
                        <div className="flex gap-4">
                            <label className="flex items-center gap-1"><input type="radio" value="no" {...register('transactionInfo.blacklisted')} /> <b>छैन (No)</b></label>
                            <label className="flex items-center gap-1"><input type="radio" value="yes" {...register('transactionInfo.blacklisted')} /> <b>छ (Yes)</b></label>
                        </div>
                    </GridTableCell>
                </div>
            </div>

            {/* SECTION: GUARDIAN'S DETAILS */}
            <div className="border-l border-t border-gray-400">
                <GridTableCell
                    labelNe="संरक्षकको विवरण (नाबालकको हकमा मात्र)"
                    labelEn="Guardian's Details (In Case of Minor Only)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                <div className="grid grid-cols-12">
                    <div className="col-span-10">
                        <div className="grid grid-cols-10">
                            <GridTableCell labelNe="नाम/थर" labelEn="Name/Surname : (In Block Letter)" colSpan={3} />
                            <GridTableCell colSpan={7} noBorderRight>
                                <CharacterInput length={30} />
                            </GridTableCell>
                        </div>
                        <div className="grid grid-cols-10">
                            <GridTableCell labelNe="निवेदक सँगको सम्बन्ध :" labelEn="Relationship with application :" colSpan={3} />
                            <GridTableCell colSpan={7} noBorderRight>
                                <input type="text" className="w-full h-full border-none focus:outline-none px-2 text-xs" />
                            </GridTableCell>
                        </div>
                        <div className="grid grid-cols-10">
                            <GridTableCell labelNe="पत्राचार ठेगाना :" labelEn="Correspondence Address :" colSpan={3} />
                            <GridTableCell colSpan={7} noBorderRight>
                                <CharacterInput length={30} />
                            </GridTableCell>
                        </div>
                    </div>
                    <div className="col-span-2 border-l border-b border-gray-400 flex items-center justify-center p-2 text-center">
                        <p className="text-[10px] font-bold text-gray-400">संरक्षकको फोटो <br /> (Guardian's Photo)</p>
                    </div>
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

export { TransactionGuardianSection };
