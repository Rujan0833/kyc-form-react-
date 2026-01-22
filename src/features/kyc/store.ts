import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { KYCFormData } from './schema';

interface KYCState {
    formData: Partial<KYCFormData>;
    currentStep: number;
    setFormData: (data: Partial<KYCFormData>) => void;
    setStep: (step: number) => void;
    resetForm: () => void;
}

export const useKYCStore = create<KYCState>()(
    persist(
        (set) => ({
            formData: {},
            currentStep: 0,
            setFormData: (data) =>
                set((state) => ({
                    formData: { ...state.formData, ...data },
                })),
            setStep: (step) => set({ currentStep: step }),
            resetForm: () => set({ formData: {}, currentStep: 0 }),
        }),
        {
            name: 'kyc-form-storage',
        }
    )
);
