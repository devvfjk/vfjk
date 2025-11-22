"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const sections = [
    {
      title: "About Us",
      text: `Voices for Justice in Kashmir (VJK) is a U.S.-based non-profit advocacy organization dedicated to promoting a just and peaceful resolution of the Kashmir conflict in accordance with international law and the United Nations Charter. We amplify the voices of the oppressed, engage policymakers, and shape global opinion for the people of Jammu & Kashmir to achieve their right to self-determination.`,
      image: "/approach.jpg",
      imageLeft: true,
    },
    {
      title: "Our Vision & Mission",
      text: `Our mission is to advocate for the fundamental human and political rights of the Kashmiri people by engaging governments, international institutions, think tanks, civil society, and global media. Our vision is a world where the people of Kashmir live in freedom, dignity, and justice — determining their own future through peaceful and democratic means.`,
      image: "/mission.jpg",
      imageLeft: false,
    },
    {
      title: "Core Objectives",
      text: `1. International Advocacy: Engage at the UN, U.S. Congress, EU, and OIC.\n2. Research & Policy: Publish reports and host dialogues with global policymakers.\n3. Public Awareness: Lead media and cultural campaigns highlighting rights violations.\n4. Diaspora Mobilization: Unite Kashmiri and South Asian communities globally.\n5. Strategic Partnerships: Collaborate with human rights and academic institutions.`,
      image: "/objective.jpg",
      imageLeft: true,
    },
    {
      title: "Our Approach",
      text: `Through diplomacy, documentation, and dialogue, VJK seeks to shift global perception from silence to solidarity — transforming awareness into action for Kashmir’s right to self-determination.`,
      image: "/approach.jpg",
      imageLeft: false,
    },
  ];

  return (
    <main className="min-h-screen text-white bg-linear-to-b from-[#006400] via-[#ffcc33] to-[#006400]">
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center text-center py-24 sm:py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate="show"
          className="absolute inset-0 opacity-20 bg-[url('/pattern-flag.svg')] bg-repeat bg-center"
        />
        <motion.h1
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
        >
          <span className="text-yellow-400">Voices for</span> Justice in{" "}
          <span className="text-white">Kashmir</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-2xl mt-6 font-medium text-yellow-500 max-w-3xl px-2"
        >
          “Right to Self-Determination — A Global Call for Justice”
        </motion.p>
        <motion.a
          href="/about"
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 bg-yellow-400 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg text-sm sm:text-base"
        >
          Learn More
        </motion.a>
      </section>

      {/* SECTIONS WITH IMAGES */}
      {sections.map((section, i) => (
        <motion.section
          key={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 mt-8 sm:mt-12 rounded-2xl shadow-lg ${
            i % 2 === 0 ? "bg-white text-black" : "bg-green-800 text-yellow-200"
          }`}
        >
          <div
            className={`flex flex-col ${
              section.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 ${
                  i % 2 === 0 ? "text-green-800" : "text-yellow-300"
                }`}
              >
                {section.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CONTACT SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 mt-8 sm:mt-12 bg-white text-black text-center rounded-2xl shadow-xl border-t-8 border-yellow-400"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-green-800">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg mb-3 sm:mb-4">
          Reach out for partnerships, collaborations, or advocacy inquiries.
        </p>
        <p className="font-semibold text-green-800 text-sm sm:text-base">
          📧 info@voicesforjusticeinkashmir.org
        </p>
        <p className="mt-3 text-gray-600 text-xs sm:text-sm">
          Registered in the United States | Advocating Globally for Kashmir
        </p>
      </motion.section>
    </main>
  );
}
