import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormField } from '../../../components/ui/FormField';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Button } from '../../../components/ui/Button';
import { KYCFormData } from '../schema';

interface PersonalDetailsSectionProps {
    onNext: () => void;
}

const PersonalDetailsSection: React.FC<PersonalDetailsSectionProps> = ({ onNext }) => {
    const { t } = useTranslation();
    const { register, formState: { errors } } = useFormContext<KYCFormData>();

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
                titleKey="steps.personal"
                subtitleKey="subtitle"
                stepIndicator="Step 1 of 5"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <FormField
                    labelKey="fullName"
                    {...register('personalDetails.fullName')}
                    error={errors.personalDetails?.fullName?.message}
                    placeholder="E.g. JOHN DOE"
                />

                <FormField
                    labelKey="dob"
                    type="date"
                    {...register('personalDetails.dob')}
                    error={errors.personalDetails?.dob?.message}
                />

                <FormField
                    labelKey="gender"
                    as="select"
                    {...register('personalDetails.gender')}
                    error={errors.personalDetails?.gender?.message}
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'others', label: 'Others' },
                    ]}
                />

                <FormField
                    labelKey="nationality"
                    {...register('personalDetails.nationality')}
                    error={errors.personalDetails?.nationality?.message}
                    placeholder="E.g. Nepali"
                />

                <FormField
                    labelKey="citizenshipNo"
                    {...register('personalDetails.citizenshipNo')}
                    error={errors.personalDetails?.citizenshipNo?.message}
                />

                <FormField
                    labelKey="pan"
                    {...register('personalDetails.pan')}
                    error={errors.personalDetails?.pan?.message}
                />
            </div>

            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-end">
                <Button onClick={onNext} size="lg" className="w-full sm:w-auto px-12">
                    {t('kyc.actions.next')}
                </Button>
            </div>
        </div>
    );
};

export { PersonalDetailsSection };
