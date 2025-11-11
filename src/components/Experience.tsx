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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineer 2</h3>
                  <p className="text-gray-600 dark:text-gray-400">Dassault Systems, Pune, India</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jan 2022 – Jul 2024</p>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Architected and scaled Java Spring Boot microservices supporting 50k+ users on the 3DSwYm client-community platform.</li>
                <li>Designed a Kafka messaging layer that decoupled services and boosted message throughput by 35% under peak load.</li>
                <li>Optimized system performance by 40% through Redis caching and asynchronous processing to minimize database overhead.</li>
                <li>Enhanced data-retrieval speed by 30% via optimized AWS Elasticsearch indexing and query tuning.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
