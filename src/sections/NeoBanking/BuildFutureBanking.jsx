"use client";

import { motion } from "framer-motion";
import { BookOpen, Server, Terminal } from "lucide-react";

export const BuildFutureBanking = () => {
  const ctas = [
    {
      icon: <Terminal className="w-5 h-5 text-white" />,
      title: "Contact Sales",
      description:
        "Discuss enterprise pricing, custom integration requirements, and dedicated support options for your digital bank.",
      link: "/contact-us",
      bgColor: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Developer Documentation",
      description:
        "Access comprehensive API docs, integration guides, code samples, and SDKs in multiple programming languages.",
      link: "/contact-us",
      bgColor: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: <Server className="w-5 h-5 text-white" />,
      title: "Sandbox Environment",
      description:
        "Test all APIs in our sandbox with realistic scenarios before going live with real transactions.",
      link: "/contact-us",
      bgColor: "bg-green-500 hover:bg-green-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-12 text-center md:text-left">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Build the Future of Banking?
        </motion.h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
          Explore AOPAY's complete banking API platform, or create an account
          instantly to start building. You can also contact our team to design a
          custom package tailored to your neo bank's specific requirements and
          growth trajectory.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {ctas.map((cta, idx) => (
            <motion.a
              key={idx}
              href={cta.link}
              className={`flex flex-col justify-between p-6 rounded-2xl shadow-md transition-transform hover:scale-105 ${cta.bgColor} text-white`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {cta.icon}
                <h4 className="text-lg font-semibold">{cta.title}</h4>
              </div>
              <p className="text-sm">{cta.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
