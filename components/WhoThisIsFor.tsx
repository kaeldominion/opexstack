"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { UserCheck, DollarSign, TrendingUp, Users, X } from "lucide-react";

export default function WhoThisIsFor() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const criteria = [
    { text: "Founder-led businesses", icon: UserCheck },
    { text: "$1M–$20M revenue", icon: DollarSign },
    { text: "Sales-driven or service-based", icon: TrendingUp },
    { text: "Teams already spending heavily on staff", icon: Users },
  ];

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-alt/5" />

      <motion.div
        style={{ opacity }}
        className="relative max-w-4xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <UserCheck className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            Who This Is For
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-200 mb-10 leading-relaxed text-center"
        >
          OpexStack works with:
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {criteria.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-steel/30 backdrop-blur-md border border-gray-300 dark:border-steel/50 rounded-lg p-6 hover:border-accent/50 transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item.text}</span>
              </div>
            </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed text-center border-t border-gray-300 dark:border-steel/50 pt-8 flex items-center justify-center gap-2"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-500" />
          <span>This is not for startups, hobby projects, or teams looking for tools.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
