export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white px-6 text-center">

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        Enterprise AI
        <span className="text-blue-500"> Timeline Intelligence</span>
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-3xl">
        ChronoGraph helps organizations understand historical engineering
        decisions using AI, Knowledge Graphs and Timeline Retrieval.
      </p>

      <div className="mt-10 flex gap-6">
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
          Get Started
        </button>

        <button className="border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold">
          Learn More
        </button>
      </div>

    </section>
  );
}