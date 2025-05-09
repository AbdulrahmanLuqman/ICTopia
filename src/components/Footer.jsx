import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { LiaLinkSolid } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import location from "/images/location.png"
import { Link } from "react-router-dom";
import image from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="md:tracking-wider lg:tracking-normal">
      <section className="grid lg:grid-cols-4 gap-x-6 gap-y-12 bg-map bg-cover bg-fixed px-7 md:px-14 lg:px-24 py-16 text-white">
        <div className="col-span-1">
          <h1 className="text-xs py-1">NIGERIA</h1>
          <h1 className="text-xl font-bold">Headquarters</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <p className="text-sm lg:text-xs py-3">Interactively coordinate proactive “outside the box“ thinking.</p>
          

          <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
            <a href="tel:+"><FaPhoneAlt className="" /></a>
            <a href="tel:+234029285309" className="text-[12px]">&#40;+234&#41; 902 928 5309</a>            
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
            <a href="#"><LiaLinkSolid /></a>
            <a href="#">ictopia.dervac.com</a>            
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
            <a href=""><IoMdMail /></a>
            <a href="mailto:">ictopia@dervac.com</a>     
          </div>

        </div>

        <div className="col-span-2">
          <h1 className="text-xs py-1">LOCATIONS</h1>
          <h1 className="text-xl font-bold">We Are Everywhere</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <div className="grid md:grid-cols-2 gap-4">
            <img src={location} alt="" className="p-2" />
            <div className="py-2">
              <h1 className="text-xs font-light py-2">OUR NETWORK</h1>
              <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Nigeria- +2349029285309</a>  
              </div>
              <div className="flex items-center gap-2 text-white hover:text-blue-400 text-sm lg:text-xs pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Malaysia- +60147442379</a>  
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-xs py-1">GET IN TOUCH</h1>
          <h1 className="text-xl font-bold">Follow Our Activity</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <p className="text-sm lg:text-xs py-2 text-justify">Be part of the innovation! Stay updated with competition highlights, groundbreaking projects, and tech insights <br />Follow us on social media for real-time updates and exclusive content.</p>

          <div className="flex gap-2 py-2">
            <a href="https://www.facebook.com/share/15oEKg5tux/" target="_blank">
              <FaFacebookF className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            </a>
            <a href="https://www.instagram.com/ictopia1?igsh=MXY0cTRlMGVreGtjMw==" target="_blank">
              <RiInstagramFill className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            </a>
            <a href="https://www.linkedin.com/company/ictopia/" target="_blank">
              <FaLinkedinIn className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            </a>
          </div>         
        </div>
      </section>

      <section className="bg-[#f2f1ed]">
        <div className="pt-16 pb-2 px-7 md:px-14 lg:px-28">
          <div className="grid lg:grid-cols-3 pb-8 gap-20">
            <div className="">
              <h1 className="font-bold text-base">Popular Category</h1>
              <div className="w-16 bg-blue-400 h-[2px] rounded-lg my-2"></div>

              <div className="flex gap-5 md:gap-1 md:grid grid-cols-1 ">
                <Link to="/about-us" className="w-fit text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">About us</Link>
                <Link to="/about-us/contact" className="w-fit text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Contact</Link>
                <Link to="/blogs" className="w-fit text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Blog</Link>
              </div>
            </div>
            
            <div className="">
              <h1 className="font-bold text-base">Competition Categories</h1>
              <div className="w-16 bg-blue-400 h-[2px] rounded-lg my-2"></div>

              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">Software Development</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">Artificial Intelligence</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">Cybersecurity</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">Game Development</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">IoT & Smart Tech</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">Hardware Engineering</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">Tech for Good</button>
            </div>

            <Link to="/">
              <img src={image} alt="Logo" />  
            </Link>
          </div>

          <div className="pt-1 lg:pt-10 text-xs">
            <div className="bg-black h-[2px] rounded-sm"></div>
            <nav className="flex flex-col md:flex-row justify-between px-2 gap-y-2 py-3">
              <h1>Override the digital divide with clickthroughs</h1>
              
              <div className="flex gap-4">
                <Link to="/" className="hover:text-blue-400">Home</Link >
                <Link to="/about-us" className="hover:text-blue-400">About us</Link >
              </div>
            </nav>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Footer