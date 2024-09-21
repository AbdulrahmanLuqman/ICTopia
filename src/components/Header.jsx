import { useState } from "react"

import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import logo from "../assets/logo.png"
import { FaClock, FaPhone } from "react-icons/fa"
import SolarHamburgerMenuBroken from "./Icons/SolarHamburgerMenuBroken"
import MaterialSymbolsLightCloseRounded from "./Icons/MaterialSymbolsLightCloseRounded"



const Header = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <header className="lg:static sticky top-0 z-50">
        <div className="w-full bg-[whitesmoke] lg:py-0 py-4 lg:px-20 md:px-6 px-4 flex items-center lg:justify-between">
            
            <div onClick={()=> setShowNav(!showNav)} className="lg:hidden">
                <SolarHamburgerMenuBroken className={`md:text-4xl text-3xl ${showNav ? "hidden" : "block"}`}/>
                <MaterialSymbolsLightCloseRounded  className={`md:text-4xl text-3xl ${showNav ? "block" : "hidden"}`}/>
            </div>

            <img src={logo} alt="logo" className="lg:w-[200px] w-[120px]"/> 
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
                        <p className="text-[12px]">&#40;+234&#41; 802 694 4449</p>
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