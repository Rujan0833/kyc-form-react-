import { KYCFormData } from '../schema';

// This simulates a real API response which might have different field names
export interface RawKYCResponse {
    cust_id: number;
    full_name_en: string;
    birth_date_ad: string;
    sex: 'M' | 'F' | 'O';
    nationality_code: string;
    ctz_no: string;
    primary_mobile: string;
    primary_email: string;
    current_address: {
        cntry: string;
        prov: string;
        dist: string;
        muni: string;
        ward: string;
    };
}

export const fetchKYCData = async (): Promise<RawKYCResponse> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
        cust_id: 12345,
        full_name_en: 'SANTOSH SHARMA',
        birth_date_ad: '1995-05-15',
        sex: 'M',
        nationality_code: 'NEPALESE',
        ctz_no: '27-01-72-04532',
        primary_mobile: '9841234567',
        primary_email: 'santosh.sharma@example.com',
        current_address: {
            cntry: 'NEPAL',
            prov: 'BAGMATI',
            dist: 'KATHMANDU',
            muni: 'KATHMANDU METROPOLITAN CITY',
            ward: '10',
        },
    };
};
