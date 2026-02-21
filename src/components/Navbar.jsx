import { useTheme } from "../context/useTheme";

export default function Navbar({ setIsOpen }) {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-2xl"
      >
        ☰
      </button>

      <h1 className="text-xl font-semibold dark:text-white">
        Dashboard
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-900 text-white px-4 py-2 rounded"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}