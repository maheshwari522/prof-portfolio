export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>

        <div className="relative md:pl-10">
          <div className="absolute left-4 md:left-2 top-0 bottom-0 hidden md:block border-l border-white/15" />

          <div className="space-y-10">
            <div className="glass rounded-xl p-6 relative">
              <span className="hidden md:block absolute -left-[9px] top-8 h-4 w-4 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue shadow-glow" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering Intern</h3>
                  <p className="text-gray-600 dark:text-gray-400">Narb LLC</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jun 2025 - Present</p>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Fine-tuned GenAI speech models with custom datasets and integrated Deepgram APIs, cutting end-to-end inference latency to 300ms and boosting transcription accuracy by 35%.</li>
                <li>Built automated evaluation pipelines for large-scale AI model benchmarking, executing 200+ daily test runs and reducing experimentation cycles by 50%.</li>
                <li>Designed service-layer modules integrating Google Places for provider lookup and Twilio for automated voice/SMS, optimizing API orchestration and reducing latency by 40%.</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6 relative">
              <span className="hidden md:block absolute -left-[9px] top-8 h-4 w-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue shadow-glow" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering Specialist</h3>
                  <p className="text-gray-600 dark:text-gray-400">Dassault Systèmes</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jan 2022 - Jul 2024</p>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Engineered a distributed document management system using Java Spring Boot, Elasticsearch, and AWS S3 achieving 30% faster data retrieval and efficiently serving 30,000+ weekly requests.</li>
                <li>Architected modular microservices with REST/gRPC interfaces, enhancing inter-service communication and cutting technical debt by 30% via reusable shared components.</li>
                <li>Optimized high-traffic endpoints through Redis caching, SQL indexing and asynchronous processing, reducing API response time by 40%.</li>
                <li>Integrated JWT with Spring Security for secure, stateless authentication and RBAC, reducing database load by 30% through tokenized role access.</li>
                <li>Spearheaded front-end architecture with Redux, React Router, and ReactJS, promoting modularity and reducing code duplication.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
