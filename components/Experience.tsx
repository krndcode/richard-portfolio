"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

// Experience timeline data highlighting software and digital media roles
const experiences = [
  {
    role: "Director & Digital Strategist",
    company: "Krnd Media Group Ghana",
    period: "Present",
    location: "Accra, Ghana",
    description: [
      "Spearheaded digital content strategy, brand identity systems, and digital marketing campaigns across web and media channels.",
      "Managed website architecture, graphic asset pipelines, and live broadcast setups using vMix, DaVinci Resolve, and Adobe Creative Suite.",
    ],
  },
  {
    role: "Full-Stack Developer & Technical Consultant",
    company: "Independent Projects / Client Services",
    period: "2023 — Present",
    location: "Accra, Ghana",
    description: [
      "Designed and deployed custom web platforms and mobile utilities using Next.js, React, Tailwind CSS, and Flutter.",
      "Configured functional database solutions, payment gateway integrations, and REST API architectures for client applications.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
            Career Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Professional Experience & Leadership
          </h3>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Icon Node */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-700 text-white shadow-md border-4 border-white dark:border-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-rose-700/50 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    {exp.role}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {exp.company}
                </h4>

                <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <MapPin className="w-3 h-3 text-rose-700" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc list-inside">
                  {exp.description.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}