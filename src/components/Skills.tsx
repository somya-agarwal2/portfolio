"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "C", level: 75 }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "ReactJS", level: 80 },
      { name: "Hibernate/JPA", level: 75 },
      { name: "Spring Security", level: 70 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "AWS", level: 65 },
      { name: "JWT Auth", level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="My Skills" subtitle="Technologies and tools I use to bring ideas to life.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass p-8 rounded-3xl border-white/5"
          >
            <h3 className="text-xl font-bold mb-8 text-primary border-b border-white/10 pb-4">
              {category.title}
            </h3>
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-4">
        {["Agile", "Unit Testing", "Maven", "Postman", "Hibernate", "MVC", "Bootstrap"].map((item) => (
          <span key={item} className="px-4 py-2 glass-darker rounded-full text-slate-400 text-sm hover:text-white hover:border-primary/50 transition-all cursor-default">
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
