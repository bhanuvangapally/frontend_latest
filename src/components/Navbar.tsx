"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-pill py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#082851] to-[#125ab7] flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#333]">
            Neumage
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="nav-link">How it Works</Link>
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#why-choose-us" className="nav-link">Why Choose Us</Link>
          <Link href="#future-plans" className="nav-link">Future Plans</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-[#4b5563] hover:text-[#082851] transition-colors">
            Sign In
          </button>
          <button className="btn-primary flex items-center gap-2 text-sm group">
            Book a Demo
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#333] hover:text-[#082851]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-lg"
        >
          <Link href="#how-it-works" className="text-base font-semibold text-[#333] hover:text-[#125ab7] py-2 border-b border-gray-100">How it Works</Link>
          <Link href="#features" className="text-base font-semibold text-[#333] hover:text-[#125ab7] py-2 border-b border-gray-100">Features</Link>
          <Link href="#why-choose-us" className="text-base font-semibold text-[#333] hover:text-[#125ab7] py-2 border-b border-gray-100">Why Choose Us</Link>
          <Link href="#future-plans" className="text-base font-semibold text-[#333] hover:text-[#125ab7] py-2 border-b border-gray-100">Future Plans</Link>
          <div className="flex flex-col gap-3 mt-4">
            <button className="btn-secondary w-full text-center">
              Sign In
            </button>
            <button className="btn-primary w-full justify-center flex items-center gap-2">
              Book a Demo
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
