"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const router = useRouter();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // Navigate to builder with prompt
    router.push(`/builder?prompt=${encodeURIComponent(prompt)}`);
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center space-y-8">

        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-sm text-gray-300 mx-auto"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Next-Gen Web Builder</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 pb-2"
        >
          Build your dream website <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">with a single prompt.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Forget basic drag-and-drop. Describe your vision, and our AI constructs a premium, responsive we application instantly.
        </motion.p>

        {/* Prompt Input Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-2xl mx-auto mt-12"
        >
          <form onSubmit={handleGenerate} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

            <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 transition-all group-hover:border-white/20">
              <div className="pl-4">
                <Wand2 className="w-6 h-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your website (e.g., 'A modern portfolio for a photographer with dark mode')"
                className="flex-1 bg-transparent border-none text-white placeholder:text-gray-500 focus:ring-0 px-4 py-4 text-lg outline-none"
              />
              <button
                type="submit"
                disabled={isGenerating || !prompt}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  prompt
                    ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "bg-white/10 text-gray-500 cursor-not-allowed"
                )}
              >
                {isGenerating ? (
                  <span className="animate-pulse">Building...</span>
                ) : (
                  <>
                    <span>Generate</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Templates Preview (Static for now) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50 hover:opacity-100 transition-opacity duration-500"
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors" />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
