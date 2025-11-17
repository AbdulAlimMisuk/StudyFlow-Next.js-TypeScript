"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36">

      <h1 className="text-3xl md:text-4xl text-center font-sans font-bold mb-5 text-white">
        Contact Us
      </h1>

      <p className="text-base md:text-lg text-center font-sans font-medium text-gray-300">
        Feel free to contact our support team anytime.
      </p>

      <div className="flex flex-col justify-center items-center mt-10 space-y-5 w-full">
        <input
          className="w-80 md:w-96 px-4 py-3 text-white bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          type="text"
        />

        <input
          className="w-80 md:w-96 px-4 py-3 text-white bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          type="email"
        />

        <textarea
          rows={4}
          className="w-80 md:w-96 px-4 py-3 text-white bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your message..."
        ></textarea>

        <button className="w-80 md:w-96 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium cursor-pointer">
          Send Message
        </button>

      </div>
       <BackgroundBeams />
    </div>
  );
}

