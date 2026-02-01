"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VerificationFailure = ({
  heading = "Know exact reason behind verification failure",
  verificationContent,
  reversed = false,
}) => {
  return (
    <section className="max-w-5xl mx-auto mt-4">
      <div className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div className={`${reversed ? "order-2" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold !leading-tight">
            {heading}
          </h2>
          <p className="mt-4 text-gray-600">{verificationContent.para1}</p>
          {verificationContent.para2 && (
            <p className="mt-4 text-gray-600">{verificationContent.para2}</p>
          )}
        </div>

        {/* Right Side Image & Rating */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={verificationContent.imgUrl}
              width={400}
              height={200}
              alt={verificationContent.alt}
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationFailure;
