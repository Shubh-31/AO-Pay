"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const IntegrationSection = () => {
  const icons = [
    { src: "/assets/Home/Integration/Solution.png", top: "50%", left: "0%" },
    {
      src: "/assets/Home/Integration/Credit_Score.png",
      top: "15%",
      left: "80%",
    },
    { src: "/assets/Home/Integration/QR_Payment.png", top: "50%", left: "95%" },
    { src: "/assets/Home/Integration/Send_Money.png", top: "80%", left: "80%" },
    {
      src: "/assets/Home/Integration/Virtual_Account.png",
      top: "95%",
      left: "50%",
    },
    { src: "/assets/Home/Integration/Security.png", top: "45%", left: "45%" },
    { src: "/assets/Home/Integration/Train.png", top: "70%", left: "45%" },
    {
      src: "/assets/Home/Integration/Verification.png",
      top: "80%",
      left: "5%",
    },
    { src: "/assets/Home/Integration/Flight.png", top: "5%", left: "50%" },
    { src: "/assets/Home/Integration/Hotel.png", top: "10%", left: "10%" },
    { src: "/assets/Home/Integration/Payment.png", top: "30%", left: "20%" },
    { src: "/assets/Home/Integration/Deposits.png", top: "35%", left: "65%" },
  ];
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          AOPay: Your Trusted Partner
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          AOPay brings a complete suite of digital services designed to simplify
          Financial & Travel experiences. Whether you're an individual or a
          business, we’ve got covered with easy verification tools, payment
          services, & travel bookings. Available on both AOPay Web & App, AOPay
          ensures a secure and hassle-free experience wherever you go.
        </p>
        <Link href="/contact-us">
          <button className="mt-6 px-6 py-3 bg-green-200 text-black font-medium rounded-full shadow-md hover:bg-green-300 transition">
            Work With Us
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 w-96 flex justify-center relative mt-10 md:mt-0">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-green-100 rounded-xl flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full border border-green-300" />
          <div className="absolute w-3/4 h-3/4 rounded-full border border-green-300" />
          <div className="absolute w-1/2 h-1/2 rounded-full border border-green-300" />

          {/* Floating Icons */}
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="absolute w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center"
              style={{ top: icon.top, left: icon.left }}
            >
              <img src={icon.src} alt="icon" className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
