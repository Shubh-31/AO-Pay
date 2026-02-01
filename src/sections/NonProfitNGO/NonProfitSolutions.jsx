"use client";

import { motion } from "framer-motion";

const NonProfitSolutions = () => {
  const orgSizes = [
    {
      title: "Small Nonprofit Organizations",
      description:
        "For grassroots nonprofits and community organizations, AOPAY's donation processing enables immediate acceptance of multiple payment methods without complex setup. Our donor verification tools help build a quality supporter base from day one, while transparent fund tracking builds credibility with new donors. Simple integration gets your donation portal running quickly with minimal technical resources.",
      features: [
        "Quick Launch: Start accepting donations in days with pre-built forms",
        "Basic Transparency: Essential fund tracking builds donor confidence",
        "Donor Management: Simple tools to track and engage supporters",
      ],
      imgSrc:
        "/assets/FMCG/Nonprofit Payment Solutions for Every Organization Size/Small Nonprofit Organizations.png",
    },
    {
      title: "Mid-Size Charitable Organizations",
      description:
        "Growing nonprofits benefit from AOPAY's advanced fund management that automatically tracks donations across multiple programs and campaigns. Bank verification systems ensure secure fund transfers, while comprehensive reporting tools help demonstrate impact to major donors and grant foundations. Advanced donor engagement features help retain and upgrade supporters.",
      features: [
        "Multi-Program Tracking: Separate fund tracking for different initiatives",
        "Donor Segmentation: Target different supporter groups with custom campaigns",
        "Grant Reporting: Detailed reports for foundations and major donors",
      ],
      imgSrc:
        "/assets/FMCG/Nonprofit Payment Solutions for Every Organization Size/Mid-Size Charitable Organizations.png",
    },
    {
      title: "Large NGOs and International Organizations",
      description:
        "Enterprise nonprofits require sophisticated donation processing across global markets. AOPAY's platform supports high donation volumes with intelligent routing, multi-currency processing, and comprehensive financial reporting. Advanced fund management handles complex international projects with automated compliance monitoring and detailed impact tracking for diverse stakeholder groups.",
      features: [
        "Global Operations: Multi-currency, multi-region donation processing",
        "Enterprise Reporting: Comprehensive analytics and impact measurement",
        "Custom Solutions: Tailored workflows for complex organizational needs",
      ],
      imgSrc:
        "/assets/FMCG/Nonprofit Payment Solutions for Every Organization Size/Large NGOs and International Organizations.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Nonprofit Payment Solutions for Every Organization Size
        </motion.h2>

        {orgSizes.map((org, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Icon + title in one line */}
            <div className="flex items-center gap-3 mb-3">
              <img src={org.imgSrc} alt={org.title} className="w-6 h-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                {org.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-4">{org.description}</p>

            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {org.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NonProfitSolutions;
