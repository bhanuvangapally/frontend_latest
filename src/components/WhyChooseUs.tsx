"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    category: "SPEED",
    title: "Instantaneous Reports",
    subtitle: "AI-DRIVEN TECHNOLOGY",
    description: "Bid farewell to prolonged waiting times with our AI-driven technology delivering instant radiology reports."
  },
  {
    category: "EFFICIENCY",
    title: "Simplified Workflow",
    subtitle: "USER-FRIENDLY PLATFORM",
    description: "Effortlessly streamline your processes with our user-friendly platform designed to reduce administrative burden."
  },
  {
    category: "ACCURACY",
    title: "AI-Powered Precision",
    subtitle: "CUTTING-EDGE ALGORITHMS",
    description: "Rely on our cutting-edge algorithms for accurate diagnoses, enhancing diagnostic confidence across the board."
  },
  {
    category: "INNOVATION",
    title: "Transformational Impact",
    subtitle: "FUTURE OF RADIOLOGY",
    description: "Collaborate with us in shaping the future of radiology. While AI won't replace radiologists, radiologists who use Neumage will replace those who don't."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Why Choose Neumage?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6">
              Why Choose Us As Your Partner
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Transform your diagnostic capabilities with next-generation AI tools.
            </p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-gray-200 rounded-3xl p-8 flex flex-col snap-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="text-xs font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">{reason.category}</span>
              </div>
              
              <h3 className="text-3xl font-extrabold text-[#082851] mb-6 leading-tight">
                {reason.title}
              </h3>
              
              <p className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">
                {reason.subtitle}
              </p>
              
              <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                {reason.description}
              </p>
              
              <button className="flex items-center gap-2 text-[#125ab7] font-bold text-sm hover:gap-3 transition-all mt-auto">
                DETAILS <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
