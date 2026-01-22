import React from 'react';
import { useFormContext } from 'react-hook-form';
import { KYCFormData } from '../../features/kyc/schema';

const PaperHeader: React.FC = () => {
    const { register } = useFormContext<KYCFormData>();

    return (
        <div className="w-full mb-6">
            {/* ... abbreviated top sections ... */}
            <div className="flex justify-between items-start mb-4">
                {/* Left: Logo and Primary Branding */}
                <div className="flex gap-4 items-center">
                    <img
                        src="/logo.png"
                        alt="RBB Logo"
                        style={{ width: '80px', height: 'auto', display: 'block', flexShrink: 0 }}
                        className="object-contain flex-shrink-0"
                    />
                    <div className="border-l-2 border-[#da291c] pl-4 py-1">
                        <h1 className="text-xl font-bold text-blue-900 leading-tight">
                            आर.वि.वि. सेक्युरिटीज कम्पनी लि.
                        </h1>
                        <h2 className="text-lg font-bold text-blue-900">
                            R.B.B. SECURITIES COMPANY LTD.
                        </h2>
                        <p className="text-[10px] text-gray-600 italic">
                            A Subsidiary Company of Rastriya Banijya Bank Ltd.
                        </p>
                    </div>
                </div>

                {/* Right: Annex and Photo Box */}
                <div className="flex flex-col items-end gap-2">
                    <div className="text-right">
                        <p className="text-xs font-bold font-serif">अनुसूची-१२</p>
                        <p className="text-[10px]">(नियम २९ को उपनियम (१) संग सम्बन्धित)</p>
                    </div>
                    <div className="w-32 h-36 border-2 border-gray-400 rounded-md flex items-center justify-center text-center p-2">
                        <p className="text-[10px] font-bold text-gray-400">
                            ग्राहकको संकल <br /> (Customer's Photo)
                        </p>
                    </div>
                </div>
            </div>

            {/* Center Contact Info */}
            <div className="text-center text-[10px] text-gray-700 border-t border-b border-gray-300 py-1 mb-4 flex justify-center gap-8 font-medium">
                <span>टेलिफोन नं: ०१-५९२१८९५, ०१-५९२१८९६</span>
                <span>Email Address: securitiesrbb@gmail.com</span>
            </div>

            {/* Main Section Header: Natural Person (Blue Bar) */}
            <div
                className="bg-[#00468b] py-1.5 px-4 rounded-sm text-center mb-2 shadow-sm border border-blue-900"
                style={{ backgroundColor: '#00468b', color: 'white' }}
            >
                <h3 className="text-base font-bold leading-tight" style={{ color: 'white' }}>प्राकृतिक व्यक्तिको परिचय विवरण</h3>
                <p className="text-[11px] font-bold uppercase tracking-wide opacity-90" style={{ color: 'white' }}>Details of Natural Person</p>
            </div>

            {/* Official Use Only (Red Bar) */}
            <div
                className="bg-[#da291c] py-1.5 px-4 text-center mb-4 border border-red-800"
                style={{ backgroundColor: '#da291c', color: 'white' }}
            >
                <h4 className="text-sm font-bold leading-tight" style={{ color: 'white' }}>
                    कार्यालय प्रयोजनका लागि मात्र (For Official Use Only)
                </h4>
            </div>

            {/* Official Use Grid */}
            <div className="grid grid-cols-4 border border-gray-400 bg-red-50/30 text-[10px]">
                <div className="border-r border-gray-400 p-1.5 min-h-[40px] flex flex-col">
                    <p className="font-bold text-gray-600">ग्राहक नं :</p>
                    <p className="text-gray-400">Client's Account No.</p>
                    <input
                        type="text"
                        {...register('officialUse.accountNo')}
                        className="w-full bg-transparent border-none focus:outline-none font-bold text-xs mt-1"
                    />
                </div>
                <div className="border-r border-gray-400 p-1.5 flex flex-col">
                    <p className="font-bold text-gray-600">मिति :</p>
                    <p className="text-gray-400">Date :</p>
                    <input
                        type="text"
                        {...register('officialUse.date')}
                        className="w-full bg-transparent border-none focus:outline-none font-bold text-xs mt-1"
                    />
                </div>
                <div className="border-r border-gray-400 p-1.5 flex flex-col">
                    <p className="font-bold text-gray-600">संकेत नम्बर :</p>
                    <p className="text-gray-400">Reference No:</p>
                    <input
                        type="text"
                        {...register('officialUse.referenceNo')}
                        className="w-full bg-transparent border-none focus:outline-none font-bold text-xs mt-1"
                    />
                </div>
                <div className="p-1.5 flex flex-col">
                    <p className="font-bold text-gray-600">Sanction/Blacklist/Screening No:</p>
                    <input
                        type="text"
                        {...register('officialUse.sanctionNo')}
                        className="w-full bg-transparent border-none focus:outline-none font-bold text-xs mt-1"
                    />
                </div>
            </div>

            <div className="mt-2 text-[10px] text-gray-600 leading-tight">
                <p>तल उल्लेखित सम्पूर्ण विवरण राम्रोसँग भर्नु पर्नेछ । आफुसँग सरोकार नभएको विवरण उल्लेख गर्ने कोठामा तेर्सो धर्का तानिदिनु होला ।</p>
                <p className="italic">Please complete all details and strike out the non-applicable fields/boxes.</p>
            </div>
        </div>
    );
};

export { PaperHeader };
