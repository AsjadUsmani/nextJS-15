"use client";
import { motion } from "motion/react"
const Footer = () => {
  return (
    <motion.footer 
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}
    className="text-gray-800 py-10 px-6 border-t border-gray-300">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-sm">
        {/* Left: Personal Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Dr. Serena Blake, PsyD
          </h3>
          <p>Clinical Psychologist</p>
          <p className="mt-2">
            <strong>Experience:</strong> 8 years of practice, 500+ sessions
          </p>
          <p className="mt-2">
            <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA
            90026
          </p>
        </div>

        {/* Right: Contact & Hours */}
        <div>
          <p className="mb-1">
            <strong>Phone:</strong>{" "}
            <a href="tel:+13235550192" className="underline">
              (323) 555-0192
            </a>
          </p>
          <p className="mb-3">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:serena@blakepsychology.com"
              className="underline"
            >
              serena@blakepsychology.com
            </a>
          </p>

          <div>
            <strong>Office Hours:</strong>
            <ul className="list-disc ml-5 mt-1">
              <li>In-person: Tue & Thu, 10 AM–6 PM</li>
              <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs mt-10 text-gray-500">
        © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
