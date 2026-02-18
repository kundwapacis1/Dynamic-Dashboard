import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

export default function App() {
  const [isOpen, setIsOpen] =useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        <Navbar setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
          </div>
    </div>
  );
}