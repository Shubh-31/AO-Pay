"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardContent";

export const CardWithFeature = ({ features }) => {
  if (!features) return null;

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* H2 */}
      {features.heading2 && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {features.heading2}
        </h2>
      )}

      {/* Section Description */}
      {features.description && (
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
          {features.description}
        </p>
      )}

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {features.points?.length > 0 ? (
          features.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl shadow-md hover:shadow-xl transition bg-white">
                <CardContent className="p-6">
                  {point.imgSrc && (
                    <img src={point.imgSrc} alt={point.heading3} className="w-12 mb-4" />
                  )}
                  {/* H3 */}
                  {point.heading3 && (
                    <h3 className="text-xl font-semibold text-green-900 mb-3">
                      {point.heading3}
                    </h3>
                  )}

                  {/* Paragraph Style */}
                  {point.type === "paragraph" && point.description && (
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  )}

                  {/* List Style */}
                  {point.type === "list" && (
                    <>
                      {point.description && (
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {point.description}
                        </p>
                      )}

                      {Array.isArray(point.features) &&
                      point.features.length > 0 ? (
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                          {point.features.map((feature, i) => (
                            <li key={i} className="leading-relaxed">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic">
                          No features available.
                        </p>
                      )}
                    </>
                  )}

                  {/* Fallback (Unknown type or missing) */}
                  {!["list", "paragraph"].includes(point.type) &&
                    (point.description ? (
                      <p className="text-gray-700 leading-relaxed">
                        {point.description}
                      </p>
                    ) : (
                      <p className="text-gray-500 italic">
                        Content coming soon.
                      </p>
                    ))}
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No features available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};
