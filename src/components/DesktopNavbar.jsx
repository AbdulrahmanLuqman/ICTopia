// #0106a0 dark blue
// #54c4cf green
// #2e3192 faint blue
// #0058ea light blue

import { Link, useLocation } from "react-router-dom"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation()
  // const aboutUsNavs = ["Overview", "History"]
  const aboutUsNavs = [
    {
      linkTo: "/about-us/",
      name: "About"
    },
     {
      linkTo: "/about-us/team-members",
      name: "Team Members"
    },
  ]
  return (
    <nav className={`lg:bg-[#0106a0] lg:w-full lg:px-20 lg:flex lg:justify-between hidden md:px-6 px-4 ${window.scrollY >= 120 ? "sticky" : ""}`}>
      <ul className="flex gap-8">
        <li className={`px-3 pb-3 mt-4 ${location.pathname === "/" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}><Link to="/">Home</Link></li>
        <li className={`nav px-3 pb-3 mt-4 relative ${location.pathname === "/about-us" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}>
          <Link to="/about-us">About Us</Link>
          <div className="subnav absolute hidden z-50">
            {aboutUsNavs.map((aboutUsNav) => 
            <Link to={aboutUsNav.linkTo} key={Math.random()} className="p-[9px] border-b">{aboutUsNav.name}</Link>
          )}
          </div>
        </li>
        
          <li className="px-3 pb-3 mt-4 text-[whitesmoke]"><a href="tel:+2349029285309">Contact</a> </li>
        <li className={`px-3 pb-3 mt-4 ${location.pathname === "/register" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}><Link to="/register">Register</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <a href="https://www.facebook.com/share/15oEKg5tux/" target="_blank">
          <FaFacebookF className="text-[whitesmoke] text-xl"/>
        </a>
        <a href="https://www.instagram.com/ictopia1?igsh=MXY0cTRlMGVreGtjMw==" target="_blank">
          <RiInstagramFill className="text-[whitesmoke] text-xl"/>
        </a>
        <a href="https://www.linkedin.com/company/ictopia/" target="_blank">
          <FaLinkedinIn className="text-[whitesmoke] text-xl"/>
        </a>

        <button className="bg-[#54c4cf] hover:text-[navy] transition-all duration-1000 py-[3px] px-3 text-[whitesmoke] text-sm font-semibold rounded-md"><Link to="/register">Register</Link></button>
      </div>
    </nav>
  )
}

export default Navbar