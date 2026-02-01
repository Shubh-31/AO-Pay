"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const SolutionPaymentLink = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="max-w-6xl mx-auto space-y-10">
        {/* H2 Section */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            variants={itemVariants}
          >
            AOPAY Solution: Perfect for Every Business Type
          </motion.h2>
          <motion.p className="text-gray-600 text-lg" variants={itemVariants}>
            AOPAY versatile Payment Link API solution caters to diverse business
            needs across multiple industries and use cases.
          </motion.p>
        </motion.div>

        {/* Business Types */}
        <motion.div className="space-y-3" variants={containerVariants}>
          {[
            "SMBs & Freelancers: Quick invoicing and payment collection",
            "E-commerce Stores: Cart abandonment recovery",
            "Educational Institutions: Fee collection and course payments",
            "Healthcare Clinics: Appointment booking payments",
            "Event Organizers: Ticket sales and registrations",
            "Lending Companies: EMI collection and loan disbursement",
            "Real Estate: Property bookings and rent collection",
            "NGOs & Donations: Fundraising and donation collection",
            "Small Business Solutions: Enable small businesses and freelancers to collect payments instantly with professional-looking payment links and automated invoicing capabilities.",
            "E-commerce Integration: Integrate with Shopify, WooCommerce, and other e-commerce platforms to recover abandoned carts and process one-time payments seamlessly.",
            "Enterprise Solutions: Support high-volume payment collection with bulk link generation, advanced reporting, and enterprise-grade security features.",
            "Fintech Platforms: White-label payment link solutions for fintech companies looking to offer payment collection services to their merchants and users.",
          ].map((text, index) => (
            <motion.h3
              key={index}
              className="text-xl font-semibold text-gray-800"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {text}
            </motion.h3>
          ))}
        </motion.div>

        {/* Advanced Features Section */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold text-gray-900"
            variants={itemVariants}
          >
            AOPAY Advanced Payment Link Solution Features
          </motion.h3>
          <motion.p className="text-gray-600 text-lg" variants={itemVariants}>
            Go beyond basic payment links with advanced features designed to
            optimize your payment collection process and improve customer
            experience.
          </motion.p>
        </motion.div>

        {/* Features Lists */}
        {[
          {
            title: "Smart Link Customization",
            points: [
              "Custom expiry dates and time-based validity",
              "Minimum and maximum payment amount restrictions",
              "Customer information collection forms",
              "Multi-currency support with real-time conversion",
            ],
          },
          {
            title: "Payment Method Flexibility",
            points: [
              "Accept credit cards, debit cards, and digital wallets",
              "Bank transfer and UPI payment options",
              "Buy now, pay later (BNPL) integration",
            ],
          },
          {
            title: "Intelligent Analytics",
            points: [
              "Real-time payment tracking and status monitoring",
              "Customer behavior analytics and payment patterns",
              "Conversion rate optimization insights",
              "Geographic payment distribution analysis",
            ],
          },
          {
            title: "Automated Workflows",
            points: [
              "Scheduled payment link generation and distribution",
              "Automatic receipt generation and delivery",
              "Smart retry logic for failed payments",
              "Integration with CRM and accounting systems",
            ],
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="space-y-2"
            variants={containerVariants}
          >
            <motion.h3
              className="text-xl font-semibold text-gray-800"
              variants={itemVariants}
            >
              {feature.title}
            </motion.h3>
            <motion.ul className="list-disc list-inside text-gray-600 space-y-1">
              {feature.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SolutionPaymentLink;
