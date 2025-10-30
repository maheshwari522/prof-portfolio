import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Maheshwari Shashikant Bhandare</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              Software Engineer • MS Information Systems @ Santa Clara University
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl md:max-w-none mx-auto md:mx-0 mb-10">
              I design and build reliable, scalable systems end-to-end — from distributed backends and APIs to polished, accessible UIs and real-time AI experiences.
            </p>
            <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4">
              <Link 
                href="#contact"
                className="px-8 py-3 rounded-lg font-medium transition-all duration-200 text-white bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue hover:shadow-glow"
              >
                Get In Touch
              </Link>
              <Link 
                href="#projects"
                className="px-8 py-3 border border-white/20 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full overflow-hidden ring-4 ring-neon-blue/30 shadow-glow">
              <Image
                src="/profile.jpg"
                alt="Photo of Maheshwari Shashikant Bhandare"
                fill
                sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 20rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
