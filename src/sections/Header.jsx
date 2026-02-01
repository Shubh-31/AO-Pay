"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* SUBMENUS */

const paymentsSubmenu = [
  {
    title: "Payment Gateway",
    href: "/payment-gateway-india",
    description:
      "Accept secure online payments for purchases, subscriptions, and more.",
  },
  {
    title: "PayOut",
    href: "/payouts-api",
    description: "Disburse payments to bank accounts, wallets, UPI, and cards.",
  },
  {
    title: "Payment Link",
    href: "/payment-link-api",
    description:
      "Generate & share payment links to collect payments instantly.",
  },
  {
    title: "Payment Collection",
    href: "/payment-collection",
    description: "Collect payments seamlessly across multiple channels.",
  },
  {
    title: "UPI & QR Payment",
    href: "/upi-qr-code-payment-gateway",
    description: "Collect UPI payments instantly with QR codes.",
  },

  {
    title: "E-NACH",
    href: "/enach-payment-api",
    description: "Enable recurring auto-debit mandates with e-NACH services.",
  },
];

const bankingSubmenu = [
  {
    title: "Virtual Account",
    href: "/virtual-account-api",
    description: "Create virtual accounts for seamless transactions.",
  },
  {
    title: "ESCROW Account",
    href: "/escrow-account-api",
    description: "Secure payments with ESCROW services.",
  },
  {
    title: "Connected Banking",
    href: "/connected-banking-api",
    description: "Seamlessly connect multiple banking services.",
  },

  {
    title: "FD & RD",
    href: "/fd-rd-api",
    description: "Enable fixed and recurring deposit services.",
  },

  {
    title: "CIBIL",
    href: "/cibil-credit-report-api",
    description: "Access CIBIL credit reports instantly.",
  },
];


const solutionsSubmenu = [
  {
    title: "Core Banking",
    href: "/core-banking-solutions",
    description: "Complete digital core banking solutions.",
  },
  {
    title: "NBFC",
    href: "/nbfc-software",
    description: "Technology solutions for NBFCs.",
  },
  {
    title: "NIDHI",
    href: "/nidhi-software",
    description: "Solutions for NIDHI companies.",
  },
  {
    title: "Credit Cooperative Society",
    href: "/credit-cooperative-society-software",
    description: "Solutions for credit cooperative societies.",
  },
  {
    title: "Treasury Management",
    href: "/treasury-management-system",
    description: "Manage treasury & corporate finances.",
  },
  {
    title: "Loan Management",
    href: "/loan-management-software",
    description: "Streamline loan management processes.",
  },
  {
    title: "Micro Finance",
    href: "/microfinance-software",
    description: "Empower microfinance institutions digitally.",
  },
  {
    title: "Co-Lending",
    href: "/co-lending-solutions",
    description: "Solutions for credit cooperative societies.",
  },
  {
    title: "Peer-to-Peer Lending",
    href: "/peer-to-peer-loan-software",
    description: "Build & manage P2P lending platforms.",
  },
];


const verificationSubmenu = [
  {
    title: "Aadhaar",
    href: "/aadhaar-verification-api",
    description: "Verify Aadhaar for identity authentication.",
  },
  {
    title: "PAN",
    href: "/pan-verification-api",
    description: "Validate PAN details instantly.",
  },
  {
    title: "GST",
    href: "/gst-verification-api",
    description: "Verify GST details for compliance.",
  },
  {
    title: "Bank Account",
    href: "/bank-account-verification-api",
    description: "Validate bank account details securely.",
  },
];

const consulting = [
  { title: "NBFC Registration", href: "/nbfc-registration" },
  { title: "NBFC Takeover", href: "/nbfc-takeover" },
  { title: "NBFC Collaboration", href: "/nbfc-collaboration" },
  {
    title: "NBFC Aggregator License",
    href: "/nbfc-account-aggregator-license",
  },
];

const useCasesSubmenu = [
  {
    title: "Non-Profit",
    href: "/ngo-financial-management-solutions",
    description: "Enable donations & NGO transactions.",
  },
  {
    title: "Corporate Lending",
    href: "/corporate-lending-management-solutions",
    description: "Support lending & digital loan apps.",
  },
  {
    title: "Business Financing",
    href: "/commercial-banking-solutions",
    description: "Get financing solutions for businesses.",
  },
  {
    title: "Investment",
    href: "/wealthtech-solutions",
    description: "Investment platform payment solutions.",
  },
  {
    title: "Payroll",
    href: "/hr-payroll-solutions",
    description: "Automate employee payroll disbursements.",
  },
  {
    title: "Logistics",
    href: "/logistics-financial-management-solutions",
    description: "Payment solutions for logistics industry.",
  },
  {
    title: "Vendor Payment",
    href: "/vendor-payment-solutions",
    description: "Manage & automate vendor payments easily.",
  },
  {
    title: "Healthcare",
    href: "/healthcare-financial-management-solutions",
    description: "Enable secure payments for healthcare.",
  },
  {
    title: "EdTech",
    href: "/edtech-financial-management-solutions",
    description: "Payment solutions for edtech platforms.",
  },
  {
    title: "Recharge Portals",
    href: "/utilities-management-solutions",
    description: "Simplify utilities & recharge transactions.",
  },
  {
    title: "Payment Acceptance",
    href: "/online-payments",
    description: "Payment acceptance.",
  },

  {
    title: "Payment Settlement",
    href: "/instant-payment-settlement-solutions",
    description: "Simplify reconciliation & settlements efficiently.",
  },
  {
    title: "Corporate Banking",
    href: "/neo-banking-solutions",
    description: "Digital-first banking use cases.",
  },

  {
    title: "Corporate Treasury",
    href: "/corporate-treasury-management-solutions",
    description: "Enterprise-grade treasury management.",
  },
  {
    title: "Real Estate",
    href: "/real-estate-financial-management-solutions",
    description: "Manage real estate payments digitally.",
  },
  {
    title: "Fintech",
    href: "/fintech-solutions",
    description: "Custom fintech integrations & payments.",
  },
  {
    title: "Risk Radar",
    href: "/financial-risk-management-solutions",
    description: "Monitor & manage financial risks effectively.",
  },
  {
    title: "E-Commerce",
    href: "/ecommerce-payment-banking-solutions",
    description: "Enable smooth payments for e-commerce businesses.",
  },
  {
    title: "Retail",
    href: "/retail-financial-management-solutions",
    description: "Enable digital transactions in retail stores.",
  },

  {
    title: "Insurance",
    href: "/insurance-financial-management-solutions",
    description: "Insurance payment & premium solutions.",
  },

  {
    title: "Freelancers",
    href: "/freelancers-financial-management-solutions",
    description: "Payment solutions for freelancers & gig workers.",
  },
  {
    title: "KYC - Customer Verification",
    href: "/kyc-solutions",
    description: "Verify individual identities with KYC.",
  },
  {
    title: "KYB - Business Verification",
    href: "/kyb-solutions",
    description: "Verify businesses with KYB compliance.",
  },
];

