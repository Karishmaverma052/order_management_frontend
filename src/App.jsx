import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <Sidebar />

        <div className="main-content">

          <Header />

          <div className="page-container">

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>

          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;