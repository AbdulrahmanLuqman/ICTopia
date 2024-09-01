// #0106a0 dark blue
// #54c4cf green
// #2e3192 faint blue
// #0058ea light blue

import { Link, useLocation } from "react-router-dom"
import RiTwitterXFill from "./Icons/RiTwitterXFill"
import MdiInstagram from "./Icons/MdiInstagram"
import HugeiconsFacebook02 from "./Icons/HugeiconsFacebook02"
import PhLinkedinLogo from "./Icons/PhLinkedinLogo"

const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="lg:bg-[#0106a0] lg:w-full lg:px-20 lg:flex lg:justify-between hidden md:px-6 px-4">
      <ul className="flex gap-8">
        <li className={`px-3 pb-3 mt-4 ${location.pathname === "/" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}><Link to="/">Home</Link></li>
        <li className={`nav px-3 pb-3 mt-4 relative ${location.pathname === "/about-us" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}>
          <Link to="/about-us">About Us</Link>

          <div className="subnav absolute hidden">
            <Link to="" className="p-[10px] border-b">Overview</Link>
            <Link to="" className="p-[10px] border-b">History</Link>
            <Link to="" className="p-[10px] border-b">Clients & Testimonials</Link>
            <Link to="" className="p-[10px] border-b">Personal biography</Link>
            <Link to="" className="p-[10px] border-b">Team Members</Link>
            <Link to="" className="p-[10px] border-b">Location</Link>
            <Link to="" className="p-[10px] border-b">Contact</Link>
            <Link to="" className="p-[10px] border-b">Under Construction</Link>
          </div>
        </li>
        <li className={`nav px-3 pb-3 mt-4 relative ${location.pathname === "/services" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}>
          <Link to="/services">Services</Link>

          <div className="subnav absolute hidden">
            <Link to="" className="p-[10px] border-b">Overview</Link>
            <Link to="" className="p-[10px] border-b">Single Service</Link>
            <Link to="" className="p-[10px] border-b">Price Packages</Link>
            <Link to="" className="p-[10px] border-b">Our Expertise</Link>
            <Link to="" className="p-[10px] border-b">Cost Calculator</Link>
            <Link to="" className="p-[10px] border-b">FAQ</Link>
          </div>
        </li>
        <li className={`px-3 pb-3 mt-4 ${location.pathname === "/projects" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}><Link to="/projects">Projects</Link></li>
        <li className={`px-3 pb-3 mt-4 ${location.pathname === "/blogs" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}><Link to="/blogs">Blog/News</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <a href=""><RiTwitterXFill className="text-[whitesmoke] text-xl"/></a>
        <a href=""><MdiInstagram className="text-[whitesmoke] text-xl"/></a>
        <a href=""><HugeiconsFacebook02 className="text-[whitesmoke] text-xl"/></a>
        <a href=""><PhLinkedinLogo className="text-[whitesmoke] text-xl"/></a>

        <button className="bg-[#54c4cf] hover:text-[navy] transition-all duration-1000 py-[3px] px-3 text-[whitesmoke] text-sm font-semibold">Get a quote</button>
      </div>
    </nav>
  )
}

export default Navbar