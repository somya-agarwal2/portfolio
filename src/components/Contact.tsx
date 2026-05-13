"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="I'm always open to new opportunities and collaborations.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold mb-6 text-gradient inline-block">Let&apos;s Connect</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
            I&apos;ll do my best to get back to you as soon as possible!
          </p>

          <div className="space-y-6 pt-6">
            <ContactItem icon={<Mail className="text-primary" />} label="Email" value="somyaagarwal6191@gmail.com" href="mailto:somyaagarwal6191@gmail.com" />
            <ContactItem icon={<GithubIcon className="text-secondary" />} label="GitHub" value="github.com/somya-agarwal2" href="https://github.com/somya-agarwal2" />
            <ContactItem icon={<LinkedinIcon className="text-accent" />} label="LinkedIn" value="linkedin.com/in/somya-agarwal" href="https://www.linkedin.com/in/somya-agarwal-718364286/" />
            <ContactItem icon={<MapPin className="text-red-400" />} label="Location" value="Ghaziabad, India" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {formState !== "success" ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 glass-darker rounded-2xl border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 glass-darker rounded-2xl border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 glass-darker rounded-2xl border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-4 bg-gradient-primary rounded-2xl font-bold flex items-center justify-center space-x-2 hover:glow-purple transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span>{formState === "submitting" ? "Sending..." : "Send Message"}</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:glow-purple transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{label}</p>
        <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
