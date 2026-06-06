"use client";

import { motion } from "framer-motion";

export default function Investors() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Investors</p>
          <h2 className="text-4xl font-extrabold text-[#333] mb-6">
            Backed by conviction
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            We're backed by institutional investors who share our vision of AI-powered infrastructure for the physical world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 max-w-4xl mx-auto">
          {/* Mock Logos */}
          <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm"><span className="text-xl font-black text-gray-800">Ankur Capital</span></div>
          <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm"><span className="text-xl font-black text-gray-800">Capital-A</span></div>
          <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm"><span className="text-xl font-black text-gray-800">NVIDIA</span></div>
          <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm"><span className="text-xl font-black text-gray-800">Bosch</span></div>
        </div>
      </div>
    </section>
  );
}
