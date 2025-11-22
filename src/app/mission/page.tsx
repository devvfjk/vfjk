"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionMission() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-32 bg-linear-to-b from-[#004d1a] via-[#006400] to-[#003300] text-white">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-8 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Our Vision & Mission
        </h1>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/mission.jpg"
            alt="Vision & Mission"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Mission Paragraph */}
        <motion.p
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100"
        >
          To advocate the{" "}
          <span className="font-semibold text-yellow-300">
            fundamental human and political rights
          </span>{" "}
          of the Kashmiri people, particularly their right to
          self-determination, by engaging governments, international
          institutions, think tanks, civil society, and the global media.
        </motion.p>

        {/* Vision Paragraph */}
        <motion.p
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100"
        >
          Our vision is a world where the people of Kashmir live with{" "}
          <span className="font-semibold text-yellow-300">
            freedom, dignity, and justice
          </span>
          , enjoying their inalienable right to determine their own future
          through peaceful and democratic means.
        </motion.p>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 my-6 rounded-full"></div>

        {/* Core Values / Highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6 w-full">
          {[
            {
              title: "Peaceful Advocacy",
              desc: "Engaging governments and institutions globally to promote justice and human rights for Kashmir.",
            },
            {
              title: "Awareness",
              desc: "Raising public awareness on the rights of the Kashmiri people through campaigns and media.",
            },
            {
              title: "Policy & Research",
              desc: "Producing reports, insights, and dialogue to inform global decision-making.",
            },
            {
              title: "Global Solidarity",
              desc: "Mobilizing diaspora and international communities to stand with Kashmir.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-4 sm:p-5 bg-white/15 hover:bg-white/25 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
