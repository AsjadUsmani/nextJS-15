"use client"
import { motion } from "motion/react"
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      
      className="max-sm:m-0 relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-6 max-sm:min-h-screen"
      style={{ backgroundImage: "url('/nature.jpg')"}}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <motion.div 
      initial={{opacity: 0.2, y: 200}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      className="z-10 max-w-3xl">
        <h1 className="text-3xl md:4xl md:text-5xl font-semibold leading-tight mb-4">
          Psychological Care for <br />
          Change, Insight, and Well-Being
        </h1>
        <h2 className="text-lg md:text-xl text-gray-200">
          Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
        </h2>
        <motion.button 
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}
        onClick={scrollToContact}
        className="uppercase font-semibold bg-purple-600 mt-10 px-4 py-2 rounded-full cursor-pointer hover:bg-purple-700">Shedule a consultation</motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
