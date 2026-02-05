import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Mic, MicOff, Volume2, Loader } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatbotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AIChatbot({ isOpen, setIsOpen }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the AI assistant for this portfolio. Ask me anything about my skills, projects, or experience as an AI Engineer!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  const handleClose = () => {
  stopSpeaking();
  stopListening();
  setIsOpen(false);
};


  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hi there! I'm Harsh Garg, a Full Stack AI Engineer. I'm passionate about building scalable AI-powered applications. Feel free to ask me anything about my skills, projects, experience, or let's discuss AI opportunities!";
    }

    if (lowerMessage.includes('harsh') || lowerMessage.includes('about you') || lowerMessage.includes('tell me about')) {
      return "I'm Harsh Garg, a Full Stack AI Engineer specializing in MERN stack, Python, and Django. I'm currently graduating from Oriental Institute of Science and Technology. I'm passionate about creating intelligent web applications using LLMs, RAG systems, and cutting-edge AI technologies. My goal is to build solutions that make a real impact!";
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('know') || lowerMessage.includes('expertise')) {
      return "I have expertise in:\n\n📱 Full Stack: React.js, Node.js, Django, Flask, Express\n🤖 AI/ML: LangChain, LangGraph, RAG, FAISS, ChromaDB, BERT, OpenAI APIs\n🐍 Languages: Python, JavaScript, Java, TypeScript\n🗄️ Databases: PostgreSQL, MongoDB, MySQL, SQLite\n🚀 DevOps: Docker, Kubernetes, CI/CD, GitHub Actions, AWS, Terraform\n\nI'm particularly strong in building RAG-based systems and LLM applications!";
    }

    if (lowerMessage.includes('project')) {
      return "I've built some exciting projects:\n\n🌾 FarmSync - IoT & AI Smart Farming Platform\n  → Provides AI-driven insights for crop management using OpenAI API, Django, NodeMCU sensors\n\n📄 AI Document Q&A System\n  → RAG-based document Q&A using LangChain, FAISS, and Groq AI\n\n📊 Natural Language Dataset Generation\n  → Framework to generate datasets from Vega-Lite specs using LLMs\n\nAll projects showcase real-world AI implementation and problem-solving!";
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('career')) {
      return "I'm a recent graduate with practical experience:\n\n💼 Simption Tech (Jul-Sep 2025) - Developer Trainee\n  → Built responsive UIs with React & Tailwind CSS\n  → Developed backend with Flask & Django REST Framework\n\n💼 Dtable Analytics (Feb-Jul 2025) - Developer Trainee\n  → Created interactive dashboards with React, Node.js, MongoDB\n  → Integrated OpenAI APIs for AI-powered data visualization\n\nI'm eager to bring my skills to an innovative team!";
    }

    if (lowerMessage.includes('iot') || lowerMessage.includes('farm')) {
      return "FarmSync is a smart farming platform I developed that combines IoT sensors with AI! Farmers can send real-time sensor data from NodeMCU devices to the cloud, and they receive AI-driven insights for crop management using OpenAI API. It demonstrates my ability to integrate hardware, cloud, and AI into a complete solution.";
    }

    if (lowerMessage.includes('rag') || lowerMessage.includes('document') || lowerMessage.includes('qa')) {
      return "My AI Document Q&A System is a RAG-based solution using LangChain, FAISS, and Groq AI. It allows users to query documents with contextual, cost-efficient AI responses. RAG (Retrieval-Augmented Generation) is powerful for combining real documents with LLMs. This project shows my expertise in prompt engineering and vector databases!";
    }

    if (lowerMessage.includes('nlp') || lowerMessage.includes('language model') || lowerMessage.includes('llm')) {
      return "I'm experienced with NLP and Large Language Models! I work with LangChain, LangGraph for building complex AI workflows. I understand BERT, transformer architectures, and how to fine-tune LLMs for specific tasks. I've built RAG systems, chatbots, and text generation pipelines. LLMs are at the core of modern AI, and I'm passionate about leveraging them creatively!";
    }

    if (lowerMessage.includes('langchain') || lowerMessage.includes('rag')) {
      return "LangChain is my go-to framework for building LLM applications! I use it for:\n\n• Building RAG pipelines with FAISS for document retrieval\n• Creating LLM agents with multi-step reasoning\n• Prompt engineering and template management\n• Integrating multiple AI models and APIs\n\nI've used it in production to create intelligent document Q&A systems and AI workflows.";
    }

    if (lowerMessage.includes('mern') || lowerMessage.includes('full stack') || lowerMessage.includes('react')) {
      return "I'm proficient in the MERN stack! I build complete web applications:\n\n✅ Frontend: React.js with modern hooks, state management, Tailwind CSS\n✅ Backend: Node.js, Express, Flask, Django with REST APIs\n✅ Database: MongoDB, PostgreSQL for scalable data management\n✅ DevOps: Docker containerization, CI/CD pipelines\n\nI integrate AI capabilities into full-stack applications for maximum impact!";
    }

    if (lowerMessage.includes('award') || lowerMessage.includes('recognition')) {
      return "I've been recognized for my work!\n\n🏆 First Prize - Minor Project Presentation (CSE Hackathon)\n🏆 Top 5 Rank - Sistec Hackathon for innovative AI-integrated solution\n\nThese awards demonstrate my ability to innovate and deliver under pressure in competitive environments.";
    }

    if (lowerMessage.includes('hire') || lowerMessage.includes('job') || lowerMessage.includes('opportunity') || lowerMessage.includes('position')) {
      return "I'm actively looking for roles where I can contribute my AI and full-stack skills! I'm seeking positions as:\n\n• AI Engineer • ML Engineer • Full Stack Developer • Backend Engineer\n\nI bring fresh perspectives, strong fundamentals, and enthusiasm to learn. I'm ready to tackle real-world challenges and grow with innovative teams. Let's connect and explore opportunities together!";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
      return "You can reach me through:\n\n📧 Email: harshgarg99645@gmail.com\n📱 Phone: +91 8827036728\n💼 LinkedIn: linkedin.com/in/harsh-garg-36ba55201\n💻 GitHub: github.com/Harshgarg123\n📍 Location: Bangalore, India\n\nFeel free to reach out for opportunities, collaborations, or just to chat about AI!";
    }

    if (lowerMessage.includes('github') || lowerMessage.includes('code') || lowerMessage.includes('repository')) {
      return "You can check out my code on GitHub at github.com/Harshgarg123! I regularly work on AI and full-stack projects. You'll find implementations of RAG systems, LLM applications, and MERN stack projects. I believe in writing clean, well-documented code and contributing to the open-source community!";
    }

    if (lowerMessage.includes('docker') || lowerMessage.includes('deployment') || lowerMessage.includes('devops')) {
      return "I'm experienced with DevOps and containerization!\n\n🐳 Docker: Creating containerized applications for consistency\n☸️ Kubernetes: Orchestrating and scaling applications\n🔄 CI/CD: GitHub Actions, Jenkins for automated testing and deployment\n☁️ Cloud: AWS services for scalable infrastructure\n🔧 Terraform: Infrastructure as Code for reproducible setups\n\nI understand the importance of shipping reliable, scalable systems!";
    }

    return "That's a great question! I'm passionate about AI Engineering and building intelligent applications. Feel free to ask me about my skills, projects, experience, or how I can contribute to your team. I'm always happy to discuss new ideas and opportunities!";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
      speak(response);
    }, 500);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl flex flex-col z-50">
      <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <p className="text-xs text-slate-400">Ask me anything!</p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-700 text-slate-100'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 p-3 rounded-xl">
              <Loader className="w-5 h-5 text-cyan-400 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-700">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button
            type="button"
            onClick={isListening ? stopListening : startListening}
            className={`p-2 rounded-lg transition-all ${
              isListening
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            {isListening ? (
              <MicOff className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-slate-300" />
            )}
          </button>
          <button
            type="button"
            onClick={isSpeaking ? stopSpeaking : () => {}}
            className={`p-2 rounded-lg transition-all ${
              isSpeaking
                ? 'bg-cyan-500 hover:bg-cyan-600'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <Volume2 className="w-5 h-5 text-slate-300" />
          </button>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
