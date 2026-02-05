import { Brain, Code, Database, Cpu, LineChart, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: Brain,
    title: 'AI & Generative AI',
    skills: [
      'LangChain',
      'LangGraph',
      'RAG',
      'FAISS',
      'ChromaDB',
      'Hugging Face',
      'OpenAI APIs',
      'BERT',
      'RoBERTa',
      'DistilBERT',
      'LLM Agents',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Frameworks & Libraries',
    skills: [
      'Django',
      'Flask',
      'Node.js',
      'React.js',
      'Scikit-learn',
      'PyTorch',
      'NLTK',
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    icon: Cpu,
    title: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'GitHub Actions',
      'Jenkins',
      'Terraform',
      'AWS',
    ],
  },
  {
    icon: LineChart,
    title: 'Platforms & Tools',
    skills: [
      'Linux',
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter Notebook',
      'REST APIs',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Skill set aligned with real-world AI and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
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
