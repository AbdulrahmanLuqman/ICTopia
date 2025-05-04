import { CiCirclePlus } from "react-icons/ci"

const NewsEvent = () => {
  return (
    <div>

      <section className="px-6 md:px-14 lg:px-24 py-24 bg-[#f2f1ed]">    
        <div className="grid lg:grid-cols-2">
          <div>
            <h1 className="text-base font-normal">FROM OUR FACTORY</h1>
            <h1 className="text-4xl font-bold py-3 text-black">Latest News & Events</h1>
            <div className="w-20 bg-blue-400 h-0.5 rounded-lg my-3"></div>
            <p className="text-base mb-14 text-black">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-5 lg:gap-5">
          <div className="bg-news bg-cover md:row-span-3 px-4 pb-4 pt-px lg:pt-[55%]">
            <div className="bg-white px-4 py-6 ">
              <p className="text-base">ICTOPIA Innovation Week – September 26-28  </p>
              <h1 className="text-3xl font-semibold text-black py-2">Experience the Future of Tech</h1>
              <div className="w-20 bg-blue-400 h-0.5 rounded-lg my-3"></div>
              <p className="text-base">
              Join us for a three-day immersive event featuring cutting-edge ICT solutions, live demonstrations, and networking with industry leaders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 bg-white">
            <div className="bg-event1 bg-cover col-span-1">
              <a href="#"><div className="hover:bg-black opacity-60 h-[100%] w-[100%]">
                <CiCirclePlus />
              </div></a>
            </div>
            <div className="p-4 col-span-2">
              <div className="flex gap-2 text-xs align-middle ">
                <p>June 8, 2025 | Category: Competition Updates</p> 
              </div>
              <h1 className="text-xl font-bold text-black py-1">
                <a href="#" className="hover:text-blue-600">
                  Meet the Minds Behind the Innovation  
                </a>
              </h1>
              <p className="text-xs md:text-base lg:text-xs font-normal">
                Get an exclusive look at the groundbreaking projects competing for the top prize. Witness creativity, teamwork, and problem-solving in action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 bg-white">
            <div className="bg-event2 bg-cover col-span-1">
              <a href="#"><div className="hover:bg-black opacity-60 h-[100%] w-[100%]">
                <CiCirclePlus />
              </div></a>
            </div>
            <div className="p-4 col-span-2">
              <div className="flex gap-2 text-xs align-middle ">
                <p>June 8, 2025 | Category: Tech Insights</p> 
              </div>
              <h1 className="text-xl font-bold text-black py-1">
                <a href="#" className="hover:text-blue-600">
                  Exploring AI & Emerging Technologies
                </a>
              </h1>
              <p className="text-xs md:text-base lg:text-xs font-normal">
                From machine learning breakthroughs to cybersecurity advancements, stay updated with the latest trends shaping the ICT landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 bg-white">
            <div className="bg-event3 col-span-1 bg-cover">
              <a href="#"><div className="hover:bg-black opacity-60 h-[100%] w-[100%]">
                <CiCirclePlus />
              </div></a>
            </div>
            <div className="col-span-2 p-4">
              <div className="flex gap-2 text-xs align-middle ">
                <p>June 8, 2025 | Category: Digital Transformation</p> 
              </div>
              <h1 className="text-xl font-bold text-black py-1">
                <a href="#" className="hover:text-blue-600">
                  Standard digital news
                </a>
              </h1>
              <p className="text-xs md:text-base lg:text-xs font-normal">
                Join us as we honor the brightest minds in technology. Discover the winning innovations that will redefine the future. 
              </p>
            </div>
          </div>
        </section>
      </section>

      

    </div>  

  )
}

export default NewsEvent