"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 relative bg-[#082851] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#125ab7] rounded-full blur-[100px] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-sm font-bold text-cyan-300 tracking-widest uppercase mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Let’s Work Together!
          </h2>
          <p className="text-xl text-blue-100/80 mb-10 font-medium">
            Discover the power of Neumage today. Reach out to us and we will get back to you in the next 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <button className="bg-white text-[#082851] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto">
              contact@edgeproc.ai
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
              Book A Demo
            </button>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
