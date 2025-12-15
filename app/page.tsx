import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhatWeReplace from "@/components/WhatWeReplace";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import ToolsIntegration from "@/components/ToolsIntegration";
import RealExamples from "@/components/RealExamples";
import HowItWorks from "@/components/HowItWorks";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Pricing from "@/components/Pricing";
import WhyOpexStack from "@/components/WhyOpexStack";
import Founder from "@/components/Founder";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <WhatWeReplace />
        <WorkflowVisualization />
        <ToolsIntegration />
        <RealExamples />
        <HowItWorks />
        <WhoThisIsFor />
        <Pricing />
        <WhyOpexStack />
        <Founder />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}

