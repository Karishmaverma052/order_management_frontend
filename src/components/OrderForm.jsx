import { useState, useEffect } from "react";
import { createOrder, getCustomers, getProducts } from "../services/api";

function OrderForm({ onOrderAdded }) {
  const [formData, setFormData] = useState({
    customer_id: "",
    product_id: "",
    quantity: ""
  });
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const customersData = await getCustomers();
      const productsData = await getProducts();
      if (customersData) setCustomers(customersData);
      if (productsData) setProducts(productsData);
    };
    fetchData();
  }, []);

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

    const success = await createOrder({
      customer_id: parseInt(formData.customer_id),
      product_id: parseInt(formData.product_id),
      quantity: parseInt(formData.quantity)
    });

    if (success) {
      setFormData({ customer_id: "", product_id: "", quantity: "" });
      if (onOrderAdded) onOrderAdded();
      alert("Order created successfully!");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Create New Order</h3>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Customer Name</label>
          <select
            name="customer_id"
            value={formData.customer_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a customer</option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Product</label>
          <select
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} - ₹{product.price}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="btn-group">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create Order"}
          </button>
          <button type="reset" className="btn-secondary" onClick={() => setFormData({ customer_id: "", product_id: "", quantity: "" })}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;