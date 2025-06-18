// import React, { useState } from 'react';
// import { FaHome, FaUsers, FaCalendarAlt, FaFileAlt, FaChevronDown, FaUniversity } from 'react-icons/fa';

// interface DropdownItem {
//   title: string;
//   link: string;
// }

// interface NavItem {
//   title: string;
//   link?: string;
//   dropdown?: DropdownItem[];
//   icon?: React.ReactNode;
// }

// const Navbar: React.FC = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isHoveringLogo, setIsHoveringLogo] = useState(false);

//   const navItems: NavItem[] = [
//     { title: 'Home', link: '/', icon: <FaHome className="mr-2" /> },
//     { title: 'About', link: '/about' },
//     {
//       title: 'Executive Board',
//       icon: <FaUsers className="mr-2" />,
//       dropdown: [
//         { title: 'Current Board', link: '/board/current' },
//         { title: 'Past Boards', link: '/board/past' },
//         { title: 'Elections', link: '/board/elections' },
//       ],
//     },
//     { title: 'Events', link: '/events', icon: <FaCalendarAlt className="mr-2" /> },
//     { title: 'ContactUs', link: '/contact', icon: <FaCalendarAlt className="mr-2" /> },
//     {title: 'Clubs', link: '/clubs', icon: <FaUsers className="mr-2" /> },
//     {
//       title: 'Annual Reports',
//       icon: <FaFileAlt className="mr-2" />,
//       dropdown: [
//         { title: '2023 Report', link: '/reports/2023' },
//         { title: '2022 Report', link: '/reports/2022' },
//         { title: '2021 Report', link: '/reports/2021' },
//       ],
//     },
//   ];

//   const toggleDropdown = (itemTitle: string) => {
//     setActiveDropdown(activeDropdown === itemTitle ? null : itemTitle);
//   };

//   return (
//     <div className="hidden lg:block">
//       <nav className="fixed top-0 left-0 w-full max-w-9xl z-50">
//         <div className="relative">
//           {/* Glass morphic navbar */}
//           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
//             <div className="flex items-center justify-between px-8 py-4">
//               {/* College logo and name */}
//               <div
//                 className={`flex items-center transition-transform duration-500 ${isHoveringLogo ? 'scale-105' : ''}`}
//                 onMouseEnter={() => setIsHoveringLogo(true)}
//                 onMouseLeave={() => setIsHoveringLogo(false)}
//               >
//                 <div className="relative">
//                   <div
//                     className={`absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-60 transition-opacity duration-300 ${
//                       isHoveringLogo ? 'opacity-90' : 'opacity-0'
//                     }`}
//                   ></div>
//                   <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-white/20 rounded-full border border-white/30 shadow-md">
//                     <FaUniversity className="text-white text-2xl" />
//                   </div>
//                 </div>
//                 <h1 className="ml-4 text-2xl font-bold text-white drop-shadow-md">
//                   <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
//                     University Name
//                   </span>
//                 </h1>
//               </div>

//               {/* Navigation items */}
//               <div className="flex items-center space-x-2 gap-14">
//                 {navItems.map((item) => (
//                   <div key={item.title} className="relative ">
//                     {item.dropdown ? (
//                       <div
//                         className="flex items-center px-4 py-2 text-cyan-900 font-medium hover:text-white transition cursor-pointer"
//                         onClick={() => toggleDropdown(item.title)}
//                         onMouseEnter={() => setActiveDropdown(item.title)}
//                         onMouseLeave={() => {
//                           setTimeout(() => {
//                             if (activeDropdown === item.title) setActiveDropdown(null);
//                           }, 300);
//                         }}
//                       >
//                         {item.icon}
//                         {item.title}
//                         <FaChevronDown
//                           className={`ml-2 text-xs transition-transform duration-300 ${
//                             activeDropdown === item.title ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </div>
//                     ) : (
//                       <a
//                         href={item.link}
//                         className="flex items-center px-4 py-2 text-cyan-900 font-medium hover:text-cyan-300 transition"
//                       >
//                         {item.icon}
//                         {item.title}
//                       </a>
//                     )}

