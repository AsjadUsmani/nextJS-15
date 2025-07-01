"use client";
import { motion } from "motion/react"
const Rates = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}
    className="py-20 px-6 h-[70vh] text-gray-800 bg-gradient-to-r from-purple-100 to-orange-100 flex items-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Rates & Insurance
        </h2>

        <div className="space-y-6 text-lg leading-relaxed ">
          <div className="">
            <p>
              <strong>Session Fee(Individual Session):</strong> $200
            </p>
            <p>
              <strong>Session Fee(Couple Session):</strong> $240
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Rates;
