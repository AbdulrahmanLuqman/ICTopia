import { Link, useLocation } from "react-router-dom"
import RiTwitterXFill from "./Icons/RiTwitterXFill"
import MdiInstagram from "./Icons/MdiInstagram"
import HugeiconsFacebook02 from "./Icons/HugeiconsFacebook02"
import PhLinkedinLogo from "./Icons/PhLinkedinLogo"
import MaterialSymbolsKeyboardArrowDownRounded from "./Icons/MaterialSymbolsKeyboardArrowDownRounded"
import { useState } from "react"
import { FaClock, FaPhone} from "react-icons/fa"


const MobileNavbar = ({showNav, setShowNav}) => {
  const location = useLocation()
  const [showSubAbout, setShowSubAbout] = useState(false)
  const [showSubServices, setShowSubServices] = useState(false)


  return (
    <nav className={`z-50 space-y-6 lg:hidden fixed top-[94px] w-full py-4 px-2 bg-[whitesmoke] overflow-y-auto h-[88%] transition-all duration-700  ${showNav ? "left-0" : "left-[-2000px]"}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex ">
          <a href=""><RiTwitterXFill className="text-[navy] text-xl"/></a>
          <a href=""><MdiInstagram className="text-[navy] text-xl"/></a>
          <a href=""><HugeiconsFacebook02 className="text-[navy] text-xl"/></a>
          <a href=""><PhLinkedinLogo className="text-[navy] text-xl"/></a>
          </div>

        <button className="bg-[#54c4cf] hover:text-[navy] transition-all duration-1000 py-[2px] px-3 rounded text-[whitesmoke] text-sm font-semibold">Get a quote</button>
      </div>

      <ul className="flex flex-col items-center gap-4">
        <li className={`text-sm ${location.pathname === "/" ? "text-[navy] font-semibold" : "text-gray-700"}`}><Link to="/">Home</Link></li>
        <li>
          <div className="flex items-center justify-center">
            <Link to="/about-us" className={`text-sm ${location.pathname === "/about-us" ? "text-[navy] font-semibold" : "text-gray-700"}`}>About Us</Link>
            <MaterialSymbolsKeyboardArrowDownRounded onClick={()=>setShowSubAbout(!showSubAbout)} className="absolute right-0" />
          </div>

          <div className={`${!showSubAbout ? "hidden" : "flex flex-col gap-2 items-center"}`}>
            <Link to="/about-us/overview" className="text-[12px]">Overview</Link>
            <Link to="/about-us/history" className="text-[12px]">History</Link>
            <Link to="/about-us/clients-and-testimonials" className="text-[12px]">Clients & Testimonials</Link>
            <Link to="/about-us/personal-biography" className="text-[12px]">Personal biography</Link>
            <Link to="/about-us/team-members" className="text-[12px]">Team Members</Link>
            <Link to="/about-us/location" className="text-[12px]">Location</Link>
            <Link to="/about-us/contact" className="text-[12px]">Contact</Link>
          </div>
        </li>
        <li>
        <div className="flex items-center justify-center">
            <Link to="/services" className={`text-sm ${location.pathname === "/services" ? "text-[navy] font-semibold" : "text-gray-700"}`}>Services</Link>
            <MaterialSymbolsKeyboardArrowDownRounded onClick={()=>setShowSubServices(!showSubServices)} className="absolute right-0" />
          </div>

          <div className={`${!showSubServices ? "hidden" : "flex flex-col gap-2 items-center"}`}>
            <Link to="/services" className="text-[12px]">Overview</Link>
            <Link to="/services/faqs" className="text-[12px]">FAQ</Link>
          </div>
        </li>
        <li className={`text-sm ${location.pathname === "/projects" ? "text-[navy] font-bold" : "text-gray-700"}`}><Link to="/projects">Projects</Link></li>
        <li className={`text-sm ${location.pathname === "/blogs" ? "text-[navy] font-bold" : "text-gray-700"}`}><Link to="/blogs">Blog/News</Link></li>
      </ul>

      <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-3 items-center">
                    <FaClock className="text-base text-[#0106a0]"/>
                    <div>
                        <p className="text-[11px] text-center font-semibold text-[#0106a0]">WORKING HOURS:</p>
                        <p className="text-[12px] text-center">Mon - Sat / 8.00 - 18.00</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <FaPhone className="text-base text-[#0106a0]"/>
                    <div>
                        <p className="text-[11px] text-center font-semibold text-[#0106a0]">CALL US:</p>
                        <p className="text-[12px] text-center">&#40;+234&#41; 802 694 4449</p>
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default MobileNavbar