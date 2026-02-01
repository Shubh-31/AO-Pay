"use client";

import { motion } from "framer-motion";

export const PayOutUseCases = () => {
  const useCases = [
    {
      title: "Vendor Payments",
      desc: "Automate supplier and vendor payments with our solution. Streamline your accounts payable process and maintain healthy vendor relationships.",
      imgSrc:
        "/assets/PayoutApiIcons/PayOut API icons of page/Vendor Payments.png",
    },
    {
      title: "Payroll Disbursements",
      desc: "Process employee salaries and wages efficiently with bulk payroll processing through AOPAY Mass Payout API.",
      imgSrc:
        "/assets/PayoutApiIcons/PayOut API icons of page/Payroll Disbursements.png",
    },
    {
      title: "Customer Refunds",
      desc: "Handle refunds instantly with our single payout solution. Improve customer satisfaction with quick refund processing.",
      imgSrc:
        "/assets/PayoutApiIcons/PayOut API icons of page/Customer Refunds.png",
    },
    {
      title: "Marketplace Seller Payments",
      desc: "Perfect for e-commerce platforms and marketplaces to pay sellers and merchants using our payments solution.",
      imgSrc:
        "/assets/PayoutApiIcons/PayOut API icons of page/marketplace seller payments.png",
    },
    {
      title: "Gig Economy Payments",
      desc: "Enable instant payments for gig workers, freelancers, and contractors with flexible payout schedules.",
      imgSrc:
        "/assets/PayoutApiIcons/PayOut API icons of page/Gig Economy Payments.png",
    },
    {
      title: "Insurance Claim Settlements",
      desc: "Streamline insurance claim payouts with secure, tracked payments directly to beneficiary accounts.",
      imgSrc:
        "/assets/PayoutApiIcons/PayOut API icons of page/Insurance Claim Settlements.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Real-World Payout API Use Cases For Every Business Model
        </h2>
        <p>
          AOPAY PayOut serves diverse business needs across industries. Whether
          you're a startup, enterprise, or FinTech company, our solution adapts
          to your specific requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-md 
              hover:shadow-lg transition-all duration-300 
              p-6 flex flex-col text-center space-y-3
              w-full sm:w-[calc(50%-1rem)] lg:w-[45%]
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-8 h-auto mx-auto mb-2"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
