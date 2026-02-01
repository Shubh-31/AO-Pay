"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const PaymentSection = ({ image, title, reversed, textContent, alt }) => {
  return (
    <motion.section
      className={`flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
          src={image}
          alt={alt}
          className="w-[80%] md:w-full max-w-md object-contain"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-3xl font-bold text-black-gradient">{title}</h3>
        {textContent &&
          textContent.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <div>
                {benefit.title && (
                  <h4 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h4>
                )}
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
      </div>
    </motion.section>
  );
};

const QRPayments = ({ textContent1, textContent2, heading, subHeading }) => {
  return (
    <section className="py-16 px-6 mt-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {heading}
          </h2>
          {subHeading && (
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subHeading}</p>
          )}
        </div>
        <PaymentSection
          image={textContent1.imgSrc}
          alt={textContent1.alt}
          title={textContent1.mainTitle}
          reversed={false}
          textContent={textContent1.content}
        />
        <PaymentSection
          image={textContent2.imgSrc}
          alt={textContent2.alt}
          title={textContent2.mainTitle}
          reversed={true}
          textContent={textContent2.content}
        />
      </div>
    </section>
  );
};

export default QRPayments;
