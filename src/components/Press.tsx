"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Press() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Press & Media</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6">
              Neumage in the news
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              The latest coverage, announcements, and industry commentary from the teams following the Physical AI revolution.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#125ab7] font-bold text-sm hover:gap-3 transition-all">
            Visit our newsroom <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Article */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-[#333]">Economic Times</span>
              <span className="text-sm text-gray-500 font-medium">Feb 17, 2026</span>
              <span className="text-xs font-bold bg-[#125ab7] text-white px-2 py-1 rounded">FUNDING</span>
            </div>
            <h3 className="text-3xl font-extrabold text-[#082851] mb-4">
              Neumage Raises $3 Million in Seed Funding Led by Ankur Capital
            </h3>
            <p className="text-gray-600 font-medium mb-8 flex-grow">
              The startup building AI-powered tools for embedded systems development has closed its seed round to fuel product expansion and team growth.
            </p>
            <button className="flex items-center gap-2 text-[#125ab7] font-bold text-sm hover:gap-3 transition-all mt-auto">
              Read article <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-bold text-[#333]">NVIDIA</span>
                <span className="text-sm text-gray-500 font-medium">Feb 21, 2026</span>
              </div>
              <h3 className="text-xl font-bold text-[#082851] mb-2">
                Neumage joins the NVIDIA Inception Program
              </h3>
              <button className="flex items-center gap-2 text-[#125ab7] font-bold text-sm hover:gap-3 transition-all mt-4">
                Read article <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-bold text-[#333]">AI Techsales</span>
                <span className="text-sm text-gray-500 font-medium">Recent</span>
              </div>
              <h3 className="text-xl font-bold text-[#082851] mb-2">
                The Intelligent Edge Bottleneck: A Watchtower Blog Series
              </h3>
              <button className="flex items-center gap-2 text-[#125ab7] font-bold text-sm hover:gap-3 transition-all mt-4">
                Read article <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
