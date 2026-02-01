"use client";

import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-4"
        >
          To empower financial innovators with smooth, secure, and scalable
          digital banking infrastructure that accelerates their growth and
          allows them to focus on what they do best—serving their customers.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We believe that banking technology should be accessible to everyone,
          not just large financial institutions with massive IT budgets.
        </motion.p>
      </div>
    </section>
  );
};

export default WorkExperience;
