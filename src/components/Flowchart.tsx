"use client";

import { motion } from "framer-motion";

export default function Flowchart() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#082851] mb-8 tracking-tight leading-tight"
          >
            From Scans to Detailed <br className="hidden md:block" />
            Reports
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-[#125ab7] mb-20"
          >
            AI platform that processes & delivers :
          </motion.p>
          
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-10">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-[#bfdbfe] -z-10 hidden sm:block"></div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0 relative z-10">
              
              {/* Node 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-white rounded-full border-[2.5px] border-[#125ab7] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(18,90,183,0.2)]">
                  <div className="w-3.5 h-3.5 bg-[#082851] rounded-full"></div>
                </div>
                <span className="text-[#082851] font-extrabold text-lg md:text-xl tracking-tight">MRI/CT Uploads</span>
              </motion.div>

              {/* Node 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-white rounded-full border-[2.5px] border-[#125ab7] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(18,90,183,0.2)]">
                  <div className="w-3.5 h-3.5 bg-[#082851] rounded-full"></div>
                </div>
                <span className="text-[#082851] font-extrabold text-lg md:text-xl tracking-tight">AI-Powered Analysis</span>
              </motion.div>

              {/* Node 3 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-white rounded-full border-[2.5px] border-[#125ab7] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(18,90,183,0.2)]">
                  <div className="w-3.5 h-3.5 bg-[#082851] rounded-full"></div>
                </div>
                <span className="text-[#082851] font-extrabold text-lg md:text-xl tracking-tight">Diagnostic Findings</span>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
