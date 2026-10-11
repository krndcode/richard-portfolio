"use client";

import { Code2, Video, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
            Background & Vision
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            About Me
          </h3>
        </div>

        {/* About Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <blockquote className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 leading-snug">
            &ldquo;Passionate about bridging technology, design, and media to build impactful digital solutions.&rdquo;
          </blockquote>

          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
            I am a versatile developer and digital media specialist based in Accra, Ghana, with hands-on experience in full-stack web and mobile development, digital marketing campaigns, and high-end video production. From architecting responsive web platforms to managing content strategy and multi-camera broadcasts, I focus on delivering clean code, intuitive user experiences, and visual excellence.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
            Whether engineering cross-platform applications or producing broadcast media for growing brands, I thrive at the intersection of technical functionality and creative storytelling.
          </p>

          {/* Core Focus Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 border border-rose-200 dark:border-rose-900/50 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Full-Stack Dev</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Web & mobile apps</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 border border-rose-200 dark:border-rose-900/50 shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Media Production</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Video & live broadcasts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 border border-rose-200 dark:border-rose-900/50 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Strategy & Leadership</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Creative direction</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}