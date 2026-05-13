"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="Detailed overview of my skills and experience in document format.">
      <div className="max-w-3xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass p-10 md:p-16 rounded-[2rem] border-white/5 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          
          <div className="w-40 h-52 glass-darker rounded-xl border border-white/10 flex items-center justify-center relative shadow-2xl">
            <FileText size={64} className="text-slate-600" />
            <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
              SOMYA_RESUME.PDF
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Professional Resume</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              My resume provides a comprehensive look at my academic background, technical skills, and project experience. 
              Available for download in PDF format.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/resume.pdf"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-primary rounded-full font-semibold hover:glow-purple transition-all"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center space-x-2 px-6 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                <Eye size={18} />
                <span>Open in Browser</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
