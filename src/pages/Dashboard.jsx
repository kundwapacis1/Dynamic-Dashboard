import { useState, useMemo } from "react";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import useFetch from "../hooks/useFetch";
import ProductTable from "../components/ProductTable";


export default function Dashboard() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    if (!data?.products) return [];
    
    let result = [...data.products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchTerm.trim() !== "") {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (sortOption === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [data, selectedCategory, sortOption, searchTerm]);

  if (loading) return <div className="p-6">Loading dashboard...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  const products = data.products;

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const totalProducts = filteredProducts.length;
  const totalRevenue = filteredProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const totalStock = filteredProducts.reduce(
    (sum, product) => sum + product.stock,
    0
  );

  return (
    <div className="p-6 flex-1">
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        
        {/* Category */}
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sorting */}
        <select
          className="border p-2 rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="high">Price: High → Low</option>
          <option value="low">Price: Low → High</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="border p-2 rounded flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Products" value={totalProducts} />
        <StatCard title="Total Revenue" value={`$${totalRevenue}`} />
        <StatCard title="Total Stock" value={totalStock} />
      </div>

      <SalesChart products={filteredProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}