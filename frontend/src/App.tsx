import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./Admin/Login/Login";
import Dashboard from "./Admin/dashboard/Dashboard";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import AdvisoryBoard from "./components/AdvisoryBoard/AdvisoryBoard";
import ExecutiveBoard from "./components/ExecutiveBoard/ExecutiveBoard";
import ClubHome from "./components/Clubs/ClubHome";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Contact from "./components/Contact/Contact";
import Club from "./components/Clubs/Club";
import Navbar from "./components/Navbar/Navbar";
import EventsNews from "./components/Events/Events";
import EventDetail from "./components/Events/EventDetail";
import Members from "./components/Members/Members";
import AdminEventForm from "./Admin/Events/AdminEventForm";
import WebTeam from "./components/webTeam/WebTeam";
// import Headline from "./pages/home/Headline";

function AppRoutes() {
  const location = useLocation();

  
  const hideNavbar = location.pathname.startsWith("/admin");


  return (
    <>
      {!hideNavbar &&
        <div>
          <Navbar />      
          <MobileNavbar />
        </div>
        
      }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<PrivateAdminRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/post-event" element={<AdminEventForm />} />
        </Route>
        
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/executive-board" element={<ExecutiveBoard />} />
        <Route path="/clubs" element={<ClubHome />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/events" element={<EventsNews />} />
        <Route path="/events/:id" element={<EventDetail />} />

        <Route path="/members" element={<Members />} />
        <Route path='/clubs/:id' element={<Club />} />

         <Route path="/web-team" element={<WebTeam />} />
      </Routes>

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
