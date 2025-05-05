import { useState } from "react"
import { Link } from "react-router-dom"

import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import logo from "../assets/logo.png"
import { FaClock, FaPhone } from "react-icons/fa"
import SolarHamburgerMenuBroken from "./Icons/SolarHamburgerMenuBroken"
import MaterialSymbolsLightCloseRounded from "./Icons/MaterialSymbolsLightCloseRounded"
import { Link } from "react-router-dom"



const Header = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <header className="lg:static sticky top-0 z-50">
        <div className="w-full bg-[whitesmoke] lg:py-0 py-4 lg:px-20 md:px-6 px-4 flex items-center lg:justify-between">
            
            <div onClick={()=> setShowNav(!showNav)} className="lg:hidden cursor-pointer">
                <SolarHamburgerMenuBroken className={`md:text-4xl text-3xl ${showNav ? "hidden" : "block"}`}/>
                <MaterialSymbolsLightCloseRounded  className={`md:text-4xl text-3xl ${showNav ? "block" : "hidden"}`}/>
            </div>
            
            <Link to="/">
              <img src={logo} alt="logo" className="lg:w-[200px] w-[120px]"/> 
            </Link>
            <div className="lg:flex lg:gap-8 hidden">
                <div className="flex gap-3 items-center">
                    <FaClock className="text-3xl text-[#0106a0]"/>
                    <div>
                        <p className="text-[11px] font-semibold text-[#0106a0]">WORKING HOURS:</p>
                        <p className="text-[12px]">Mon - Sat / 8.00 - 18.00</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <FaPhone className="text-3xl text-[#0106a0]"/>
                    <div>
                        <p className="text-[11px] font-semibold text-[#0106a0]">CALL US:</p>
                        <a href="tel:+234029285309" className="text-[12px]">&#40;+234&#41; 902 928 5309</a>
                    </div>
                </div>
            </div>
        </div>
        <DesktopNavbar />
        <MobileNavbar showNav={showNav} setShowNav={setShowNav}/>
    </header>
  )
}

export default Header