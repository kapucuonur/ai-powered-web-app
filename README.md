# ✨ AI-Powered Web Builder

> **Build your dream website with a single prompt.**  
> Powered by Next.js 15, Gemini AI, and Tailwind CSS.

## 🚀 Features

- **AI-Driven Generation**: Uses Google's Gemini Pro model to intelligently generate website content (names, bios, projects) based on natural language prompts.
- **Instant Preview**: Real-time simulation of the building process (Analysis -> Drafting -> Polishing).
- **Premium UI/UX**:
  - Dark mode by default.
  - Glassmorphism and modern gradient aesthetics.
  - Fluid animations with `framer-motion`.
- **Modern Tech Stack**: Built on the latest Next.js 15 App Router.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **AI Model**: [Google Gemini Pro](https://ai.google.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed.
- A **Google AI Studio API Key** (Free). [Get one here](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kapucuonur/ai-powered-web-app.git
    cd ai-powered-web-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your API Key:
    ```bash
    GEMINI_API_KEY=your_actual_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 💡 How it Works

1.  **Enter a Prompt**: Type something like *"A portfolio for a cyber-security expert"* or *"A landing page for a coffee shop"*.
2.  **AI Analysis**: The app sends your prompt to our secure API route (`/api/generate`).
3.  **Generation**: Gemini AI crafts unique JSON content (titles, descriptions, projects) tailored to your request.
4.  **Builder Engine**: The frontend maps this data into our high-quality **Modern Portfolio Template**, creating a unique site instantly.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  **IMPORTANT**: Add the `GEMINI_API_KEY` in Vercel's **Environment Variables** settings.
4.  Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
