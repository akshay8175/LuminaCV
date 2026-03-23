import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CheckCircle2, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="min-h-screen flex flex-col pt-16 bg-slate-50">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                {/* Header section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-lg text-slate-600 mb-10">
                        Start for free, upgrade when you need more power to land your dream job faster.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-16 h-8 rounded-full bg-primary-100 p-1 flex items-center transition-all duration-300 focus:outline-none"
                        >
                            <motion.div
                                animate={{ x: isAnnual ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-6 h-6 rounded-full bg-primary-600 shadow-sm"
                            />
                        </button>
                        <span className={`text-sm font-semibold flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                            Annually <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Save 20%</span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mb-20">

                    {/* Basic tier */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Basic</h3>
                        <p className="text-slate-500 text-sm mb-6 h-10">Everything you need to create a simple, standard resume.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-extrabold text-slate-900">$0</span>
                            <span className="text-slate-500 font-medium">/forever</span>
                        </div>
                        <button className="w-full py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors mb-8">
                            Get Started Free
                        </button>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> 1 Resume</li>
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> 3 Standard Templates</li>
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> PDF Export</li>
                            <li className="flex items-center gap-3 text-slate-400"><X size={20} className="shrink-0" /> AI Bullet Suggestions</li>
                            <li className="flex items-center gap-3 text-slate-400"><X size={20} className="shrink-0" /> Cover Letter Builder</li>
                        </ul>
                    </div>

                    {/* Premium tier - Highlighted */}
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative transform md:-translate-y-4 pt-10">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-400 to-accent-600 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-md">
                            MOST POPULAR
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 font-display">Premium</h3>
                        <p className="text-slate-400 text-sm mb-6 h-10">Essential tools for active job seekers targeting competitive roles.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-extrabold text-white">
                                ${isAnnual ? '12' : '15'}
                            </span>
                            <span className="text-slate-400 font-medium">/month</span>
                        </div>
                        <button className="w-full py-4 rounded-xl font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors mb-8 shadow-lg shadow-primary-500/20">
                            Upgrade to Premium
                        </button>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white"><CheckCircle2 size={20} className="text-primary-400 shrink-0" /> Unlimited Resumes</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle2 size={20} className="text-primary-400 shrink-0" /> All Premium Templates</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle2 size={20} className="text-primary-400 shrink-0" /> ATS Compatibility Check</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle2 size={20} className="text-primary-400 shrink-0" /> 50 AI Suggestions / month</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle2 size={20} className="text-primary-400 shrink-0" /> Cover Letter Builder</li>
                        </ul>
                    </div>

                    {/* Pro tier */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Pro</h3>
                        <p className="text-slate-500 text-sm mb-6 h-10">Advanced coaching and limitless AI power for ultimate career growth.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-extrabold text-slate-900">
                                ${isAnnual ? '29' : '39'}
                            </span>
                            <span className="text-slate-500 font-medium">/month</span>
                        </div>
                        <button className="w-full py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors mb-8">
                            Get Pro
                        </button>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Everything in Premium</li>
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Unlimited AI Suggestions</li>
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Personalized Interview Prep</li>
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> LinkedIn Profile Audit</li>
                            <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Priority 24/7 Support</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
