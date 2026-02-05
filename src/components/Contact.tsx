import { Mail, Linkedin, Github, FileText, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Open to exciting opportunities and collaborations
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="mailto:harshgarg99645@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-semibold  break-all text-sm sm:text-base">harshgarg99645@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918827036728"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-semibold">+91 8827036728</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/harsh-garg-36ba55201"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="font-semibold">harsh-garg-36ba55201</p>
              </div>
            </a>

            <a
              href="https://github.com/Harshgarg123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-300/10"
            >
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Github className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="font-semibold">Harshgarg123</p>
              </div>
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1nEQ4WsV7QbN8CgAveSQ8d5cfETYBIqsZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Resume</p>
                <p className="font-semibold">Download PDF</p>
              </div>
            </a>
          </div>

          <div className="text-center pt-6 border-t border-slate-700">
            <p className="text-slate-400 mb-4">
              Eager to contribute to innovative AI projects and grow as an AI Engineer
            </p>
            {/* <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
