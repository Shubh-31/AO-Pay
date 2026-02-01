"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ValuesSection = () => {
  return (
    <section className="py-16 mt-4">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            One Plug & Play Integration all You Need to Get Started
          </h2>
          {/* <p className="mt-4 text-gray-600 dark:text-gray-300">
            Integrity, innovation, and customer focus are the cornerstones of
            our approach to business.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Fast & Secure",
              description:
                "We uphold honesty and transparency in every action we take.",
              imgSrc: "/assets/Verifications/Fast_Secure.png",
            },
            {
              title: "Webhooks for Real-Time Status",
              description:
                "We embrace creativity and technology to deliver unique solutions.",
              imgSrc: "/assets/Verifications/Webhooks.png",
            },
            {
              title: "Sandbox to Get Live Faster",
              description:
                "Our customers are at the heart of everything we do.",
              imgSrc: "/assets/Verifications/Sandbox.png",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-sm text-center flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <Image
                src={value.imgSrc}
                alt={value.title}
                width={50}
                height={50}
                className="rounded-full mb-2"
              />
              <h3 className="text-xl font-semibold text-gray-600">
                {value.title}
              </h3>
              {/* <p className="mt-4 text-gray-600">{value.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
