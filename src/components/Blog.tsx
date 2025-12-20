import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag, Loader2, AlertCircle } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    published_at: string;
    tag_list: string[];
    url: string;
    cover_image: string | null;
    reading_time_minutes: number;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://dev.to/api/articles?username=trojanmocx');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data.slice(0, 4)); // Get latest 4 posts
            } catch (err) {
                setError('Failed to load blog posts. Please check back later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

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
                            THE <span className="text-[#EC1D24]">ARCHIVES</span>
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

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-[#EC1D24]" size={48} />
                    </div>
                ) : error ? (
                    <div className="flex flex-col justify-center items-center h-64 text-slate-500 dark:text-slate-400">
                        <AlertCircle size={48} className="mb-4 text-red-500" />
                        <p>{error}</p>
                    </div>
                ) : (
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
                                className="group block h-full"
                            >
                                <div className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden h-full hover:border-[#EC1D24]/50 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-red-500/10">
                                    {post.cover_image && (
                                        <div className="h-32 overflow-hidden relative">
                                            <img
                                                src={post.cover_image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                    )}

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={12} /> {formatDate(post.published_at)}
                                            </span>
                                            {post.tag_list.length > 0 && (
                                                <span className="flex items-center gap-1.5 text-[#EC1D24]">
                                                    <Tag size={12} /> {post.tag_list[0]}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#EC1D24] transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-white/5">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                {post.reading_time_minutes} min read
                                            </span>
                                            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">
                                                Read <ArrowUpRight size={12} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
