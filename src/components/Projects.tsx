"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "CivicSphere",
    category: "AI-Enhanced Reporting Platform",
    description: "Built a scalable Spring Boot backend for real-time issue tracking and reporting. Integrated Google Gemini AI for intelligent content analysis and automated resolution suggestions.",
    tags: ["Spring Boot", "PostgreSQL", "Google Gemini", "REST APIs"],
    stats: "Improved resolution efficiency by 45%",
    image: "/project1.jpg",
    links: { github: "https://github.com/somya-agarwal2", live: "https://example.com" }
  },
  {
    title: "Email-Reply Generator",
    category: "Browser Extension",
    description: "An AI-powered browser extension that generates contextual email replies using Gemini API. Reduces response time by analyzing content and providing smart suggestions.",
    tags: ["Spring Boot", "JavaScript", "Google Gemini", "HTML/CSS"],
    stats: "Reduced response time by 40%",
    image: "/project2.jpg",
    links: { github: "https://github.com", live: "https://example.com" }
  },
  {
    title: "Buddy",
    category: "Chrome Extension",
    description: "A productivity companion integrated with LeetCode API to provide personalized motivation and performance tracking. Features secure JWT authentication.",
    tags: ["Spring Boot", "Java", "JWT", "REST APIs"],
    stats: "Backend optimization improved by 30%",
    image: "/project3.jpg",
    links: { github: "https://github.com", live: "https://example.com" }
  }
];

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A showcase of my recent work and engineering projects.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass group rounded-3xl overflow-hidden border-white/5 hover:border-primary/30 transition-all flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-800 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
               <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold text-2xl group-hover:scale-110 transition-transform duration-500">
                  {project.title}
               </div>
               <div className="absolute top-4 right-4 z-20 px-3 py-1 glass-darker text-accent rounded-full text-xs font-bold">
                  {project.category}
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/5 text-[10px] uppercase tracking-wider font-bold text-slate-300 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-secondary font-medium italic">
                  {project.stats}
                </div>
                <div className="flex space-x-3">
                  <a href={project.links.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <GithubIcon size={18} />
                  </a>
                  <a href={project.links.live} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
