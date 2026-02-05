import { GraduationCap, Award, BookOpen } from 'lucide-react';

const experiences = [
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      {
        title: 'Bachelor of Technology – Computer Science & Engineering',
        organization: 'Oriental Institute Of Science And Technology',
        period: '08/2021 - 07/2025',
        description: 'Specialized in AI and Machine Learning with focus on scalable systems and intelligent applications',
      },
    ],
  },
  {
    icon: Award,
    title: 'Professional Experience',
    items: [
      {
        title: 'Developer Trainee',
        organization: 'Simption Tech Pvt Ltd',
        period: '07/2025 - 09/2025',
        description: 'Designed responsive UIs with React & Tailwind CSS. Developed backend logic with Flask & Django REST Framework for data-driven modules.',
      },
      {
        title: 'Developer Trainee',
        organization: 'Dtable Analytics',
        period: '02/2025 - 07/2025',
        description: 'Built interactive dashboards and full-stack apps with React, Node.js, MongoDB. Integrated OpenAI APIs for AI-powered data visualization.',
      },
    ],
  },
  {
    icon: BookOpen,
    title: 'Awards & Recognition',
    items: [
      {
        title: 'First Prize – Minor Project Presentation (CSE Hackathon)',
        organization: 'Academic Achievement',
        period: '2024',
        description: 'Recognized for innovative AI-integrated solution and technical excellence',
      },
      {
        title: 'Top 5 Rank – Sistec Hackathon',
        organization: 'Hackathon Competition',
        period: '2024',
        description: 'Developed innovative AI-integrated solution competing against top talent',
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Background & Learning
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Continuous growth in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experiences.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm mb-2">{item.organization}</p>
                    <p className="text-slate-500 text-xs mb-3">{item.period}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
