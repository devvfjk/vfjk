"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoreObjectives() {
  const objectives = [
    "International Advocacy: Build diplomatic and civic engagement at the UN, U.S. Congress, EU Parliament, and OIC.",
    "Research & Policy Dialogue: Produce evidence-based reports, policy briefs, and seminars to inform global decision-makers.",
    "Public Awareness Campaigns: Organize conferences, media campaigns, and cultural events highlighting human rights violations.",
    "Diaspora Mobilization: Unite global Kashmiri and South Asian communities for coordinated advocacy and humanitarian outreach.",
    "Strategic Partnerships: Collaborate with human rights organizations, universities, and media to strengthen the global narrative on Kashmir.",
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-32 bg-linear-to-b from-[#004d1a] via-[#006400] to-[#003300] text-white">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-8 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] text-center mb-6">
          Core Objectives
        </h1>

        {/* Optional Image */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/objective.jpg"
            alt="Core Objectives Banner"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6 w-full">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-6 bg-yellow-400/25 hover:bg-yellow-400/40 border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-black font-medium text-lg sm:text-xl leading-relaxed">
                {obj}
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
          “Uniting efforts, raising awareness, and advocating for justice in
          Kashmir.”
        </motion.blockquote>
      </motion.div>
    </main>
  );
}
