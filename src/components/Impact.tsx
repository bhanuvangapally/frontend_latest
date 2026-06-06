"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const studies = [
  {
    category: "INDUSTRIAL ROBOTICS",
    product: "PIPEGEN",
    metric: "5× faster pick-and-place",
    subtitle: "PROTOTYPE TO PRODUCTION",
    description: "98%+ object handling accuracy on autonomous pick-and-place robots, running live on NVIDIA Jetson AGX Orin."
  },
  {
    category: "IOT WEARABLE DEVICE",
    product: "FIRMGEN",
    metric: "4× faster firmware deployment",
    subtitle: "MANUAL BUILDS TO AUTOMATED FIRMWARE GENERATION",
    description: "Real-time livestock health monitoring across remote farms, production-ready firmware delivered."
  },
  {
    category: "RETAIL SURVEILLANCE",
    product: "PIPEGEN",
    metric: "95% cloud costs eliminated",
    subtitle: "CLOUD INFERENCE TO FULL EDGE DEPLOYMENT",
    description: "700+ retail stores running real-time edge AI with zero cloud dependency."
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Customer Impact</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6">
              How engineering teams ship with Neumage Orbit
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              See how teams are unlocking system efficiency across complex hardware workflows.
            </p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {studies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-gray-200 rounded-3xl p-8 flex flex-col snap-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="text-xs font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">{study.category}</span>
                <span className="text-xs font-bold text-[#125ab7] bg-blue-50 px-3 py-1 rounded-full">{study.product}</span>
              </div>
              
              <h3 className="text-3xl font-extrabold text-[#082851] mb-6 leading-tight">
                {study.metric}
              </h3>
              
              <p className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">
                {study.subtitle}
              </p>
              
              <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                {study.description}
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
