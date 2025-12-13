import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateWebsiteContent(prompt: string) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("Missing GEMINI_API_KEY environment variable");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const systemPrompt = `
    You are an expert web designer and copywriter.
    Your goal is to generate website content based on a user prompt.
    Return ONLY valid JSON. Do not include markdown formatting like \`\`\`json.
    
    The JSON schema must be exactly:
    {
      "name": "string (person or company name)",
      "role": "string (job title or tagline)",
      "bio": "string (engaging biography or about us text)",
      "projects": [
        {
          "title": "string",
          "category": "string",
          "image": "string (use a realistic unsplash URL relevant to the project, e.g. https://images.unsplash.com/photo-...)"
        }
      ]
    }
    
    Generate 3 distinct projects.
    For images, search for appropriate Unsplash IDs or use generic high-quality tech/design placeholders if unsure.
    Make the copy professional, engaging, and premium.
  `;

    const result = await model.generateContent(`${systemPrompt}\n\nUser Prompt: ${prompt}`);
    const response = await result.response;
    const text = response.text();

    // Clean up if model returns markdown
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();

    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to parse Gemini response:", text);
        throw new Error("Failed to generate valid JSON content");
    }
}
