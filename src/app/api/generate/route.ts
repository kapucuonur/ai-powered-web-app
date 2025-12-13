import { NextResponse } from "next/server";
import { generateWebsiteContent } from "@/lib/gemini";

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const content = await generateWebsiteContent(prompt);

        return NextResponse.json(content);
    } catch (error) {
        console.error("Generation error:", error);

        const errorMessage = error instanceof Error ? error.message : "Failed to generate content";

        // Handle Gemini Quota Limits
        if (errorMessage.includes("429") || errorMessage.includes("Quota") || errorMessage.includes("quota")) {
            return NextResponse.json(
                { error: "Gemini API Quota Exceeded. Please try again later.", details: errorMessage },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
