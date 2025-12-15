"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Code, MessageSquare, CheckCircle2, Bot } from "lucide-react";

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-alt/5" />
        <motion.div
          style={{ scale }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,108,138,0.1),transparent_70%)]"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative max-w-4xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Zap className="w-10 h-10 text-accent flex-shrink-0" />
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
            What OpexStack Does
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
            We replace manual operational work with{" "}
            <span className="text-accent font-semibold">reliable, automated systems</span>.
          </p>
          <div className="space-y-4 text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <Code className="w-6 h-6 text-gray-500" />
              <span>Not software.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <MessageSquare className="w-6 h-6 text-gray-500" />
              <span>Not advice.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-accent font-semibold"
            >
              <Bot className="w-6 h-6 text-accent" />
              <span>Actual replacements.</span>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-2xl text-gray-200 leading-relaxed mt-8"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span>
                Once deployed, the system runs{" "}
                <span className="text-accent font-semibold">without supervision</span>.
              </span>
            </div>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
