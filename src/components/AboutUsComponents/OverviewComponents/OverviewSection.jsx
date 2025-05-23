import { useEffect, useState } from "react";
import SubHeader from "/src/components/AboutUsComponents/ContactComponents/SubHeader";
import Map from "/images/location.png";
import Project1 from "/images/project-img0.jpg";
import Project2 from "/images/project-img.jpg";
import Project3 from "/images/project-img1.jpg";
import ProgressBar from "/src/components/AboutUsComponents/OverviewComponents/ProgressBar";
import "/src/index.css";
import Button from "./Button";
import { FiPhoneCall } from "react-icons/fi";

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
      <SubHeader
        title="HOME"
        head="About Us"
        content="At ICTOPIA, we empower students, individuals and teams through cutting-edge technology competitions, fostering innovation, problem-solving, and real-world applications of ICT skills"
      />
      <section className="lg:flex lg:items-center lg:justify-between lg:px-14">
        <section className="grid gap-2 px-5 py-12 md:px-8">
          <p className="font-light lg:text-lg">LEARN MORE</p>
          <p className="text-3xl font-semibold tracking-wide lg:text-4xl">
            Our Network
          </p>
          <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
          <p className="py-4 md:py-6 text-sm md:text-base lg:w-[420px] xl:w-[600px]">
            ICTOPIA is supported by a diverse network of educators, tech
            professionals, institutions, and organizations passionate about
            youth development. Together, we create a thriving ecosystem where
            students can connect, learn, and grow. From local schools to global
            tech partners, our network fosters collaboration and continuous
            learning opportunities. Powered by{" "}
            <a
              href="https://dervac.com/"
              target="_blank"
              className="text-[#54C4CF] font-medium"
            >
              Dervac
            </a>
          </p>
          <div>
            <Button
              title="OUR HISTORY"
              className="flex items-center gap-2 bg-[#54C4CF] py-3 px-8 text-white font-semibold lg:px-12"
            />
          </div>
        </section>
        <div className="mx-8 md:mx-16 lg:mr-6 lg:ml-0">
          <img src={Map} alt="map" className="w-full lg:w-[650px]" />
        </div>
      </section>

      <div className="grid gap-6 py-8 px-7 md:flex md:items-center md:justify-center md:gap-12 md:py-10 lg:gap-4 lg:px-20">
        <div className="flex items-center gap-4">
          <FiPhoneCall className="text-4xl text-[#54C4CF] md:text-5xl" />
          <div className="">
            <p className="text-lg font-semibold">Call center</p>
            <p className="text-sm">
              Give us a toll free call at <br />{" "}
              <a className="text-[#54C4CF]" href="tel:+2349029285309">
                +2349029285309
              </a>{" "}
              or{" "}
              <a className="text-[#54C4CF]" href="tel:+60147442379">
                +60147442379
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-12 text-center font-bold my-10 sm:grid sm:grid-cols-2 lg:grid-cols-4 md:mx-10 lg:mx-24 lg:mb-16">
        <p className="grid gap-2 text-3xl leading-6 md:text-4xl lg:text-5xl lg:gap-1">
          2024
          <span className="text-sm font-light lg:text-base">ESTABLISHED</span>
        </p>
        <p className="grid gap-2 text-3xl leading-6 md:text-4xl lg:text-5xl lg:gap-1">
          +50
          <span className="text-sm font-light lg:text-base">SCHOOLS</span>
        </p>
        <p className="grid gap-2 text-3xl leading-6 md:text-4xl lg:text-5xl lg:gap-1">
          +50
          <span className="text-sm font-light lg:text-base">
            PROJECTS SUBMITTED
          </span>
        </p>
        <p className="grid gap-2 text-3xl leading-6 md:text-4xl lg:text-5xl lg:gap-1">
          +100
          <span className="text-sm font-light lg:text-base ">
            TECH SKILLS AND NETWORKING
          </span>
        </p>
      </div>

      <div className="grid py-4 px-6 text-white bg-map md:pl-8 lg:flex lg:items-center lg:justify-between lg:px-20">
        <p className="font-semibold sm:text-lg">
          Looking for a First-Class Scientific Partner?
        </p>
        <a href="tel:+2349029285309">
          <Button
            title="CONTACT US"
            className="flex items-center gap-2 bg-[#54C4CF] py-3 px-8 ml-60 mt-2 lg:px-12"
          />
        </a>
      </div>

      <section className="grid gap-2 px-5 py-16 md:px-8 lg:flex lg:px-20 xl:gap-6">
        <section>
          <p className="text-3xl font-semibold tracking-wide lg:text-4xl">
            Our Projects
          </p>
          <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
          <p className="py-4 text-sm md:text-base md:py-6">
            ICTOPIA challenges students to solve real-world problems using
            technology. Projects include software development, hardware
            integration, game design, and more.
          </p>
          <p className="text-sm md:text-base">
            Students participate in engaging IT quizzes that test and sharpen
            their knowledge of computer fundamentals, software tools, internet
            safety, coding concepts, and emerging technologies. These challenges
            promote critical thinking, speed, and digital literacy in a fun,
            competitive format
          </p>
          <div className="pb-12">
            <Button
              title="OUR HISTORY"
              className="flex items-center gap-2 bg-[#54C4CF] py-3 px-8 text-white font-semibold mt-8 lg:px-12"
            />
          </div>
        </section>

        <section className="grid gap-6 text-center sm:grid sm:gap-8 sm:grid-cols-2">
          <div className="relative group overflow-hidden ">
            <img
              src={Project1}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-4 bg-white bg-opacity-80 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex flex-col justify-center items-center text-black">
              <h2 className="lg:text-lg font-semibold">PROJECT</h2>
              <p className="mt-2 text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden ">
            <img
              src={Project2}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-4 bg-white bg-opacity-80 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex flex-col justify-center items-center text-black">
              <h2 className="lg:text-lg font-semibold">PROJECT</h2>
              <p className="mt-2 text-sm lg:text-base">
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
              <h2 className="lg:text-lg font-semibold">
                WEB AND SOFTWARE DEVELOPMENT
              </h2>
              <p className="mt-2 text-sm lg:text-base">
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
              <h2 className="lg:text-lg font-semibold">VR AND GAMING</h2>
              <p className="mt-2 text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="grid gap-2 px-5 py-16 bg-map text-white md:px-8 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:px-20 xl:gap-5">
        <div className="lg:w-[500px] xl:w-[620px]">
          <p className="lg:text-lg">Our Aim</p>
          <p className="text-3xl font-semibold tracking-wide lg:text-4xl">
            Explore our target
          </p>
          <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
          {/* <p className="py-4 text-sm md:text-base md:py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            maiores rem nam architecto aut enim consequatur beatae voluptas,
            rerum earum reprehenderit cupiditate officia iure, odit tempora
            laudantium accusamus a exercitationem!
          </p> */}
          {/* <p className="py-4 text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            maiores rem nam architecto aut enim consequatur beatae voluptas,
            rerum earum reprehenderit cupiditate officia iure, odit tempora
            laudantium accusamus a exercitationem!
          </p> */}
        </div>
        <div className="py-6 font-medium lg:text-lg lg:w-[500px] xl:w-[620px]">
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
              {progress3} %
            </p>
          </div>
        </div>
      </section>

      <div className="my-20 grid py-4 px-6 bg-[#54c4cf] text-white md:pl-8 lg:flex lg:items-center lg:justify-between lg:px-20">
        <p className="font-semibold sm:text-lg">
          Looking for a reliable & stable partner?
        </p>
        <a href="tel:+2349029285309">
          <Button
            title="CONTACT US"
            className="flex items-center gap-2 bg-[#0106a0] py-3 px-8 ml-60 mt-2 lg:px-12"
          />
        </a>
      </div>
    </div>
  );
};

export default OverviewSection;
