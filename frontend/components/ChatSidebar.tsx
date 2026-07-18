import {
  BrainCircuit,
  MessageSquarePlus,
  Search,
  MessageCircle,
  Settings,
  UserCircle,
} from "lucide-react";

export default function ChatSidebar() {
  const chats = [
    "AWS Migration Analysis",
    "Project Timeline Review",
    "Git Investigation",
    "Enterprise Search",
  ];

  return (
    <aside className="relative w-80 h-screen bg-gradient-to-b from-[#050816] via-[#0B1120] to-black border-r border-blue-500/20 text-white flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
            <BrainCircuit size={28} className="text-blue-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Chrono<span className="text-blue-500">Graph</span>
            </h2>

            <p className="text-xs text-gray-400">
              AI Enterprise Assistant
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="relative mt-6">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search conversations..."
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-xl
              py-3
              pl-10
              pr-4
              outline-none
              focus:border-blue-500
            "
          />

        </div>

        {/* New Chat */}
        <button
          className="
            mt-5
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-blue-600
            hover:bg-blue-500
            transition
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            shadow-blue-600/20
          "
        >
          <MessageSquarePlus size={20} />
          <span>New Chat</span>
        </button>

      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-6 py-5">

        <p className="text-sm text-gray-400 mb-4">
          Recent Conversations
        </p>

        <div className="space-y-3">

          {chats.map((chat, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:bg-blue-500/10
                hover:border-blue-500/30
                transition
                cursor-pointer
              "
            >
              <MessageCircle
                size={18}
                className="text-blue-400"
              />

              <div>
                <p className="text-sm font-medium">
                  {chat}
                </p>

                <span className="text-xs text-gray-500">
                  Today
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Profile */}
      <div className="p-6 border-t border-white/10">

        <div
          className="
            flex
            items-center
            gap-3
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-3
          "
        >

          <UserCircle
            size={38}
            className="text-blue-400"
          />

          <div>

            <p className="font-semibold">
              Payal Sonawane
            </p>

            <p className="text-sm text-gray-400">
              IT Student
            </p>

          </div>

          <Settings
            size={18}
            className="ml-auto text-gray-400 cursor-pointer hover:text-blue-400"
          />

        </div>

      </div>

    </aside>
  );
}