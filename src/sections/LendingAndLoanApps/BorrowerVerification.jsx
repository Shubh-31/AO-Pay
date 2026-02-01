"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, UserCheck, Database } from "lucide-react";

const BorrowerVerification = () => {
  const verificationServices = [
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/CIBIL Credit Score.png",
      name: "CIBIL Credit Score",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Aadhaar Verification.png",
      name: "Aadhaar Verification",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/PAN Validation.png",
      name: "PAN Validation",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/GST Records.png",
      name: "GST Records",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Custom Reports.png",
      name: "Bank Statement Analysis",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Income Verification.png",
      name: "Income Verification",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Employment Check.png",
      name: "Employment Check",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Address Verification.png",
      name: "Address Verification",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Mobile Verification.png",
      name: "Mobile Verification",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Email Validation.png",
      name: "Email Validation",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Social Media Profiling.png",
      name: "Social Media Profiling",
    },
    {
      imgSrc:
        "/assets/LoanLending/AOPAY Comprehensive Borrower Verification Methods/Behavioral Analytics.png",
      name: "Behavioral Analytics",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          AOPAY Comprehensive Borrower Verification Methods
        </motion.h2>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Access multiple verification touchpoints to build complete borrower
          profiles and make informed lending decisions with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {verificationServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-md p-5 flex items-start gap-4 hover:shadow-purple-400/30 transition"
            >
              <img src = {service.imgSrc}  alt = {service.name} className="w-4 h-4" />
             
              <p className="text-gray-200 font-medium">{service.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BorrowerVerification;
