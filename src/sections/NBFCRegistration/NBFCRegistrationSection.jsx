"use client";

import { motion } from "framer-motion";

export default function NBFCRegistrationSection() {
  const services = [
    {
      title: "Application Preparation",
      desc: "Complete documentation support",
      img: "/assets/NBFCRegistration/Comprehensive NBFC Registration Services/Application Preparation.png",
    },
    {
      title: "Document Submission",
      desc: "Direct RBI filing assistance",
      img: "/assets/NBFCRegistration/Comprehensive NBFC Registration Services/Document Submission.png",
    },
    {
      title: "Business Plan Preparation",
      desc: "5-year strategic planning",
      img: "/assets/NBFCRegistration/Comprehensive NBFC Registration Services/Business Plan Preparation.png",
    },
    {
      title: "NBFC-Fintech Partnership",
      desc: "Collaborative opportunities",
      img: "/assets/NBFCRegistration/Comprehensive NBFC Registration Services/NBFC-Fintech Partnership.png",
    },
    {
      title: "Registration Advisory",
      desc: "Expert compliance guidance",
      img: "/assets/NBFCRegistration/Comprehensive NBFC Registration Services/Registration Advisory.png",
    },
    {
      title: "Funding Support",
      img: "/assets/NBFCRegistration/Comprehensive NBFC Registration Services/Funding Support.png",
      points: [
        "1000+ NBFC Licenses Secured",
        "10+ Weekly Registration Queries",
        "75% Market Share Leadership",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-none from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive NBFC Registration Services
        </motion.h2>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
          {services.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image + Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {card.desc}
              </p>

              {/* Optional Points */}
              {card.points && (
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mt-auto">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
