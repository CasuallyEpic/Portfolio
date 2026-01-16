"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Send, ExternalLink, Code2, Rocket, Brain, Smartphone, Menu, X, Star, GitFork, Activity, Users, Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero({ profile }: { profile: any }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
      <motion.div
        initial={ { opacity: 0, y: 20 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.8 } }
        className="text-center w-full max-w-4xl"
      >
        {profile?.avatar_url && (
          <motion.div 
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            className="mb-8 relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-40 animate-pulse" />
            <Image 
              src={profile.avatar_url} 
              alt="Profile" 
              width={120} 
              height={120} 
              className="rounded-full border-2 border-white/10 relative z-10 md:w-[150px] md:h-[150px]"
              priority
              loading="eager"
            />
          </motion.div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-blue-500 leading-tight">
          {profile?.name || "Bishwa Bastola"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 px-4">
          Full Stack / App Developer
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center mb-10 px-4">
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-white">{profile?.public_repos || 0}</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Repositories</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-white">{profile?.followers || 0}</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-white">{profile?.following || 0}</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Following</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-center">
            Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-white/5 transition-colors text-center">
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function Navbar({ profile }: { profile: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">{profile?.login || "BISHWA"}<span className="text-purple-500">.</span></a>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={ { opacity: 0, height: 0 } }
            animate={ { opacity: 1, height: "auto" } }
            exit={ { opacity: 0, height: 0 } }
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-zinc-400">
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white">About</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white">Work</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function ProfileStats({ profile, starredRepos, followers }: { profile: any, starredRepos: any[], followers: any[] }) {
  return null;
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="relative p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900/40 border border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-500 font-black text-xs uppercase tracking-[0.3em] mb-4 sm:mb-6 block">Legacy & Mission</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-tight sm:leading-none">
              Crafting Digital <br/> <span className="text-zinc-600">Architectures.</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              <p>
                I am <span className="text-white">Bishwa Bastola</span>, a Full Stack Engineer dedicated to bridging the gap between complex logic and elegant design. My approach is rooted in structural integrity and performance.
              </p>
              <p>
                From scalable cloud infrastructures to pixel-perfect mobile interfaces, I build systems that don&apos;t just work—they endure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6"
          >
            {[
              { title: "Architecture", desc: "Building robust, scalable foundations for apps.", icon: Building2 },
              { title: "AI Integration", desc: "Leveraging LLMs for intelligent UX.", icon: Brain },
              { title: "Performance", desc: "Optimizing for the ultimate feel.", icon: Activity },
              { title: "Security", desc: "Ensuring data integrity and safety.", icon: Code2 }
            ].map((item, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500 group">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Skills({ repos }: { repos: any[] }) {
  const fallbackSkills = [
    { name: "TypeScript", level: "Senior", icon: "TS", color: "group-hover:text-blue-400" },
    { name: "Next.js", level: "Expert", icon: "NX", color: "group-hover:text-white" },
    { name: "React", level: "Senior", icon: "RC", color: "group-hover:text-cyan-400" },
    { name: "Tailwind", level: "Master", icon: "TW", color: "group-hover:text-sky-400" },
    { name: "Node.js", level: "Advanced", icon: "JS", color: "group-hover:text-green-500" },
    { name: "PostgreSQL", level: "Advanced", icon: "DB", color: "group-hover:text-indigo-400" },
    { name: "Framer", level: "Specialist", icon: "FM", color: "group-hover:text-pink-500" },
    { name: "Git", level: "Expert", icon: "GT", color: "group-hover:text-orange-600" }
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 sm:mb-24 relative">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tighter opacity-5 absolute left-0 right-0 top-0 -translate-y-1/2 select-none">TECH_STACK</h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white relative z-10">Technical Mastery.</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {fallbackSkills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 sm:p-12 flex flex-col items-center justify-center group transition-all duration-500 text-center rounded-[2rem] hover:border-white/20"
          >
            <div className={`text-3xl sm:text-5xl font-black text-zinc-800 transition-all duration-500 mb-4 ${skill.color}`}>
              {skill.icon}
            </div>
            <h3 className="text-white font-bold text-sm sm:text-xl mb-1 group-hover:scale-110 transition-transform duration-500">{skill.name}</h3>
            <div className="overflow-hidden h-1 w-12 bg-zinc-800 rounded-full mt-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-purple-500"
              />
            </div>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mt-4 group-hover:text-purple-400 transition-colors">{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Projects({ repos }: { repos: any[] }) {
  const filteredRepos = repos
    .filter((repo: any) => !repo.fork)
    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
    .slice(0, 4);

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-12 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">Selected <br className="hidden sm:block" /><span className="text-zinc-600 underline decoration-purple-500/50 underline-offset-8">Creations.</span></h2>
        <p className="text-zinc-500 max-w-sm text-base sm:text-lg font-medium">Engineered for impact. Refined for performance. Built for the future.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {filteredRepos.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[400px] sm:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 z-20">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="px-2 sm:px-3 py-1 rounded-full bg-white/10 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {repo.language || 'Software'}
                </span>
                <div className="flex items-center gap-1 text-zinc-400 text-[10px] sm:text-xs font-bold">
                  <Star size={10} className="text-yellow-500 sm:size-3" /> {repo.stargazers_count}
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 sm:mb-4 group-hover:text-purple-400 transition-colors duration-500">{repo.name.replace(/-/g, ' ')}</h3>
              <p className="text-zinc-400 text-sm sm:text-lg mb-6 sm:mb-8 line-clamp-2 max-w-md">{repo.description || "A masterclass in clean architecture and efficient codebase management."}</p>
              <div className="flex gap-4">
                <a href={repo.html_url} target="_blank" className="px-4 py-3 sm:p-4 bg-white text-black rounded-xl sm:rounded-2xl hover:bg-zinc-200 transition-all font-black uppercase text-[10px] sm:text-xs tracking-widest flex items-center gap-2">
                  Source Code <Github size={12} className="sm:size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ActivityFeed({ events }: { events: any[] }) {
  return (
    <section className="py-20 sm:py-32 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4">Neural Pulse.</h2>
        <div className="h-1 w-16 sm:w-20 bg-purple-500 mx-auto rounded-full" />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />
        <div className="space-y-8 sm:space-y-12">
          {events?.slice(0, 4).map((event: any, i: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full md:text-right md:pr-12 group">
                <div className={`p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-zinc-900/30 border border-white/5 transition-all duration-500 hover:border-purple-500/20 ${i % 2 === 0 ? 'md:text-left md:pl-8' : ''}`}>
                   <span className="text-[8px] sm:text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-2 sm:mb-3 block">
                    {new Date(event.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
                  </span>
                  <p className="text-lg sm:text-xl font-bold text-white mb-2">{event.type.replace('Event', '')}</p>
                  <p className="text-zinc-500 text-sm sm:text-base font-medium">on {event.repo.name}</p>
                </div>
              </div>
              <div className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] border-4 border-black hidden md:block" />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-[3rem] p-10 overflow-hidden relative group z-0 shadow-2xl">
        <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-10" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
              <Mail className="w-6 h-6 text-black group-hover:text-white transition-colors" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-black group-hover:text-white transition-colors leading-none tracking-tighter">
                Say Hello!
              </h2>
              <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors text-xs font-bold uppercase tracking-widest mt-1">
                Let&apos;s build something cute.
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="NAME" className="w-full bg-black/5 group-hover:bg-white/5 border-none rounded-2xl px-6 py-4 text-black group-hover:text-white focus:ring-2 focus:ring-purple-500 transition-all font-bold placeholder:text-zinc-400 text-sm" />
            <input type="email" placeholder="EMAIL" className="w-full bg-black/5 group-hover:bg-white/5 border-none rounded-2xl px-6 py-4 text-black group-hover:text-white focus:ring-2 focus:ring-purple-500 transition-all font-bold placeholder:text-zinc-400 text-sm" />
            <textarea placeholder="YOUR MESSAGE" rows={3} className="w-full bg-black/5 group-hover:bg-white/5 border-none rounded-2xl px-6 py-4 text-black group-hover:text-white focus:ring-2 focus:ring-purple-500 transition-all font-bold placeholder:text-zinc-400 text-sm resize-none" />
            
            <button className="w-full group/btn bg-black text-white group-hover:bg-white group-hover:text-black py-4 rounded-2xl transition-all font-black text-xs tracking-[0.2em] flex items-center justify-center gap-3">
              SEND MESSAGE
              <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-black/5 group-hover:border-white/5 flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/CasuallyEpic" },
              { icon: Send, href: "https://t.me/example" },
              { icon: Mail, href: "mailto:hello@yugant.dev" }
            ].map((item, i) => (
              <a key={i} href={item.href} className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center hover:scale-110 transition-all">
                <item.icon className="w-4 h-4 text-black group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ profile }: { profile: any }) {
  return (
    <footer className="py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 border-t border-white/5 pt-12 sm:pt-20 text-center md:text-left">
        <div className="text-xl sm:text-2xl font-black text-white tracking-tighter">{profile?.login || "BISHWA"}<span className="text-purple-500">.</span></div>
        <div className="text-zinc-600 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.4em]">SYSTEM_STABLE_V1.0.26</div>
        <div className="text-zinc-500 font-medium text-xs sm:text-sm">© 2026 Crafted by Bishwa Bastola</div>
      </div>
    </footer>
  );
}
