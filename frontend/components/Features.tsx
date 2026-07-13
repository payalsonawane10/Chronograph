export default function Features() {
  const features = [
    {
      title: "Knowledge Graph",
      description:
        "Build intelligent connections between enterprise data, people, projects and events.",
      icon: "🧠",
    },
    {
      title: "AI Semantic Search",
      description:
        "Search through massive data sources and discover meaningful insights instantly.",
      icon: "🔍",
    },
    {
      title: "Temporal Timeline",
      description:
        "Visualize historical events and understand how decisions evolved over time.",
      icon: "⏳",
    },
    {
      title: "GraphRAG Intelligence",
      description:
        "Get accurate AI answers by combining Large Language Models with Knowledge Graphs.",
      icon: "🤖",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Powerful <span className="text-blue-500">Features</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Experience enterprise intelligence powered by AI and Knowledge Graph technology.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
              group
              bg-gradient-to-br from-white/10 to-white/5
              border border-blue-500/20
              rounded-3xl
              p-8
              hover:-translate-y-3
              hover:border-blue-500
              transition-all
              duration-300
              shadow-xl
              "
            >

              <div className="
                w-16 h-16
                flex items-center justify-center
                rounded-2xl
                bg-blue-600/20
                text-4xl
                group-hover:scale-110
                transition
              ">
                {feature.icon}
              </div>


              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>


              <p className="text-gray-400 mt-4 leading-relaxed">
                {feature.description}
              </p>


              <button className="
                mt-6
                text-blue-400
                hover:text-blue-300
                font-medium
              ">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}