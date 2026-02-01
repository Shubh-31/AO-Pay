"use client";
import { motion } from "framer-motion";
import { MessageSquare, Laptop, Phone } from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactData = [
    {
      icon: <MessageSquare className="text-gray-700" />,
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      link: "mailto:sales@aopay.in",
      linkContent: "sales@aopay.in",
    },
    {
      icon: <Laptop className="text-gray-700" />,
      title: "Chat to support",
      description: "We’re here to help.",
      link: "mailto:techsupport@aopay.in",
      linkContent: "techsupport@aopay.in",
    },
    {
      title: "Visit us",
      description: "Visit our office HQ.",
      link: "https://www.google.com/maps/place/AO+Pay+Technology+Pvt.+Ltd./@28.614644,77.0331882,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05f8a102aed7:0x5076326d52942a27!8m2!3d28.614644!4d77.0331882!16s%2Fg%2F11yh3lb4hm?entry=ttu",
      linkContent:
        "Building No. 73, Block B-1, Sewak Park Extension,Near NSUT, Uttam Nagar, New Delhi - 110059",
    },
    {
      icon: <Phone className="text-gray-700" />,
      title: "Call us",
      description: "Mon-Sat from 10am to 7pm.",
      link: "tel:01142151216",
      linkContent: "(011) 421-512-16",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-20">
            Let's Build the Future Of Banking Together
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Whether you're exploring our digital banking platform, need
            technical assistance with integration, or ready to transform your
            financial services operations—our team of experts is ready to assist
            you at every step.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Connect with us today and discover how we can accelerate your
            digital transformation journey with our banking infrastructure.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {contactData.map((card) =>
            card.title === "Visit us" ? (
              // Special Visit Us card
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="rounded-lg overflow-hidden shadow bg-white text-left"
              >
                {/* Top image */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/assets/ContactUs/OfficeHQMapPin.png"
                    alt="AOPay Office Location"
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </a>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm font-medium underline"
                  >
                    {card.linkContent}
                  </a>
                </div>
              </motion.div>
            ) : (
              // Default cards
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-white shadow rounded-lg p-6 text-left"
              >
                <div className="flex items-center mb-10">
                  <div className="w-10 h-10 flex items-center border border-gray-100 justify-center rounded-md">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{card.description}</p>
                {card.link ? (
                  <a
                    href={card.link}
                    className="mt-2 block text-sm font-medium underline"
                  >
                    {card.linkContent}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium whitespace-pre-line">
                    {card.linkContent}
                  </p>
                )}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
