
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Github, Mail, Lock, User } from 'lucide-react';

export function Signup() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-row-reverse"
            >
                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <Link to="/" className="flex items-center gap-2 mb-8 w-fit">
                        <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                            <FileText size={18} className="stroke-[2.5]" />
                        </div>
                        <span className="font-display font-bold text-lg tracking-tight text-slate-900">
                            Lumina<span className="text-primary-500">CV</span>
                        </span>
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Create an account</h1>
                        <p className="text-slate-500">Join thousands of professionals landing better jobs.</p>
                    </div>

                    <div className="space-y-4 mb-6">
                        <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors font-medium text-slate-700">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Sign up with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-slate-900 border border-slate-900 rounded-xl hover:bg-slate-800 transition-colors font-medium text-white shadow-sm">
                            <Github size={20} />
                            Sign up with GitHub
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-sm text-slate-500 font-medium tracking-wider uppercase">or register with email</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    <form className="space-y-4 flex-1">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Must be at least 8 characters long.</p>
                        </div>
                        <button className="w-full py-3 mt-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-[0_4px_14px_rgb(34,197,94,0.3)] hover:shadow-[0_6px_20px_rgb(34,197,94,0.4)]">
                            Create Account
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-500">
                        Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700 hover:underline">Log in</Link>
                    </p>
                </div>

                {/* Left Side: Visual */}
                <div className="hidden md:flex w-1/2 bg-slate-50 border-r border-slate-100 p-12 relative overflow-hidden flex-col items-center justify-center">
                    <div className="relative w-full max-w-sm">
                        {/* Visual element representing a resume being built */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 absolute top-0 -left-4 z-20 w-3/4 transform -rotate-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                <div>
                                    <div className="w-24 h-3 bg-slate-200 rounded mb-1"></div>
                                    <div className="w-16 h-2 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-slate-100 rounded"></div>
                                <div className="w-5/6 h-2 bg-slate-100 rounded"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 pt-12 relative z-10 w-full ml-8 mt-16 transform rotate-3"
                        >
                            <div className="w-32 h-4 bg-primary-100 rounded mb-6"></div>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <div className="w-24 h-3 bg-slate-200 rounded mb-2"></div>
                                    <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
                                    <div className="w-4/5 h-2 bg-slate-100 rounded"></div>
                                </div>
                                <div>
                                    <div className="w-28 h-3 bg-slate-200 rounded mb-2"></div>
                                    <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
                                    <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
                                    <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-12 h-6 bg-accent-100 rounded-full"></div>
                                <div className="w-16 h-6 bg-accent-100 rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-16 text-center z-10">
                        <h3 className="font-bold text-slate-800 text-xl mb-2">Fast. Simple. Powerful.</h3>
                        <p className="text-slate-500 text-sm">Join the next generation of job seekers.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
