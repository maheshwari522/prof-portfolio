export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Santa Clara University</h3>
              <p className="text-gray-600 dark:text-gray-400">Master of Science, Information Systems • GPA 3.95</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">June 2026</p>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Relevant Courses</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Object-Oriented Analysis and Programming</li>
              <li>Data Analytics with Python</li>
              <li>Database Analysis and Design</li>
              <li>Natural Language Processing</li>
              <li>System Design and Analysis</li>
              <li>Deep Learning</li>
              <li>Analysis of Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
