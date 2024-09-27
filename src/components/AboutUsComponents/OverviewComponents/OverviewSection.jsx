import { useEffect, useState } from "react";
import Map from "/images/location.png";
import Project1 from "/images/project-img0.jpg";
import Project2 from "/images/project-img.jpg";
import Project3 from "/images/project-img1.jpg";
import CodeService from "/images/code-services.jpg";
import ProgressBar from "/src/components/AboutUsComponents/OverviewComponents/ProgressBar";
import "/src/index.css";
import Button from "./Button";



const OverviewSection = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  // Increment progress for bar 1
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 100); // 100 milliseconds for the first bar
    return () => clearInterval(interval);
  }, []);

  // Increment progress for bar 2
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress2((prevProgress) =>
        prevProgress >= 80 ? 80 : prevProgress + 2
      );
    }, 100); // 100 milliseconds for the second bar
    return () => clearInterval(interval);
  }, []);

  // Increment progress for bar 3
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress3((prevProgress) =>
        prevProgress >= 90 ? 90 : prevProgress + 3
      );
    }, 200); // 200 milliseconds for the third bar
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="grid gap-2 px-5 py-16 md:px-8 lg:px-24">
        <p className="font-light lg:text-lg">LEARN MORE</p>
        <p className="text-4xl font-semibold tracking-wide lg:text-5xl">
          Our Network
        </p>
        <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
        <p className="py-4 md:py-6 lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          maiores rem nam architecto aut enim consequatur beatae voluptas, rerum
          earum reprehe Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe odio molestiae optio natus corrupti quis mollitia. Repudiandae
          recusandae quidem atque natus, corrupti sed, temporibus, dolore esse
          cupiditate quas amet praesentium!
        </p>
        <div>
          <button className=" bg-[#54C4CF] py-3 px-8 text-white font-semibold rounded-md lg:px-12">
            OUR HISTORY
          </button>
        </div>
      </section>

      <div className="m-5 md:mx-8 lg:mx-24">
        <img src={Map} alt="map" className="w-full" />
      </div>
      <div className="grid gap-8 text-center font-bold my-8 sm:my-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 md:mx-8 lg:mx-16">
        <p className="grid gap-2 text-3xl leading-6 md:text-5xl lg:text-6xl lg:gap-1">
          2024
          <span className="text-base font-normal xl:text-lg">ESTABLISHED</span>
        </p>
        <p className="grid gap-2 text-3xl leading-6 md:text-5xl lg:text-6xl lg:gap-1">
          +50
          <span className="text-base font-normal xl:text-lg">SCHOOLS</span>
        </p>
        <p className="grid gap-2 text-3xl leading-6 md:text-5xl lg:text-6xl lg:gap-1">
          +50
          <span className="text-base font-normal xl:text-lg">PROJECTS</span>
        </p>
        <p className="grid gap-2 text-3xl leading-6 md:text-5xl lg:text-6xl lg:gap-1">
          +100
          <span className="text-base font-normal xl:text-lg ">
            TECH SKILLS AND NETWORKING
          </span>
        </p>
      </div>

      <section className="grid gap-2 px-5 py-16 text-white bg-[#2e3192] md:px-8 lg:px-24">
        <p className="text-4xl font-semibold tracking-wide lg:text-5xl">
          Our Projects
        </p>
        <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
        <p className="py-4 md:py-6 lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          maiores rem nam architecto aut enim consequatur beatae voluptas, rerum
          earum reprehenderit cupiditate officia iure, odit tempora laudantium
          accusamus a exercitationem!
        </p>
        <p className="lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          natus inventore in quidem perferendis! Autem asperiores minus ullam
          maiores id beatae voluptas perspiciatis corporis fugit, aut quod ut
          quasi quos.
        </p>
        <div className="py-8">
          <Button
            title="OUR HISTORY"
            className="bg-[#54C4CF] py-3 px-8 text-white font-semibold rounded-md mt-8 lg:px-12"
          />
        </div>

        <section className="grid gap-6 text-center sm:grid sm:gap-8 sm:grid-cols-2">
          <div className="relative group overflow-hidden">
            <img
              src={Project1}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-4 bg-white bg-opacity-80 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex flex-col justify-center items-center text-black">
              <h2 className="text-2xl font-semibold">PROJECT</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={Project2}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-4 bg-white bg-opacity-80 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex flex-col justify-center items-center text-black">
              <h2 className="text-2xl font-semibold">
                WEB AND SOFTWARE DEVELOPMENT
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={Project3}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-4 bg-white bg-opacity-80 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex flex-col justify-center items-center text-black">
              <h2 className="text-2xl font-semibold">VR AND GAMING</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className="grid gap-2 px-5 py-16 md:px-8 lg:px-24">
        <img
          src={CodeService}
          alt=""
          className="w-full md:h-[640px] lg:h-[750px] xl:h-[850px]"
        />
        <p className="text-4xl font-semibold tracking-wide mt-4 lg:text-5xl">
          Our Services
        </p>
        <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
        <p className="py-4 md:py-6 lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          maiores rem nam architecto aut enim consequatur beatae voluptas, rerum
          earum reprehenderit cupiditate officia iure, odit tempora laudantium
          accusamus a exercitationem!
        </p>
        <p className="lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          maiores rem nam architecto aut enim consequatur beatae voluptas, rerum
          earum reprehenderit cupiditate officia iure, odit tempora laudantium
          accusamus a exercitationem!
        </p>
        <div>
          <Button
            title="OUR SERVICES"
            className="bg-[#54C4CF] py-3 px-8 text-white font-semibold rounded-md mt-8 lg:px-12"
          />
        </div>
      </div>

      <section className="grid gap-2 px-5 py-16 bg-map text-white md:px-8 lg:px-24">
        <p className="lg:text-lg">SHOW IT</p>
        <p className="text-4xl font-semibold tracking-wide lg:text-5xl">
          Show More Skills
        </p>
        <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
        <p className="py-4 md:py-6 lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          maiores rem nam architecto aut enim consequatur beatae voluptas, rerum
          earum reprehenderit cupiditate officia iure, odit tempora laudantium
          accusamus a exercitationem!
        </p>
        <p className="py-4 lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          maiores rem nam architecto aut enim consequatur beatae voluptas, rerum
          earum reprehenderit cupiditate officia iure, odit tempora laudantium
          accusamus a exercitationem!
        </p>
        <div className="py-6 font-medium lg:text-lg">
          <div className="relative grid gap-2 pb-3">
            <p>VISION</p>
            <ProgressBar progress={progress1} />
            <p className="mb-4 absolute top-8 right-3 lg:top-10">
              {progress1}%
            </p>
          </div>
          <div className="relative grid gap-2 pb-3">
            <p>PLAN</p>
            <ProgressBar progress={progress2} />
            <p className="mb-4 absolute top-8 right-3 lg:top-10">
              {progress2}%
            </p>
          </div>
          <div className="relative grid gap-2 pb-3">
            <p>GROWTH</p>
            <ProgressBar progress={progress3} />
            <p className="mb-4 absolute top-8 right-3 lg:top-10">
              {progress3}%
            </p>
          </div>
        </div>
        <div>
          <Button
            title="CONTACT US"
            className="bg-[#54C4CF] py-3 px-8 text-white font-semibold rounded-md mt-8 lg:px-12"
          />
        </div>
      </section>
    </div>
  );
};

export default OverviewSection;
