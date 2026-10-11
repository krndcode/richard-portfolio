"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content & Primary Action Buttons */}
        <div className="md:col-span-7 text-center md:text-left">
          
          {/* Location & Active Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-6">
            <MapPin className="w-3.5 h-3.5 text-rose-700" />
            Accra, Ghana
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
            Hi, I&apos;m Richard <span className="inline-block animate-bounce">👋</span>
            <span className="block mt-2 bg-gradient-to-r from-rose-700 via-rose-800 to-amber-700 bg-clip-text text-transparent">
              Full-Stack Developer & Media Specialist
            </span>
          </h1>

          {/* Subheadline Summary */}
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed">
            I build scalable web and mobile applications, craft intuitive user experiences, and produce compelling digital media content.
          </p>

          {/* Dual Action Buttons (View Projects & WhatsApp Direct Link) */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            
            {/* Primary Action Button */}
            <Link
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-medium shadow-lg shadow-rose-700/25 transition-all gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Direct WhatsApp Button (Styled with dark zinc outline to match theme) */}
            <a
              href="https://wa.me/233533348886"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium border border-zinc-200 dark:border-zinc-800 transition-all gap-2"
            >
              <MessageCircle className="w-4 h-4 text-rose-700" />
              WhatsApp
            </a>

          </div>

        </div>

        {/* Right Column: Profile Picture Showcase */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-100 dark:border-zinc-800 bg-gradient-to-tr from-rose-700 via-amber-600 to-rose-900 p-1">
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Richard Dadzie"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}