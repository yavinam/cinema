import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  MdLocalMovies,
  MdTheaterComedy,
  MdSportsSoccer,
  MdEvent,
} from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import logo from "@/assets/logos/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-10 mt-24">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex space-x-2 items-center mb-4">
            <div className="">
              <img
                src={logo}
                alt="logo"
                className="w-[55px] h-9 cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
          <div className="mb-4">
            <a href="#" className="block mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About us</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <IoDocumentTextSharp className="text-red-500 mr-2" />
              Public offer
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <PiStarFour className="text-red-500 mr-2" />
              Advertising
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <FaRegCircleQuestion className="text-red-500 mr-2" />
              F.A.Q
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <FiPhone className="text-red-500 mr-2" />
              Contacts
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdLocalMovies className="text-red-500 mr-2" /> Movie
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdTheaterComedy className="text-red-500 mr-2" /> Theatre
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdEvent className="text-red-500 mr-2" /> Concerts
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <MdSportsSoccer className="text-red-500 mr-2" /> Sport
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact us</h3>
          <p className="text-red-500 mb-4 cursor-pointer hover:underline hover:text-red-600">
            +998 (95) 897-33-38
          </p>
          <h3 className="text-lg font-semibold mb-3">Social media</h3>
          <div className="flex space-x-4">
            <FaInstagram className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            <FaFacebookF className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            <FaYoutube className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
