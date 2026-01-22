import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { FormLayout } from './components/layout/FormLayout';
import { StepProgress } from './features/kyc/components/StepProgress';
import { PersonalDetailsSection } from './features/kyc/components/PersonalDetailsSection';
import { TransactionGuardianSection } from './features/kyc/components/TransactionGuardianSection';
import { DeclarationsSection } from './features/kyc/components/DeclarationsSection';
import { FamilyOccupationSection } from './features/kyc/components/FamilyOccupationSection';
import { useKYCForm } from './features/kyc/hooks/useKYCForm';
import { fetchKYCData } from './features/kyc/services/api';
import { transformApiToForm } from './features/kyc/mappers';
import { FormSectionSkeleton } from './components/ui/LoadingSkeleton';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

const STEPS = ['Client & Address', 'Transaction & Guardian', 'Declarations', 'Family & Bank'];

const App: React.FC = () => {
  const { form, currentStep, nextStep, prevStep } = useKYCForm();

  // 1. Fetch data from API (Pre-fill every aspect)
  const { data: rawApiData, isLoading, isError } = useQuery({
    queryKey: ['kyc-initial-data'],
    queryFn: fetchKYCData,
    staleTime: Infinity,
  });

  // 2. Hydrate form when data is ready
  useEffect(() => {
    if (rawApiData) {
      const mappedData = transformApiToForm(rawApiData);
      form.reset(mappedData);
    }
  }, [rawApiData, form]);

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];

    if (currentStep === 0) {
      fieldsToValidate = ['personalDetails'];
    } else if (currentStep === 1) {
      // Transaction & Guardian fields
    } else if (currentStep === 3) {
      fieldsToValidate = ['familyDetails', 'bankDetails', 'occupation'];
    }

    await nextStep(fieldsToValidate);
  };

  const renderStep = () => {
    if (isLoading) return <FormSectionSkeleton />;
    if (isError) throw new Error('Failed to fetch data');

    switch (currentStep) {
      case 0:
        return <PersonalDetailsSection onNext={handleNext} />;
      case 1:
        return <TransactionGuardianSection onNext={handleNext} onPrev={prevStep} />;
      case 2:
        return <DeclarationsSection onNext={handleNext} onPrev={prevStep} />;
      case 3:
        return <FamilyOccupationSection onNext={handleNext} onPrev={prevStep} />;
      default:
        return (
          <div className="text-center py-20 min-h-[500px] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#00468b]">All Steps Complete</h2>
            <p className="text-gray-500 mt-2 italic">Thank you for completing the KYC form.</p>
            <button onClick={prevStep} className="mt-8 text-[#00468b] font-bold border-b border-[#00468b] w-fit mx-auto">
              अघिल्लो पृष्ठ (Previous Page)
            </button>
          </div>
        );
    }
  };

  return (
    <FormLayout>
      <ErrorBoundary>
        <StepProgress steps={STEPS} currentStep={currentStep} />

        <FormProvider {...form}>
          <form onSubmit={(e) => e.preventDefault()}>
            {renderStep()}
          </form>
        </FormProvider>
      </ErrorBoundary>
    </FormLayout>
  );
};

export default App;
