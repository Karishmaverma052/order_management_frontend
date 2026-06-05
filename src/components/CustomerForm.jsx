import { useState } from "react";
import { createCustomer } from "../services/api";

function CustomerForm({ onCustomerAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    const success = await createCustomer(formData);

    if (success) {
      setFormData({ name: "", email: "", phone: "" });
      if (onCustomerAdded) onCustomerAdded();
      alert("Customer added successfully!");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Add New Customer</h3>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter customer name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="btn-group">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Adding..." : "Add Customer"}
          </button>
          <button type="reset" className="btn-secondary" onClick={() => setFormData({ name: "", email: "", phone: "" })}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;