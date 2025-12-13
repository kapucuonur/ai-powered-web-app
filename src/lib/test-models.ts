
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    // Try anchored versions which are sometimes more reliable than aliases
    const candidates = ["gemini-1.5-flash-001", "gemini-1.5-pro-001", "gemini-1.0-pro"];

    for (const modelName of candidates) {
        console.log(`\nTesting ${modelName}...`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hello");
            await result.response;
            console.log(`✅ SUCCESS: ${modelName} works!`);
            process.exit(0);
        } catch (e: any) {
            console.log(`❌ FAILED: ${modelName}`);
        }
    }
}

listModels();
