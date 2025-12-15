"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Users, PlayCircle, MessageCircle, Building2 } from "lucide-react";

export default function WhyOpexStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const reasons = [
    { text: "We think in cost, not features", icon: Target },
    { text: "We replace people, not add tools", icon: Users },
    { text: "We build systems that actually run", icon: PlayCircle },
    { text: "We speak founder and operator", icon: MessageCircle },
  ];

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-charcoal via-accent/5 to-charcoal"
      />

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <Building2 className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            Why OpexStack
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gray-100 dark:bg-steel/20 backdrop-blur-md border border-gray-300 dark:border-steel/30 rounded-lg p-6 hover:border-accent/50 transition-all group shadow-lg"
            >
              <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {reason.text}
              </span>
            </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl text-gray-800 dark:text-gray-200 mt-12 pt-12 border-t border-gray-300 dark:border-steel/50 leading-relaxed text-center"
        >
          This is <span className="text-accent font-semibold">infrastructure</span>, not
          consulting.
        </motion.p>
      </div>
    </section>
  );
}
