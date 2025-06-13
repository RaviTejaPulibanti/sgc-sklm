// components/MobileNavbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { 
  FacebookIcon, 
  TwitterIcon, 
  XIcon,
  EmailIcon
} from 'react-share';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <nav className="md:hidden fixed w-full z-50 bg-white shadow-sm" ref={navbarRef}>
      <div className="">
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-100">
          <div className="flex items-center">
            <img
              className="h-10 w-auto"
              src="/college-logo.png"
              alt="College Logo"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setOpenSubmenu(null);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 w-72 bg-white shadow-xl border-l border-gray-100">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a
                href="#"
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-50 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-50 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              
              {/* Courses with dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleSubmenu('courses')}
                  className="w-full flex justify-between items-center px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-50"
                >
                  <span>Courses</span>
                  {openSubmenu === 'courses' ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
                {openSubmenu === 'courses' && (
                  <div className="pl-4 mt-1 space-y-2 pb-2">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      Undergraduate
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      Postgraduate
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      Doctoral
                    </a>
                  </div>
                )}
              </div>

              {/* Annual Reports with dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleSubmenu('reports')}
                  className="w-full flex justify-between items-center px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-50"
                >
                  <span>Annual Reports</span>
                  {openSubmenu === 'reports' ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
                {openSubmenu === 'reports' && (
                  <div className="pl-4 mt-1 space-y-2 pb-2">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      2023 Report
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      2022 Report
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      2021 Report
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      2020 Report
                    </a>
                  </div>
                )}
              </div>

              <div className="px-3 py-4 border-b border-gray-100">
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-lg font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </button>
              </div>

              <div className="px-3 py-4 space-y-3 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                <div className="flex items-start space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-500 mt-1" />
                  <p className="text-base text-gray-700">info@college.edu</p>
                </div>
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-5 w-5 text-gray-500 mt-1" />
                  <p className="text-base text-gray-700">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-gray-500 mt-1" />
                  <p className="text-base text-gray-700">123 College St, City</p>
                </div>
              </div>

              <div className="px-3 pt-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <FacebookIcon size={32} round />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-400">
                    <TwitterIcon size={32} round />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-pink-600">
                    <XIcon size={32} round />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-700">
                    <EmailIcon size={32} round />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;