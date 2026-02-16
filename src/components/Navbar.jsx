export default function Navbar(){
    return (
        <div className="h-16 bg-white shadow flex items-center justify-between px-6 ml-64">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button className="bg-gray-900 text-white px-4 py-2 rounded">
                Toggle Theme
                </button>
        </div>
    );
}