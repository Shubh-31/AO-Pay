"use client";

import { motion } from "framer-motion";

export const GSTUseCases = () => {
  const useCases = [
    {
      imgSrc:
        "/assets/GST/GST Verification API Use Cases/B2B Marketplaces & E-commerce.png",
      title: "B2B Marketplaces & E-commerce",
      desc: "Streamline seller onboarding processes with instant GST verification for vendor registration, ensuring legitimate business partnerships and tax compliance for marketplace operations.",
    },
    {
      imgSrc:
        "/assets/GST/GST Verification API Use Cases/Supply Chain & Procurement.png",
      title: "Supply Chain & Procurement",
      desc: "Verify supplier credentials and business legitimacy before establishing partnerships, reducing fraud risk and ensuring compliance with procurement policies and vendor management systems.",
    },
    {
      imgSrc:
        "/assets/GST/GST Verification API Use Cases/Invoice Financing & Trade Finance.png",
      title: "Invoice Financing & Trade Finance",
      desc: "Validate business authenticity for invoice discounting, trade financing, and working capital solutions, ensuring genuine business transactions and reducing financial risks.",
    },
    {
      imgSrc:
        "/assets/GST/GST Verification API Use Cases/ERP & Accounting Software.png",
      title: "ERP & Accounting Software",
      desc: "Integrate GST verification into accounting systems and ERP platforms for automated vendor validation, invoice processing, and compliance management with tax authorities.",
    },
    {
      imgSrc:
        "/assets/GST/GST Verification API Use Cases/Banking & Financial Services.png",
      title: "Banking & Financial Services",
      desc: "Enable instant business verification for commercial banking services, trade finance, and business loans, ensuring KYB compliance and reducing onboarding time for corporate clients.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Real-World Use Cases of GST Verification API Integration
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-md 
              hover:shadow-lg transition-all duration-300 
              p-6 flex flex-col text-center space-y-3
              w-full sm:w-[calc(50%-1rem)] lg:w-[45%]
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-6 mb-2 mx-auto"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
