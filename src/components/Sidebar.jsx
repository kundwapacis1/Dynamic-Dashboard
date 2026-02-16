export default function Sidebar(){
    return (
        <div className="w-64 h-scren bg-gray-900 text-white fixed">
            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                MyDashboard
            </div>
            <ul className="p-4 space-y-4">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                    Dashboard
                </li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                    Analytics
                </li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                    Settings
                </li>
            </ul>
        </div>
    )
}