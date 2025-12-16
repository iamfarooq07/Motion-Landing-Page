import React from "react";
import { motion } from "motion/react";

function Main() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10 scale-[1.02] blur-[2px]"
        style={{
          backgroundImage:
            "url('https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/01/Need-For-Different-Types-of-Building-03-0107120005.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.8,
          }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-6xl font-bold text-blue-500">
            Welcome To My Website
          </h1>
          <p className="w-[50%] my-6 text-lg text-gray-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            incidunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias ratione in eligendi! Totam, inventore excepturi? Dolor
            temporibus velit nesciunt et vitae vero necessitatibus, quos vel
            earum id nisi distinctio cumque.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
