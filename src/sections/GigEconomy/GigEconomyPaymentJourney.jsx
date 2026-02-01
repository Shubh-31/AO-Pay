"use client";

import { motion } from "framer-motion";

const GigEconomyPaymentJourney = () => {
  const journeySteps = [
    {
      title: "Project Agreement",
      description:
        "Client and freelancer agree on project terms, deliverables, and payment structure with clear milestone definitions.",
      imgSrc:
        "/assets/GigEconomyFreelance/Seamless Payment Journey for Gig Work/Project Agreement.png",
    },
    {
      title: "Escrow Funding",
      description:
        "Client funds project escrow account to secure freelancer payment and demonstrate commitment to the project.",
      imgSrc:
        "/assets/GigEconomyFreelance/Seamless Payment Journey for Gig Work/Escrow Funding.png",
    },
    {
      title: "Work Progress",
      description:
        "Freelancer completes work with milestone updates and progress tracking visible to all parties through the platform.",
      imgSrc:
        "/assets/GigEconomyFreelance/Seamless Payment Journey for Gig Work/Work Progress.png",
    },
    {
      title: "Approval & Release",
      description:
        "Client reviews deliverables and approves milestone completion, triggering automatic escrow fund release to freelancer.",
      imgSrc:
        "/assets/GigEconomyFreelance/Seamless Payment Journey for Gig Work/Approval & Release.png",
    },
    {
      title: "Payment Processing",
      description:
        "Automated payment processing distributes funds to freelancer account while handling platform fees and tax requirements.",
      imgSrc:
        "/assets/GigEconomyFreelance/Seamless Payment Journey for Gig Work/Payment Processing.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Seamless Payment Journey for Gig Work
        </motion.h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Guide clients and freelancers through intuitive payment processes that
          build trust, ensure security, and maintain transparency throughout the
          entire project lifecycle.
        </p>

        {/* Journey Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img src = {step.imgSrc} alt = {step.title} className="w-6 my-2"/>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GigEconomyPaymentJourney;
