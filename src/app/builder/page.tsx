"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import ModernPortfolio from "@/components/templates/ModernPortfolio";
import { Loader2, CheckCircle2 } from "lucide-react";

function BuilderContent() {
    const searchParams = useSearchParams();
    const prompt = searchParams.get("prompt");
    const [status, setStatus] = useState<"analyzing" | "generating" | "polishing" | "complete">("analyzing");
    const [generatedContent, setGeneratedContent] = useState<any>(null);


    useEffect(() => {
        if (!prompt) return;

        const generateSite = async () => {
            try {
                setStatus("analyzing");
                await new Promise(r => setTimeout(r, 1000)); // UX delay

                setStatus("generating");
                const res = await fetch("/api/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ prompt }),
                });

                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({})); // Try to parse error
                    throw new Error(errorData.error || "Generation failed");
                }

                const data = await res.json();
                setGeneratedContent(data);

                setStatus("polishing");
                await new Promise(r => setTimeout(r, 1000)); // UX delay

                setStatus("complete");
            } catch (error) {
                console.error("Content Generation Error:", error);
                setStatus("complete"); // Allow user to see what happened or retry
                // Show the actual error message from the server
                alert(`Error: ${error instanceof Error ? error.message : "Something went wrong"}`);
            }
        };

        generateSite();
    }, [prompt]);

    if (status !== "complete") {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
                <div className="w-full max-w-md space-y-6">
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse" />
                            <Loader2 className="w-12 h-12 text-purple-500 animate-spin relative z-10" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <StageItem
                            label="Analyzing prompt requirements..."
                            active={status === "analyzing"}
                            completed={status === "generating" || status === "polishing"}
                        />
                        <StageItem
                            label="Drafting content with Gemini AI..."
                            active={status === "generating"}
                            completed={status === "polishing"}
                        />
                        <StageItem
                            label="Polishing aesthetics..."
                            active={status === "polishing"}
                            completed={false}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Floating Toolbar for Builder (Responsive Design) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-xl md:w-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full px-4 py-3 md:px-6 md:py-3 flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs md:text-sm font-medium text-gray-300">Generated from: <span className="text-white font-semibold">"{prompt}"</span></span>
                </div>
                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                <div className="flex items-center gap-4 w-full md:w-auto justify-center border-t border-white/5 pt-2 md:pt-0 md:border-t-0">
                    <button className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200" onClick={() => window.location.reload()}>Regenerate</button>
                    <div className="h-3 w-[1px] bg-white/15" />
                    <button className="text-xs font-medium text-white hover:text-gray-300 transition-colors duration-200">Publish</button>
                </div>
            </div>

            {/* The Generated Site */}
            <ModernPortfolio content={generatedContent} />
        </>
    );
}

export default function BuilderPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading builder...</div>}>
            <BuilderContent />
        </Suspense>
    );
}

function StageItem({ label, active, completed }: { label: string, active: boolean, completed: boolean }) {
    return (
        <div className={`flex items-center gap-3 transition-colors duration-500 ${active || completed ? "text-white" : "text-gray-600"}`}>
            {completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${active ? "border-purple-500" : "border-gray-700"}`}>
                    {active && <div className="w-2 h-2 rounded-full bg-purple-500" />}
                </div>
            )}
            <span className="font-medium">{label}</span>
        </div>
    );
}
