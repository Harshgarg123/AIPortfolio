import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
          <span className="text-cyan-400 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Open to AI Engineer & Full-Stack Roles

          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-2 animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Harsh Garg
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
          Full Stack AI Engineer
        </p>

        <p className="text-lg text-slate-300 mb-4 max-w-3xl mx-auto">
           Building real-world AI products with MERN, Python, Django & LLMs
        </p>

        <p className="text-base text-slate-400 mb-12 max-w-2xl mx-auto">
          I design and build production-ready AI applications — from RAG-based systems and LLM agents
          to full-stack platforms that solve real business problems.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            View Projects
          </button>
        </div>

        <button
          onClick={scrollToSkills}
          className="mt-20 animate-bounce text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}
