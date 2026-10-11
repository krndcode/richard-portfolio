"use client";

import Link from "next/link";
import { ExternalLink, FolderGit2, ArrowUpRight } from "lucide-react";

// Portfolio project data structure
const projects = [
  {
    title: "Nkabom — Agricultural Marketplace Platform",
    description:
      "An agricultural marketplace platform engineered to connect Ghanaian farmers directly with agricultural produce buyers. Features interactive UI flows, database models, and transparent trading pipelines.",
    tags: ["React / Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "#",
    featured: true,
  },
  {
    title: "Xcrow — Task & Escrow Workflow Application",
    description:
      "A mobile and web cross-platform task management utility designed with secure workflow architecture, wireframe specifications, and offline-first data capabilities.",
    tags: ["Flutter", "Dart", "Isar Local DB", "REST APIs"],
    github: "https://github.com",
    live: "#",
    featured: true,
  },
  {
    title: "National Policy Tracker",
    description:
      "An interactive web platform developed to monitor, track, and visualize civic policy implementations and public infrastructure projects in real-time.",
    tags: ["JavaScript (ES6+)", "HTML5 / CSS3", "REST Integration"],
    github: "https://github.com",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
              Selected Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Featured Engineering Projects
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-sm md:text-base">
            A collection of web platforms, cross-platform apps, and technical solutions built for impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-rose-700/50 hover:shadow-xl hover:shadow-rose-700/5 transition-all duration-300"
            >
              <div>
                {/* Header Links & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-rose-700">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-rose-700 transition-colors p-1"
                      aria-label="View Source Code"
                    >
                      <FolderGit2 className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-rose-700 transition-colors p-1"
                      aria-label="View Live Project"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-rose-700 transition-colors mb-3">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[11px] font-semibold text-rose-800 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}