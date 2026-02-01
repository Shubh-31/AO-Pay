"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const resources = [
  { name: "Marketplace", icon: "/assets/Verifications/MarketPlace.png" },
  { name: "Lending", icon: "/assets/Verifications/Lending.png" },
  { name: "Insurance", icon: "/assets/Verifications/Insurance.png" },
  { name: "Brokerage", icon: "/assets/Verifications/Brokerage.png" },
  { name: "Recruitment", icon: "/assets/Verifications/Recruitment.png" },
  {
    name: "FinTech/Payment",
    icon: "/assets/Verifications/FinTech_Payment.png",
  },
  { name: "MSMEs", icon: "/assets/Verifications/MSMEs.png" },
  { name: "Wallet", icon: "/assets/Verifications/Wallet.png" },
  { name: "Govt. Agency", icon: "/assets/Verifications/Govt_Agency.png" },
];

const ResourcesSection = ({ heading }) => {
  return (
    <section className="py-16 px-6 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {heading}
          </h2>
        </div>

        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 text-gray-700 text-center">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 border border-gray-200 shadow-lg rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl md:text-5xl">
                  <Image
                    src={resource.icon}
                    alt={resource.name}
                    width={50}
                    height={50}
                  />
                </div>
                <p className="mt-2 text-sm md:text-base">{resource.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
