"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax transform based on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image - Inverted in Light Mode */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/backgroundai.png"
          alt="Background"
          fill
          className="object-cover dark:brightness-100 brightness-0 dark:invert-0 invert transition-all duration-500"
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay for Dark Mode */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-charcoal/85 dark:bg-charcoal/90"
      />
      
      {/* Light Overlay for Light Mode - Much lighter */}
      <div className="absolute inset-0 bg-white/60 dark:hidden" />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent-alt/30 dark:from-accent/20 dark:via-transparent dark:to-accent-alt/20"
        animate={{
          backgroundPosition: [
            `${mousePosition.x}% ${mousePosition.y}%`,
            `${mousePosition.x * 1.2}% ${mousePosition.y * 1.2}%`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Animated Scan Line Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent"
        animate={{
          y: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ height: "2px" }}
      />

      {/* Parallax Grid Overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,108,138,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,108,138,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Glowing Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 dark:opacity-30"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: `radial-gradient(circle, rgba(74,108,138,0.4), transparent)`,
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [0, mousePosition.x * (i + 1) * 0.5],
            y: [0, mousePosition.y * (i + 1) * 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

