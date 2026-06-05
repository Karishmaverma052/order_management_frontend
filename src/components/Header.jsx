import { User, Bell, Settings } from "lucide-react";

function Header() {
  return (
    <div className="header">
      <h1>
        <Bell size={28} />
        Dashboard System
      </h1>

      <div className="user-info">
        <User size={20} />
        Admin User
      </div>
    </div>
  );
}

export default Header;