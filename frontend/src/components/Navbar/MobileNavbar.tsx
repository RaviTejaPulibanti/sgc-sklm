import React, { useState, useEffect, useRef } from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaSearch, 
  FaUser,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaCalendarAlt,
  FaUserTie,
  FaFileAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './MobileNavbar.css';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedReport, setExpandedReport] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef<HTMLDivElement>(null);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setExpandedReport(null);
  };

  const toggleReport = (year: string) => {
    setExpandedReport(expandedReport === year ? null : year);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="mobile-header">
        <div className="mobile-header-left">
          <FaUser className="user-icon" />
        </div>
        
        <div className="mobile-header-center">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="@sgc...." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mobile-header-right">
          <div className="mobile-menu-button" onClick={toggleNav}>
            ☰
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="nav-overlay"></div>}

      {/* Navbar */}
      <div 
        ref={navRef} 
        className={`mobile-navbar ${isOpen ? 'open' : ''}`}
        style={{ backgroundColor: '#f0f0f0' }} 
      >
        <div className="nav-header">
          <div className="nav-title">Welcome To SGC 💙</div>
          <button className="close-btn" onClick={toggleNav}>✕</button>
        </div>

        <div className="nav-section">
          <div className="section-title">MENU</div>
          <ul className="nav-list">
          <li> <Link to="/about" onClick={toggleNav}>
              <span className='flex gap-2'>
              <FaHome className="nav-icon" />
                HOME
              </span></Link></li>
            <li> <Link to="/about" onClick={toggleNav}>
              <span className='flex gap-2'>
              <FaInfoCircle className="nav-icon" />
               ABOUT
              </span></Link></li>
            <li> <Link to="/clubs" onClick={toggleNav}>
              <span className='flex gap-2'>
                <FaUsers className="nav-icon" />
               CLUBS
              </span></Link></li>
            <li> <Link to="/events" onClick={toggleNav}>
              <span className='flex gap-2'>
                <FaCalendarAlt className="nav-icon" /> EVENTS
              </span>
              </Link></li>
            <li> <Link to="/members" onClick={toggleNav}>
              <span className='flex gap-2'>
                <FaUserTie className="nav-icon" /> MEMBERS
              </span>
            </Link></li>
            
            <li>
              <Link to="/executive-board" onClick={toggleNav}>
              <span className='flex gap-2'>
                <FaUsers className="nav-icon" /> EXECUTIVE BOARD
              </span>
              </Link>
            </li>
            <li>
              <Link to="/advisory-board" onClick={toggleNav}>
              <span className='flex gap-2'>
                <FaUsers className="nav-icon" /> ADVISORY BOARD
              </span>
              </Link>
            </li>
            <li onClick={() => toggleReport('reports')}>
              <span className='flex gap-2'>
                <FaFileAlt className="nav-icon" /> REPORTS {expandedReport === 'reports' ? '−' : '+'}
              </span>
              {expandedReport === 'reports' && (
                <ul className="report-years">
                  <li>2021</li>
                  <li>2022</li>
                  <li>2023</li>
                  <li>2024</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="nav-section">
          <div className="section-title">CONTACT INFO</div>
          <div className="flex flex-col gap-3">
            <p>Suvarnamuki, Srikakulam.</p>
            <p>+91 99999 99999</p>
            <p>help@sgcrguktskim.org</p>
            <p>Office Hours: 8AM - 6PM</p>
            <p>Monday to Saturday</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="nav-section">
          <div className="section-title">SOCIAL MEDIA INFO</div>
          <div className="social-icons">
            <a href="#"><FaFacebook className="icon" /></a>
            <a href="#"><FaTwitter className="icon" /></a>
            <a href="#"><FaInstagram className="icon" /></a>
            <a href="#"><FaLinkedin className="icon" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;