import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GridTableCell } from '../../../components/ui/GridTableCell';
import { CharacterInput } from '../../../components/ui/CharacterInput';
import { Button } from '../../../components/ui/Button';
import { PaperHeader } from '../../../components/ui/PaperHeader';
import { KYCFormData } from '../schema';

interface PersonalDetailsSectionProps {
    onNext: () => void;
}

const PersonalDetailsSection: React.FC<PersonalDetailsSectionProps> = ({ onNext }) => {
    const { t } = useTranslation();
    const { control, register } = useFormContext<KYCFormData>();

    return (
        <div className="animate-in fade-in duration-500">
            <PaperHeader />

            {/* Main Table Container */}
            <div className="border-l border-t border-gray-400">

                {/* Section Header */}
                <GridTableCell
                    labelNe="ग्राहकको विवरण"
                    labelEn="(Details of Client)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                {/* Row 1: Name */}
                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="नाम" labelEn="Name (In Block Letter)" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="p-0">
                        <Controller
                            name="personalDetails.fullName"
                            control={control}
                            render={({ field }) => (
                                <CharacterInput
                                    length={25}
                                    value={field.value}
                                    onChange={field.onChange}
                                    className="w-full"
                                />
                            )}
                        />
                    </GridTableCell>
                </div>

                {/* Row 2: Date of Birth */}
                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="जन्म मिति" labelEn="Date of Birth" colSpan={3} />
                    <GridTableCell labelNe="बि. सं. :" labelEn="B.S. :" colSpan={4} labelPosition="side">
                        <CharacterInput length={10} />
                    </GridTableCell>
                    <GridTableCell labelNe="ई. सं. :" labelEn="A.D. :" colSpan={5} noBorderRight labelPosition="side">
                        <CharacterInput length={10} />
                    </GridTableCell>
                </div>

                {/* Row 3: Gender */}
                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="लिङ्ग" labelEn="Gender" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="flex flex-row gap-6 items-center">
                        {['male', 'female', 'others'].map((g) => (
                            <label key={g} className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value={g} {...register('personalDetails.gender')} className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-bold uppercase">{g === 'others' ? 'अन्य (Others)' : t(`kyc.fields.gender_options.${g}`)}</span>
                            </label>
                        ))}
                    </GridTableCell>
                </div>

                {/* Row 4: Nationality */}
                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="राष्ट्रियता" labelEn="Nationality" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight className="flex flex-row gap-6 items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="nepali" {...register('personalDetails.nationality')} className="w-4 h-4 text-blue-600" />
                            <span className="text-[10px] font-bold">नेपाली (Nepali)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="others" {...register('personalDetails.nationality')} className="w-4 h-4 text-blue-600" />
                            <span className="text-[10px] font-bold">अन्य (खुलाउने) / Others (If Any)</span>
                            <input type="text" className="border-b border-gray-400 focus:outline-none w-32 px-1 text-xs" />
                        </label>
                    </GridTableCell>
                </div>

                {/* Row 5: ID Details */}
                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="नागरिकता नम्बर" labelEn="Citizenship No:" colSpan={3} />
                    <GridTableCell labelNe="जारी जिल्ला" labelEn="Issue District" colSpan={5} />
                    <GridTableCell labelNe="जारी मिति" labelEn="Issue Date" colSpan={4} noBorderRight />
                </div>

                {/* Row 6 & 7: BOID & PAN */}
                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="हितग्राही खाता नं" labelEn="Beneficiary ID No." colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight>
                        <CharacterInput length={16} />
                    </GridTableCell>
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="स्थायी लेखा नं" labelEn="Permanent Account No. (PAN)" colSpan={3} />
                    <GridTableCell colSpan={9} noBorderRight>
                        <CharacterInput length={9} />
                    </GridTableCell>
                </div>

                {/* SECTION: CURRENT ADDRESS */}
                <GridTableCell
                    labelNe="हालको ठेगाना"
                    labelEn="(Current Address)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="देश :" labelEn="Country :" colSpan={4} labelPosition="side" />
                    <GridTableCell labelNe="प्रदेश :" labelEn="Province :" colSpan={4} labelPosition="side" />
                    <GridTableCell labelNe="जिल्ला :" labelEn="District :" colSpan={4} noBorderRight labelPosition="side" />
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell
                        labelNe="गा.पा / न.पा / उ.म.न.पा / म.न.पा :"
                        labelEn="Rural Municipality/Municipality/ Sub Metropolitan city / Metropolitan city"
                        colSpan={9}
                    />
                    <GridTableCell labelNe="वडा नं :" labelEn="Ward No.:" colSpan={3} noBorderRight />
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="टोल :" labelEn="Tole :" colSpan={6}>
                        <CharacterInput length={15} />
                    </GridTableCell>
                    <GridTableCell labelNe="टेलिफोन नं :" labelEn="Telephone No. :" colSpan={6} noBorderRight>
                        <CharacterInput length={10} />
                    </GridTableCell>
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="ईमेल :" labelEn="Email ID :" colSpan={6}>
                        <CharacterInput length={25} />
                    </GridTableCell>
                    <GridTableCell labelNe="मोबाइल नं. :" labelEn="Mobile No. :" colSpan={6} noBorderRight>
                        <CharacterInput length={10} />
                    </GridTableCell>
                </div>

                {/* SECTION: PERMANENT ADDRESS */}
                <GridTableCell
                    labelNe="स्थायी ठेगाना"
                    labelEn="(Permanent Address)"
                    isHeader
                    noBorderRight
                    className="bg-[#00468b] !text-white text-center"
                />

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="देश :" labelEn="Country :" colSpan={4} labelPosition="side" />
                    <GridTableCell labelNe="प्रदेश :" labelEn="Province :" colSpan={4} labelPosition="side" />
                    <GridTableCell labelNe="जिल्ला :" labelEn="District :" colSpan={4} noBorderRight labelPosition="side" />
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell
                        labelNe="गा.पा / न.पा / उ.म.न.पा / म.न.पा :"
                        labelEn="Rural Municipality/Municipality/ Sub Metropolitan city / Metropolitan city"
                        colSpan={9}
                    />
                    <GridTableCell labelNe="वडा नं :" labelEn="Ward No.:" colSpan={3} noBorderRight />
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="टोल :" labelEn="Tole :" colSpan={6}>
                        <CharacterInput length={15} />
                    </GridTableCell>
                    <GridTableCell labelNe="टेलिफोन नं :" labelEn="Telephone No. :" colSpan={6} noBorderRight>
                        <CharacterInput length={10} />
                    </GridTableCell>
                </div>

                <div className="grid grid-cols-12">
                    <GridTableCell labelNe="ईमेल :" labelEn="Email ID :" colSpan={6}>
                        <CharacterInput length={25} />
                    </GridTableCell>
                    <GridTableCell labelNe="मोबाइल नं. :" labelEn="Mobile No. :" colSpan={6} noBorderRight>
                        <CharacterInput length={10} />
                    </GridTableCell>
                </div>

            </div>

            {/* Navigation - Hidden for Print */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-end no-print">
                <Button onClick={onNext} size="lg" className="w-full sm:w-auto px-12 bg-[#00468b] hover:bg-blue-900 shadow-md">
                    {t('kyc.actions.next')}
                </Button>
            </div>
        </div>
    );
};

export { PersonalDetailsSection };
