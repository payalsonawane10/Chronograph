export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          ChronoGraph
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            Features
          </a>

          <a href="#" className="hover:text-blue-400">
            Architecture
          </a>

          <a href="#" className="hover:text-blue-400">
            Documentation
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl font-semibold">
          Get Started
        </button>

      </div>
    </nav>
  );
}