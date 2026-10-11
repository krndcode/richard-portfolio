"use client";

import { Code2, Video, Layers, Terminal } from "lucide-react";

// Categorized skill matrix matching your core expertise
const skillCategories = [
  {
    title: "Frontend & Full-Stack",
    icon: Code2,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Mobile & Backend Development",
    icon: Terminal,
    skills: ["Flutter", "Dart", "Python", "Node.js", "Git / GitHub"],
  },
  {
    title: "Video & Post-Production",
    icon: Video,
    skills: [
      "DaVinci Resolve",
      "Adobe Premiere Pro",
      "vMix (Live Broadcast)",
      "Multi-Camera Production",
      "Color Grading",
    ],
  },
  {
    title: "Digital Media & Strategy",
    icon: Layers,
    skills: [
      "Adobe Photoshop",
      "Canva",
      "Meta Business Suite",
      "Hootsuite",
      "Brand Identity & Content Operations",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
            Expertise & Tools
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Technical Stack & Creative Toolkit
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base">
            Combining software architecture with high-end digital media production to engineer complete digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-rose-700/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 border border-rose-200 dark:border-rose-900/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {category.title}
                  </h4>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:border-rose-700/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}