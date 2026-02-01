"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const ExploreProducts = ({ linkContent }) => {
  const { headingContent, ...rest } = linkContent;

  const items = Object.values(rest).flat();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Our {' '}{headingContent || "Explore Our Other Services"}
        </h2>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const isLastOdd =
              items.length % 2 !== 0 && index === items.length - 1;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-md p-6 flex items-start hover:shadow-lg transition
                  ${isLastOdd ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}`}
              >
                {/* Icon */}
                <Image
                  src={item.icon}
                  alt={item.alt || item.heading}
                  width={70}
                  height={70}
                  className="flex-shrink-0"
                />

                {/* Text Content */}
                <div className="ml-4 flex flex-col">
                  <Link href={item.link}>
                    <h3 className="text-lg font-semibold text-gray-900 hover:underline">
                      {item.heading}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mt-2 text-sm">{item.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
