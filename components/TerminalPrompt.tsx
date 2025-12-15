"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function TerminalPrompt() {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const commands = useMemo(
    () => [
      "designing systems...",
      "integrating AI...",
      "deploying OPEXSTACK...",
      "automating operations...",
    ],
    []
  );

  useEffect(() => {
    const command = commands[currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        setCurrentText(command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((prev) => (prev + 1) % commands.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, commands]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-gray-900 dark:bg-charcoal bg-white border border-gray-300 dark:border-steel/50 rounded-lg p-6 font-mono text-sm md:text-base shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-gray-600 dark:text-gray-500 text-xs">terminal</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-accent">$</span>
        <span className="text-gray-800 dark:text-gray-300">opexstack</span>
        <span className="text-gray-600 dark:text-gray-500">--</span>
        <span className="text-gray-900 dark:text-white">
          {currentText}
          <motion.span
            animate={{ opacity: showCursor ? 1 : 0 }}
            className="inline-block w-2 h-5 bg-accent ml-1"
          />
        </span>
      </div>
    </div>
  );
}

