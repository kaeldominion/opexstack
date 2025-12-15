"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 py-32 overflow-hidden min-h-[60vh] flex items-center justify-center bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Animated Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-charcoal to-accent-alt/10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,108,138,0.2),transparent_70%)]" />

      <motion.div
        style={{ opacity }}
        className="relative max-w-4xl mx-auto z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <Calendar className="w-10 h-10 md:w-12 md:h-12 text-accent" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
            Book a Systems Audit
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          If you want fewer people, lower operating cost, and more control, start
          with an audit.
        </motion.p>
        <motion.a
          href="#contact"
          className="relative inline-block bg-accent hover:bg-accent/90 text-white px-12 py-5 text-lg font-medium transition-all overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book a Call
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent to-accent-alt"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-600 dark:text-gray-400 mt-8"
        >
          Founder-led engagements only.
        </motion.p>
      </motion.div>
    </section>
  );
}
