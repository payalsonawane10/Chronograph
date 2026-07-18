export default function ChatInput() {
  return (
    <div
      className="
      fixed
      bottom-0
      left-80
      right-0
      p-6
      bg-black/40
      backdrop-blur-xl
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        flex
        gap-4
        bg-white/5
        border
        border-blue-500/20
        rounded-2xl
        p-3
        "
      >

        <input
          type="text"
          placeholder="Ask ChronoGraph anything..."
          className="
          flex-1
          bg-transparent
          outline-none
          px-4
          text-white
          placeholder-gray-500
          "
        />


        <button
          className="
          px-10
          py-7
          rounded-xxl
          bg-blue-700
          hover:bg-blue-500
          transition
          font-semibold
          shadow-lg
          shadow-blue-600/30
          "
        >
          Send
        </button>


      </div>

    </div>
  );
}