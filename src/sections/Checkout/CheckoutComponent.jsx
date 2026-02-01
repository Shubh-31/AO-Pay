"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutComponent = () => {
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState({
    title: "",
    plan: "",
    price: "",
  });
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    // Run only on client
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    const plan = params.get("plan");
    const price = params.get("price");

    if (!title || !plan || !price) {
      setHasData(false);
      return;
    }

    setCheckoutData({ title, plan, price });
  }, []);

  if (!hasData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">
          No checkout data found. Please select a plan first.
        </p>
      </div>
    );
  }

  const { title, plan, price } = checkoutData;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 
             bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"
      style={{ backgroundImage: `url('/assets/Pricing/PricingBg.png')` }}
    >
      <div
        className="w-full max-w-lg rounded-3xl shadow-2xl p-8 
               bg-white/70 backdrop-blur-xl border border-white/30
               relative overflow-hidden"
      >
        {/* Glow Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-green-400/20 pointer-events-none"></div>

        <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800 drop-shadow-sm">
          Checkout
        </h1>

        {/* Details Card */}
        <div className="space-y-5 mb-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Product</span>
            <span className="text-gray-800 font-semibold">{title}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Plan</span>
            <span className="text-gray-800 font-semibold">{plan}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Price</span>
            <span className="text-3xl font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-sm">
              {price}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="w-full py-3.5 text-lg font-semibold rounded-xl shadow-lg 
                 text-white bg-gradient-to-r from-blue-600 to-purple-600
                 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          onClick={() => alert("Proceeding to payment gateway...")}
        >
          Proceed to Payment
        </button>

        <button
          className="w-full mt-4 text-blue-700 font-medium underline hover:text-blue-900 transition"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CheckoutComponent;
