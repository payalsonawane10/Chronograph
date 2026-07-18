export default function Topbar() {
  return (
    <header className="h-16 border-b border-blue-900 bg-[#111827] flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-white">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-300">
          Welcome, Payal 👋
        </span>

        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
          P
        </div>
      </div>
    </header>
  );
}