"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

export default function ModernPortfolio({ content }: { content?: any }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // Extract initials for logo
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join(".")
            .toUpperCase() + ".";
    };

    return (
        <div className="min-h-screen bg-[#030303] text-gray-100 font-sans selection:bg-purple-500/30 overflow-x-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#030303]/85 backdrop-blur-md border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {getInitials(data.name)}
                    </span>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                        <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
                        <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
                        <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-400 hover:text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-[#030303] border-b border-white/5 px-6 py-6 flex flex-col gap-4 text-center text-lg font-medium text-gray-400 shadow-xl"
                    >
                        <a 
                            href="#work" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-white transition py-2"
                        >
                            Work
                        </a>
                        <a 
                            href="#about" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-white transition py-2"
                        >
                            About
                        </a>
                        <a 
                            href="#contact" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-white transition py-2"
                        >
                            Contact
                        </a>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="about" className="pt-40 pb-20 px-6 max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-4 block">
                        Portfolio 2026
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.95] text-white">
                        {data.role.split(" ").map((word: string, idx: number) => {
                            if (idx === data.role.split(" ").length - 1) {
                                return <span key={idx} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{word} </span>;
                            }
                            return word + " ";
                        })}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                        {data.bio}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-12 flex flex-wrap gap-4"
                >
                    <a href="#work" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] text-center">
                        View Projects
                    </a>
                    <a href="#contact" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center">
                        Contact Me
                    </a>
                </motion.div>
            </section>

            {/* Projects Grid Section */}
            <section id="work" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Selected Works</h2>
                    <div className="h-[1px] flex-1 bg-white/5 mx-8 hidden sm:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.projects.map((project: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group cursor-pointer bg-white/2 border border-white/5 rounded-3xl p-4 hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 mb-6 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="p-3 rounded-full bg-white text-black shadow-lg">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-purple-400 text-xs font-semibold tracking-wider uppercase">{project.category}</span>
                                <h3 className="text-xl font-bold mt-1 text-white group-hover:text-purple-300 transition-colors duration-200">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 max-w-6xl mx-auto relative z-10 text-center">
                <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-[3rem] py-16 px-6 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Let's build something together.</h2>
                    <p className="text-gray-400 max-w-lg mx-auto mb-8">
                        Have a project in mind or want to collaborate? Feel free to reach out and say hello!
                    </p>
                    <a href={`mailto:hello@${data.name.toLowerCase().replace(" ", "")}.com`} className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                        <Mail className="w-5 h-5" />
                        <span>Get in Touch</span>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 mt-20 relative z-10 bg-[#030303]">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-lg font-bold tracking-tighter text-white">{getInitials(data.name)}</div>
                    <p className="text-xs text-gray-500">© 2026 {data.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition duration-200 text-gray-400">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition duration-200 text-gray-400">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition duration-200 text-gray-400">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
