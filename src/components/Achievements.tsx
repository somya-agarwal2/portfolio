"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Briefcase } from "lucide-react";

const achievements = [
  {
    title: "Agile Leadership",
    desc: "Led a 4-member Agile project team achieving 25% faster delivery through optimized sprints and clear communication.",
    icon: <Award className="text-yellow-400" />
  },
  {
    title: "AWS Certified",
    desc: "AWS Academy Cloud Foundations & Machine Learning Foundations. Deep understanding of cloud architecture and ML services.",
    icon: <ShieldCheck className="text-blue-400" />
  },
  {
    title: "Academic Excellence",
    desc: "Secured District Rank in Class 12 with 96% in Science stream. Consistent top performer throughout academic career.",
    icon: <Briefcase className="text-green-400" />
  }
];

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Recognition and milestones in my professional and academic path.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="w-14 h-14 rounded-2xl glass-darker flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Experience Placeholder */}
      <div className="mt-32">
        <h3 className="text-2xl font-bold mb-10 text-center">Internships & <span className="text-gradient">Experience</span></h3>
        <div className="glass p-12 rounded-3xl border-dashed border-white/10 text-center">
           <Briefcase className="mx-auto mb-4 text-slate-600" size={48} />
           <p className="text-slate-500 italic">Exploring opportunities to apply my skills in real-world environments.</p>
           <p className="text-slate-400 mt-2 font-medium">Coming Soon...</p>
        </div>
      </div>
    </Section>
  );
}
