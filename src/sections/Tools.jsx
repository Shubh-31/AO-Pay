"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ToolsSection = ({ toolsContent }) => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-32 ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          {toolsContent.content.map((toolItem, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg bg-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 rounded-full bg-blue-100 text-xl flex-shrink-0">
                <Image src={toolItem.icon} width={30} height={30} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{toolItem.title}</h3>
                {toolItem.description && (
                  <p className="text-gray-600 text-sm">
                    {toolItem.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-full md:w-1/2 flex   "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className=" p-6 rounded-2xl bg-blue-100">
            <Image src={toolsContent.imgSrc} alt={toolsContent.alt} height={600} width={350} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
