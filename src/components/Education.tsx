"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech Computer Science (AIML)",
    school: "ABES Engineering College, Ghaziabad",
    duration: "2023–2027",
    result: "CGPA: 9/10",
    description: "Focusing on Artificial Intelligence and Machine Learning fundamentals, Advanced Data Structures, and Web Technologies."
  },
  {
    degree: "XII (Science)",
    school: "Christ Jyoti Convent School, Ghaziabad",
    duration: "2022",
    result: "Percentage: 96%",
    description: "Studied Physics, Chemistry, Mathematics, and Computer Science. Secured high distinction."
  },
  {
    degree: "X",
    school: "Christ Jyoti Convent School, Ghaziabad",
    duration: "2020",
    result: "Percentage: 92%",
    description: "Foundational secondary education with a strong emphasis on Science and Mathematics."
  }
];

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic journey and qualifications.">
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-22px] md:left-1/2 w-10 h-10 rounded-full glass border-2 border-primary flex items-center justify-center transform md:-translate-x-1/2 bg-slate-900 z-10">
                <GraduationCap size={18} className="text-primary" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}>
                <div className="flex items-center space-x-2 text-primary font-bold mb-2">
                  <Calendar size={16} />
                  <span>{item.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-secondary font-medium mb-3">{item.school}</p>
                <div className="inline-block px-3 py-1 glass-darker text-accent rounded-full text-sm font-semibold mb-4">
                  {item.result}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
