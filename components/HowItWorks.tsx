"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Settings, FileText, Rocket, TrendingUp, Workflow } from "lucide-react";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const steps = [
    {
      number: "1",
      title: "Systems Audit",
      description: "We identify where human time is being wasted.",
      icon: Settings,
    },
    {
      number: "2",
      title: "Replacement Plan",
      description: "We map which roles and workflows can be automated.",
      icon: FileText,
    },
    {
      number: "3",
      title: "30-Day Deployment",
      description: "Systems are built, tested, and deployed.",
      icon: Rocket,
    },
    {
      number: "4",
      title: "Ongoing Optimisation",
      description: "We monitor and improve performance monthly.",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-charcoal via-steel/20 to-charcoal"
      />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <Workflow className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            How It Works
          </h2>
        </motion.div>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-8 items-start group"
            >
              <div className="relative flex-shrink-0">
                <div className="flex items-center gap-3">
                  {step.icon && (
                    <step.icon className="w-8 h-8 text-accent" />
                  )}
                  <motion.div
                    className="text-5xl font-semibold text-accent"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.number}.
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -inset-4 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
