import { useState, useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "/images/sec-students.jpg",
      heading: "Innovate",
      description:
        "Innovate, create, and lead in the world of technology. Join ICTOPIA today",
    },
    {
      id: 2,
      image: "/images/programing.jpg",
      heading: "Contest",
      description:
        "Compete with the brightest minds to solve real-world ICT challenges globally",
    },
    {
      id: 3,
      image: "/images/code.jpg",
      heading: "Collaborate",
      description:
        "Showcase your skills, gain recognition, and win exciting prizes now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };


  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };


  return (
    <>
      <div className="relative w-full h-[600px] overflow-hidden lg:h-[650px]">
        
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full lg:h-[850px] object-cover brightness-50"
            />
            <div className="absolute inset-0 mx-5 my-20 bg-white bg-opacity-60 justify-center p-4 md:w-[550px] md:ml-12 md:px-8 lg:w-[650px] lg:ml-20 lg:px-12">
              <div className="my-20 text-left font-bold text-black ">
                <h2 className="text-4xl my-4 md:5xl lg:text-6xl">
                  {slide.heading}
                </h2>
                <p className="text-lg">{slide.description}</p>
                <div className="bg-[#2e3192] h-1 my-4"></div>
              </div>
              <button className="flex items-center justify-center gap-8 border-2 border-[#2e3192] py-3 px-8 w-1/2 text-[#2e3192] rounded-lg font-extrabold">
                FIND MORE
                <SlArrowRight />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 border-2 border-gray-400 rounded-lg bg-opacity-40 text-black p-5 ml-2 hover:bg-white hover:bg-opacity-70 transition-all"
        >
          <SlArrowLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 rounded-lg text-black p-5 mr-2 hover:bg-white hover:bg-opacity-50 transition-all"
        >
          <SlArrowRight className="w-6 h-6 text-white" />
        </button>
        <div className="absolute bottom-3 w-full flex justify-center space-x-2 p-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 w-3 rounded-full border-2 ${
                currentSlide === idx ? "bg-white" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
