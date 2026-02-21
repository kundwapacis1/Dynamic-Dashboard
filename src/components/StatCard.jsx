export default function StatCard({ title, value }){
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-gray-500 dark:text-gray-300 text-sm">{title}</h2>
            <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
    )
}