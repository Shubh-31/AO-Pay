"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AutoSlidingPaymentFeatures() {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(-1);
  const containerRef = useRef();
  const xRef = useRef(0);
  const requestRef = useRef();

  const speed = 0.4; // pixels per frame

  const features = [
    {
      title: "Online Payment Processing",
      items: [
        "Online merchant registration and onboarding",
        "Web payment acceptance via hosted payment pages",
        "Host-to-host API integration",
        "Customizable checkout page experiences",
        "PCI DSS compliant payment processing",
      ],
    },
    {
      title: "Payment Initiation & Requests",
      items: [
        "Automated invoice generation and sending",
        "Payment requests via push notifications",
        "Dynamic QR code generation with transaction data",
        "Payment links via email, SMS, and messaging platforms",
        "Scheduled and recurring payment requests",
      ],
    },
    {
      title: "Flexible Payment Acceptance",
      items: [
        "In-store payments via credit/debit cards",
        "Digital wallet integration (Apple Pay, Google Pay, etc.)",
        "Bank account direct payments",
        "Online checkout page payments",
        "Tip and gratuity acceptance",
      ],
    },
    {
      title: "Instant & Scheduled Payouts",
      items: [
        "Real-time payouts to merchant bank accounts",
        "Card-based settlement payments",
        "Mobile wallet payout distribution",
        "Bulk payout processing",
        "Scheduled payout automation",
      ],
    },
    {
      title: "Receipt & Documentation",
      items: [
        "Automated receipt generation",
        "Email receipt delivery",
        "Transaction history management",
        "Customizable receipt templates",
        "Digital receipt storage",
      ],
    },
    {
      title: "Refund & Dispute Management",
      items: [
        "Automated refund processing",
        "Customer-initiated refund requests",
        "Chargeback management",
        "Dispute resolution workflows",
        "Merchant digital wallet integration",
      ],
    },
    {
      section: "Accelerate Your Payment Platform Launch with AOPAY",
      children: [
        {
          title: "Individual & Corporate Clients",
          items: [
            "Streamlined onboarding with 2FA security",
            "Comprehensive customer profiles and settings",
            "Ongoing KYC/KYB compliance with trusted vendors",
            "Card and IBAN linking to accounts",
            "Fund transfer, payment requests, and other key features",
          ],
        },
        {
          title: "Merchant Solutions",
          items: [
            "Offline payment acceptance (POS terminals, QR codes)",
            "Online payment gateway integration",
            "Optimized checkout page experiences",
            "Advanced dispute resolution tools",
            "Comprehensive reporting and analytics",
            "Real-time transaction monitoring",
          ],
        },
        {
          title: "System Management & Control",
          items: [
            "Flexible fee and limit configuration",
            "Integrated CRM and customer chat support",
            "Detailed transaction monitoring and reporting",
            "AML and anti-fraud officer workspace",
            "User action history and audit trails",
            "Advanced reconciliation and settlement",
          ],
        },
      ],
    },
  ];

  // Flatten nested children into a single array for sliding
  const allBlocks = features.flatMap((f) =>
    f.section
      ? f.children.map((child) => ({
          title: child.title,
          items: child.items,
        }))
      : [
          {
            title: f.title,
            items: f.items,
          },
        ]
  );

  // Smooth continuous scroll animation using requestAnimationFrame
  useEffect(() => {
    const animate = () => {
      if (!isHovered) {
        xRef.current += direction * speed;
        const container = containerRef.current;
        if (container) {
          const totalWidth = container.scrollWidth / 2;
          if (xRef.current <= -totalWidth || xRef.current >= 0) {
            setDirection((prev) => -prev);
          }
          container.style.transform = `translateX(${xRef.current}px)`;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, isHovered]);

  return (
    <section className="relative py-16 px-6 bg-white overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        Advanced Payment Gateway API Features & Capabilities
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        AOPAY payment processing solution streamlines business operations with
        top-tier UI design and comprehensive functionality. Help merchants
        achieve higher efficiency, grow their customer base, and maximize
        profits through secure payment processing and automated payout
        solutions.
      </p>

      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />

      {/* Sliding Track */}
      <div
        className="relative max-w-5xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max transition-transform will-change-transform"
        >
          {[...allBlocks, ...allBlocks].map((block, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[340px] bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 flex-shrink-0 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-3 text-center">
                {block.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
