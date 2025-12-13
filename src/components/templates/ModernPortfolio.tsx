"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function ModernPortfolio({ content }: { content?: any }) {
    // Default content if none provided (simulating AI generation)
    const data = content || {
        name: "Alex Morgan",
        role: "Creative Developer",
        bio: "I build digital experiences that blend design and technology. Passionate about AI, 3D web graphics, and intuitive user interfaces.",
        projects: [
            { title: "Neon Dreams", category: "Web Design", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
            { title: "AI Interface", category: "Product Design", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
            { title: "Space Odyssey", category: "3D Art", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-200">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold tracking-tighter">AM.</span>
                    <div className="flex gap-6 text-sm font-medium text-slate-500">
                        <a href="#" className="hover:text-slate-900 transition">Work</a>
                        <a href="#" className="hover:text-slate-900 transition">About</a>
                        <a href="#" className="hover:text-slate-900 transition">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <span className="text-rose-500 font-medium tracking-wide text-sm uppercase mb-4 block">Portfolio 2024</span>
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.9]">
                        Visual <br />
                        <span className="text-slate-400">Storytelling.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                        {data.bio}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex gap-4"
                >
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition">
                        View Projects
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition">
                        Contact Me
                    </button>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.projects.map((project: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-slate-500 text-sm">{project.category}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-slate-200 mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-bold">AM.</div>
                    <div className="flex gap-6">
                        <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
                        <Twitter className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
                        <Linkedin className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
                        <Mail className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
