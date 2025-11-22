"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
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
          About Us
        </h1>

        {/* First Paragraph */}
        <motion.p
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 mb-4"
        >
          <strong className="text-yellow-300 font-semibold">
            Voices for Justice in Kashmir (VJK)
          </strong>{" "}
          is a U.S.-based non-profit advocacy organization promoting a peaceful
          and just resolution to the Kashmir conflict according to international
          law and the United Nations Charter.
        </motion.p>

        {/* Image Between Paragraphs */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/approach.jpg"
            alt="Kashmir Banner"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Second Paragraph */}
        <motion.p
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100"
        >
          Founded by{" "}
          <span className="font-semibold text-yellow-300">
            human rights advocates
          </span>
          , <span className="font-semibold text-yellow-300">academics</span>,
          and{" "}
          <span className="font-semibold text-yellow-300">
            members of the Kashmiri diaspora
          </span>
          , VJK amplifies the voices of the oppressed, engages policymakers, and
          shapes global opinion to uphold the{" "}
          <span className="italic font-semibold text-yellow-300">
            right of self-determination for the people of Jammu & Kashmir
          </span>
          .
        </motion.p>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 my-6 rounded-full"></div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6 w-full">
          {[
            {
              title: "Advocacy",
              desc: "Engaging global policymakers, civil society, and the media to ensure justice for Kashmir.",
            },
            {
              title: "Awareness",
              desc: "Educating the world about human rights violations and mobilizing solidarity for Kashmir.",
            },
            {
              title: "Research",
              desc: "Producing reports and policy insights to influence informed global engagement.",
            },
            {
              title: "Empowerment",
              desc: "Strengthening Kashmiri voices across the diaspora and international human rights platforms.",
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

        {/* Closing Quote */}
        <motion.blockquote
          initial="hidden"
          animate="show"
          transition={{ delay: 1 }}
          className="italic text-lg sm:text-xl mt-8 text-yellow-200 font-medium text-center"
        >
          “Empowering voices, shaping narratives, and standing for justice in
          Kashmir.”
        </motion.blockquote>
      </motion.div>
    </main>
  );
}
