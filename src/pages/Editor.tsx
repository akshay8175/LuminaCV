import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ChevronLeft, LayoutTemplate, Download, Save,
    Sparkles, GripVertical, Plus, Trash2, Edit3, Type
} from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// Mock initial data
const initialSections = [
    { id: 'personal', title: 'Personal Information', icon: <Type size={18} /> },
    { id: 'experience', title: 'Work Experience', icon: <LayoutTemplate size={18} /> },
    { id: 'education', title: 'Education', icon: <LayoutTemplate size={18} /> },
    { id: 'skills', title: 'Skills', icon: <LayoutTemplate size={18} /> },
];

export function Editor() {
    const [sections, setSections] = useState(initialSections);
    const [activeSection, setActiveSection] = useState('personal');

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = Array.from(sections);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setSections(items);
    };

    return (
        <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
            {/* Editor Header */}
            <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500">
                        <ChevronLeft size={20} />
                    </Link>
                    <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                        <h1 className="font-semibold text-slate-900 flex items-center gap-2">
                            Software Engineer Resume
                            <button className="text-slate-400 hover:text-slate-600"><Edit3 size={14} /></button>
                        </h1>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-500">Draft</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                        <Save size={16} />
                        Save
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
                        <Download size={16} />
                        Export PDF
                    </button>
                </div>
            </header>

            {/* Editor Main Content */}
            <main className="flex-1 flex overflow-hidden">

                {/* Left Column: Editor Controls */}
                <div className="w-[480px] bg-white border-r border-slate-200 flex flex-col z-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">

                    <div className="p-6 border-b border-slate-100 bg-white">
                        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white py-3 rounded-xl font-medium shadow-md transition-all">
                            <Sparkles size={18} />
                            AI Resume Improver
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Resume Sections</h2>

                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="sections">
                                {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
                                        {sections.map((section, index) => (
                                            <Draggable key={section.id} draggableId={section.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        className={`flex flex-col rounded-xl border transition-all ${snapshot.isDragging ? 'border-primary-500 shadow-xl bg-white' :
                                                                activeSection === section.id ? 'border-primary-500 ring-1 ring-primary-500 bg-primary-50/10' : 'border-slate-200 bg-white hover:border-slate-300'
                                                            }`}
                                                    >
                                                        <div
                                                            className="flex items-center justify-between p-4 cursor-pointer"
                                                            onClick={() => setActiveSection(section.id)}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    {...provided.dragHandleProps}
                                                                    className="text-slate-400 hover:text-slate-600 cursor-grab active:cursor-grabbing p-1 -ml-1"
                                                                >
                                                                    <GripVertical size={18} />
                                                                </div>
                                                                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${activeSection === section.id ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-500'}`}>
                                                                    {section.icon}
                                                                </div>
                                                                <span className={`font-semibold ${activeSection === section.id ? 'text-slate-900' : 'text-slate-700'}`}>
                                                                    {section.title}
                                                                </span>
                                                            </div>
                                                            <ChevronLeft size={18} className={`text-slate-400 transition-transform ${activeSection === section.id ? '-rotate-90' : 'rotate-180'}`} />
                                                        </div>

                                                        {/* Expanded Form Area */}
                                                        {activeSection === section.id && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                className="px-4 pb-4 border-t border-slate-100 pt-4"
                                                            >
                                                                {section.id === 'personal' && (
                                                                    <div className="space-y-4">
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            <div>
                                                                                <label className="block text-xs font-semibold text-slate-500 mb-1">First Name</label>
                                                                                <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm" defaultValue="John" />
                                                                            </div>
                                                                            <div>
                                                                                <label className="block text-xs font-semibold text-slate-500 mb-1">Last Name</label>
                                                                                <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm" defaultValue="Doe" />
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <label className="block text-xs font-semibold text-slate-500 mb-1">Professional Title</label>
                                                                            <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm" defaultValue="Senior Software Engineer" />
                                                                        </div>
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            <div>
                                                                                <label className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
                                                                                <input type="email" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm" defaultValue="john@example.com" />
                                                                            </div>
                                                                            <div>
                                                                                <label className="block text-xs font-semibold text-slate-500 mb-1">Phone</label>
                                                                                <input type="tel" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm" defaultValue="+1 234 567 8900" />
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <label className="block text-xs font-semibold text-slate-500 mb-1">Summary</label>
                                                                            <textarea
                                                                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm h-24 resize-none"
                                                                                defaultValue="Experienced software engineer with a passion for building scalable web applications. Proficient in React, Node.js, and cloud technologies."
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {section.id === 'experience' && (
                                                                    <div className="space-y-4">
                                                                        <div className="p-4 border border-slate-200 rounded-lg relative group">
                                                                            <button className="absolute top-3 right-3 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                <Trash2 size={16} />
                                                                            </button>
                                                                            <div className="font-semibold text-slate-900 text-sm mb-1">Senior Frontend Engineer</div>
                                                                            <div className="text-slate-500 text-sm mb-3">Google • 2021 - Present</div>
                                                                            <button className="text-sm font-medium text-primary-600 flex items-center gap-1">
                                                                                <Sparkles size={14} /> Improve with AI
                                                                            </button>
                                                                        </div>
                                                                        <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-sm font-semibold text-primary-600 hover:border-primary-500 hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
                                                                            <Plus size={16} /> Add Experience
                                                                        </button>
                                                                    </div>
                                                                )}

                                                                {(section.id === 'education' || section.id === 'skills') && (
                                                                    <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-sm font-semibold text-primary-600 hover:border-primary-500 hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
                                                                        <Plus size={16} /> Add Item
                                                                    </button>
                                                                )}
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>

                        <button className="w-full mt-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 shadow-sm">
                            <Plus size={18} /> Add Custom Section
                        </button>
                    </div>
                </div>

                {/* Right Column: Live Preview */}
                <div className="flex-1 bg-slate-100 overflow-y-auto flex items-start justify-center p-8">
                    <div className="max-w-[800px] w-full bg-white shadow-2xl rounded-sm min-h-[1100px] p-12 transition-all">
                        {/* Minimalist Professional Layout Preview */}
                        <div className="border-b border-slate-200 pb-8 mb-8">
                            <h1 className="text-4xl font-display font-bold text-slate-900 mb-2 tracking-tight">John Doe</h1>
                            <h2 className="text-xl text-primary-600 font-medium mb-4">Senior Software Engineer</h2>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span>john@example.com</span>
                                <span>•</span>
                                <span>+1 234 567 8900</span>
                                <span>•</span>
                                <span>San Francisco, CA</span>
                                <span>•</span>
                                <span className="text-primary-600">linkedin.com/in/johndoe</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <section>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    Experienced software engineer with a passion for building scalable web applications. Proficient in React, Node.js, and cloud technologies. Proven track record of improving application performance and leading high-impact cross-functional teams to deliver enterprise-grade SaaS products.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 pb-1 border-b border-slate-200">Experience</h3>
                                <div className="mb-6">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-bold text-slate-900">Senior Frontend Engineer</h4>
                                        <span className="text-sm text-slate-500 font-medium">Jan 2021 - Present</span>
                                    </div>
                                    <div className="text-primary-600 font-medium text-sm mb-3">Google</div>
                                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                                        <li>Spearheaded the migration of legacy monolithic frontend to micro-frontends.</li>
                                        <li>Mentored a team of 5 junior developers, improving code review velocity by 30%.</li>
                                        <li>Reduced Time-to-Interactive (TTI) by 40% using advanced code splitting.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-bold text-slate-900">Frontend Developer</h4>
                                        <span className="text-sm text-slate-500 font-medium">Jun 2018 - Dec 2020</span>
                                    </div>
                                    <div className="text-primary-600 font-medium text-sm mb-3">Canva</div>
                                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                                        <li>Developed core components for the main drag-and-drop editor interface.</li>
                                        <li>Implemented state management architecture using Redux Toolkit.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 pb-1 border-b border-slate-200">Education</h3>
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-900">B.S. Computer Science</h4>
                                        <span className="text-sm text-slate-500 font-medium">2014 - 2018</span>
                                    </div>
                                    <div className="text-slate-600 text-sm">University of California, Berkeley</div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 pb-1 border-b border-slate-200">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'AWS'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-sm text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
