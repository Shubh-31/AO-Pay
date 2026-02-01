"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    imgSrc: "/assets/Home/Tailored for Your Industry/Fintech Startups.png",
    title: "Fintech Startups",
    description:
      "Launch your digital financial services with production-ready APIs and minimal infrastructure investment. Scale from MVP to enterprise without rebuilding.",
  },
  {
    imgSrc: "/assets/Home/Tailored for Your Industry/NBFCs & MFIs.png",
    title: "NBFCs & MFIs",
    description:
      "Modernize operations with integrated lending platforms, compliance management, and omnichannel distribution capabilities tailored for microfinance.",
  },
  {
    imgSrc: "/assets/Home/Tailored for Your Industry/Cooperative Societies.png",
    title: "Cooperative Societies",
    description:
      "Digital transformation solutions designed specifically for credit cooperatives and Nidhi companies with member-centric features and regulatory compliance.",
  },
  {
    imgSrc: "/assets/Home/Tailored for Your Industry/Banking Institutions.png",
    title: "Banking Institutions",
    description:
      "Extend your digital capabilities with white-label & private label solutions, API banking infrastructure, and connected banking ecosystems for enhanced customer experience.",
  },
];

export default function HomeIndustry() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Tailored for Your Industry
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Deep domain expertise meets flexible technology. We understand the
          nuances of different financial services segments and deliver solutions
          that address your specific operational and regulatory requirements.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 transition-all duration-200"
          >
            {/* Icon + Title in one line */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-gray-200 transition">
                <Image
                  src={industry.imgSrc}
                  alt={industry.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {industry.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
              {industry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
