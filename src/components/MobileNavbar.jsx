import { Link, useLocation } from "react-router-dom"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri";
import MaterialSymbolsKeyboardArrowDownRounded from "./Icons/MaterialSymbolsKeyboardArrowDownRounded"
import { useState } from "react"
import { FaClock, FaPhone} from "react-icons/fa"
import PropTypes from "prop-types"


const MobileNavbar = ({showNav}) => {
  const location = useLocation()
  const [showSubAbout, setShowSubAbout] = useState(false)


  return (
    <nav className={`z-50 space-y-6 lg:hidden fixed top-[94px] w-full py-4 px-2 bg-[whitesmoke] overflow-y-auto h-[88%] transition-all duration-700  ${showNav ? "left-0" : "left-[-2000px]"}`}>      
      <ul className="flex flex-col items-center gap-4">
        <li className={`text-sm ${location.pathname === "/" ? "text-[navy] font-semibold" : "text-gray-700"}`}><Link to="/">Home</Link></li>
        <li>
          <div className="flex items-center justify-center">
            <Link to="/about-us" className={`text-sm ${location.pathname === "/about-us" ? "text-[navy] font-semibold" : "text-gray-700"}`}>About Us</Link>
            <MaterialSymbolsKeyboardArrowDownRounded onClick={()=>setShowSubAbout(!showSubAbout)} className="absolute right-0" />
          </div>

          <div className={`${!showSubAbout ? "hidden" : "flex flex-col gap-2 items-center"}`}>
            <Link to="/about-us/overview" className="text-[12px]">Overview</Link>
            <Link to="/about-us/team-members" className="text-[12px]">Team Members</Link>
            <Link to="/about-us/contact" className="text-[12px]">Contact</Link>
          </div>
        </li>
        
        <li className={`text-sm ${location.pathname === "/blogs" ? "text-[navy] font-bold" : "text-gray-700"}`}><Link to="/blogs">Blog/News</Link></li>
      </ul>

      <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col  gap-3 items-center">
            <div className="flex gap-3 items-center">
              <FaClock className="text-base text-[#0106a0]"/>                  
              <p className="text-[11px] text-center font-semibold text-[#0106a0]">WORKING HOURS:</p>
            </div>
            <p className="text-[12px] text-center">Mon - Sat / 8.00 - 18.00</p>
              
          </div>
          <div className="flex flex-col gap-3 items-center">  
            <div className="flex gap-3 items-center">
              <FaPhone className="text-base text-[#0106a0]"/>
              <p className="text-[11px] text-center font-semibold text-[#0106a0]">CALL US:</p>
            </div>                  
            <a href="tel:+234029285309" className="text-[12px]">&#40;+234&#41; 902 928 5309</a>                    
          </div>
      </div>

      <div className="flex flex-col items-center gap-7">
        <button className="bg-[#54c4cf] hover:text-[rgb(0,0,128)] transition-all duration-1000 py-[2px] px-3 text-[whitesmoke] text-sm font-semibold rounded-md"><Link to="/register">Register</Link></button>
        <div className="flex gap-4">
         <a href="https://www.facebook.com/share/15oEKg5tux/" target="_blank">
            <FaFacebookF className="text-[#0106a0] text-xl"/>
          </a>
          <a href="https://www.instagram.com/ictopia1?igsh=MXY0cTRlMGVreGtjMw==" target="_blank">
            <RiInstagramFill className="text-[#0106a0] text-xl"/>
          </a>
          <a href="https://www.linkedin.com/company/ictopia/" target="_blank">
            <FaLinkedinIn className="text-[#0106a0] text-xl"/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar

MobileNavbar.propTypes = {
  showNav: PropTypes.bool
}