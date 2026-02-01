"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const deployments = [
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Fully Managed Cloud.png",
    title: "Fully Managed Cloud",
    description: "AWS, Azure, & more for rapid deployment and scalability.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Cloud.png",
    title: "Private Cloud / On-Premise",
    description:
      "Complete control over infrastructure with secure on-premise options.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Fully Managed Cloud.png",
    title: "Hybrid Models",
    description:
      "Seamless synchronization between cloud and on-premise environments.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Enterprise Support.png",
    title: "Enterprise Support",
    description: "Dedicated support to ensure smooth operations.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/AccountManager.png",
    title: "Dedicated Account Manager",
    description: "Personalized support and guidance for your deployment.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Support.png",
    title: "24/7 Technical Support",
    description: "Round-the-clock technical assistance for critical workflows.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Custom Development.png",
    title: "Custom Development",
    description: "Tailored solutions to meet unique business requirements.",
  },
  {
    imgSrc: "/assets/Home/Deployment Flexibility/Training & Onboarding.png",
    title: "Training & Onboarding",
    description: "Comprehensive onboarding and training for your team.",
  },
];

export default function HomeDeployment() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Deployment Flexibility
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          Choose the deployment model that aligns with your business
          requirements—cloud-hosted for rapid deployment, on-premise for
          complete control, or hybrid for optimal balance. AOPAY platform adapts
          to your infrastructure preferences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {deployments.map((deploy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-lg hover:shadow-2xl transition-all"
          >
            {/* Icon + Title in one line */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Image
                  src={deploy.imgSrc}
                  alt={deploy.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {deploy.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
              {deploy.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
