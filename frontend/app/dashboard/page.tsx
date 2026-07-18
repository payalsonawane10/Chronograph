import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-[#050816] text-white">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">
          {/* Heading */}
          <h1 className="text-4xl font-bold">
            Welcome to ChronoGraph 👋
          </h1>

          <p className="text-gray-400 mt-2">
            AI-powered Temporal GraphRAG Dashboard
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-10">
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-cyan-500 shadow-lg hover:scale-105 transition">
              <p className="text-gray-400">Documents</p>
              <h2 className="text-4xl font-bold mt-3">1,245</h2>
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-6 border border-cyan-500 shadow-lg hover:scale-105 transition">
              <p className="text-gray-400">AI Chats</p>
              <h2 className="text-4xl font-bold mt-3">389</h2>
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-6 border border-cyan-500 shadow-lg hover:scale-105 transition">
              <p className="text-gray-400">Knowledge Graph</p>
              <h2 className="text-4xl font-bold mt-3">96 Nodes</h2>
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-6 border border-cyan-500 shadow-lg hover:scale-105 transition">
              <p className="text-gray-400">Active Users</p>
              <h2 className="text-4xl font-bold mt-3">18</h2>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-500 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-cyan-400">
                📄 Documents
              </h2>
              <p className="text-gray-400 mt-2">
                Upload and manage enterprise documents.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-500 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-cyan-400">
                🤖 AI Chat
              </h2>
              <p className="text-gray-400 mt-2">
                Chat with your Knowledge Graph instantly.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-500 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-cyan-400">
                🕸️ Knowledge Graph
              </h2>
              <p className="text-gray-400 mt-2">
                Visualize connected enterprise data.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-500 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-cyan-400">
                📅 Timeline
              </h2>
              <p className="text-gray-400 mt-2">
                Explore historical engineering events.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-500 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-cyan-400">
                📊 AI Reports
              </h2>
              <p className="text-gray-400 mt-2">
                Generate intelligent enterprise reports.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-500 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-cyan-400">
                ⚙️ Settings
              </h2>
              <p className="text-gray-400 mt-2">
                Manage profile and application settings.
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-12 bg-[#0F172A] rounded-2xl p-6 border border-cyan-500">
            <h2 className="text-2xl font-bold mb-6">
              Recent Activity
            </h2>

            <table className="w-full">
              <thead className="text-cyan-400">
                <tr>
                  <th className="text-left py-2">Project</th>
                  <th>Status</th>
                  <th>Updated</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-700">
                  <td className="py-4">Knowledge Graph</td>
                  <td className="text-green-400 text-center">
                    Completed
                  </td>
                  <td className="text-center">Today</td>
                </tr>

                <tr className="border-t border-slate-700">
                  <td className="py-4">AI Chat</td>
                  <td className="text-yellow-400 text-center">
                    Running
                  </td>
                  <td className="text-center">5 min ago</td>
                </tr>

                <tr className="border-t border-slate-700">
                  <td className="py-4">Timeline</td>
                  <td className="text-blue-400 text-center">
                    Updated
                  </td>
                  <td className="text-center">Yesterday</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}