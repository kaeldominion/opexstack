"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Search, Bot, Brain, Database, MessageSquare, FileText, Play } from "lucide-react";

export default function WorkflowVisualization() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const workflowSteps = [
    {
      line: 1,
      code: "trigger: lead_captured()",
      comment: "# Webhook from form submission",
      status: "✓",
      icon: Zap,
    },
    {
      line: 2,
      code: "enrich_data(lead)",
      comment: "# API calls to enrich lead info",
      status: "✓",
      icon: Search,
    },
    {
      line: 3,
      code: "ai_qualify(lead) -> agent.run()",
      comment: "# AI agent analyzes lead",
      status: "→",
      icon: Bot,
    },
    {
      line: 4,
      code: "  ├─> claude_api.analyze(lead)",
      comment: "# Claude processes lead data",
      status: "→",
      icon: Brain,
    },
    {
      line: 5,
      code: "  └─> score = calculate_score()",
      comment: "# Qualification score",
      status: "→",
      icon: Brain,
    },
    {
      line: 6,
      code: "update_crm(lead, score)",
      comment: "# Auto-update Salesforce/HubSpot",
      status: "→",
      icon: Database,
    },
    {
      line: 7,
      code: "notify_slack(channel, lead)",
      comment: "# Alert sales team",
      status: "→",
      icon: MessageSquare,
    },
    {
      line: 8,
      code: "generate_report(daily)",
      comment: "# Automated reporting",
      status: "→",
      icon: FileText,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white/90 dark:bg-charcoal/80 backdrop-blur-md z-10"
    >
      <motion.div
        style={{ opacity }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <Play className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center font-headline">
            Systems in Action
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-12 font-mono"
        >
          # Real automation code running in production
        </motion.p>

        {/* Terminal Code Block */}
        <div className="bg-gray-900 dark:bg-charcoal border border-gray-300 dark:border-steel/50 rounded-lg overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Terminal Header */}
          <div className="bg-gray-800 dark:bg-steel/50 border-b border-gray-600 dark:border-steel/50 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-gray-300 dark:text-gray-400 text-xs font-mono ml-2">
              opexstack-workflow.py
            </span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
            <div className="space-y-1">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.line}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="flex items-start gap-4 group hover:bg-gray-800 dark:hover:bg-steel/30 px-2 py-1 -mx-2 rounded transition-colors"
                  >
                    <span className="text-gray-500 dark:text-gray-600 text-xs select-none min-w-[2rem]">
                      {step.line.toString().padStart(2, "0")}
                    </span>
                    <Icon className="w-4 h-4 text-accent/70 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-accent font-semibold">{step.status}</span>
                    <span className="text-gray-200 dark:text-gray-300">
                      <span className="text-blue-400">{step.code.split("(")[0]}</span>
                      {step.code.includes("(") && (
                        <>
                          <span className="text-gray-100 dark:text-white">(</span>
                          <span className="text-yellow-400">
                            {step.code.match(/\(([^)]+)\)/)?.[1]}
                          </span>
                          <span className="text-gray-100 dark:text-white">)</span>
                        </>
                      )}
                      {step.code.includes("->") && (
                        <>
                          <span className="text-gray-400 dark:text-gray-500"> {"->"} </span>
                          <span className="text-green-400">
                            {step.code.split("->")[1]}
                          </span>
                        </>
                      )}
                      {step.code.includes("├") && (
                        <span className="text-gray-400 dark:text-gray-500">{step.code.split("├")[1]}</span>
                      )}
                      {step.code.includes("└") && (
                        <span className="text-gray-400 dark:text-gray-500">{step.code.split("└")[1]}</span>
                      )}
                    </span>
                    <span className="text-gray-400 dark:text-gray-600 ml-auto">{step.comment}</span>
                  </div>
                </motion.div>
                );
              })}
            </div>

            {/* Terminal Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 pt-4 border-t border-gray-700 dark:border-steel/30 flex items-center gap-2"
            >
              <span className="text-accent">$</span>
              <span className="text-gray-200 dark:text-gray-300">python opexstack-workflow.py</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-accent ml-1"
              />
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 text-green-400 font-mono text-sm"
            >
              <div>✓ Workflow deployed successfully</div>
              <div>✓ Running 24/7 without supervision</div>
              <div className="text-gray-400 dark:text-gray-500">→ Processing leads automatically...</div>
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
            <span className="text-accent">#</span> Every workflow runs automatically. No
            manual intervention. No missed steps.
            <br />
            <span className="text-accent">#</span> Systems that{" "}
            <span className="text-gray-900 dark:text-white font-semibold">actually work</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
