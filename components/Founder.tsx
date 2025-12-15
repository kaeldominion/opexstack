"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { User, Code, TrendingUp, Building2 } from "lucide-react";

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      <motion.div
        style={{ opacity, y }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <User className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            About the Founder
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent-alt/20 rounded-lg blur-xl opacity-75" />
              <div className="relative rounded-lg overflow-hidden border-2 border-gray-300 dark:border-steel/50 shadow-2xl bg-gray-100 dark:bg-steel/20">
                <Image
                  src="/images/st-avatar-2021-v4.jpg"
                  alt="Spencer Tarring, Founder of OpexStack"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 max-w-2xl"
          >
            <div className="space-y-3">
              <h3 className="text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                Spencer Tarring
              </h3>
              <p className="text-xl lg:text-2xl text-accent font-mono">
                Serial Operator & Systems Designer
              </p>
            </div>

            <div className="space-y-6 text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                OpexStack was founded by Spencer Tarring, a serial operator focused on replacing operational drag with systems.
              </p>

              <p>
                Over the past decade, Spencer has built and scaled multiple businesses across energy, sales, technology, and infrastructure — including <span className="text-accent font-semibold">Dedipower</span>, <span className="text-accent font-semibold">EngageTech</span>, and <span className="text-accent font-semibold">Nuhive</span>.
              </p>

              <p>
                His work sits at the intersection of operations, automation, and applied AI. Rather than building software products, he focuses on designing systems that remove manual work, reduce operating cost, and improve execution.
              </p>

              <p>
                Spencer has worked deeply with distributed teams, sales-led organisations, and founder-run businesses — where inefficiency is expensive and speed matters.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-gray-300 dark:border-steel/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Code className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Systems Design</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Operations & Automation</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Scaled Businesses</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Energy, Tech, Infrastructure</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Multiple Ventures</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dedipower, EngageTech, Nuhive</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 group-hover:bg-accent/20 transition-colors">
                  <User className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Founder-Focused</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Speed & Efficiency</p>
                </div>
              </motion.div>
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 pt-8 border-t border-gray-300 dark:border-steel/50"
            >
              <div className="bg-gray-100 dark:bg-steel/20 rounded-lg p-6 border border-gray-300 dark:border-steel/50">
                <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  <span className="text-accent font-mono">#</span> OpexStack exists to formalise what he has built repeatedly inside his own companies:{" "}
                  <span className="text-accent font-semibold">operational systems that replace people, not add tools</span>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

