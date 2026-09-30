import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Zap, ArrowUpRight, DollarSign, X } from 'lucide-react';
import { siteData, ProjectItem } from '../siteData';
import { SafeImage } from './SafeImage';

interface ProjectsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Off-Grid'];
  const projects = siteData.projects;

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-blue-600 font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-3">
              Proven Track Record /
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              FEATURED INSTALLATIONS
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-full border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20 font-extrabold'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid: 16-24px radius cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveProjectModal(project)}
                className="group bg-white border border-sky-100 rounded-[22px] overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    fallbackText={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold uppercase tracking-wider shadow-sm border border-sky-100">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {project.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span>{project.savings}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full">
              <SafeImage
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase">
                  {activeProjectModal.capacity}
                </span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {activeProjectModal.location}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 uppercase mb-3">
                {activeProjectModal.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activeProjectModal.summary}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Audited Annual Savings</span>
                  <span className="font-display font-bold text-lg text-emerald-600">{activeProjectModal.savings}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Sector</span>
                  <span className="font-display font-bold text-lg text-slate-900">{activeProjectModal.category}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveProjectModal(null);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#F5A623] hover:bg-[#FFB800] text-slate-950 font-display font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all cursor-pointer shadow-md"
              >
                REQUEST PROPOSAL FOR SIMILAR PROPERTY
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
