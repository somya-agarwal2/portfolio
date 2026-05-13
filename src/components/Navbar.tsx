"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Home, User, GraduationCap, Code, Briefcase, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home", icon: <Home size={18} /> },
  { name: "About", href: "#about", icon: <User size={18} /> },
  { name: "Education", href: "#education", icon: <GraduationCap size={18} /> },
  { name: "Skills", href: "#skills", icon: <Code size={18} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-6 w-full z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${
          scrolled ? "glass-card py-3 px-6" : "bg-white/5 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <Link href="#home" className="px-4 text-xl font-black text-gradient-primary tracking-tighter">
          SA.
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0 w-0 group-hover:w-auto">
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="h-6 w-px bg-white/10 mx-2 hidden md:block" />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full glass-card border-none hover:bg-white/10 transition-all text-primary"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-3 rounded-full glass-card border-none text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 w-[calc(100%-3rem)] glass-card rounded-3xl p-6 md:hidden border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 text-slate-300 hover:text-white transition-all font-bold"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {link.icon}
                  </div>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
