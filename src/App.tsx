import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { FormLayout } from './components/layout/FormLayout';
import { StepProgress } from './features/kyc/components/StepProgress';
import { PersonalDetailsSection } from './features/kyc/components/PersonalDetailsSection';
import { AddressSection } from './features/kyc/components/AddressSection';
import { useKYCForm } from './features/kyc/hooks/useKYCForm';
import { fetchKYCData } from './features/kyc/services/api';
import { transformApiToForm } from './features/kyc/mappers';
import { FormSectionSkeleton } from './components/ui/LoadingSkeleton';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

const STEPS = ['Personal', 'Address', 'Family', 'Bank', 'Review'];

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
      fieldsToValidate = ['address'];
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
        return <AddressSection onNext={handleNext} onPrev={prevStep} />;
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900">Step {currentStep + 1} Under Development</h2>
            <p className="text-gray-500 mt-2">The architecture is ready to scale these sections next.</p>
            <button onClick={prevStep} className="mt-8 text-blue-600 font-semibold">Go Back</button>
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
