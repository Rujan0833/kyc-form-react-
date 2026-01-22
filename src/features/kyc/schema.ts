import { z } from 'zod';

export const kycSchema = z.object({
    personalDetails: z.object({
        fullName: z.string().min(3, 'Full name must be at least 3 characters'),
        dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
        dobBS: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format').optional(),
        gender: z.enum(['male', 'female', 'others']),
        nationality: z.string().min(1, 'Nationality is required'),
        citizenshipNo: z.string().min(1, 'Citizenship No. is required'),
        issueDistrict: z.string().min(1, 'Issue district is required'),
        issueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
        pan: z.string().optional(),
    }),
    address: z.object({
        current: z.object({
            country: z.string().min(1, 'Country is required'),
            province: z.string().min(1, 'Province is required'),
            district: z.string().min(1, 'District is required'),
            municipality: z.string().min(1, 'Municipality is required'),
            wardNo: z.string().min(1, 'Ward No. is required'),
            tole: z.string().optional(),
            mobileNo: z.string().min(10, 'Invalid mobile number'),
            email: z.string().email('Invalid email address'),
        }),
        permanentSameAsCurrent: z.boolean().default(false),
        permanent: z.object({
            country: z.string().min(1, 'Country is required'),
            province: z.string().min(1, 'Province is required'),
            district: z.string().min(1, 'District is required'),
            municipality: z.string().min(1, 'Municipality is required'),
            wardNo: z.string().min(1, 'Ward No. is required'),
            tole: z.string().optional(),
        }),
    }),
    familyDetails: z.object({
        grandFatherName: z.string().min(1, 'Grandfather Name is required'),
        fatherName: z.string().min(1, 'Father Name is required'),
        motherName: z.string().min(1, 'Mother Name is required'),
        spouseName: z.string().optional(),
    }),
    occupation: z.object({
        type: z.string().min(1, 'Occupation type is required'),
        organizationName: z.string().optional(),
        designation: z.string().optional(),
        estimatedAnnualIncome: z.enum(['upto_5L', '5L_to_10L', 'above_10L']),
    }),
    bankDetails: z.object({
        accountType: z.enum(['saving', 'current']),
        accountNumber: z.string().min(1, 'Account number is required'),
        bankName: z.string().min(1, 'Bank name is required'),
    }),
    transactionInfo: z.object({
        incomeSources: z.record(z.string(), z.boolean()),
        otherBroker: z.enum(['yes', 'no']),
        blacklisted: z.enum(['yes', 'no']),
    }).optional(),
    amlQuestions: z.record(z.string(), z.boolean()).optional(),
    officialUse: z.object({
        accountNo: z.string().optional(),
        date: z.string().optional(),
        referenceNo: z.string().optional(),
        sanctionNo: z.string().optional(),
    }).optional(),
    documents: z.object({
        photo: z.string().min(1, 'Passport photo is required'),
        citizenshipFront: z.string().min(1, 'Citizenship Front image is required'),
        citizenshipBack: z.string().min(1, 'Citizenship Back image is required'),
    }),
});

export type KYCFormData = z.infer<typeof kycSchema>;
