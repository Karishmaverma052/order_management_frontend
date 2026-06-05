import { useEffect, useState } from "react";
import OrderForm from "../components/OrderForm";
import { getOrders } from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    const data = await getOrders();
    if (data) {
      setOrders(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleOrderAdded = () => {
    fetchOrders();
  };

  const getStatusBadge = (status) => {
    const statusClass = {
      'completed': 'badge-success',
      'pending': 'badge-warning',
      'cancelled': 'badge-danger'
    };
    return statusClass[status] || 'badge-info';
  };

  return (
    <div>

      <h2>Order Management</h2>

      <OrderForm onOrderAdded={handleOrderAdded} />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>Loading...</td>
              </tr>
            ) : orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer_name}</td>
                  <td>{order.product_name}</td>
                  <td>{order.quantity}</td>
                  <td>₹{order.total_amount}</td>
                  <td><span className={`badge ${getStatusBadge(order.status)}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Orders;