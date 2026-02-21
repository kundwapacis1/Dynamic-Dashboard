export default function ProductTable({ products }) {
    return (
        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse block md:table dark:text-white">
                <thead className="block md:table-header-group bg-gray-200 dark:bg-gray-800">
                    <tr className="border border-gray-300 md:border-none block md:table-row rounded-lg md:rounded-none">
                    <th className="p-2 text-left block md:table-cell">ID</th>
                    <th className="p-2 text-left block md:table-cell">Title</th>
                    <th className="p-2 text-left block md:table-cell">Category</th>
                    <th className="p-2 tex-left block md:table-cell">Price</th>
                    <th className="p-2 text-left block md:table-cell">Stock</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-grou">
                    {products.map((product) =>(
                        <tr 
                        key={product.id}
                        className="border border-gray-300 md:border-none block md:table-row mb-2 md:mb-0 rounded-lg md:rounded-none"
                        >
                            <td className="p-2 block md:table-cell">{product.id}</td>
                            <td className="p-2 block md:table-cell">{product.title}</td>
                            <td className="p-2 block md:table-cell">{product.category}</td>
                            <td className="p-2 block md:table-cell">{product.price}</td>
                            <td className="p-2 block md:table-cell">{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}