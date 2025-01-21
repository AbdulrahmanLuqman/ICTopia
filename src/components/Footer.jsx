import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="grid lg:grid-cols-4 gap-x-6 gap-y-12">
          <div className="col-span-1">
            <h1 className="text-xs py-1">NEW YORK</h1>
            <h1 className="text-xl font-bold">Headquarters</h1>
            <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
            <p className="text-sm lg:text-xs py-3">Interactively coordinate proactive “outside the box“ thinking.</p>
            <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
              <FaPhoneAlt />
              <a href="tel:+2349000000004">+ 234 90 000 000 04</a>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
              <LiaLinkSolid />
              <a href="#">www.bold-themes.com</a>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
              <IoMdMail />
              <a href="mailto:info@bold-themes.com">info@bold-themes.com</a>
            </div>
          </div>

          <div className="col-span-2">
            <h1 className="text-xs py-1">LOCATIONS</h1>
            <h1 className="text-xl font-bold">We Are Everywhere</h1>
            <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn />
                <p>123 Main Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn />
                <p>456 Elm Street, San Francisco, CA 94102</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn />
                <p>789 Oak Street, Chicago, IL 60603</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn />
                <p>101 Pine Street, Seattle, WA 98104</p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h1 className="text-xs py-1">FOLLOW US</h1>
            <h1 className="text-xl font-bold">Stay Connected</h1>
            <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
            <div className="flex gap-4 py-3">
              <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            </div>
            <img src={image} alt="Logo" className="w-32 mt-4" />
          </div>
        </div>

        <div className="pt-10 text-xs">
          <div className="bg-black h-[2px] rounded-sm"></div>
          <nav className="flex flex-col md:flex-row justify-between px-2 gap-y-2 py-3">
            <h1>Override the digital divide with clickthroughs</h1>
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400">Projects</Link>
              </li>
            </ul>
          </nav>
          <p className="text-center py-3">&copy; {new Date().getFullYear()} ICTopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;