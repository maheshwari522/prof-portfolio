export default function About() {
  const skills = [
    'Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL',
    'Spring Boot', 'Node.js', 'Django', 'React', 'Angular', 'FastAPI',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Kafka', 'RabbitMQ',
    'AWS (EC2, S3, Lambda, IAM)', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'CI/CD',
    'JUnit', 'Postman', 'Selenium', 'PyTest', 'React Testing Library', 'Webpack', 'Babel',
    'OpenAI GPT-4', 'Whisper', 'LangChain', 'Hugging Face', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'Prompt Engineering'
  ];

  return (
    <section id="about" className="py-20 bg-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 glass rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Get to know me
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm Maheshwari Bhandare, a Software Engineer and MS Information Systems candidate at Santa Clara University.
              I enjoy building resilient backends, clean APIs, and user-centric interfaces, and I love applying AI to solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Previously at Dassault Systèmes, I worked across distributed systems and microservices; more recently, I’ve been focused on
              real-time AI voice assistants and evaluation pipelines.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
          <div className="md:w-1/2 glass rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
