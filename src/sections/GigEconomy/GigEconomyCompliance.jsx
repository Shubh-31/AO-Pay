"use client";

import { motion } from "framer-motion";

const GigEconomyCompliance = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-10 md:px-10 md:py-12"
        >
          {/* Heading */}
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight inline-block relative">
              <span>Complete Identity Verification and Compliance</span>
              <span className="block h-[3px] w-20 md:w-24 bg-gray-900 mx-auto mt-3 rounded-full" />
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Build trust and ensure compliance with secure identity
              verification services for both freelancers and clients. Our
              platform supports global KYC requirements while maintaining
              user-friendly onboarding processes and regulatory compliance.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Multi-Level Identity Verification
              </h3>
              <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
                Implement comprehensive identity verification using document
                verification, biometric authentication, and address
                confirmation. Our system supports global identity documents
                while maintaining security standards and reducing fraud risk for
                all platform participants.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Freelancer Credential Verification
              </h3>
              <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
                Verify freelancer skills, qualifications, and professional
                credentials to enhance platform credibility and client
                confidence. Our verification system supports educational
                certificates, professional licenses, and skill assessments while
                protecting privacy and maintaining verification accuracy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Global Compliance Management
              </h3>
              <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
                Ensure compliance with international regulations including AML,
                tax reporting, and employment laws across different
                jurisdictions. Our platform automatically adapts verification
                requirements based on user location while maintaining consistent
                security standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GigEconomyCompliance;
