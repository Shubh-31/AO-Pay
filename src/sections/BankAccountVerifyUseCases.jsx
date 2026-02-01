"use client";

import { motion } from "framer-motion";

export const BankAccountVerifyUseCases = () => {
  const useCases = [
    {
      title: "Digital Payment Platforms",
      desc: "Verify beneficiary accounts before processing payments, reducing failed transactions and ensuring accurate money transfers for digital wallets and payment gateways.",
      imgSrc:
        "/assets/BankAccount/AOPAY Bank Account Verification Solution Use Cases/Digital Payment Platforms.png",
    },
    {
      title: "Lending & NBFC Platforms",
      desc: "Validate borrower bank accounts for loan disbursals and EMI collections, ensuring accurate account details and reducing payment processing errors in lending operations.",
      imgSrc:
        "/assets/BankAccount/AOPAY Bank Account Verification Solution Use Cases/Lending & NBFC Platforms.png",
    },
    {
      title: "Salary & Payroll Systems",
      desc: "Verify employee bank accounts before salary processing, ensuring accurate payroll disbursals and reducing failed salary transfers for HR and payroll platforms.",
      imgSrc:
        "/assets/BankAccount/AOPAY Bank Account Verification Solution Use Cases/Salary & Payroll Systems.png",
    },
    {
      title: "E-commerce & Marketplace Payments",
      desc: "Validate seller and vendor bank accounts for marketplace payouts, ensuring secure and accurate payment processing for e-commerce platforms and online marketplaces.",
      imgSrc:
        "/assets/BankAccount/AOPAY Bank Account Verification Solution Use Cases/E-commerce & Marketplace Payments.png",
    },
    {
      title: "Insurance & Claims Processing",
      desc: "Verify policyholder bank accounts for premium collections and claim settlements, ensuring accurate financial transactions and reducing processing delays.",
      imgSrc:
        "/assets/BankAccount/AOPAY Bank Account Verification Solution Use Cases/Insurance & Claims Processing.png",
    },
    {
      title: "Investment & Trading Platforms",
      desc: "Authenticate investor bank accounts for fund transfers, withdrawals, and dividend payments, ensuring secure financial transactions for investment platforms.",
      imgSrc:
        "/assets/BankAccount/AOPAY Bank Account Verification Solution Use Cases/Investment & Trading Platforms.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          AOPAY Bank Account Verification Solution: Real-World Use Cases for
          Businesses
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-6 mx-auto mb-2"
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
