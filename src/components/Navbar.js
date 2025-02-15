import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the mobile menu after clicking on a link
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg py-4 px-8 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/techlift.png" alt="TECHLIFT" className="h-10 w-auto sm:h-12" />
      </div>
      

      <div className="hidden md:flex space-x-4 text-white font-bold">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("timeline")}>Timeline</button>
        <button onClick={() => scrollToSection("faq")}>FAQ</button>
        <button onClick={() => scrollToSection("problem-statements")}>Problem Statements</button>
        <button onClick={() => scrollToSection("prizes")}>Prizes</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-8 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-md">
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </button>
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("timeline")}
          >
            Timeline
          </button>
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </button>
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("problem-statements")}
          >
            Problem Statements
          </button>
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("prizes")}
          >
            Prizes
          </button>
          <button
            className="block py-1 px-3 text-white hover:bg-gray-600 rounded-md focus:outline-none"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
