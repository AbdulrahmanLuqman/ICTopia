import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import location from "/images/location.png";

const HistoryContactSection = () => {
  return (
    <div>
      <section className="grid  lg:grid-cols-4 gap-x-6 gap-y-12 bg-map bg-cover bg-fixed px-7 md:px-20 lg:px-48 py-28  text-white">
        <div className="col-span-1">
          <h1 className="text-[10px] py-1">NEW YORK</h1>
          <h1 className="text-xl font-bold">Headquarters</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <p className="text-[11px] py-2">Interactively coordinate proactive “outside the box“ thinking.</p>
          

          <div className="flex items-center gap-2 hover:text-blue-400 text-[10px]">
            <a href="tel:+"><FaPhoneAlt className="" /></a>
            <a href="tel:+2349000000004">+ 234 90 000 000 04</a>            
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 text-[10px]">
            <a href="#"><LiaLinkSolid /></a>
            <a href="#">www.bold-themes.com</a>            
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 text-[10px]">
            <a href=""><IoMdMail /></a>
            <a href="mailto:">info@bold-themes.com</a>     
          </div>

        </div>

        <div className="col-span-2">
          <h1 className="text-[10px] py-1">LOCATIONS</h1>
          <h1 className="text-xl font-bold">We Are Everywhere</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <div className="grid md:grid-cols-2 gap-4">
            <img src={location} alt="" className="p-2" />
            <div className="py-2">
              <h1 className="text-xs font-light py-2">OUR NETWORK</h1>
              <div className="flex items-center gap-2 text-white hover:text-blue-400 text-[10px] pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Chicago: + 1 555 4529 148</a>  
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 text-[10px] pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Chicago: + 1 555 4529 148</a>  
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 text-[10px] pt-1">
                <a href="tel:+"><MdOutlineLocationOn /></a>
                <a href="tel:+">Chicago: + 1 555 4529 148</a>  
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-[10px] py-1">GET IN TOUCH</h1>
          <h1 className="text-xl font-bold">Follow Our Activity</h1>
          <div className="w-16 bg-blue-400 h-[1px] rounded-lg my-2"></div>
          <p className="text-[11px] py-2">Interactively coordinate proactive e-commerce via process-centric “outside the box“ thinking.</p>

          <div className="flex gap-2 py-2">
            <FaFacebookF className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            <FaTwitter className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
            <FaLinkedinIn className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-3 w-10 h-10"/>
          </div>

        </div>

      </section>
    </div>
  )
}

export default HistoryContactSection
