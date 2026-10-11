"use client";

import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact Banner */}
        <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-tr from-zinc-900 via-zinc-950 to-rose-950 text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Let&apos;s build something exceptional together.
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Available for full-stack software development projects, media consulting, and technical partnerships.
            </p>
          </div>

          <a
            href="mailto:thekrndmedia@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white font-medium shadow-lg shadow-rose-900/30 transition-all shrink-0"
          >
            <Mail className="w-5 h-5" />
            Send a Message
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Bottom Metadata */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          {/* Replaced dynamic new Date() with static 2026 */}
          <p>© 2026 Richard Dadzie. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/krndcode" target="_blank" rel="noreferrer" className="hover:text-rose-700 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/richardnyamedadzie" target="_blank" rel="noreferrer" className="hover:text-rose-700 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:thekrndmedia@gmail.com" className="hover:text-rose-700 transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}