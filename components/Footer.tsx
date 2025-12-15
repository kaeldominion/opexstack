"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-6 py-16 bg-white/90 dark:bg-charcoal/90 backdrop-blur-md z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">OpexStack</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Automation & Operations Systems</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">Private engagements only</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-gray-400 space-y-1"
        >
          {/* Email and Calendly links can be added here when available */}
        </motion.div>
      </div>
    </footer>
  );
}
