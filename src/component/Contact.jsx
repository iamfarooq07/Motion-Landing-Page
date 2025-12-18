import React from "react";
import { motion } from "motion/react";

function Contact() {
  return (
    <div className="bg-gradient-to-t from-gray-800 via-gray-500 to-white w-full h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <form className="w-full max-w-md bg-black/90 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 my-3 rounded-md bg-zinc-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 my-3 rounded-md bg-zinc-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-between items-center my-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="accent-blue-500"
              />
              <label htmlFor="remember" className="text-gray-200 ml-2">
                Remember
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
            >
              Login
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white font-semibold transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 0.4,
        }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-blue-500 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg">
          Reach out to us for support, inquiries, or collaboration. We are here
          to help and respond as quickly as possible.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="mailto:support@example.com"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition"
          >
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition"
          >
            Call Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
