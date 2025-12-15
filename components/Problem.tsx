"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Users, Mail, BarChart3, Clock, TrendingUp } from "lucide-react";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      
      <motion.div
        style={{ opacity, y }}
        className="relative max-w-4xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <AlertCircle className="w-10 h-10 text-accent flex-shrink-0" />
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
            The Reality for Most Founder-Led Businesses
          </h2>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed"
        >
          {[
            { text: "Too many people doing manual work", icon: Users },
            { text: "Critical processes living in inboxes", icon: Mail },
            { text: "Reporting that's slow or unreliable", icon: BarChart3 },
            { text: "Sales follow-ups missed", icon: Clock },
            { text: "Founders stuck in operational detail", icon: TrendingUp },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <Icon className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item.text}</span>
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed border-l-4 border-accent pl-6"
        >
          Hiring more people doesn't fix this.
          <br />
          <span className="text-accent">It increases operating cost and complexity.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
