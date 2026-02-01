"use client";

import { motion } from "framer-motion";

const GigPlatformIntegration = () => {
  const integrations = [
    {
      title: "Platform Integration",
      description:
        "Native integration with freelance platform interfaces and workflows.",
      imgSrc:
        "/assets/GigEconomyFreelance/Easy Integration with Gig Platform Ecosystems/Platform Integration.png",
    },
    {
      title: "Communication Tools",
      description:
        "Integration with messaging, video calls, and collaboration platforms.",
      imgSrc:
        "/assets/GigEconomyFreelance/Easy Integration with Gig Platform Ecosystems/Communication Tools.png",
    },
    {
      title: "Project Management",
      description:
        "Connection with task tracking, time management, and productivity tools.",
      imgSrc:
        "/assets/GigEconomyFreelance/Easy Integration with Gig Platform Ecosystems/Project Management.png",
    },
    {
      title: "Accounting Systems",
      description:
        "Automated financial reporting and tax documentation integration.",
      imgSrc:
        "/assets/GigEconomyFreelance/Easy Integration with Gig Platform Ecosystems/Accounting Systems.png",
    },
    {
      title: "Identity Providers",
      description:
        "Integration with professional networks and credential verification services.",
      imgSrc:
        "/assets/GigEconomyFreelance/Easy Integration with Gig Platform Ecosystems/Identity Providers.png",
    },
    {
      title: "Customer Support",
      description: "Integration with helpdesk and support ticket systems.",
      imgSrc:
        "/assets/GigEconomyFreelance/Easy Integration with Gig Platform Ecosystems/Customer Support.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Easy Integration with Gig Platform Ecosystems
        </motion.h2>

        {/* Integration Cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Icon + title in one line */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-4 h-auto"
                />
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>

              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GigPlatformIntegration;
