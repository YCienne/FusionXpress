import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FiLogOut } from "react-icons/fi";
import logo from '../assets/images/logo.png'; // Adjust the path accordingly
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
const HomeNavbar = () => {
  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens, redirect to login)
    console.log('Logging out...');
    window.location.href = '/'; // Change this to your desired route
  };

  return (
    <nav className="bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-19">
          <div className="flex items-center flex-shrink-0">
            <Link to="/home"> {/* Wrap the logo in a Link */}
              <img
                src={logo}
                alt="Logo"
                className="w-auto h-24" // Increased height of the logo
              />
            </Link>
          </div>

          <div className="flex space-x-8">

          <a
  href="https://www.facebook.com/gina.ortina.1?mibextid=LQQJ4d"
  className="text-gmail hover:text-blue-400 transition-colors duration-300"
>
  <BiLogoGmail size={20} />
</a>




 {/* <a
  href="https://www.twitter.com/KwekuOwusu18"
  className="hover:text-red-400 transition-colors duration-300"
>
  <FaXTwitter size={20} />
</a> */}
{/* <a
  href="https://www.instagram.com/naa_ayorkortg?igsh=cTc0bjM2cGNpbHpr"
  className="hover:text-pink-400 transition-colors duration-300"
>
  <FaInstagram size={20} />
</a> */}
<a
  href="https://www.linkedin.com/in/abigail-debrah-a54024b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  className="hover:text-blue-600 transition-colors duration-300"
>
  <FaLinkedin size={20} />
</a>
<a
  href="#"
  className="hover:text-green-600 transition-colors duration-300"
>
  <FaGithub size={20} />
</a>
{/* <a
  href="https://www.tiktok.com/@hackmanesi?_t=8qNMH8aLSFR&_r=1"
  className="hover:text-yellow-600 transition-colors duration-300"
>
  <FaTiktok size={20} />
</a> */}

{/* <a
  href="https://www.facebook.com/gina.ortina.1?mibextid=LQQJ4d"
  className="hover:text-blue-400 transition-colors duration-300"
>
  <FaFacebookSquare size={20} />
</a> */}


</div>

          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
