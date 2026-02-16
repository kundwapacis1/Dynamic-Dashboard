import StatCard from "../components/StatCard";

export default function Dashboard(){
    return (
        <div className="ml-64 mt-16 p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Users" value="1,245" />
                <StatCard title="Revenue" value="$32,400" />
                <StatCard title="Orders" value="320" />
            </div>
        </div>
    )
}