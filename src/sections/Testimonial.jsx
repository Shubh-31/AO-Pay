"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Testimonial({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-gray-50">
      {/* Background Text */}
      <motion.h1
        className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-extrabold text-gray-200 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        TESTIMONIAL
      </motion.h1>

      {/* Testimonial Card */}
      <motion.div
        className="relative bg-white shadow-lg rounded-2xl p-8 w-[90%]  max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        key={testimonials[currentIndex].id}
      >
        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <div className="w-32 h-32 rounded-lg object-contain relative">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              fill
            />
          </div>
        </div>
        {/* Quote */}
        <p className="mt-4 text-center text-lg text-gray-700">
          "{testimonials[currentIndex].quote}"
        </p>
        {/* Name and Role */}
        <div className="mt-4 text-center">
          <h3 className="font-bold text-gray-900">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-gray-600">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex items-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          className="flex items-center justify-center w-10 h-10 text-white bg-green-500 shadow-md rounded-full hover:bg-green-600"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 text-white bg-green-500 shadow-md rounded-full hover:bg-green-600"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
