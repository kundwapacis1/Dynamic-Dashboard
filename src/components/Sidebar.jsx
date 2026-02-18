import { Link } from "react-router-dom";
export default function Sidebar({ isOpen, setIsOpen}){
    return (
        <>
        {/* overlay for mobile */}
        {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 lg:hiden"
            onClick={() =>setIsOpen(false)} 
            />
        )}
        <div className={`fixed lg:static z-50 w-64 h-full bg-gray-900 text-white transform
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            lg: translate-x-0 transition-transform duration-300
            `}>
            <div  className="p-6 text-2xl font-bold border-b border-gray-700">
                My Dashboard
            </div>
            <ul className="p-4 space-y-4">
                <Link to="/" className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                    Dashboard
                </Link>
                <Link to="/analytics" className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                    Analytics
                </Link>
                <Link to="/settings" className="hover:bg-gray-700 rounded cursor-pointer">
                    Settings
                </Link>
            </ul>
        </div>
        </>
    );
}