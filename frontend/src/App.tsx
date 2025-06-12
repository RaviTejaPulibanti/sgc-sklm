import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./Admin/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Admin/dashboard/Dashboard";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Numbers/Counter";
import About from "./components/About/About";
import AdvisoryBoard from "./components/AdvisoryBoard/AdvisoryBoard";
import ExecutiveBoard from "./components/ExecutiveBoard/ExecutiveBoard";
import ClubHome from "./components/Clubs/ClubHome";

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
        <Route path="/about" element={<About />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/executive-board" element={<ExecutiveBoard />} />
        <Route path="/clubs" element={<ClubHome />} />
      </Routes>

      <Counter />
      <Footer />
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
