import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { kycSchema, KYCFormData } from '../schema';
import { useKYCStore } from '../store';
import { useTranslation } from 'react-i18next';

export const useKYCForm = () => {
    const { t } = useTranslation();
    const { formData, currentStep, setFormData, setStep } = useKYCStore();

    const form = useForm<KYCFormData>({
        resolver: zodResolver(kycSchema),
        defaultValues: formData,
        mode: 'onBlur',
    });

    const nextStep = async (fieldsToValidate: (keyof KYCFormData)[]) => {
        // Validate current section before moving
        const isValid = await form.trigger(fieldsToValidate);
        if (isValid) {
            setFormData(form.getValues());
            setStep(currentStep + 1);
            return true;
        }
        return false;
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setStep(currentStep - 1);
        }
    };

    const saveDraft = () => {
        setFormData(form.getValues());
    };

    return {
        form,
        currentStep,
        nextStep,
        prevStep,
        saveDraft,
        t,
    };
};
