import React from "react";
import { FileText, AlertCircle, ArrowRight, Baby, FileCheck, Camera, Shield, Clock } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    { 
      name: "Birth Certificate", 
      note: "Original document and one attested photocopy required for age verification",
      icon: Baby
    },
    { 
      name: "Transfer Certificate", 
      note: "Original TC from previous school mandatory for admission",
      icon: FileCheck
    },
    { 
      name: "Passport Size Photographs", 
      note: "4 recent copies with white background (35mm x 45mm)",
      icon: Camera
    },
    { 
      name: "Aadhaar Card / Parent ID Proof", 
      note: "Valid ID proof of parent or legal guardian required",
      icon: Shield
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-pink-50 text-pink-600 text-xs sm:text-sm font-semibold tracking-wide border border-pink-100">
            <FileText size={14} className="sm:w-4 sm:h-4" />
            Admission Requirements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 sm:mt-6 tracking-tight">
            Documents <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">Required</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Please keep these documents ready before starting your application. 
            All documents must be valid and clearly readable.
          </p>
        </div>

        {/* Documents Grid - Responsive: 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          {documents.map((doc, idx) => {
            const IconComponent = doc.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-sm border border-slate-200 hover:shadow-lg sm:hover:shadow-xl hover:border-pink-200 transition-all duration-300 sm:duration-500"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-50/0 to-pink-100/0 group-hover:from-pink-50/50 group-hover:to-pink-100/30 transition-all duration-300 sm:duration-500" />
                
                <div className="relative flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {/* Icon Container - Responsive sizing */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-md sm:shadow-lg shadow-pink-500/20 sm:shadow-pink-500/25 group-hover:scale-105 sm:group-hover:scale-110 group-hover:shadow-pink-500/30 sm:group-hover:shadow-pink-500/40 transition-all duration-300 sm:duration-500">
                      <IconComponent size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content - Responsive text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors duration-300">
                        {doc.name}
                      </h3>
                      <span className="self-start sm:self-auto inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        Required
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                      {doc.note}
                    </p>
                  </div>
                  
                  {/* Arrow indicator - Hidden on mobile, shown on sm+ */}
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-slate-100 text-slate-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <ArrowRight size={16} className="md:w-[18px] md:h-[18px] lg:w-5 lg:h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Guidelines Card - Responsive */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-md sm:shadow-lg border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 md:gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <AlertCircle size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Important Instructions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Upload documents in PDF or JPG format only
                  </p>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Maximum file size: 2MB per document
                  </p>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Bring original documents during verification
                  </p>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Blurred or unclear documents will be rejected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info - Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-2 sm:px-0">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900 text-white shadow-lg sm:shadow-xl shadow-slate-900/20">
            <Clock size={18} className="text-pink-400 sm:w-5 sm:h-5" />
            <span className="font-medium text-sm sm:text-base text-center sm:text-left">
              Previous Year Report Card required for Grade 2 and above
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DocumentsSection;