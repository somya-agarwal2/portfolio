"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gradient mb-2">Somya Agarwal</h2>
          <p className="text-slate-500 text-sm">Building digital experiences that matter.</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/somya-agarwal2" icon={<GithubIcon size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/somya-agarwal-718364286/" icon={<LinkedinIcon size={20} />} />
            <SocialLink href="mailto:somyaagarwal6191@gmail.com" icon={<Mail size={20} />} />
          </div>
          <p className="text-slate-600 text-xs flex items-center">
            Designed & Developed by Somya Agarwal
          </p>
        </div>

        <div className="text-slate-600 text-sm font-medium">
          &copy; {currentYear} All Rights Reserved
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-primary transition-all transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
