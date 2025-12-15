"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileCode, TrendingUp, Users, Briefcase, CheckCircle2 } from "lucide-react";

export default function RealExamples() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const examples = [
    {
      title: "Example 1 — Sales-Led Business",
      icon: TrendingUp,
      items: [
        "Automated lead capture and enrichment",
        "AI-generated outreach and follow-ups",
        "CRM automatically updated",
        "Daily sales performance report sent to Slack",
      ],
      result: "Sales ops role removed. Founder visibility improved.",
    },
    {
      title: "Example 2 — Recruitment / Services Firm",
      icon: Users,
      items: [
        "Call summaries generated automatically",
        "Candidate data logged without manual input",
        "Pipeline status updated in real-time",
        "Weekly performance reports auto-generated",
      ],
      result: "Fewer admin staff. Faster placements.",
    },
    {
      title: "Example 3 — Founder Ops Stack",
      icon: Briefcase,
      items: [
        "Unified inbox logic",
        "Task creation automated",
        "Calendar and priority management",
        "AI-generated daily briefings",
      ],
      result: "Founder time reclaimed. Decision fatigue reduced.",
    },
  ];

  return (
    <section
      id="examples"
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6C8A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div style={{ opacity }} className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <FileCode className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            Real Examples
          </h2>
        </motion.div>

        <div className="space-y-24">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-accent-alt/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-gray-100 dark:bg-steel/30 backdrop-blur-md border border-gray-300 dark:border-steel/50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  {example.icon && (
                    <example.icon className="w-7 h-7 text-accent flex-shrink-0" />
                  )}
                  <h3 className="text-2xl font-semibold text-accent">
                    {example.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {example.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-gray-300 dark:border-steel/50"
                >
                  <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">
                    <span className="text-accent">Result:</span>
                    <br />
                    {example.result}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
