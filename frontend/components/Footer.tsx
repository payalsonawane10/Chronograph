export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-indigo-900 to-purple-900 text-white px-6 py-20">
        <div className="absolute inset-bg-blue-500/10blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto">

        <div className="
          grid
          md:grid-cols-3
          gap-12
          border-t
          border-blue-500/20
          pt-12
        ">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold">
              Chrono<span className="text-blue-500">Graph</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Temporal GraphRAG platform that helps enterprises discover
              hidden relationships, analyze events, and gain intelligent
              insights using AI.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-5">
              Navigation
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                Features
              </li>

              <li className="hover:text-white cursor-pointer">
                Architecture
              </li>

              <li className="hover:text-white cursor-pointer">
                Documentation
              </li>
            </ul>
          </div>


          {/* Technology */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-5">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "Python",
                "Neo4j",
                "LangChain",
                "GraphRAG",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/30
                    text-blue-300
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="
          mt-12
          pt-6
          border-t
          border-white/10
          text-center
          text-gray-500
        ">
          © 2026 ChronoGraph. Built with AI & Knowledge Graph Technology.
        </div>


      </div>

    </footer>
  );
}