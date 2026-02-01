"use client";

import { motion } from "framer-motion";

const GigEconomySecurityFeatures = () => {
  const features = [
    {
      title: "Multi-Layer Security Framework",
      description:
        "Advanced security architecture including encryption, fraud detection, and behavioral analysis protects against threats while maintaining smooth user experiences for legitimate transactions.",
      imgSrc:
        "/assets/GigEconomyFreelance/Advanced Security and Trust Building Features/Multi-Layer Security Framework.png",
    },
    {
      title: "Reputation and Rating Integration",
      description:
        "Connect payment history with user reputation systems to build trust and reduce risk. Successful payment completion contributes to user credibility scores and platform trustworthiness.",
      imgSrc:
        "/assets/GigEconomyFreelance/Advanced Security and Trust Building Features/Reputation and Rating Integration.png",
    },
    {
      title: "Transaction Transparency",
      description:
        "Provide complete visibility into payment status, escrow holdings, and transaction history for all parties, building confidence in platform reliability and payment security.",
      imgSrc:
        "/assets/GigEconomyFreelance/Advanced Security and Trust Building Features/Transaction Transparency.png",
    },
    {
      title: "Regulatory Compliance Automation",
      description:
        "Automated compliance monitoring ensures adherence to employment laws, tax regulations, and financial requirements across different jurisdictions and user types.",
      imgSrc:
        "/assets/GigEconomyFreelance/Advanced Security and Trust Building Features/Regulatory Compliance Automation.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Advanced Security and Trust Building Features
        </motion.h2>

        {/* Feature Cards */}
        <motion.div
          className="mt-10 space-y-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Icon + title in one line */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-6 h-auto"
                />
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>

              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GigEconomySecurityFeatures;
