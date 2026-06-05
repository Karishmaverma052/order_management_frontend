import { Link } from "react-router-dom";
import { LayoutDashboard, Package, Users, ShoppingCart } from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <ShoppingCart size={28} />
        InventoryPro
      </h2>

      <ul>
        <li>
          <Link to="/">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/products">
            <Package size={20} />
            Products
          </Link>
        </li>

        <li>
          <Link to="/customers">
            <Users size={20} />
            Customers
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <ShoppingCart size={20} />
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;