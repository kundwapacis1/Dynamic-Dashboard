import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function SalesChart(){
    const data = [
        { name: "Jan", sales: 4000 },
        { name:  "Feb", sales: 3000},
        { name: "Mar", sales: 5000},
        { name: "Apr", sales: 4500},
        { name: "May", sales: 6000},
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow mt-6">
            <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}