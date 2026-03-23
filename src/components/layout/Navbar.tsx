import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                isScrolled ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-sm' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-primary-500 text-white p-2 rounded-xl group-hover:bg-primary-600 transition-colors">
                                <FileText size={20} className="stroke-[2.5]" />
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                                Lumina<span className="text-primary-500">CV</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/templates" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                            Templates
                        </Link>
                        <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                            Pricing
                        </Link>
                        <div className="flex items-center gap-4 ml-4">
                            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full top-16 left-0">
                    <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
                        <Link to="/templates" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md">
                            Templates
                        </Link>
                        <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md">
                            Pricing
                        </Link>
                        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                            <Link to="/login" className="block w-full text-center px-4 py-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md">
                                Log in
                            </Link>
                            <Link to="/signup" className="block w-full text-center px-4 py-2 bg-primary-500 text-white rounded-md text-base font-medium hover:bg-primary-600 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
