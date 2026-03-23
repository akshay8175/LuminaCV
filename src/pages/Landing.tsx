
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, ChevronRight, Sparkles, Target, Zap } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function Landing() {
    return (
        <div className="min-h-screen flex flex-col pt-16">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white pt-16 pb-32">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-50/50 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-50/50 blur-3xl" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                            <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100/80 text-accent-700 text-sm font-semibold mb-6">
                                        <Sparkles size={16} />
                                        AI-Powered Resume Builder
                                    </span>
                                    <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                                        Create Your <span className="text-gradient">Professional Resume</span> in Minutes
                                    </h1>
                                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed gap-6">
                                        Stand out from the crowd with ATS-friendly templates, AI-driven content suggestions, and a beautiful, modern design.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                        <Link
                                            to="/signup"
                                            className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_8px_30px_rgb(34,197,94,0.3)] flex items-center justify-center gap-2"
                                        >
                                            Get Started Free
                                            <ChevronRight size={20} />
                                        </Link>
                                        <Link
                                            to="/templates"
                                            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                                        >
                                            View Templates
                                        </Link>
                                    </div>

                                    <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start text-sm text-slate-500 font-medium">
                                        <div className="flex items-center gap-1">
                                            <CheckCircle2 size={16} className="text-primary-500" /> No credit card required
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <CheckCircle2 size={16} className="text-primary-500" /> Export to PDF
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Hero Image / Illustration */}
                            <div className="lg:col-span-6 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative mx-auto max-w-lg lg:max-w-none"
                                >
                                    <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-accent-400" />
                                            <div className="w-3 h-3 rounded-full bg-primary-400" />
                                        </div>
                                        {/* Mockup Resume View */}
                                        <div className="p-8 pb-12 skeleton-ui">
                                            <div className="flex items-center gap-6 mb-8">
                                                <div className="w-20 h-20 rounded-full bg-slate-200" />
                                                <div>
                                                    <div className="w-48 h-6 bg-slate-200 rounded-md mb-3" />
                                                    <div className="w-32 h-4 bg-slate-100 rounded-md" />
                                                </div>
                                            </div>
                                            <div className="space-y-4 mb-8">
                                                <div className="w-24 h-5 bg-slate-200 rounded-md mb-2" />
                                                <div className="w-full h-3 bg-slate-100 rounded-md" />
                                                <div className="w-5/6 h-3 bg-slate-100 rounded-md" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="w-32 h-5 bg-slate-200 rounded-md mb-2" />
                                                <div className="flex gap-3">
                                                    <div className="w-16 h-8 bg-primary-100 rounded-full" />
                                                    <div className="w-20 h-8 bg-primary-100 rounded-full" />
                                                    <div className="w-14 h-8 bg-primary-100 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <motion.div
                                        animate={{ y: [-10, 10, -10] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100"
                                    >
                                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">ATS Optimized</div>
                                            <div className="text-xs text-slate-500">92% Match Score</div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-slate-50 border-y border-slate-200/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Everything you need to get hired</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Our platform is designed to help you organize your experience perfectly and pass through automated resume screeners.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Target className="text-primary-500" size={28} />,
                                    title: "ATS-Friendly Templates",
                                    description: "Our templates are rigorously tested against modern Applicant Tracking Systems to ensure your resume gets read by human recruiters."
                                },
                                {
                                    icon: <Bot className="text-accent-500" size={28} />,
                                    title: "AI Power Writing",
                                    description: "Stuck on what to say? Let our AI suggest bullet points tailored specifically to your target job title and industry."
                                },
                                {
                                    icon: <Zap className="text-blue-500" size={28} />,
                                    title: "Instant Live Preview",
                                    description: "See your changes instantly. Add sections, rearrange content, and customize colors with real-time feedback."
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-24 bg-white" id="pricing">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Start for free, upgrade when you need more power.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                            {/* Basic */}
                            <div className="bg-white p-8 rounded-3xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Basic</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">$0</span>
                                    <span className="text-slate-500 font-medium">/forever</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> 1 Resume</li>
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> 3 Basic Templates</li>
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> PDF Export</li>
                                </ul>
                                <button className="w-full py-3 rounded-full font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 transition-colors">
                                    Get Started
                                </button>
                            </div>

                            {/* Premium */}
                            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative transform md:-translate-y-4">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                                    RECOMMENDED
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Premium</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-extrabold text-white">$12</span>
                                    <span className="text-slate-400 font-medium">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 size={20} className="text-primary-400" /> Unlimited Resumes</li>
                                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 size={20} className="text-primary-400" /> All Pro Templates</li>
                                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 size={20} className="text-primary-400" /> 50 AI Suggestions/mo</li>
                                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 size={20} className="text-primary-400" /> Cover Letter Builder</li>
                                </ul>
                                <button className="w-full py-3 rounded-full font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors">
                                    Upgrade to Premium
                                </button>
                            </div>

                            {/* Pro */}
                            <div className="bg-white p-8 rounded-3xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Pro</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">$29</span>
                                    <span className="text-slate-500 font-medium">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> Everything in Premium</li>
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> Unlimited AI Features</li>
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> LinkedIn Profile Audit</li>
                                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={20} className="text-primary-500" /> Priority Support</li>
                                </ul>
                                <button className="w-full py-3 rounded-full font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 transition-colors">
                                    Get Pro
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
