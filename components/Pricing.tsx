"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Rocket, Settings } from "lucide-react";

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Background Pattern */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-b from-steel/30 via-charcoal to-steel/30"
      />

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <DollarSign className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            Pricing
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-200 mb-10 leading-relaxed text-center"
        >
          Typical Engagements
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-100 dark:bg-steel/30 backdrop-blur-md border border-gray-300 dark:border-steel/50 rounded-lg p-8 hover:border-accent/50 transition-all group shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-accent">
                Initial Deployment
              </h3>
            </div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$7,500</p>
            <p className="text-xl text-gray-600 dark:text-gray-400">– $20,000</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-100 dark:bg-steel/30 backdrop-blur-md border border-gray-300 dark:border-steel/50 rounded-lg p-8 hover:border-accent/50 transition-all group shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-accent">
                Ongoing Management
              </h3>
            </div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$1,500</p>
            <p className="text-xl text-gray-600 dark:text-gray-400">– $3,000 / month</p>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
        >
          Pricing depends on complexity and number of workflows replaced.
        </motion.p>
      </div>
    </section>
  );
}
