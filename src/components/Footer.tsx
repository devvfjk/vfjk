"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-linear-to-r from-[#006400] via-[#007a33] to-[#006400] text-white border-t-4 border-yellow-400 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] py-10"
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-lg font-semibold text-yellow-300 mb-2 tracking-wide">
          Voices for Justice in Kashmir
        </h3>

        <p className="text-sm text-gray-200 mb-1">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">All Rights Reserved.</span>
        </p>

        <p className="text-xs text-gray-300">
          Registered in the United States | Advocating Globally for Kashmir
        </p>

        {/* Optional Socials */}
        <div className="flex justify-center gap-6 mt-5">
          <a
            href="#"
            className="hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Flag Accent Bar */}
      <div className="h-2 mt-8 bg-linear-to-r from-yellow-400 via-white to-yellow-400"></div>
    </motion.footer>
  );
};

export default Footer;
