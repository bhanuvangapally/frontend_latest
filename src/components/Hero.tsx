"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white text-center">
      {/* Light Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[80px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider text-[#082851] uppercase">Experience Neumage</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15] text-[#333]">
            Experience Effortless <br />
            <span className="text-gradient">Radiology Reporting</span> <br />
            Today
          </h1>
          
          <p className="text-sm text-[#4b5563] mb-10 max-w-lg leading-relaxed font-medium mx-auto">
            Lightning-fast MRI/CT uploads and AI-powered reporting tailored for modern hospitals and radiologists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
            <button className="btn-primary w-full sm:w-auto px-8 py-4 text-base">
              Start Free Trial
            </button>
            <button className="btn-secondary px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-base">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-100 pt-16 w-full"
        >
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-[#082851] mb-2">Lightning-Fast</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Analysis</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-[#082851] mb-2">AI-Powered</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Precision</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-[#082851] mb-2">Effortless</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Workflow</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-[#082851] mb-2">Continuous</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Innovation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
