"use client";

import { motion } from "framer-motion";

const plans = [
  "Auto-Pilot Mode",
  "Supercharge Productivity",
  "Earn Rewards",
  "Mobile App Access",
  "Voice Recognition",
  "Collaborative Workspace"
];

export default function FuturePlans() {
  return (
    <section id="future-plans" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Future Plans</p>
          <h2 className="text-4xl font-extrabold text-[#333] mb-6">
            Upcoming Features
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Our passion is helping you discover your passion and skills that will lead to a personalized pathway and a better tomorrow. Hold onto your seats because these game-changing features are about to take your radiology practice to new heights!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#125ab7]/30 transition-all duration-300"
            >
              <span className="text-lg font-bold text-[#082851]">{plan}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
