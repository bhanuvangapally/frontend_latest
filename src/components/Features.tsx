"use client";

import { motion } from "framer-motion";
import { Clock, UploadCloud, BrainCircuit, CheckSquare, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6 text-[#125ab7]" />,
    title: "Rapid Report Generation",
    description: "Swiftly access detailed reports thanks to our AI integration, dramatically reducing turnaround time."
  },
  {
    icon: <UploadCloud className="w-6 h-6 text-[#125ab7]" />,
    title: "Effortless Scan Upload",
    description: "Seamlessly upload scans onto Neumage for rapid analysis with zero friction."
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-[#125ab7]" />,
    title: "AI-Powered Analysis",
    description: "Our technology swiftly identifies abnormalities and generates detailed reports."
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-[#125ab7]" />,
    title: "Radiologist Verification",
    description: "Reports undergo quick & simple checks for accuracy before dissemination."
  },
  {
    icon: <Target className="w-6 h-6 text-[#125ab7]" />,
    title: "Precision Diagnoses",
    description: "Trust our advanced algorithms to deliver precise results every single time."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#125ab7]" />,
    title: "Continuous Innovation",
    description: "Stay at the forefront with our commitment to ongoing advancements in AI technology."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Our Features</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6 text-[#333]"
          >
            Shaping the Future of <span className="text-gradient">Radiology</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4b5563] text-lg font-medium"
          >
            In healthcare, and particularly medical imaging, innovation powered by artificial intelligence makes radiology the most creative specialty.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-3">{feature.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
