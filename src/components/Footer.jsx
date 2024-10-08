import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import location from "/images/location.png"

const Footer = () => {
  return (
    <div className="md:tracking-wider lg:tracking-normal">
      <section className="grid lg:grid-cols-4 gap-x-6 gap-y-12 bg-map bg-cover bg-fixed px-7 md:px-14 lg:px-24 py-16   text-white">
        <div className="col-span-1">
          <h1 className="text-xs py-1">NEW YORK</h1>
          <h1 className="text-xl font-bold">Headquarters</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <p className="text-sm lg:text-xs py-3">Interactively coordinate proactive “outside the box“ thinking.</p>
          

          <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
            <a href="tel:+"><FaPhoneAlt className="" /></a>
            <a href="tel:+2349000000004">+ 234 90 000 000 04</a>            
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
            <a href="#"><LiaLinkSolid /></a>
            <a href="#">www.bold-themes.com</a>            
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs py-0.5">
            <a href=""><IoMdMail /></a>
            <a href="mailto:">info@bold-themes.com</a>     
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
              <div className="flex items-center gap-2 text-white hover:text-blue-400 text-sm lg:text-xs pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Chicago: + 1 555 4529 148</a>  
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Chicago: + 1 555 4529 148</a>  
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 text-sm lg:text-xs pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Chicago: + 1 555 4529 148</a>  
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-xs py-1">GET IN TOUCH</h1>
          <h1 className="text-xl font-bold">Follow Our Activity</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <p className="text-sm lg:text-xs py-2">Interactively coordinate proactive e-commerce via process-centric “outside the box“ thinking.</p>

          <div className="flex gap-2 py-2">
            <FaFacebookF className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            <FaTwitter className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            <FaLinkedinIn className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
          </div>         
        </div>
      </section>

      <section className="bg-[#f2f1ed]">
        <div className="pt-16 pb-2 px-7 md:px-14 lg:px-28">
          <div className="grid lg:grid-cols-3 pb-8 gap-20">
            <div className="">
              <h1 className="font-bold text-base">About Us</h1>
              <div className="w-16 bg-blue-400 h-[2px] rounded-lg my-2"></div>

              <div className="grid grid-cols-2">
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">About us</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Services</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Location</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Contact</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Blog</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Shop</li>
              </div>
            </div>

            <div className="">
              <h1 className="font-bold text-base">Popular Category</h1>
              <div className="w-16 bg-blue-400 h-[2px] rounded-lg my-2"></div>

              <div className="grid grid-cols-2">
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Laboratory</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Industy</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Materials</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Audio</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Metallurgy</li>
                <li className="list-none text-sm py-2 hover:text-blue-400 border-gray-400 border-b-[0.5px]">Video</li>
              </div>
            </div>
            
            <div className="">
              <h1 className="font-bold text-base">Our products</h1>
              <div className="w-16 bg-blue-400 h-[2px] rounded-lg my-2"></div>

              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">EQUIPMENTS</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">HAND TOOLS</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">HARDWARE</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">POWER TOOLS</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">STORAGE</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">WELDING</button>
              <button className="text-[10px] text-white bg-blue-500 hover:bg-black rounded-sm px-4 py-[10px] mb-[2px] mr-[2px]">WORKWARE</button>
            </div>
          </div>

          <div className="pt-1 lg:pt-10 text-xs">
            <div className="bg-black h-[2px] rounded-sm"></div>
            <nav className="flex flex-col md:flex-row justify-between px-2 gap-y-2 py-3">
              <h1>Override the digital divide with clickthroughs</h1>
              
              <ul className="flex gap-4">
                <li className="hover:text-blue-400">Home</li>
                <li className="hover:text-blue-400">About us</li>
                <li className="hover:text-blue-400">Services</li>
                <li className="hover:text-blue-400">Project</li>
              </ul>
            </nav>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Footer