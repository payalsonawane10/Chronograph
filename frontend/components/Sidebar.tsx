export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0B1120] border-r border-blue-900 p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        ChronoGraph
      </h2>

      <nav className="space-y-4">
        <button className="block w-full text-left hover:text-cyan-400">
          📊 Dashboard
        </button>

        <button className="block w-full text-left hover:text-cyan-400">
          💬 AI Chat
        </button>

        <button className="block w-full text-left hover:text-cyan-400">
          📄 Documents
        </button>

        <button className="block w-full text-left hover:text-cyan-400">
          ⚙️ Settings
        </button>
      </nav>
    </aside>
  );
}