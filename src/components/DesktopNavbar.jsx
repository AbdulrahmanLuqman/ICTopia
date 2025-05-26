// #0106a0 dark blue
// #54c4cf green
// #2e3192 faint blue
// #0058ea light blue

import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Navbar = () => {
  const location = useLocation()
  // const aboutUsNavs = ["Overview", "History"]
  const aboutUsNavs = [
    {
      linkTo: "/about-us/overview",
      name: "Overview"
    },
    {
      linkTo: "/about-us/team-members",
      name: "Team Members"
    },
    {
      linkTo: "/about-us/contact",
      name: "Contact"
    }
  ]
  return (
    <nav
      className={`lg:bg-[#0106a0] lg:w-full lg:px-20 lg:flex lg:justify-between hidden md:px-6 px-4 ${
        window.scrollY >= 120 ? "sticky" : ""
      }`}
    >
      <ul className="flex gap-8">
        <li
          className={`px-3 pb-3 mt-4 ${
            location.pathname === "/"
              ? "bg-white text-[navy] font-semibold"
              : "text-[whitesmoke]"
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`nav px-3 pb-3 mt-4 relative ${
            location.pathname === "/about-us"
              ? "bg-white text-[navy] font-semibold"
              : "text-[whitesmoke]"
          }`}
        >
          <Link to="/about-us">About Us</Link>

          <div className="subnav absolute hidden z-50">
            {aboutUsNavs.map((aboutUsNav) => (
              <Link
                to={aboutUsNav.linkTo}
                key={Math.random()}
                className="p-[10px] border-b"
              >
                {aboutUsNav.name}
              </Link>
            ))}
          </div>
        </li>
<<<<<<< HEAD
        <li
          className={`nav px-3 pb-3 mt-4 relative ${
            location.pathname === "/services"
              ? "bg-white text-[navy] font-semibold"
              : "text-[whitesmoke]"
          }`}
        >
          <Link to="/services">Services</Link>

          <div className="subnav absolute hidden z-50">
            <Link to="/services" className="p-[10px] border-b">
              Overview
            </Link>
            <Link to="/services/faqs" className="p-[10px] border-b">
              FAQ
            </Link>
          </div>
        </li>
        <li
          className={`px-3 pb-3 mt-4 ${
            location.pathname === "/projects"
              ? "bg-white text-[navy] font-semibold"
              : "text-[whitesmoke]"
          }`}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className={`px-3 pb-3 mt-4 ${
            location.pathname === "/blogs"
              ? "bg-white text-[navy] font-semibold"
              : "text-[whitesmoke]"
          }`}
        >
          <Link to="/blogs">Blog/News</Link>
        </li>
=======
        
        <li className={`px-3 pb-3 mt-4 ${location.pathname === "/register" ? "bg-white text-[navy] font-semibold" : "text-[whitesmoke]"}`}><Link to="/register">Register</Link></li>
>>>>>>> origin/master
      </ul>

      <div className="flex items-center gap-4">
        <Link
          href="https://www.facebook.com/profile.php?id=61562297253273"
          target="_blank"
        >
          <FaFacebook className="text-white text-xl hover:text-[#54c4cf]" />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61562297253273"
          target="_blank"
        >
          <FaInstagram className="text-white text-xl hover:text-[#54c4cf]" />
        </Link>
        <Link
          href="https://www.instagram.com/ictopia1?igsh=MTlnYXAzY3dhbnM3Mg=="
          target="_blank"
        >
          <FaLinkedinIn className="text-white text-xl hover:text-[#54c4cf]" />
        </Link>

        <button className="bg-[#54c4cf] hover:text-[navy] transition-all duration-1000 py-[3px] px-3 text-[whitesmoke] text-sm font-semibold">
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar