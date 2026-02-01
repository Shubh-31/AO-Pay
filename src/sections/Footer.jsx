import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-8">
      {/* Logo and Description */}
      <div className="md:flex justify-between max-w-7xl md:mx-auto">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <Image
                src="/assets/Home/logo.png"
                width={120}
                height={120}
                alt="logo"
              />
              {/* <span className="text-white text-lg font-bold">AO PAY</span> */}
            </Link>
          </div>
          <p className="text-md sm:w-full md:w-[70%]">
            Enterprise-grade digital banking infrastructure for the modern
            financial services industry. Secure, scalable, and built for
            innovation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-20">
          {/* Company Links */}
          {/* <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
              <a href="#" className="hover:text-white">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Events
              </a>
            </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recharge-bill-payment"
                  className="hover:text-white"
                >
                  Payment
                </Link>
              </li>
              <li>
                <Link href="/book-flight-ticket" className="hover:text-white">
                  Travel
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Products Links */}
          {/* <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/virtual-account" className="hover:text-white">
                  Banking
                </Link>
              </li>
              <li>
                <Link href="/verify-aadhaar" className="hover:text-white">
                  Verification
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Get In Touch */}
          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4">
              Get In Touch
            </h3>
            <a href="mailto:info@aopay.in">
              <p className="text-md mb-4 hover:text-white">info@aopay.in</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aopay-technology/"
                className="hover:text-white"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/aopaytechnology?igsh=MWtkOGQ1YmZ6NDhnZA=="
                className="hover:text-white"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/people/AO-Pay/61575943022624/"
                className="hover:text-white"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-md">
        <p>
          &copy; {new Date().getFullYear()} AO Pay All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/terms-conditions" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/cancellation-refund" className="hover:text-white">
            Cancellation & Refund Policy
          </Link>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
