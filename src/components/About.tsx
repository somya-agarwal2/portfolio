"use client";

import Section from "./Section";
import { Code, Database, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Problem Solving",
    icon: <Brain className="text-primary" />,
    description: "Expertise in data structures and algorithms with a focus on efficient solutions."
  },
  {
    title: "Backend Development",
    icon: <Code className="text-secondary" />,
    description: "Building scalable services using Spring Boot and robust database architectures."
  },
  {
    title: "AI Integration",
    icon: <Globe className="text-accent" />,
    description: "Integrating Google Gemini and other LLMs to build intelligent web applications."
  },
  {
    title: "API Development",
    icon: <Database className="text-purple-400" />,
    description: "Designing secure REST APIs with JWT authentication and performance optimization."
  }
];

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A passionate developer building the future with code and AI.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">
            Full-Stack Developer with a focus on <span className="text-primary">Scalability</span>
          </h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            I am a Computer Science Engineering student specializing in AI/ML, with a deep interest in backend engineering. 
            My journey involves building robust web applications using <span className="text-white">Spring Boot</span> and <span className="text-white">ReactJS</span>.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg">
            I have hands-on experience with <span className="text-white">MongoDB, MySQL, and PostgreSQL</span>. I focus on REST APIs, JWT authentication, and performance optimization, always striving to integrate cutting-edge AI technologies like <span className="text-white">Google Gemini</span> into my projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h4 className="font-bold mb-2">{skill.title}</h4>
              <p className="text-slate-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
