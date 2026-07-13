export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold text-cyan-400">
        Chronograph
      </h1>

      <p className="mt-6 text-xl text-gray-300 text-center max-w-2xl">
        Smart Attendance & Employee Management System
      </p>

      <button className="mt-8 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-lg font-semibold">
        Get Started
      </button>
    </main>
  );
}