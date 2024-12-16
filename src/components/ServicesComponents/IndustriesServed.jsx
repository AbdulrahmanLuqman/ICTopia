/* eslint-disable react/prop-types */

import { PiAirplaneLight } from "react-icons/pi";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { BsBicycle } from "react-icons/bs";
import { PiDrop } from "react-icons/pi";
import { SiMoleculer } from "react-icons/si";
import { HiCubeTransparent } from "react-icons/hi";
import { TfiPackage } from "react-icons/tfi";

const IndustryProps = ({ icon, title, text }) => {
  return (
    <div className="">
      <p className="text-white text-6xl py-1">{icon}</p>
      <p className="font-bold text-lg md:text-xl py-1">{title}</p>
      <p className="font-normal text-sm py-2">{text}</p>
    </div>
  );
};

const IndustriesServed = () => {
  return (
    <div className="relative bg-center bg-serviceBg bg-fixed bg-cover  text-white">
      <div className="bg-black opacity-60 px-6 md:px-14 lg:px-24 py-20">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-lg font-light">What We Offer</h1>
            <h1 className="font-extrabold text-4xl py-4 text-white">
              Key Initiatives
            </h1>
            <div className="w-16 bg-blue-800 h-[2px] rounded-lg my-2"></div>
            <h1 className="text-base font-semibold py-1">
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          <IndustryProps
            icon={<PiAirplaneLight />}
            title={"Annual Summit & Talk Show"}
            text={
              "A platform to bring together thought leaders, educators, and innovators, fostering engaging discussions and insights on emerging ICT trends."
            }
          />
          <IndustryProps
            icon={<LiaCarSideSolid />}
            title={"ICT Scholarly Competitions"}
            text={
              "Competitions designed to challenge and inspire students to showcase their creativity, problem-solving, and technical skills in ICT fields."
            }
          />
          <IndustryProps
            icon={<HiCubeTransparent />}
            title={"Artificial Intelligence & Robotics"}
            text={
              "Promoting the exploration and development of AI and robotics to drive innovation, learning, and future-ready skillsets for students and educators."
            }
          />
          <IndustryProps
            icon={<BsBicycle />}
            title={"Computational Thinking"}
            text={
              "Equipping learners with the ability to solve complex problems through logical reasoning, breaking them into smaller, manageable parts."
            }
          />
          <IndustryProps
            icon={<PiDrop />}
            title={"Digital Citizenship"}
            text={
              "Teaching individuals to use technology responsibly, ethically, and effectively, while cultivating awareness of online safety and privacy."
            }
          />
          <IndustryProps
            icon={<SiMoleculer />}
            title={"Educational Technology"}
            text={
              "Enhancing teaching and learning processes through the integration of modern tools, platforms, and digital resources in classrooms."
            }
          />
          <IndustryProps
            icon={<TfiPackage />}
            title={"STEAM in Education"}
            text={
              "Focusing on Science, Technology, Engineering, Arts, and Mathematics to provide a holistic, interdisciplinary approach to education."
            }
          />
          <IndustryProps
            icon={<FaReact />}
            title={"ICT Educators ICT Careers Guides"}
            text={
              "Empowering educators with resources, roadmaps, and guidance to help students navigate ICT career opportunities and professional growth."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
