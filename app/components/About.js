"use client";
import Image from "next/image";
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}
    className="py-20 px-6 text-gray-800 mb-20">
      <div className="mx-auto flex flex-col md:flex-row gap-10 h-fit items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            priority
            src="/Dr.Serena-Blake.jpg"
            alt="Dr. Serena Blake"
            width={450}
            height={450}
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>

        <div className="md:w-3/5 space-y-4 w-full flex flex-col justify-center ">
          <h2 className="text-3xl font-semibold mb-2">
            Dr. Serena Blake, PsyD
          </h2>
          <p className="text-lg text-gray-600">
            Clinical Psychologist based in Los Angeles, CA with over eight years
            of experience and more than 500 client sessions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma.
            <br />
            <br />
            Whether you meet in her Maplewood Drive office or connect virtually
            via Zoom, Dr. Blake is committed to creating a safe, supportive
            space for you to thrive.
          </p>

          {/* <div className="mt-4 space-y-2 text-gray-700">
            <p><strong>📍 Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p><strong>📞 Phone:</strong> (323) 555-0192</p>
            <p><strong>📧 Email:</strong> <Link href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</Link></p>
            <p><strong>🕐 Office Hours:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>In-person: Tue & Thu, 10 AM-6 PM</li>
              <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM-5 PM</li>
            </ul>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
