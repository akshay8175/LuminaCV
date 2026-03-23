import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FileText, LayoutTemplate, Settings, User,
    Plus, MoreVertical, Download,
    Search, Bell, File, Target, Clock, ArrowUpRight, CheckCircle2
} from 'lucide-react';

export function Dashboard() {
    const [activeTab, setActiveTab] = useState('resumes');

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-100">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                            <FileText size={18} className="stroke-[2.5]" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                            Lumina<span className="text-primary-500">CV</span>
                        </span>
                    </Link>
                </div>

                <div className="p-4 flex-1">
                    <nav className="space-y-1">
                        <button
                            onClick={() => setActiveTab('resumes')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'resumes' ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <FileText size={20} className={activeTab === 'resumes' ? 'text-primary-600' : 'text-slate-400'} />
                            My Resumes
                        </button>
                        <button
                            onClick={() => setActiveTab('templates')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'templates' ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <LayoutTemplate size={20} className={activeTab === 'templates' ? 'text-primary-600' : 'text-slate-400'} />
                            Templates
                        </button>
                    </nav>
                </div>

                <div className="p-4 border-t border-slate-100">
                    <nav className="space-y-1">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                            <Settings size={20} className="text-slate-400" />
                            Settings
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                            <User size={20} className="text-slate-400" />
                            Profile
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between z-10">
                    <div className="flex bg-slate-100 rounded-full px-4 py-2 items-center w-96 relative focus-within:ring-2 focus-within:ring-primary-500 transition-all">
                        <Search size={18} className="text-slate-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search resumes..."
                            className="bg-transparent border-none outline-none text-sm w-full text-slate-700"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <div className="w-9 h-9 bg-accent-100 text-accent-700 flex items-center justify-center font-bold rounded-full border border-accent-200">
                                JD
                            </div>
                            <span className="font-medium text-slate-700 text-sm hidden md:block">John Doe</span>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-6xl mx-auto space-y-12">

                        {/* Header Area */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-display font-bold text-slate-900 mb-1">My Resumes</h1>
                                <p className="text-slate-500 text-sm">Create and manage your tailored resumes.</p>
                            </div>
                            <Link to="/editor" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm shadow-primary-500/30">
                                <Plus size={18} />
                                Create New Resume
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Total Resumes', value: '3', icon: <File className="text-blue-500" />, bg: 'bg-blue-50' },
                                { title: 'Avg. ATS Score', value: '88%', icon: <Target className="text-primary-500" />, bg: 'bg-green-50' },
                                { title: 'Last Updated', value: '2 days ago', icon: <Clock className="text-accent-500" />, bg: 'bg-yellow-50' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
                                    <div className={`p-4 rounded-xl ${stat.bg}`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 leading-tight">{stat.value}</div>
                                        <div className="text-sm font-medium text-slate-500">{stat.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Resumes Grid */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-slate-900">Recent Resumes</h2>
                                <button className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 group">
                                    View all <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Create New Card */}
                                <Link to="/editor" className="group h-[320px] rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary-500 hover:bg-primary-50/50 flex flex-col items-center justify-center transition-all cursor-pointer">
                                    <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Plus size={24} className="stroke-[3]" />
                                    </div>
                                    <h3 className="font-bold text-slate-900">Start from scratch</h3>
                                    <p className="text-sm text-slate-500 mt-1">Or use our AI builder</p>
                                </Link>

                                {/* Existing Resume Map */}
                                {[
                                    { title: 'Software Engineer - Google', role: 'Full Stack Developer', date: 'Updated 2 days ago', score: 95 },
                                    { title: 'Frontend Developer - Canva', role: 'Frontend Engineer', date: 'Updated 1 week ago', score: 82 },
                                ].map((resume, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-200 transition-all flex flex-col h-[320px]"
                                    >
                                        {/* Thumbnail Area */}
                                        <div className="h-48 bg-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors border-b border-slate-100 p-6">
                                            <div className="bg-white w-full h-full shadow-sm rounded-t-md p-4 relative overflow-hidden border border-slate-200">
                                                {/* Mockup Resume Lines */}
                                                <div className="w-1/3 h-3 bg-slate-200 rounded mb-4"></div>
                                                <div className="w-1/2 h-2 bg-slate-100 rounded mb-2"></div>
                                                <div className="w-2/3 h-2 bg-slate-100 rounded mb-6"></div>

                                                <div className="w-1/4 h-2.5 bg-slate-200 rounded mb-3"></div>
                                                <div className="w-full h-1.5 bg-slate-100 rounded mb-1.5"></div>
                                                <div className="w-full h-1.5 bg-slate-100 rounded mb-1.5"></div>
                                                <div className="w-5/6 h-1.5 bg-slate-100 rounded"></div>
                                            </div>

                                            {/* Score Badge */}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold shadow-sm border border-slate-200 flex items-center gap-1.5">
                                                <div className={`w-2 h-2 rounded-full ${resume.score >= 90 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                                {resume.score}% Match
                                            </div>

                                            {/* Hover Actions */}
                                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                                <Link to="/editor" className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-500 hover:text-white transition-colors">
                                                    Edit
                                                </Link>
                                                <button className="bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors">
                                                    <Download size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Metadata Area */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-slate-900 truncate pr-4">{resume.title}</h3>
                                                <button className="text-slate-400 hover:text-slate-600 outline-none">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </div>
                                            <p className="text-sm text-slate-500 mb-auto">{resume.role}</p>

                                            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium whitespace-nowrap">
                                                {resume.date}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <h3 className="font-bold text-slate-900 mb-6">Recent Activity</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: <FileText size={16} />, text: 'Updated "Software Engineer" resume', time: '2 hours ago', bg: 'bg-blue-100 text-blue-600' },
                                        { icon: <Download size={16} />, text: 'Downloaded PDF of "Frontend Developer"', time: 'Yesterday', bg: 'bg-green-100 text-green-600' },
                                        { icon: <CheckCircle2 size={16} />, text: 'Created new account', time: '1 week ago', bg: 'bg-accent-100 text-accent-600' },
                                    ].map((activity, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className={`w-8 h-8 rounded-full ${activity.bg} flex items-center justify-center shrink-0`}>
                                                {activity.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-800">{activity.text}</p>
                                                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tips / Promo Box */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-800 shadow-xl p-8 text-white relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 text-slate-700/30">
                                    <Target size={160} />
                                </div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wide mb-4 border border-white/20">
                                        PRO TIP
                                    </span>
                                    <h3 className="text-2xl font-display font-bold mb-3">Optimize for ATS</h3>
                                    <p className="text-slate-300 text-sm mb-6 max-w-[80%] leading-relaxed">
                                        Most companies use Applicant Tracking Systems. Use our AI analyzer to ensure your resume passes the filter.
                                    </p>
                                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-lg">
                                        Analyze Resume Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
