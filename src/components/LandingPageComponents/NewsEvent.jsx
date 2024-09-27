import { CiCirclePlus } from "react-icons/ci"
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import location from "/images/location.png"

// import { GoDotFill } from "react-icons/go"


const NewsEvent = () => {
  return (
    <div>

      <section className="px-6 md:px-14 lg:px-52 py-24 bg-[#f2f1ed]">    
        <div className="grid lg:grid-cols-2 px-2">
          <div>
            <h1 className="text-sm font-light">FROM OUR FACTORY</h1>
            <h1 className="text-4xl font-semibold py-3 text-black">Latest news and events</h1>
            <div className="w-20 bg-blue-400 h-0.5 rounded-lg my-3"></div>
            <p className="text-sm mb-14 text-black">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
          </div>

        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-3">
          <div className="bg-news bg-cover md:row-span-3 px-4 pb-4 pt-px md:pt-[100%] lg:pt-[55%]">
            <div className="bg-white px-4 py-6 ">
              <p className="text-xs">Open Doors Days / September 26-28</p>
              <h1 className="text-3xl font-semibold text-black py-2">Get into the Factories</h1>
              <div className="w-20 bg-blue-400 h-0.5 rounded-lg my-3"></div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
            </div>
          </div>

          <div className="flex bg-white">
            <div className="bg-event1 bg-cover w-96">
              <a href="#"><div className="hover:bg-black opacity-60 h-[100%] w-[100%]">
                <CiCirclePlus />
              </div></a>
            </div>
            <div className="p-4">
              <div className="flex gap-2 text-[10px] align-middle ">
                <p>June 8, 2015</p>
                <p> / </p>
                <p><a href="#" className="underline-none hover:text-blue-600">Laboratory</a></p>
                {/* <GoDotFill className="text-center" /> */}
              </div>
              <h1 className="text-lg font-bold text-black py-1"><a href="#" className="hover:text-blue-600">Warm and humid, a sticky day</a></h1>
              <p className="text-[11px] font-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                laoreet dolore magna. Ut wisi enim ad minim veniam, quis...
              </p>
            </div>

          </div>

          <div className="flex bg-white">
            <div className="bg-event2 bg-cover w-96">
              <a href="#"><div className="hover:bg-black opacity-60 h-[100%] w-[100%]">
                <CiCirclePlus />
              </div></a>
            </div>
            <div className="p-4">
              <div className="flex gap-2 text-[10px] align-middle ">
                <p>June 8, 2015</p>
                <p> / </p>
                <p><a href="#" className="underline-none hover:text-blue-600">Laboratory</a></p>
              </div>
              <h1 className="text-lg font-bold text-black py-1"><a href="#" className="hover:text-blue-600">Round and round like a carousel</a></h1>
              <p className="text-[11px] font-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                laoreet dolore magna. Ut wisi enim ad minim veniam, quis...
              </p>
            </div>
          </div>

          <div className="flex bg-white justify-evenly">
            <div className="bg-event3 bg-cover w-96">
              <a href="#"><div className="hover:bg-black hover:duration-150 hover:ease-linear opacity-60 h-[100%] w-[100%]">
                <CiCirclePlus className="z-10"/>
              </div></a>
            </div>
            <div className="p-4">
              <div className="flex gap-2 text-[10px] align-middle ">
                <p>June 8, 2015</p>
                <p> / </p>
                <p><a href="#" className="underline-none hover:text-blue-600">Laboratory</a></p>
                {/* <GoDotFill className="text-center" /> */}
              </div>
              <h1 className="text-lg font-bold text-black py-1"><a href="#" className="hover:text-blue-600">Standard digital news</a></h1>
              <p className="text-[11px] font-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                laoreet dolore magna. Ut wisi enim ad minim veniam, quis...
              </p>
            </div>
          </div>

        </section>
      </section>

      <section className="grid lg:grid-cols-4 gap-x-6 gap-y-12 bg-map bg-cover bg-fixed px-7 md:px-20 lg:px-48 py-28  text-white">
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

export default NewsEvent