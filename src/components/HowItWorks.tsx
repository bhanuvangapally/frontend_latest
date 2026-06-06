"use client";

import { motion } from "framer-motion";
import { Upload, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Scans",
    subtitle: "EFFORTLESS UPLOAD",
    description: "Radiologists upload MRI, CT, or X-ray scans effortlessly onto Neumage, setting the stage for quick analysis.",
    icon: <Upload className="w-8 h-8 text-[#125ab7]" />
  },
  {
    number: "02",
    title: "Lightning-Fast Analysis",
    subtitle: "AI POWERED",
    description: "Experience the magic of Neumage! Our smart technology rapidly scans uploaded images, crafting detailed reports in a flash.",
    icon: <Zap className="w-8 h-8 text-[#125ab7]" />
  },
  {
    number: "03",
    title: "Radiologist's Approval",
    subtitle: "VERIFICATION",
    description: "Reports undergo a simple check if required before passing on to healthcare providers, ensuring absolute precision.",
    icon: <CheckCircle className="w-8 h-8 text-[#125ab7]" />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6">
            Empower Your Hospital's Efficiency
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Seamlessly integrated to enhance patient care and operational workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl font-extrabold text-gray-100 mb-6">{step.number}</div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold text-[#082851] mb-2">{step.title}</h3>
              <p className="text-xs font-bold tracking-widest text-[#125ab7] mb-6">{step.subtitle}</p>
              <p className="text-gray-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
