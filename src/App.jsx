import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";


export default function App() {
  const [isOpen, setIsOpen] =useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        <Navbar setIsOpen={setIsOpen} />
        <Dashboard />
      </div>
    </div>
  )
}