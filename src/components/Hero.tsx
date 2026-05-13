"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Mail, ChevronDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20 bg-mesh bg-grid">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span>Available for New Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[1.1]"
        >
          Crafting <span className="text-gradient-primary">Digital</span> <br /> 
          Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-slate-400 font-medium h-12 mb-12 max-w-2xl mx-auto"
        >
          <span className="mr-2 text-white">Hi, I&apos;m Somya.</span>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "AI/ML Student",
                "Backend Specialist",
                "Problem Solver"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              wrapperClassName: "text-primary",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <Link
            href="#projects"
            className="btn-premium group"
          >
            <span>Explore My Work</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/16d1WKh5migBXlCtUolMm38Azf4VFCLQo/view?usp=drivesdk"
            target="_blank"
            className="px-8 py-4 glass-card rounded-2xl font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1 border border-white/10"
          >
            View Resume
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 glass-card rounded-2xl font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1 border border-white/10"
          >
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center items-center gap-8"
        >
          <SocialIcon href="https://github.com/somya-agarwal2" icon={<GithubIcon size={24} />} label="GitHub" />
          <div className="h-4 w-px bg-white/10" />
          <SocialIcon href="https://www.linkedin.com/in/somya-agarwal-718364286/" icon={<LinkedinIcon size={24} />} label="LinkedIn" />
          <div className="h-4 w-px bg-white/10" />
          <SocialIcon href="mailto:somyaagarwal6191@gmail.com" icon={<Mail size={24} />} label="Email" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 hover:opacity-100 transition-opacity"
      >
        <Link href="#about">
          <ChevronDown className="text-white cursor-pointer" size={40} strokeWidth={1} />
        </Link>
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2"
    >
      <div className="p-4 glass-card rounded-2xl text-slate-400 group-hover:text-primary group-hover:glow-box transition-all duration-300">
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
    </a>
  );
}
