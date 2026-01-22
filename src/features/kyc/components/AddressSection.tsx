import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormField } from '../../../components/ui/FormField';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Button } from '../../../components/ui/Button';
import { KYCFormData } from '../schema';

interface AddressSectionProps {
    onNext: () => void;
    onPrev: () => void;
}

const AddressSection: React.FC<AddressSectionProps> = ({ onNext, onPrev }) => {
    const { t } = useTranslation();
    const { register, formState: { errors } } = useFormContext<KYCFormData>();

    const sameAsCurrent = useWatch({
        name: 'address.permanentSameAsCurrent'
    });

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
                titleKey="steps.address"
                subtitleKey="subtitle"
                stepIndicator="Step 2 of 5"
            />

            <div className="space-y-8">
                {/* Current Address */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4 border-l-4 border-blue-600 pl-3">
                        Current Address (हालको ठेगाना)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <FormField labelKey="address.current.country" {...register('address.current.country')} error={errors.address?.current?.country?.message} />
                        <FormField labelKey="address.current.province" {...register('address.current.province')} error={errors.address?.current?.province?.message} />
                        <FormField labelKey="address.current.district" {...register('address.current.district')} error={errors.address?.current?.district?.message} />
                        <FormField labelKey="address.current.municipality" {...register('address.current.municipality')} error={errors.address?.current?.municipality?.message} />
                        <div className="grid grid-cols-2 gap-4">
                            <FormField labelKey="address.current.wardNo" {...register('address.current.wardNo')} error={errors.address?.current?.wardNo?.message} />
                            <FormField labelKey="address.current.tole" {...register('address.current.tole')} error={errors.address?.current?.tole?.message} />
                        </div>
                        <FormField labelKey="address.current.mobileNo" {...register('address.current.mobileNo')} error={errors.address?.current?.mobileNo?.message} />
                    </div>
                </div>

                {/* Permanent Address Toggle */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <input
                        type="checkbox"
                        id="sameAsCurrent"
                        {...register('address.permanentSameAsCurrent')}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="sameAsCurrent" className="text-sm font-medium text-gray-700">
                        Permanent address is same as current address
                    </label>
                </div>

                {/* Permanent Address */}
                {!sameAsCurrent && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">
                            Permanent Address (स्थायी ठेगाना)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-400">
                            <FormField labelKey="address.permanent.country" {...register('address.permanent.country')} error={errors.address?.permanent?.country?.message} />
                            <FormField labelKey="address.permanent.province" {...register('address.permanent.province')} error={errors.address?.permanent?.province?.message} />
                            <FormField labelKey="address.permanent.district" {...register('address.permanent.district')} error={errors.address?.permanent?.district?.message} />
                            <FormField labelKey="address.permanent.municipality" {...register('address.permanent.municipality')} error={errors.address?.permanent?.municipality?.message} />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
                <Button variant="ghost" onClick={onPrev}>
                    {t('kyc.actions.previous')}
                </Button>
                <Button onClick={onNext} size="lg" className="px-12">
                    {t('kyc.actions.next')}
                </Button>
            </div>
        </div>
    );
};

export { AddressSection };
