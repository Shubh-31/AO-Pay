"use client";

import {
  CreditCard,
  Apple,
  Google,
  DollarSign,
  Wallet,
  Bank,
  QrCode,
  Cpu,
  Calendar,
  Globe,
} from "lucide-react";

const PaymentMethodsEdTechOnlineLearning = () => {
  const paymentMethodsEdTech = [
    {
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
      label: "Credit/Debit Cards",
    },
    { icon: <Cpu className="w-5 h-5 text-gray-700" />, label: "UPI Payments" },
    {
      icon: <Wallet className="w-5 h-5 text-yellow-500" />,
      label: "Digital Wallets",
    },
    {
      icon: <Bank className="w-5 h-5 text-purple-500" />,
      label: "Net Banking",
    },
    {
      icon: <QrCode className="w-5 h-5 text-pink-500" />,
      label: "QR Code Payments",
    },
    {
      icon: <Bank className="w-5 h-5 text-green-500" />,
      label: "Bank Transfers",
    },
    {
      icon: <Globe className="w-5 h-5 text-teal-500" />,
      label: "International Cards",
    },
    { icon: <DollarSign className="w-5 h-5 text-red-500" />, label: "PayPal" },
    { icon: <Apple className="w-5 h-5 text-gray-900" />, label: "Apple Pay" },
    { icon: <Google className="w-5 h-5 text-red-500" />, label: "Google Pay" },
    {
      icon: <Calendar className="w-5 h-5 text-indigo-500" />,
      label: "EMI Options",
    },
    {
      icon: <Globe className="w-5 h-5 text-teal-700" />,
      label: "Student Loans",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Comprehensive Payment Method Support
        </h2>

        {/* H3 */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
          Supported Payment Methods for EdTech:
        </h3>

        {/* Payment Methods Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {paymentMethodsEdTech.map((method, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0">{method.icon}</div>
              <span className="text-gray-700 font-medium">{method.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsEdTechOnlineLearning;
