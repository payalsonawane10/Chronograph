export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">

        <h1 className="text-4xl font-bold text-white text-center">
          Chronograph
        </h1>

        <p className="text-gray-300 text-center mt-2">
          Welcome Back 👋
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20"
            />
          </div>

          <div>
            <label className="text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20"
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">
          Don't have an account?
          <span className="text-blue-400 cursor-pointer ml-1">
            Register
          </span>
        </p>

      </div>
    </main>
  );
}