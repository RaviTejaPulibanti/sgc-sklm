// components/DesktopNavbar.tsx
import React from 'react';

const DesktopNavbar: React.FC = () => {
  return (
    <nav className="hidden md:block fixed w-full z-50">
      <div className="backdrop-blur-md bg-white/20 shadow-sm border-b border-white/10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-b-xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="/college-logo.png"
                alt="College Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-100 hover:bg-white/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-white/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-white/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Courses
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-white/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Faculty
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:bg-white/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <span className="relative z-10">Apply Now</span>
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 backdrop-blur-xs transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;