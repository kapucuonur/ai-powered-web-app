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
        return NextResponse.json(
            { error: "Failed to generate content" },
            { status: 500 }
        );
    }
}