const companySubmenu = [
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Blog", href: "/blog" },
];

const moreSubmenu = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Company",
    children: companySubmenu,
  },
];



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileItemClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-[9999] w-full bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div
        className="
  max-w-[1440px] mx-auto
  flex items-center justify-between px-4 py-3
  navxl:grid navxl:grid-cols-[auto_1fr_auto] navxl:justify-normal
"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 w-[100px]">
          <Image
            src="/assets/Home/logo.png"
            alt="AOPay"
            width={160}
            height={48}
            priority
            className="h-10 w-auto md:h-9 lg:h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden navxl:flex justify-center min-w-0">
          <nav className="flex items-center whitespace-nowrap gap-4 lg:gap-6 font-medium text-sm lg:text-base">
            <Dropdown title="Payments" items={paymentsSubmenu} />
            <Dropdown title="Banking" items={bankingSubmenu} />
            <Dropdown title="Verification" items={verificationSubmenu} />
            <Dropdown title="Solutions" items={solutionsSubmenu} />
            <Dropdown title="Consulting" items={consulting} />
            <Dropdown title="Use Cases" items={useCasesSubmenu} />
            <Link
              href="/pricing"
              className="hidden navlg:block relative group text-gray-700 hover:text-black"
            >
              Pricing
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all group-hover:w-full" />
            </Link>

            <div className="hidden navlg:block">
              <Dropdown title="Company" items={companySubmenu} />
            </div>
            <div className="hidden md:block navlg:hidden mr-8">
              <Dropdown
                title="More"
                items={[
                  { title: "Pricing", href: "/pricing" },
                  ...companySubmenu.map((item) => ({
                    title: `${item.title}`,
                    href: item.href,
                  })),
                ]}
              />
            </div>
          </nav>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden navxl:inline-flex bg-[#001E80] hover:bg-[#00175f]"
          >
            <Link
              href="/contact-us"
              className="rounded-full px-5 py-2 text-white text-[clamp(12px,1vw,14px)]"
            >
              Get Started
            </Link>
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="navxl:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navxl:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] 
  bg-white transition-all overflow-y-auto ${
    menuOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-4 pointer-events-none"
  }`}
      >
        <div className="px-6 py-6 space-y-4">
          {[
            ["Payments", paymentsSubmenu],
            ["Banking", bankingSubmenu],
            ["Verification", verificationSubmenu],
            ["Solutions", solutionsSubmenu],
            ["Use Cases", useCasesSubmenu],
            ["Company", companySubmenu],
          ].map(([title, items]) => (
            <Dropdown
              key={title}
              title={title}
              items={items}
              mobile
              onItemClick={handleMobileItemClick}
            />
          ))}

          <Link
            href="/pricing"
            onClick={handleMobileItemClick}
            className="block py-2"
          >
            Pricing
          </Link>

          <Button asChild className="w-full bg-[#001E80] hover:bg-[#00175f]">
            <Link href="/contact-us" onClick={handleMobileItemClick}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* DROPDOWN */

function Dropdown({ title, items, mobile, onItemClick }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) =>
      ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const columns = items.length > 6 ? 2 : 1;
  const perCol = Math.ceil(items.length / columns);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 hover:text-black"
      >
        {title}
        <ChevronDown
          size={14}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {!mobile && open && (
        <div className="absolute top-full mt-3 -left-32 bg-white border shadow-lg rounded-xl p-5 flex gap-6 z-50 max-h-[480px] overflow-auto scrollbar-hide">
          {Array.from({ length: columns }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 w-60 min-w-0">
              {items.slice(i * perCol, (i + 1) * perCol).map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    onItemClick?.();
                  }}
                  className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 min-w-0"
                >
                  <span className="font-semibold text-sm">{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-gray-500 break-words whitespace-normal">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}

      {mobile && open && (
        <div className="pl-4 space-y-2 border-l">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => {
                setOpen(false);
                onItemClick?.();
              }}
              className="block py-1"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
