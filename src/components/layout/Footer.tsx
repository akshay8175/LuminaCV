
import { Link } from 'react-router-dom';
import { FileText, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                                <FileText size={18} className="stroke-[2.5]" />
                            </div>
                            <span className="font-display font-bold text-lg tracking-tight text-slate-900">
                                Lumina<span className="text-primary-500">CV</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Create professional, ATS-friendly resumes in minutes with our AI-powered builder.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm text-slate-900 uppercase tracking-wider mb-4">Product</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/templates" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Templates</Link></li>
                            <li><Link to="/pricing" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Pricing</Link></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Features</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm text-slate-900 uppercase tracking-wider mb-4">Resources</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Resume Writing Guide</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Interview Preparation</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Career Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} LuminaCV. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-400">
                        <span>Made with ✨ by AI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