//                     {/* Dropdown */}
//                     {item.dropdown && activeDropdown === item.title && (
//                       <div
//                         className="absolute left-0 mt-2 w-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl overflow-hidden"
//                         onMouseEnter={() => setActiveDropdown(item.title)}
//                         onMouseLeave={() => {
//                           setTimeout(() => {
//                             if (activeDropdown === item.title) setActiveDropdown(null);
//                           }, 300);
//                         }}
//                       >
//                         {item.dropdown.map((dropdownItem) => (
//                           <a
//                             key={dropdownItem.title}
//                             href={dropdownItem.link}
//                             className="block px-4 py-3 text-cyan-900 text-[15px] hover:bg-white/10 hover:text-cyan-300 transition items-center"
//                           >
//                             <span className="mr-2 text-cyan-900">•</span>
//                             {dropdownItem.title}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Soft glow effect on hover */}
//           <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-blue-400 opacity-0 hover:opacity-20 pointer-events-none transition-opacity duration-500"></div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaGraduationCap, 
  FaInfoCircle, 
  FaNewspaper, 
  FaEnvelope, 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaChalkboardTeacher, 
  
} from 'react-icons/fa';
import './Navbar.css';
import Headline from '../../pages/home/Headline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown : any ) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { name: 'Home', icon: <FaHome />, path: '/', dropdown: null },
    { 
        name: 'Advisory & Executive Board',
        icon: <FaChalkboardTeacher />,
        path: '#',
        dropdown: [
          { name: 'Advisory Board', icon: <FaGraduationCap />, path: '/advisory-board' },
          { name: 'Executive Board', icon: <FaGraduationCap />, path: '/executive-board' },
          { name: 'Members', icon: <FaGraduationCap />, path: '/members' },
        ]

    },
    { name: 'About', icon: <FaInfoCircle />, path: '/about', dropdown: null },
    { name: 'News & Events', icon: <FaNewspaper />, path: '/events', dropdown: null },
      { name: 'Clubs', icon: <FaEnvelope />, path: '/clubs', dropdown: null },
      {
        name: 'Reports', icon : <FaNewspaper /> , path: '#', dropdown: [
              { name: 'AY 2022-23', icon: null, path: '#' },
              { name: 'AY 2023-24', icon: null, path: '#' },
              { name: 'AY 2024-25', icon: null, path: '#' }
        ]
      }
  ];

  return (
    <>
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}` }>
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="navbar-logo">
            <img 
              src="/rgukt_logo.png" 
              alt="College Logo" 
              className="college-logo" 
            />
            <span className="college-name">SGC</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li 
                key={index} 
                className={activeDropdown === link.name ? 'active' : ''}
                onMouseEnter={() => link.dropdown && toggleDropdown(link.name)}
                onMouseLeave={() => link.dropdown && toggleDropdown(null)}
              >
                <a href={link.path}>
                  {link.icon} {link.name} 
                  {link.dropdown && <FaChevronDown className="dropdown-icon" />}
                </a>
                
                {link.dropdown && (
                  <div className={`dropdown-content ${activeDropdown === link.name ? 'show' : ''}`}>
                    {link.dropdown.map((item, i) => (
                      <a key={i} href={item.path}>
                        {item.icon} {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

         

          {/* Mobile Menu Toggle */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.path} 
                onClick={() => {
                  if (link.dropdown) {
                    toggleDropdown(link.name);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {link.icon} {link.name}
                {link.dropdown && <FaChevronDown className={`dropdown-icon ${activeDropdown === link.name ? 'rotate' : ''}`} />}
              </a>
              
              {link.dropdown && (
                <div className={`mobile-dropdown ${activeDropdown === link.name ? 'show' : ''}`}>
                  {link.dropdown.map((item, i) => (
                    <a 
                      key={i} 
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon} {item.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
       
       
      </div>
      {/* <Headline /> */}
      
    </>
  );
};

export default Navbar;