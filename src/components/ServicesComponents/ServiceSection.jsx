import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import autoMobile from "/images/bio1.jpg";
import chemicalReasearch from "/images/chemical-research.jpg";
import powerEnergy from "/images/bio3.jpg";
import mechanicalEngineering from "/images/bio4.jpg";
import constructionEngineering from "/images/constrution.jpg";
import maintenance from "/images/bio2.jpg";
import projectOne from "/images/project-1.jpg"
import projectTwo from "/images/project-2.jpg"
import projectThree from "/images/project-3.jpg"
import projectFour from "/images/project-4.jpg"


const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); 
  };

  const items = [
    { id: 1, title: "Automotive parts and systems", image: autoMobile },
    { id: 2, title: "Chemical research", image: chemicalReasearch },
    { id: 3, title: "Power & Energy", image: powerEnergy },
    { id: 4, title: "Mechanical and engineering", image: mechanicalEngineering },
    { id: 5, title: "Construction & Engineering", image: constructionEngineering },
    { id: 6, title: "Maintenance", image: maintenance }
  ];

  const energyPlants = [
    {
      id: 1,
      image: projectOne,
    },
    {
      id: 2,
      image: projectTwo,
    },
    {
      id: 3,
      image: projectThree,
    },
    {
      id: 4,
      image: projectFour,
    },
  ]

  return (
    <>
      <div className='bg-slate-900 flex flex-col gap-4 text-lg text-white md:px-24 sm:px-12 px-4 py-16'>
        <div className='flex sm:flex-row flex-col items-center gap-3'>
            <p>HOME</p>
            <div className='h-[4px] w-[4px] bg-white rounded-full'></div>
            <p>ABOUT US</p>
        </div>

        <h1 className='md:text-5xl sm:text-3xl text-lg'>Services</h1>

        <p className='md:w-[60%] font-medium '>Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
      </div>
    
      <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-2 md:px-24 sm:px-12 px-2 py-16">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`w-full h-full absolute cursor-pointer bg-black opacity-70 transition-all duration-[5000ms] z-40 ${
                hoveredIndex === index ? "flex" : "hidden"
              } flex-col justify-center gap-2`}
            >
              <CiCirclePlus className="text-white mx-auto md:text-5xl" />
              <p className="text-white font-semibold text-center">{item.title}</p>
            </div>
            <img className="h-full" src={item.image} alt={item.title} />
            <div className={`p-2 absolute bottom-0 duration-[5000ms] transition-all left-0 border-s-8 bg-white border-blue-400 font-bold text-lg ${hoveredIndex === index ? "hidden" : "block"}`}>
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div>
        <div className="flex md:flex-row flex-col justify-between items-center md:px-24 sm:px-12 px-2 py-16">
          <div className="md:w-[70%] w-full flex flex-col gap-2 py-2">
            <p>LATEST PROJECT</p>
            <h1 className="text-4xl font-semibold">Wind Energy Plant</h1>
            <div className="h-[3px] w-[30%] bg-blue-400"></div>
          </div>

          <div>
            <p className="leading-8">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. Capitalise on low hanging fruit to identify a ballpark.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:px-24 sm:px-12 px-2 py-16 lg:gap-8 md:gap-4 sm:gap-3">
          {
            energyPlants.map((energy, index) => (
              <div key={energy.id} onMouseOver={index = energy.id} className="relative">
                <img className="w-full" src={energy.image} alt="Project" />
                <div
                  className={`w-full h-full absolute left-0 top-0 cursor-pointer bg-black opacity-70 transition-all duration-[5000ms] z-40 ${index === energy.id ? "flex" : "hidden"} flex-col justify-center gap-2`}>
                  <CiCirclePlus className="text-white mx-auto md:text-5xl" />
                  <p className="text-white font-semibold text-center">View Project</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </>
  );
};

export default ServiceSection;