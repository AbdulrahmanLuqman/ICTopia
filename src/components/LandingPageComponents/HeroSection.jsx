import { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipe handler
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "/images/sec-students.jpg",
      heading: "Innovate. Complete. Excel. Create",
      description:
        "Empowering the next generation of ICT leaders and disruptors.",
    },
    {
      id: 2,
      image: "/images/programing.jpg",
      heading: "Shaping the Future of Tech Innovation",
      description:
        "A platform for creative minds to redefine digital innovation.",
    },
    {
      id: 3,
      image: "/images/code.jpg",
      heading: "Where Innovation Meets Opportunity",
      description:
        "Empowering the next generation of ICT leaders and disruptors.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-[500px] overflow-hidden md:h-[550px] lg:h-[630px]"
    >
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
            className="w-full h-full lg:h-[850px] object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 grid mx-6 my-28 bg-white bg-opacity-50 p-4 sm:w-[500px] sm:px-6 md:w-[550px] md:ml-12 md:px-8 lg:w-[650px] lg:ml-20 lg:px-12">
            <div className="text-left font-bold text-black m-auto">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px]">
                {slide.heading}
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                {slide.description}
              </p>
              <div className="bg-[#2e3192] h-0.5 my-4 lg:h-1 lg:my-6"></div>
              <button className="flex items-center gap-2 border-2 border-[#2e3192] p-3 text-[#2e3192] text-xs rounded-lg font-bold lg:text-sm">
                FIND MORE
                <SlArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        aria-label="Previous Slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 border-2 border-gray-400 rounded-lg bg-opacity-40 text-black p-3 ml-2 hover:bg-white hover:bg-opacity-70 transition-all lg:p-4"
      >
        <SlArrowLeft className="w-4 h-4 text-white lg:w-5 lg:h-5" />
      </button>
      <button
        aria-label="Next Slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-gray-400 rounded-lg text-black p-3 mr-2 hover:bg-white hover:bg-opacity-50 transition-all lg:p-4"
      >
        <SlArrowRight className="w-4 h-4 text-white lg:w-5 lg:h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2 p-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 w-2 rounded-full border-2 transition-all lg:h-3 lg:w-3 ${
              currentSlide === idx ? "bg-white w-4 lg:w-5" : "opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
