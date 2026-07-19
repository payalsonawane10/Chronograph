

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-slate-900/70 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-10 shadow-[0_0_50px_rgba(59,130,246,0.30)]">

        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-4xl shadow-lg">
            🧠
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Sign in to continue to
          </p>

          <h2 className="text-3xl font-bold text-cyan-400 mt-2">
            ChronoGraph
          </h2>
        </div>

        <form className="space-y-6">

          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-2xl bg-slate-950 border border-slate-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-4 rounded-2xl bg-slate-950 border border-slate-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="hover:text-blue-400">
              Forgot Password?
            </a>
          </div>

          <button
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white font-bold text-lg"
          >
            Login
          </button>

        </form>

        <div className="mt-8 text-center text-gray-400">
          Don't have an account?
          <span
          className="text-cyan-400 cursor-pointer ml-2 hover:underline">
          </span>
        </div>

      </div>

    </main>
  );
}