import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "Why AI Alone Feels Like That One Friend Who Tells Great Stories but Never Brings Proof",
        excerpt: "AI is powerful, but it behaves like someone giving you advice with zero receipts. If a model says...",
        date: "Nov 16, 2025",
        tag: "AI & Blockchain",
        url: "https://dev.to/trojanmocx/why-ai-alone-feels-like-that-one-friend-who-tells-great-stories-but-never-brings-proof-1218"
    },
    {
        id: 2,
        title: "I Tried Beating LeetCode Like a Game. It Actually Worked.",
        excerpt: "Every wrong submission is just XP in disguise. If you’ve ever opened LeetCode, stared at a...",
        date: "Oct 31, 2025",
        tag: "Productivity",
        url: "https://dev.to/trojanmocx/i-tried-beating-leetcode-like-a-game-it-actually-worked-47ke"
    },
    {
        id: 3,
        title: "10 Patterns That Unlocked 80% of LeetCode for Me",
        excerpt: "LeetCode taught me one thing: if it looks hard, it’s probably a pattern you’ve seen before…or...",
        date: "Oct 16, 2025",
        tag: "Algorithms",
        url: "https://dev.to/trojanmocx/10-patterns-that-unlocked-80-of-leetcode-for-me-9ke"
    },
    {
        id: 4,
        title: "Everyone’s Suddenly Talking About AI Agents and MCP Here’s What I Learned",
        excerpt: "Every time I open DEV or X these days, someone’s talking about AI agents or something called the...",
        date: "Oct 07, 2025",
        tag: "AI Agents",
        url: "https://dev.to/trojanmocx/everyones-suddenly-talking-about-ai-agents-and-mcp-heres-what-i-learned-320g"
    }
];

const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b border-slate-200 dark:border-white/10 pb-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-2 text-slate-900 dark:text-white tracking-tighter">
                            LATEST <span className="text-[#EC1D24]">THOUGHTS</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                            Insights on engineering, design, and the chaos of creation.
                        </p>
                    </div>
                    <a
                        href="https://dev.to/trojanmocx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#EC1D24] font-bold uppercase tracking-widest text-xs hover:underline"
                    >
                        Read all articles <ArrowUpRight size={16} />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block"
                        >
                            <div className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden h-full hover:border-[#EC1D24]/50 transition-colors">
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-[#EC1D24]">
                                            <Tag size={12} /> {post.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#EC1D24] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform">
                                        Read Article <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;

