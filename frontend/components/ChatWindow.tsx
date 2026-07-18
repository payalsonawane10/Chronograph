export default function ChatWindow() {
  return (
    <div
      className="
      flex-1
      min-h-screen
      bg-gradient-to-br
      from-[#020617]
      via-black
      to-[#0f172a]
      text-white
      p-8
      "
    >

      <div className="max-w-5xl mx-auto">


        {/* Header */}
        <div className="flex items-center gap-4 mb-10">

          <div
            className="
            w-12 h-12
            rounded-full
            bg-blue-600/20
            border border-blue-500/30
            flex items-center justify-center
            text-xl
            "
          >
            🤖
          </div>


          <div>
            <h1 className="text-3xl font-bold">
              ChronoGraph AI
            </h1>

            <p className="text-gray-400 text-sm">
              Enterprise Intelligence Assistant
            </p>
          </div>

        </div>



        {/* AI Message */}
        <div className="flex gap-4 mb-8">

          <div
            className="
            w-10 h-10
            rounded-full
            bg-blue-600
            flex items-center justify-center
            "
          >
            AI
          </div>


          <div
            className="
            max-w-xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-5
            rounded-2xl
            "
          >

            <p className="text-gray-200">
              Hello! I am ChronoGraph AI.
              I can help you analyze enterprise data,
              timelines and relationships.
            </p>

          </div>

        </div>



        {/* User Message */}
        <div className="flex justify-end gap-4 mb-8">

          <div
            className="
            max-w-xl
            bg-blue-600
            p-5
            rounded-2xl
            "
          >

            <p>
              Explain the AWS migration decision timeline.
            </p>

          </div>


          <div
            className="
            w-10 h-10
            rounded-full
            bg-blue-500
            flex items-center justify-center
            "
          >
            👤
          </div>

        </div>



        {/* Empty space for future messages */}

      </div>

    </div>
  );
}