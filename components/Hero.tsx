"use client";

import { motion } from "framer-motion";
import TerminalPrompt from "./TerminalPrompt";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 px-6 py-32 md:py-40 lg:py-48 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-block text-sm text-accent dark:text-accent tracking-wider uppercase mb-6 px-4 py-2 border border-accent/50 dark:border-accent/30 rounded font-mono bg-white/80 dark:bg-charcoal/30 backdrop-blur-md shadow-lg"
            whileHover={{ scale: 1.05, borderColor: "rgba(74,108,138,0.8)" }}
          >
            OPEXSTACK
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-8 text-balance leading-tight text-gray-900 dark:text-white drop-shadow-2xl dark:drop-shadow-2xl"
        >
          Replace Operating Costs
          <br />
          <span className="text-accent dark:text-accent">With Systems</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed drop-shadow-lg dark:drop-shadow-lg font-medium"
        >
          OpexStack designs and deploys automation and AI systems that remove
          admin, ops, and sales-support roles in{" "}
          <span className="text-accent dark:text-accent font-semibold font-mono">30 days</span>.
        </motion.p>

        {/* Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <TerminalPrompt />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-start items-center"
        >
          <motion.a
            href="#contact"
            className="relative bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium transition-all overflow-hidden group font-mono shadow-lg shadow-accent/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">$ book-audit</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent-alt"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#what-we-replace"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-8 py-4 text-lg font-medium border border-gray-300 dark:border-steel hover:border-accent transition-all relative group font-mono backdrop-blur-md bg-white/80 dark:bg-charcoal/30 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">$ see-replacements</span>
            <motion.div
              className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent/70 dark:border-accent/50 rounded-full flex justify-center backdrop-blur-md bg-white/80 dark:bg-charcoal/30 shadow-lg"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
