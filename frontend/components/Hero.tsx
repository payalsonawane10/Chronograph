export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 pb-32">
      <div className="text-center max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-bold">
          ChronoGraph
        </h1>

        <h2 className="text-2xl md:text-4xl mt-4 text-blue-500 font-semibold">
          Temporal GraphRAG for Enterprise Forensics
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Explore enterprise knowledge through AI-powered graph intelligence.
          Connect data, discover relationships, and get meaningful insights
          with Generative AI.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <button className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-xxl font-semibold">
            Explore ChronoGraph
          </button>

          <button className="border border-blue-500 hover:bg-blue-500 px-10 py-5 rounded-xxxl font-semibold">
            View Architecture
          </button>
        </div>

      </div>
    </section>
  );
}