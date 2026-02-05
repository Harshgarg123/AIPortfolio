import { ExternalLink, Github, Brain, MessageSquare, Eye } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    title: 'LLM-Powered Q&A Chatbot with Groq',
    description:
      'Designed and implemented a configurable LLM-based Q&A system using Streamlit and LangChain. Integrated Groq’s low-latency inference API with prompt templating, output parsing, and runtime controls for model, temperature, and token limits.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'Groq API', 'Prompt Engineering'],
    gradient: 'from-emerald-500 to-teal-600',
    code: 'https://github.com/Harshgarg123/SearchEngine',
    demo: 'https://huggingface.co/spaces/harshgarg99645/ai',
  },
  {
    icon: Brain,
    title: 'FarmSync – IoT & AI Smart Farming Platform',
    description:
      'Designed a platform for farmers to send IoT data to the cloud and receive AI-driven insights for crop management. Integrates real-time sensor data with intelligent analytics.',
    technologies: ['OpenAI API', 'Django', 'REST API', 'NodeMCU', 'IoT Sensors'],
    gradient: 'from-green-500 to-emerald-600',
    code: 'https://github.com/Harshgarg123/FarmSync', // update if needed
    demo: null,
  },
  {
    icon: MessageSquare,
    title: 'AI Document Q&A System',
    description:
      'Developed a RAG-based document Q&A system using LangChain and FAISS for contextual, cost-efficient AI responses. Enables intelligent querying of large document collections.',
    technologies: ['Python', 'LangChain', 'FAISS', 'Ollama', 'Groq AI API'],
    gradient: 'from-cyan-500 to-blue-600',
    code: 'https://github.com/Harshgarg123/RAGchatEmbiddings',
    demo: null,
  },
  {
    icon: Eye,
    title: 'Natural Language Dataset Generation Framework',
    description:
      'Developed a framework to generate natural language datasets from Vega-Lite specifications using LLMs. Enables natural language interfaces for data visualization systems.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'ChatGPT API'],
    gradient: 'from-purple-500 to-pink-600',
    code: 'https://github.com/Harshgarg123/chartlllm',
    demo: null,
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            AI solutions showcasing innovation and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg text-sm hover:bg-slate-700 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg text-sm hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
