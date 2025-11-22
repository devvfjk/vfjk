"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Approach() {
  const highlights = [
    {
      title: "Diplomacy",
      desc: "Engaging governments and international institutions to advance Kashmir's rights.",
    },
    {
      title: "Documentation",
      desc: "Recording human rights violations to raise awareness and inform policy.",
    },
    {
      title: "Dialogue",
      desc: "Facilitating conversations to promote understanding and peaceful solutions.",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-32 bg-linear-to-b from-[#004d1a] via-[#006400] to-[#003300] text-white">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-8 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] text-center">
          Our Approach
        </h1>

        {/* Optional Image */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/approach.jpg"
            alt="Our Approach Banner"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Main Text */}
        <motion.p
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 text-center"
        >
          Through diplomacy, documentation, and dialogue,{" "}
          <span className="font-semibold text-yellow-300">
            Voices for Justice in Kashmir
          </span>{" "}
          strives to shift global perception from silence to solidarity —
          transforming awareness into action for the Kashmiri people’s right to
          self-determination.
        </motion.p>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 my-6 rounded-full"></div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 w-full">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-4 sm:p-5 bg-white/15 hover:bg-white/25 border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1 text-center">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Quote */}
        <motion.blockquote
          initial="hidden"
          animate="show"
          transition={{ delay: 1 }}
          className="italic text-lg sm:text-xl mt-8 text-yellow-200 font-medium text-center"
        >
          “From Awareness to Action — Justice for Kashmir.”
        </motion.blockquote>
      </motion.div>
    </main>
  );
}
