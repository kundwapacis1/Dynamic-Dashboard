import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";


export default function Dashboard(){
    return (
        <div className="p-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Users" value="1,245" />
                <StatCard title="Revenue" value="$32,400" />
                <StatCard title="Orders" value="320" />

            </div>
            <SalesChart />
        </div>
    );
}