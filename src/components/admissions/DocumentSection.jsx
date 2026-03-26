import React from "react";
import { FileText, CheckCircle2, AlertCircle, Upload, Download, ArrowRight } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    { name: "Birth Certificate", required: true, note: "Original + 2 attested copies required for age verification" },
    { name: "Transfer Certificate", required: true, note: "From previous school (TC mandatory for Grade 2+)" },
    { name: "Report Cards", required: true, note: "Last 2 years academic records attested by principal" },
    { name: "Aadhaar Card", required: true, note: "Child and both parents ID proof required" },
    { name: "Passport Photos", required: true, note: "4 recent photos, white background, 35mm x 45mm" },
    { name: "Address Proof", required: true, note: "Ration card / Electricity bill / Rent agreement (any one)" },
    { name: "Caste Certificate", required: false, note: "If applying under reservation quota (SC/ST/OBC)" },
    { name: "Medical Certificate", required: false, note: "For any special health conditions or allergies" }
  ];

  const requiredDocs = documents.filter(doc => doc.required);
  const optionalDocs = documents.filter(doc => !doc.required);

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">Admission Requirements</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mt-3">
            Required <span className="text-pink-500">Documents</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-0.5 bg-pink-300"></div>
            <div className="w-8 h-0.5 bg-pink-500"></div>
            <div className="w-16 h-0.5 bg-pink-300"></div>
          </div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Please keep these documents ready before starting the online application. 
            Originals must be brought during document verification.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="space-y-8">
          
          {/* Required Documents */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Mandatory Documents</h3>
                <p className="text-slate-500 mt-1">All required for application processing</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-bold">
                  {requiredDocs.length} Required
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.map((doc, idx) => (
                <div 
                  key={idx}
                  className="group p-5 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-pink-300 hover:bg-pink-50/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-slate-800 text-lg">{doc.name}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                          REQUIRED
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{doc.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Documents */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Upload size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Optional Documents</h3>
                <p className="text-slate-500 mt-1">Submit if applicable to your case</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold">
                  {optionalDocs.length} Optional
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {optionalDocs.map((doc, idx) => (
                <div 
                  key={idx}
                  className="group p-5 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-cyan-300 hover:bg-cyan-50/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300">
                      <Upload size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-slate-800 text-lg">{doc.name}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-xs font-bold">
                          OPTIONAL
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{doc.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note Box */}
          <div className="bg-amber-50 rounded-[2rem] p-8 border-2 border-amber-200">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                <AlertCircle size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-amber-900 mb-3">Important Guidelines</h4>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    All documents must be in PDF or JPG format, under 2MB size
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Blurred or unclear documents will delay the admission process
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Original documents must be brought during verification
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Keep scanned copies ready before starting online application
                  </li>
                </ul>
              </div>
            </div>
          </div>

       

        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;