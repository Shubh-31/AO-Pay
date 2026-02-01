"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const rechargeOptions = [
  {
    icon: "/assets/Payments/Recharge_&_Bill/Mobile_Postpaid.png",
    label: "Mobile Postpaid",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Electricity_Bill.png",
    label: "Electricity Bills",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/DTH.png",
    label: "DTH Recharge",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/FasTag.png",
    label: "Fastag Recharge",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Water_Bill.png",
    label: "Water Bills",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/LPG_CNG.png",
    label: "LPG & CNG Gas",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Mobile_Recharge.png",
    label: "Mobile Recharge",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Data_Card.png",
    label: "Data Cards",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Metro_Card.png",
    label: "Metro Cards",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Subscription_Service.png",
    label: "Subscription Services",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Traffic_Challan.png",
    label: "Traffic Challan",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Landline_Broadband.png",
    label: "Landline / Broadband",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Google_Play_Recharge.png",
    label: "Google Play Recharge",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Municipal_Corporation.png",
    label: "Municipal Corporation",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Credit_Card_Bill.png",
    label: "Credit Card Bill",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Education.png",
    label: "Education",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Insurance.png",
    label: "Insurance",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Piped_Gas.png",
    label: "Piped Gas",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Cable_Tv.png",
    label: "Cable TV",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Hospital.png",
    label: "Hospital",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Donation.png",
    label: "Donation",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Rental.png",
    label: "Rental",
  },
  {
    icon: "/assets/Payments/Recharge_&_Bill/Loan_Payment.png",
    label: "Loan Payment",
  },
];

export default function RechargeSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className=" text-gray- text-center max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Pay Bills & Recharge Your Accounts with AOPay – your one-stop
            solution for all your payment needs.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            AOPay is India’s trusted payment platform for paying more than 50
            types of bills & recharging more than 20 essential services. Smooth
            User Experience seamless & Secure Payments every time you use AOPay.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-12 mt-8 place-items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {(showAll ? rechargeOptions : rechargeOptions.slice(0, 12)).map(
            (option, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-gray-600 p-4 rounded-xl shadow-lg w-32 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl text-gray-700">
                  <Image src={option.icon} width={40} height={40} />
                </div>
                <p className="text-sm font-semibold mt-2">{option.label}</p>
              </motion.div>
            )
          )}
        </motion.div>

        <Button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-6 py-2 font-semibold rounded-lg flex items-center mx-auto"
        >
          {showAll ? "Show Less" : "Show All"} <ChevronDown className="ml-1" />
        </Button>
      </div>
    </section>
  );
}
