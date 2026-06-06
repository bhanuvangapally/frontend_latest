"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6">
              Redefining Radiology with AI
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Unlock the Power of AI in Radiology Reporting!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Article style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-[#333]">Our Mission</span>
              <span className="text-xs font-bold bg-[#125ab7] text-white px-2 py-1 rounded">VISION</span>
            </div>
            <h3 className="text-3xl font-extrabold text-[#082851] mb-4 leading-tight">
              A revolution in radiology, not just another platform.
            </h3>
            <p className="text-gray-600 font-medium mb-8 flex-grow leading-relaxed">
              At Neumage, we're transforming the way medical images are analyzed and reports are generated. Our mission is to empower radiologists, hospitals, and diagnostic centers to deliver lightning-fast, accurate diagnoses, revolutionizing patient care worldwide.
            </p>
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
                <span className="font-bold text-[#333]">Expertise</span>
              </div>
              <h3 className="text-xl font-bold text-[#082851] mb-4">
                Like having a team of expert radiologists at your fingertips
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Upload MRI, CT, and X-ray scans directly onto our platform, and watch as our advanced algorithms work their magic, generating detailed reports in seconds.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-bold text-[#333]">Innovation</span>
              </div>
              <h3 className="text-xl font-bold text-[#082851] mb-4">
                Pushing the boundaries of radiology technology
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                We're constantly innovating and evolving to meet the ever-changing needs of healthcare. Join us on this journey to redefine radiology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
