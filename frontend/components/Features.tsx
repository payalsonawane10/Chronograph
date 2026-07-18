export default function Features() {
  const features = [
    {
      title: "AI Knowledge Graph",
      desc: "Build intelligent relationships between people, projects and documents.",
    },
    {
      title: "Timeline Analysis",
      desc: "Explore historical events through an interactive timeline.",
    },
    {
      title: "AI Chat",
      desc: "Ask natural language questions and receive AI-powered answers.",
    },
    {
      title: "Document Search",
      desc: "Search enterprise documents with semantic understanding.",
    },
    {
      title: "Graph Visualization",
      desc: "Visualize connected data using interactive knowledge graphs.",
    },
    {
      title: "Smart Reports",
      desc: "Generate AI summaries and enterprise reports instantly.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-8">
      <h2 className="text-5xl font-bold text-center mb-16">
        Why <span className="text-blue-500">ChronoGraph?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}