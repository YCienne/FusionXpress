import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-white text-blue py-3 w-full min-h-[30px]"> {/* Reduced padding and min height */}
      <div className="bg-gray p-3 rounded-lg"> {/* Adjusted padding */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-2">
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              fusionXpress
            </p>
            <div className="flex space-x-8">

              <a
                href="https://www.facebook.com/gina.ortina.1?mibextid=LQQJ4d"
                className="hover:text-blue-400 text-#3e65cf,[#c71610,#f2a60c,#3b60c4,#08851b transition-colors ]duration-300"
              >
                <BiLogoGmail size={28} />
              </a>

              <a
                href="https://www.twitter.com/KwekuOwusu18"
                className="hover:text-red-400 transition-colors duration-300"
              >
                <FaXTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/naa_ayorkortg?igsh=cTc0bjM2cGNpbHpr"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/abigail-debrah-a54024b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="#"
                className="hover:text-green-600 transition-colors duration-300"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@hackmanesi?_t=8qNMH8aLSFR&_r=1"
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                <FaTiktok size={28} />
              </a>

              <a
                href="https://www.facebook.com/gina.ortina.1?mibextid=LQQJ4d"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebookSquare size={28} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
