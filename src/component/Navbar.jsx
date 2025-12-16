import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 hover:text-blue-500 transition-colors cursor-pointer">
        BlueArc
      </h1>
      {/* Navigation Links */}
      <ul className="hidden md:flex justify-center items-center gap-8">
        {["Home", "About", "Contact"].map((link) => (
          <li
            key={link}
            className="text-lg font-semibold text-gray-200 cursor-pointer relative group"
          >
            {link}
            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>
      {/* Mobile menu placeholder */}
      <div className="md:hidden text-white cursor-pointer">
        {/* Replace with hamburger icon / component */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
}
