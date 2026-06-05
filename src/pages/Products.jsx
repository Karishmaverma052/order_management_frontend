import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { getProducts } from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    if (data) {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = () => {
    fetchProducts();
  };

  return (
    <div>

      <h2>Product Management</h2>

      <ProductForm onProductAdded={handleProductAdded} />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>Loading...</td>
              </tr>
            ) : products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>₹{product.price}</td>
                  <td>{product.stock_quantity}</td>
                  <td>
                    <span className={`badge ${product.stock_quantity < 20 ? "badge-warning" : "badge-success"}`}>
                      {product.stock_quantity < 20 ? "Low Stock" : "In Stock"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Products;