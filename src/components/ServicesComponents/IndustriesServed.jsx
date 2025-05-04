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
    <div className="bg-white text-white">
      <div className="bg-black opacity-60 px-6 md:px-14 lg:px-24 py-20">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-lg font-light">What We Offer</h1>
            <h1 className="font-extrabold text-4xl py-4 text-white">
            Our Services
            </h1>
            <div className="w-16 bg-blue-800 h-[2px] rounded-lg my-2"></div>
            <h1 className="text-base font-semibold py-1">
            At ICTOPIA, we empower individuals and teams through cutting-edge technology competitions, fostering innovation, problem-solving, and real-world applications of ICT skills
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          <IndustryProps
            icon={<PiAirplaneLight />}
            title={"Coding Challenges"}
            text={
              "Engage in high-stakes coding battles where creativity, speed, and technical prowess come together to solve real-world problems."
            }
          />
          <IndustryProps
            icon={<LiaCarSideSolid />}
            title={"Robotics & AI Competitions"}
            text={
              "Showcase your skills in artificial intelligence and robotics, building smart systems that push the boundaries of automation and machine learning."
            }
          />
          <IndustryProps
            icon={<HiCubeTransparent />}
            title={"Cybersecurity Challenges"}
            text={
              "Test your ethical hacking and security expertise in Capture The Flag (CTF) contests, securing networks and defending against cyber threats."
            }
          />
          <IndustryProps
            icon={<BsBicycle />}
            title={"Game Development & VR/AR Showcases"}
            text={
              "Unleash your imagination by designing immersive video games and interactive experiences using virtual and augmented reality."
            }
          />
          <IndustryProps
            icon={<PiDrop />}
            title={"Data Science & Analytics Contests"}
            text={
              "Transform raw data into actionable insights through machine learning, predictive modeling, and data visualization challenges"
            }
          />
          <IndustryProps
            icon={<SiMoleculer />}
            title={"UI/UX Design & Product Innovation"}
            text={
              "Redefine digital experiences with user-centric design challenges that prioritize usability, aesthetics, and accessibility."
            }
          />
          <IndustryProps
            icon={<TfiPackage />}
            title={"Embedded Systems & IoT Innovation"}
            text={
              "FCreate smart devices and IoT solutions that bridge the gap between hardware and software for real-world applications."
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
