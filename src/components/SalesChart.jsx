import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../hooks/useFetch";

export default function SalesChart() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  if (loading) return <div className="p-6">Loading chart...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  const categoryMap = {};

  data.products.forEach((product) => {
    const category = product.category;
    const price = product.price;

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += price;
  });

  const formattedData = Object.keys(categoryMap).map((key) => ({
    name: key,
    sales: categoryMap[key],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Sales by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}