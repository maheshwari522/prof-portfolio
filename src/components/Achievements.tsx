export default function Achievements() {
  const items = [
    {
      title: "Dean's List (Santa Clara University)",
      subtitle: "Academic Excellence Award",
      period: "2024–2025",
      details: [
        "Recognized for outstanding academic performance in the MS Information Systems program.",
      ],
      glow: "from-neon-blue to-neon-purple",
    },
    {
      title: "Director, SCU AI Club",
      subtitle: "Leadership & Community",
      period: "2025 – Present",
      details: [
        "Lead initiatives, workshops, and speaker sessions on GenAI, LLMOps, and applied ML for 200+ members.",
        "Organized hands-on build sessions on RAG, LangChain, and multi-agent systems.",
      ],
      glow: "from-neon-pink to-neon-blue",
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="glass rounded-xl p-6 relative">
              <div className={`absolute -top-px left-0 right-0 h-px bg-gradient-to-r ${it.glow} opacity-70`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{it.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{it.subtitle}</p>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">{it.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {it.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
