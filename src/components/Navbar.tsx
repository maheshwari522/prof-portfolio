import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Maheshwari Bhandare
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-neon-blue dark:text-gray-300 dark:hover:text-neon-blue transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-700 hover:text-neon-blue dark:text-gray-300 dark:hover:text-neon-blue transition-colors">
              Experience
            </Link>
            <Link href="#achievements" className="text-gray-700 hover:text-neon-blue dark:text-gray-300 dark:hover:text-neon-blue transition-colors">
              Achievements
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-neon-blue dark:text-gray-300 dark:hover:text-neon-blue transition-colors">
              Projects
            </Link>
            <Link href="#education" className="text-gray-700 hover:text-neon-blue dark:text-gray-300 dark:hover:text-neon-blue transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-neon-blue dark:text-gray-300 dark:hover:text-neon-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-neon-pink/60 via-neon-blue/60 to-neon-purple/60" />
      </div>
    </nav>
  );
}
