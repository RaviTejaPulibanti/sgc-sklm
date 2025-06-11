import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./Admin/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Admin/dashboard/Dashboard";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import Home from "./pages/home/Home";

function AppRoutes() {
  const location = useLocation();

  // Hide Navbar on admin login route
  const hideNavbar = location.pathname.startsWith("/admin");


  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<PrivateAdminRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
