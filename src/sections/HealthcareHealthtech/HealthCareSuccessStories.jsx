"use client";

import { motion } from "framer-motion";
import {
  Hospital,
  CreditCard,
  ShieldCheck,
  Laptop,
  Activity,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HealthcareSuccessStories = () => {
  const stories = [
    {
      icon: <Hospital className="w-8 h-8 text-blue-600" />,
      heading: "Regional Health System Streamlines Patient Payments",
      description:
        "A leading regional health system with multiple hospitals and specialty clinics needed to modernize their patient payment experience while maintaining strict compliance standards.",
      challenge:
        "The health system's legacy billing system created friction in the patient payment process, leading to delayed collections and increased administrative overhead. Patients struggled with multiple payment portals across different departments.",
      solution:
        "By implementing AOPAY's unified healthcare payment platform, the health system created a single patient payment portal with automated payment plans, mobile-friendly interfaces, and integrated insurance verification. The solution included comprehensive fraud protection and automated reconciliation with their existing EHR systems.",
      buttons: [
        {
          label: "Healthcare Payments",
        },
        { label: "Patient Portal",},
        { label: "Fraud Prevention",},
        {
          label: "EHR Integration",
        },
      ],
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      heading: "Specialty Clinic Increases Collection Rates",
      description:
        "A multi-location specialty clinic needed a solution to improve collection rates while providing flexible payment options for patients with high-deductible health plans.",
      challenge:
        "Rising patient financial responsibility created challenges in collecting payments at the point of service. The clinic needed flexible payment plans and better point-of-care collection tools.",
      solution:
        "The clinic implemented AOPAY's point-of-care payment solutions with integrated payment plans and HSA/FSA card processing. Automated payment reminders and flexible payment options increased collection rates by 45% within six months.",
      buttons: [
        {
          label: "Point-of-Care Payments",
        },
        { label: "Payment Plans" },
        {
          label: "HSA/FSA Processing"
        },
      ],
    },
    {
      icon: <Laptop className="w-8 h-8 text-orange-600" />,
      heading: "Telemedicine Platform Scales Payment Processing",
      description:
        "A rapidly growing telemedicine platform needed to scale their payment processing infrastructure while maintaining security and compliance across multiple states.",
      challenge:
        "As patient volume grew during the telehealth boom, the platform needed secure payment processing that could handle varying state regulations and insurance requirements while preventing fraud.",
      solution:
        "AOPAY's scalable healthcare payment infrastructure enabled the platform to process payments across all 50 states with automated compliance monitoring, intelligent fraud detection, and seamless insurance claim processing.",
      buttons: [
        {
          label: "Scalable Processing",
        },
        { label: "Fraud Detection" },
        {
          label: "Multi-State Compliance",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Healthcare Payment Success Stories
        </motion.h2>

        {/* Stories */}
        <div className="space-y-12">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                {story.icon}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {story.heading}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600">{story.description}</p>

              {/* Challenge */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-red-600 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-red-600" /> Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {story.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" /> Solution
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {story.solution}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                {story.buttons.map((btn, bIdx) => (
                  <Button
                    key={bIdx}
                    className={`bg-gray-50 border border text-black rounded-lg px-5 hover:bg-gray-100`}
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareSuccessStories;
