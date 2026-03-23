import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Search, Filter, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const templates = [
    { id: 1, name: 'Minimalist Tech', category: 'Modern', uses: '10k+', rating: 4.9, color: 'bg-slate-900', isPro: false },
    { id: 2, name: 'Corporate Elite', category: 'Professional', uses: '24k+', rating: 4.8, color: 'bg-blue-900', isPro: false },
    { id: 3, name: 'Creative Designer', category: 'Creative', uses: '8k+', rating: 4.9, color: 'bg-purple-600', isPro: true },
    { id: 4, name: 'SaaS Executive', category: 'Modern', uses: '15k+', rating: 5.0, color: 'bg-emerald-800', isPro: true },
    { id: 5, name: 'Startup Founder', category: 'Modern', uses: '5k+', rating: 4.7, color: 'bg-orange-600', isPro: false },
    { id: 6, name: 'Data Scientist', category: 'Professional', uses: '12k+', rating: 4.9, color: 'bg-indigo-900', isPro: true },
];

export function Templates() {
    const [filter, setFilter] = useState('All');

    const filteredTemplates = filter === 'All'
        ? templates
        : templates.filter(t => t.category === filter);

    return (
        <div className="min-h-screen flex flex-col pt-16 bg-slate-50">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                {/* Header section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                        Stand out with <span className="text-primary-600">ATS-Approved</span> Templates
                    </h1>
                    <p className="text-lg text-slate-600">
                        Choose from our collection of professionally designed templates created specifically to pass automated screening systems and catch recruiters' eyes.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Filters */}
                    <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full md:w-auto overflow-x-auto">
                        {['All', 'Modern', 'Professional', 'Creative'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${filter === cat
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search templates..."
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-sm shadow-sm"
                            />
                        </div>
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 shadow-sm transition-colors">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                {/* Templates Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredTemplates.map((template) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={template.id}
                                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                            >
                                {template.isPro && (
                                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-accent-400 to-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        PRO
                                    </div>
                                )}

                                {/* Visual Preview Area */}
                                <div className="h-72 bg-slate-100 p-6 flex justify-center items-start overflow-hidden border-b border-slate-100 relative group-hover:bg-slate-50 transition-colors">
                                    <div className="w-[85%] h-[120%] bg-white shadow-md rounded-sm border border-slate-200 p-4 transform origin-top group-hover:scale-[1.02] transition-transform duration-300">
                                        <div className={`w-full h-8 ${template.color} rounded-sm mb-4`}></div>
                                        <div className="flex gap-4">
                                            <div className="w-1/3 space-y-2">
                                                <div className="h-2 bg-slate-200 rounded"></div>
                                                <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                                                <div className="h-1 bg-slate-100 rounded mt-4"></div>
                                                <div className="h-1 bg-slate-100 rounded w-5/6"></div>
                                                <div className="h-1 bg-slate-100 rounded w-4/6"></div>
                                            </div>
                                            <div className="w-2/3 space-y-3">
                                                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                                                <div className="space-y-1.5">
                                                    <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                                                    <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                                                    <div className="h-1.5 bg-slate-100 rounded w-3/4"></div>
                                                </div>
                                                <div className="space-y-1.5 pt-2">
                                                    <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                                                    <div className="h-1.5 bg-slate-100 rounded w-5/6"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                        <Link to="/editor" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Use Template
                                        </Link>
                                    </div>
                                </div>

                                {/* Info Area */}
                                <div className="p-5 flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-slate-900">{template.name}</h3>
                                        <div className="flex items-center gap-1 text-sm font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                                            <Star size={14} className="text-accent-500 fill-accent-500" />
                                            {template.rating}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-4">
                                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                                            {template.category}
                                        </span>
                                        <span className="text-sm text-slate-500 font-medium">
                                            {template.uses} Users
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA */}
                <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-500/20 blur-3xl mix-blend-screen" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Can't decide on a template?</h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Start with our AI-powered standard template and change the distinct style anytime without losing your content.
                        </p>
                        <Link to="/editor" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-500/20">
                            <CheckCircle2 size={20} />
                            Start Free Resume
                        </Link>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
