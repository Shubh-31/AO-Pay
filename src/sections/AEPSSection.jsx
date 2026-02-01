"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AEPSSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gradient">
          Accessing AEPS Services is Easy & Convenient with AOPay
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li>
              1) Open AOPay app & login to your account with secure credentials.
            </li>
            <li>
              2) Navigate to AEPS option under the "Services" tab in the app.
            </li>
            <li>
              3) Enter your Aadhaar number & authenticate your transactions
              using your biometric.
            </li>
            <li>
              4) Once authenticated, you can easily perform financial
              transactions directly through AOPay:
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-600">
            {[
              {
                src: "/assets/Payments/AEPS/Balance_Enquiry.png",
                label: "Balance Enquiry",
              },
              {
                src: "/assets/Payments/AEPS/Cash_Withdrawal.png",
                label: "Cash Withdrawal",
              },
              {
                src: "/assets/Payments/AEPS/Cash_Deposit.png",
                label: "Cash Deposit",
              },
              {
                src: "/assets/Payments/AEPS/Fund_Transfer.png",
                label: "Aadhaar to Aadhaar Fund Transfer",
              },
              {
                src: "/assets/Payments/AEPS/Mini_Statement.png",
                label: "Mini Statement",
              },
              { src: "/assets/Payments/AEPS/Purchases.png", label: "Purchase" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <Image src={item.src} width={30} height={30} alt={item.label} />
                <span className="text-black text-sm"> {item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/assets/Payments/AEPS/AEPS_2.png"
            alt="Biometric authentication AEPS API for balance inquiry and mini statement generation."
            className="w-full "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AEPSSection;
