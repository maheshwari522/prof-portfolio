import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Awaaz.ai – Realtor AI Voice Assistant',
    description:
      'Real-time AI voice assistant for virtual house tours using Whisper (STT), ElevenLabs (TTS), OpenAI GPT-4, and WebSockets for low-latency, dynamic voice interactions around property details. Implemented RAG with FAISS over 10K+ property records, cutting latency by 50% and improving answer accuracy.',
    technologies: ['OpenAI GPT-4', 'Whisper', 'ElevenLabs', 'RAG', 'FAISS', 'WebSockets'],
    demo: '#',
    code: '#',
    image: '/awaaz-ai.jpg',
  },
  {
    title: 'Patient Management System',
    description:
      'Distributed microservices system handling 10K+ patient records and 1000+ daily transactions, deployed on AWS ECS with API Gateway. Achieved 5x faster inter-service communication via gRPC and 40% faster deployments via Docker.',
    technologies: ['Java', 'Spring Boot', 'gRPC', 'Docker', 'AWS ECS', 'API Gateway'],
    demo: '#',
    code: 'https://github.com/maheshwari522/patient-management',
    image: '/patient-mgmt.jpg',
  },
  {
    title: 'LLM-Powered Technical Interview Platform',
    description:
      'Voice-based AI interview agent with < 1s speech-to-response latency using FastAPI, Next.js, WebSockets, GPT-4, and Whisper. Integrated Monaco editor for live coding and RAG-based question generation over a 5K+ problem database.',
    technologies: ['FastAPI', 'Next.js', 'WebSockets', 'OpenAI GPT-4', 'Whisper', 'RAG'],
    demo: '#',
    code: 'https://github.com/maheshwari522/LLM-Powered-Mock-Interview-Agent',
    image: '/interview-platform.jpg',
  },
  {
    title: 'Technical Debt Reducer Agent – NVIDIA “Agents for Impact”',
    description:
      'Multi-agent system leveraging NVIDIA Nemotron models, Agentic RAG, LangChain, and LangGraph to autonomously detect, analyze, and refactor technical debt across enterprise-scale codebases. Improved maintainability and developer efficiency by ~60%.',
    technologies: ['Nemotron', 'LangChain', 'LangGraph', 'Vector DB', 'GenAI'],
    demo: '#',
    code: 'https://github.com/maheshwari522/debt_reducer_agentic_mvp',
    image: '/tech-debt-agent.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-neon-purple/20 via-neon-blue/10 to-transparent flex items-center justify-center">
                <CodeBracketIcon className="h-16 w-16 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/15 text-gray-800 dark:text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-neon-blue hover:underline"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <CodeBracketIcon className="h-4 w-4 mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
