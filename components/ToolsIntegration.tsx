"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  Chrome, 
  MessageSquare, 
  Brain, 
  Sparkles, 
  Slack, 
  Zap, 
  Database,
  Plug2
} from "lucide-react";

interface Tool {
  name: string;
  command: string;
  color: string;
  icon: any;
}

export default function ToolsIntegration() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const tools: Tool[] = [
    { name: "Notion", command: "notion.api", color: "text-gray-300", icon: FileText },
    { name: "Google Workspace", command: "gworkspace.integrate", color: "text-blue-400", icon: Chrome },
    { name: "ChatGPT", command: "openai.chat", color: "text-green-400", icon: MessageSquare },
    { name: "Claude", command: "anthropic.claude", color: "text-orange-400", icon: Brain },
    { name: "Gemini", command: "google.gemini", color: "text-purple-400", icon: Sparkles },
    { name: "Slack", command: "slack.webhook", color: "text-pink-400", icon: Slack },
    { name: "Zapier", command: "zapier.trigger", color: "text-yellow-400", icon: Zap },
    { name: "Airtable", command: "airtable.base", color: "text-cyan-400", icon: Database },
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
          <Plug2 className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center font-headline">
            Built With Your Tools
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-12 font-mono"
        >
          # We integrate with the platforms you already use
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
              integrations.py
            </span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm md:text-base">
            <div className="space-y-3">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="flex items-center gap-4 group hover:bg-gray-800 dark:hover:bg-steel/30 px-3 py-2 -mx-3 rounded transition-colors"
                  >
                    <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-accent">import</span>
                    <span className={tool.color}>{tool.command}</span>
                    <span className="text-gray-400 dark:text-gray-600"># {tool.name}</span>
                    <motion.span
                      className="text-green-400 ml-auto opacity-0 group-hover:opacity-100"
                      initial={false}
                    >
                      ✓
                    </motion.span>
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
              <span className="text-gray-200 dark:text-gray-300">opexstack --install-integrations</span>
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
              <div>✓ All integrations connected</div>
              <div className="text-gray-400 dark:text-gray-500">→ Ready to deploy workflows...</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto font-mono">
            <span className="text-accent">#</span> We don't force you to adopt new
            tools.
            <br />
            <span className="text-accent">#</span> We connect the ones you already
            trust.{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              Zero disruption.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
