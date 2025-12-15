"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Briefcase, User, X } from "lucide-react";

export default function WhatWeReplace() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  const roles = [
    {
      title: "Admin & Operations",
      icon: Briefcase,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      items: [
        "Data entry and manual record keeping",
        "Email triage and calendar management",
        "Invoice processing and payment reconciliation",
        "Report generation and data compilation",
        "Customer onboarding paperwork",
      ],
    },
    {
      title: "Sales Support",
      icon: User,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      items: [
        "Lead qualification and initial outreach",
        "CRM data entry and pipeline updates",
        "Proposal generation and follow-up sequences",
        "Meeting scheduling and coordination",
        "Contract processing and document management",
      ],
    },
    {
      title: "Customer Support",
      icon: TrendingUp,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      items: [
        "Tier 1 support ticket routing",
        "FAQ responses and basic troubleshooting",
        "Account status inquiries",
        "Order status updates",
        "Basic onboarding assistance",
      ],
    },
  ];

  return (
    <section
      id="what-we-replace"
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl opacity-30 ${
              i === 0
                ? "w-96 h-96 bg-blue-500/30 top-0 left-0"
                : i === 1
                ? "w-80 h-80 bg-purple-500/30 top-1/4 right-0"
                : i === 2
                ? "w-72 h-72 bg-green-500/30 bottom-0 left-1/3"
                : "w-64 h-64 bg-accent/30 top-1/2 right-1/4"
            }`}
            animate={{
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74,108,138,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74,108,138,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <ArrowRight className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-900 dark:text-white">
            Common Roles We Replace or Reduce
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card Background */}
                <div className={`relative h-full bg-gradient-to-br ${role.color} backdrop-blur-sm rounded-xl border-2 ${role.borderColor} p-8 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-white/50 dark:bg-steel/50 backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {role.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3">
                    {role.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 + itemIndex * 0.05 }}
                        className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 group/item"
                      >
                        <X className="w-4 h-4 text-red-500/70 dark:text-red-400/70 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-alt/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent-alt/10 blur-2xl" />
          <div className="relative bg-gray-100 dark:bg-steel/30 backdrop-blur-md rounded-xl border-2 border-gray-300 dark:border-steel/50 p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
              If a human is moving data from one place to another,{" "}
              <span className="text-accent font-semibold font-mono">it should not exist</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
