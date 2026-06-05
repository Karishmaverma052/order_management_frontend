import { Package, Users, ShoppingCart, AlertCircle } from "lucide-react";

function DashboardCards({ title, value }) {
  const getIcon = () => {
    switch (title) {
      case "Total Products":
        return <Package />;
      case "Total Customers":
        return <Users />;
      case "Total Orders":
        return <ShoppingCart />;
      case "Low Stock Products":
        return <AlertCircle />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <h2>
        {value}
        {getIcon()}
      </h2>
    </div>
  );
}

export default DashboardCards;