export default function Navbar({ setIsOpen }) {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-gray-700 text-2xl"
      >
        ☰
      </button>

      <h1 className="text-xl font-semibold">Dashboard</h1>

      <button className="bg-gray-900 text-white px-4 py-2 rounded">
        Toggle Theme
      </button>
    </div>
  );
}
