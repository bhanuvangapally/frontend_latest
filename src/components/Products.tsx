"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Cpu } from "lucide-react";

const products = [
  {
    number: "01",
    title: "PipeGen",
    subtitle: "EDGE AI PIPELINES",
    description: "An agentic AI workflow that generates and deploys hardware-optimized perception pipelines for Edge Devices.",
    icon: <Layers className="w-8 h-8 text-[#125ab7]" />
  },
  {
    number: "02",
    title: "FirmGen",
    subtitle: "EMBEDDED FIRMWARE",
    description: "An agentic AI workflow that generates hardware-optimized firmware for microcontrollers and IoT devices.",
    icon: <Cpu className="w-8 h-8 text-[#125ab7]" />
  },
  {
    number: "03",
    title: "AgentIQ",
    subtitle: "FPGA DESIGNS & BITSTREAMS",
    description: "An agentic AI workflow that generates and deploys hardware-optimized FPGA designs and deployment ready bitstreams.",
    icon: <Zap className="w-8 h-8 text-[#125ab7]" />
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-bold text-[#125ab7] tracking-widest uppercase mb-4">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6">
            Neumage Orbit Suite
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Three products for your physical devices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl font-extrabold text-gray-100 mb-6">{product.number}</div>
              <div className="mb-6">{product.icon}</div>
              <h3 className="text-2xl font-bold text-[#082851] mb-2">{product.title}</h3>
              <p className="text-xs font-bold tracking-widest text-[#125ab7] mb-6">{product.subtitle}</p>
              <p className="text-gray-600 leading-relaxed font-medium">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
