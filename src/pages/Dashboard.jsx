import { useEffect, useState } from "react";
import DashboardCards from "../components/DashboardCards";
import { getDashboardStats } from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCustomers: 0,
    totalOrders: 0,
    lowStockProducts: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      if (data) {
        setStats(data);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2>Dashboard Overview</h2>

      <div className="cards-grid">
        <DashboardCards
          title="Total Products"
          value={stats.totalProducts}
        />

        <DashboardCards
          title="Total Customers"
          value={stats.totalCustomers}
        />

        <DashboardCards
          title="Total Orders"
          value={stats.totalOrders}
        />

        <DashboardCards
          title="Low Stock Products"
          value={stats.lowStockProducts}
        />
      </div>
    </div>
  );
}

export default Dashboard;