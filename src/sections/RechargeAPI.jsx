"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const RechargeApiSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Performance Statistics Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            AOPAY Recharge API Performance Statistics
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              ✅ 99.9% API Uptime Guarantee
            </li>
            <li className="flex items-center gap-2">
              ✅ All Operators are Supported
            </li>
            <li className="flex items-center gap-2">✅ Min Settlement Time</li>
            <li className="flex items-center gap-2">
              ✅ 24/7 Technical Support
            </li>
          </ul>
        </div>

        {/* Transparent Pricing Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
          {/* Body wrapper keeps list scrollable if it gets too tall */}
          <div className="flex flex-col grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Transparent Recharge API Pricing
            </h2>

            <p className="text-gray-600 mb-6">
              Affordable commission-based pricing with no hidden fees. Pay only
              for successful transactions.
            </p>

            {/* grid for two columns */}
            <div className="flex-1 overflow-y-auto">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700 pr-1">
                <li>✅ SLA Guarantees</li>
                <li>✅ Standard Support</li>
                <li>✅ Monthly Settlement</li>
                <li>✅ Priority Support</li>
                <li>✅ Advanced Analytics</li>
                <li>✅ Custom Integrations</li>
                <li>✅ White-label Solutions</li>
                <li>✅ Dedicated Account Manager</li>
                <li>✅ All Recharge & Utility Bill Payments</li>
              </ul>
            </div>
          </div>

          {/* Button pinned at bottom */}
          <div className="mt-6 flex justify-center">
            <Link href="/contact-us">
              <Button className="w-full md:w-auto">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RechargeApiSection;
