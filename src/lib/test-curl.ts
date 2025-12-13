
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function testRawApi() {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

    console.log("Testing raw API fetch...");

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Hello" }] }]
            })
        });

        const data = await res.json();

        if (res.ok) {
            console.log("✅ RAW API SUCCESS!");
        } else {
            console.log("❌ RAW API FAILED");
            console.log(JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("Fetch error:", e);
    }
}

testRawApi();
