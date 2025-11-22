"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-[#007a33] via-[#fddb3a] to-[#007a33] text-white flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center"
      >
        <motion.h2 className="text-4xl md:text-6xl font-bold mb-6">
          Contact Us
        </motion.h2>

        <motion.p className="text-lg md:text-xl mb-8">
          Reach out for partnerships, collaborations, or inquiries about our
          advocacy.
        </motion.p>

        <motion.div className="mb-12 space-y-2">
          <p className="font-semibold text-lg">
            📧 info@vfjk.org
          </p>
          <p className="text-sm md:text-base">
            Registered in the United States | Advocating Globally for Kashmir
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6"
        >
          {["name", "email", "message"].map((field, i) => (
            <motion.div key={field} transition={{ delay: 0.3 + i * 0.1 }}>
              <label
                className="block mb-2 font-medium text-gray-700 capitalize"
                htmlFor={field}
              >
                {field}
              </label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-green-600 focus:outline-none focus:ring-2 focus:ring-[#007a33] transition duration-300"
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-green-600 focus:outline-none focus:ring-2 focus:ring-[#007a33] transition duration-300"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            transition={{ delay: 0.7 }}
            className="w-full py-4 rounded-xl font-bold bg-[#007a33] hover:bg-[#005c27] text-white text-lg shadow-lg transition duration-300"
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              transition={{ delay: 0.8 }}
              className="mt-4 text-[#007a33] font-semibold text-lg"
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </main>
  );
}
