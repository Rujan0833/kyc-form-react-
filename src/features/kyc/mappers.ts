import { KYCFormData } from './schema';
import { RawKYCResponse } from './services/api';

/**
 * Transforms raw backend API response into the frontend's Zod-validated KYCFormData.
 * This pattern protects the UI from breaking if backend field names change.
 */
export const transformApiToForm = (apiData: RawKYCResponse): Partial<KYCFormData> => {
    return {
        personalDetails: {
            fullName: apiData.full_name_en,
            dob: apiData.birth_date_ad,
            gender: apiData.sex === 'M' ? 'male' : apiData.sex === 'F' ? 'female' : 'others',
            nationality: apiData.nationality_code,
            citizenshipNo: apiData.ctz_no,
            issueDistrict: apiData.current_address.dist,
            issueDate: '2015-01-01',
        },
        address: {
            current: {
                country: apiData.current_address.cntry,
                province: apiData.current_address.prov,
                district: apiData.current_address.dist,
                municipality: apiData.current_address.muni,
                wardNo: apiData.current_address.ward,
                mobileNo: apiData.primary_mobile,
                email: apiData.primary_email,
                tole: '',
            },
            permanentSameAsCurrent: false,
            permanent: {
                country: '',
                province: '',
                district: '',
                municipality: '',
                wardNo: '',
                tole: '',
            },
        },
    };
};
