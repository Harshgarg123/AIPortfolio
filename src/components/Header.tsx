import { Code2, Menu, X, Download } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const resumeLink =
    'https://drive.google.com/uc?export=download&id=1nEQ4WsV7QbN8CgAveSQ8d5cfETYBIqsZ';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Harsh Garg
              </span>
              <p className="text-xs text-slate-400">
                Full Stack AI Engineer
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-slate-800/50"
              >
                {item.label}
              </button>
            ))}

            {/* Download CV */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-700/50 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-center font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
