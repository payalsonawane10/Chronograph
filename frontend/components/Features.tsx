export default function Features() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why ChronoGraph?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-blue-400">
              AI Knowledge Graph
            </h3>
            <p className="mt-4 text-gray-400">
              Build intelligent relationships between people, projects and technologies.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-blue-400">
              Timeline Analysis
            </h3>
            <p className="mt-4 text-gray-400">
              Explore engineering history through an interactive timeline.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-blue-400">
              AI Chat
            </h3>
            <p className="mt-4 text-gray-400">
              Ask natural language questions and receive contextual answers with citations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}