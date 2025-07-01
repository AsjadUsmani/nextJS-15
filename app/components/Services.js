"use client"

import { assets } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}
    className="py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Services & Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={200}
                height={200}
                className="mx-auto mb-4 object-contain rounded-2xl"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
