import { useState } from "react";
import { createProduct } from "../services/api";

function ProductForm({ onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    stock_quantity: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const success = await createProduct({
      name: formData.name,
      sku: formData.sku,
      price: parseFloat(formData.price),
      stock_quantity: parseInt(formData.stock_quantity)
    });

    if (success) {
      setFormData({ name: "", sku: "", price: "", stock_quantity: "" });
      if (onProductAdded) onProductAdded();
      alert("Product added successfully!");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Add New Product</h3>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>SKU</label>
          <input
            type="text"
            name="sku"
            placeholder="Enter SKU"
            value={formData.sku}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Stock Quantity</label>
          <input
            type="number"
            name="stock_quantity"
            placeholder="Enter stock quantity"
            value={formData.stock_quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="btn-group">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Adding..." : "Add Product"}
          </button>
          <button type="reset" className="btn-secondary" onClick={() => setFormData({ name: "", sku: "", price: "", stock_quantity: "" })}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;