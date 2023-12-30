"use client"

import Link from "next/link";
import Edexcel from "./Edexcel";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the component mounts
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);
  return (
      <div className="container mx-auto">
        <nav className="relative bg-white px-6 py-6 flex justify-between items-center z-10">
          <Link className="text-3xl font-bold leading-none" href="/">
            <img
              className="h-12"
              src="atis-assets/logo/atis/atis-mono-black.svg"
              alt=""
              width="auto"
            />
          </Link>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-sm text-green-600 hover:text-gray-500 font-bold"
                href="/" 
              >
                Home
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>

            <li> <Edexcel /></li>
          
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>



            <li>
              <Link className="text-sm text-green-600 font-bold" href="/teachers">
                Teachers
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
   
            <li>
              <Link
                className="text-sm text-green-600 hover:text-gray-500 font-bold"
                href="/cambridge"
              >
                Cambridge
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-green-600 hover:text-gray-500 font-bold"
                href="/exam-paper"
              >
                Exam-Papers
              </Link>
            </li>
          </ul>
          
          <Link
            className="hidden lg:inline-block py-4 px-6 bg-green-100 hover:bg-green-500 text-sm text-green-600 hover:text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="/Login"
          >
            Login
          </Link>

      {/* Mobile Version   */}
          <div className="lg:hidden">
      <nav className="bg-white-800 p-4">
        <div className="relative items-center justify-between">
        
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`mt-4 right-16 absolute ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><Link className="text-green-600 hover:text-gray-500 font-bold" href="/">Home</Link></li>
          <li><Edexcel /></li>
          <li><Link className="text-green-600 hover:text-gray-500 font-bold" href="/teachers">Teachers</Link></li>
          <li><Link className="text-green-600 hover:text-gray-500 font-bold" href="/cambridge">Cambridge</Link></li>
          <li><Link className="text-green-600 hover:text-gray-500 font-bold" href="/exam-paper">Exam Papers</Link></li>
          <li><Link className="block mt-4 px-4 py-2 bg-green-500 text-white font-bold rounded" href="/Login">Login</Link></li>
        </ul>
      </nav>
    </div>
      
        </nav>
      </div>
    
  );
}

export default Header;
