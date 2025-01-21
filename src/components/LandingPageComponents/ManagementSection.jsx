import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import team_01 from '../../image/team_01.jpg'; // Adjust the import path as necessary
import team_02 from '../../image/team_02.jpg'; // Placeholder image
import team_03 from '../../image/team_03.jpg'; // Placeholder image
import team_04 from '../../image/team_04.jpg'; // Placeholder image

const ManagementSection = () => {
  const teamMembers = [
    {
      name: "Mr. Muhsin Anjorin",
      position: "Team Lead Dervac Company",
      image: team_01,
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      name: "Ms. Jane Doe",
      position: "Chief Operating Officer",
      image: team_02,
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      name: "Mr. John Smith",
      position: "Chief Technology Officer",
      image: team_03,
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      name: "Ms. Emily Johnson",
      position: "Chief Marketing Officer",
      image: team_04,
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
  ];

  return (
    <section className="w-full h-fit overflow-hidden bg-[#f2f1ed] p-8 lg:p-24 text-black">
      <div className="container mx-auto">
        <div className="text-center">
          <h5 className="text-sm">LEARN MORE</h5>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Our Management</h1>
          <div className="w-24 h-1 bg-[#54c4cf] mx-auto mb-4"></div>
          <p className="lg:w-2/3 mx-auto text-base md:text-lg leading-relaxed">
            Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </p>
        </div>
        <div className="pt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full h-96 flex flex-col">
              <div className="w-full h-3/4 relative cursor-pointer">
                <div className="absolute w-full h-full z-20 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
                  <div className="absolute top-0 left-0 h-full bg-black opacity-30 z-20 w-full"></div>
                  <div className="rounded-full flex items-center justify-center w-8 h-8 border-4 border-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <IoMdAdd className="text-white" size={32} />
                  </div>
                </div>
                <img className="w-full h-full absolute top-0 left-0 z-0 object-cover" src={member.image} alt={member.name} />
              </div>
              <div className="w-full h-1/4 p-4 bg-white flex flex-col justify-between">
                <div className="flex-col flex">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p>{member.position}</p>
                </div>
                <div className="flex items-center gap-4">
                  {member.social.map((social, idx) => (
                    <a key={idx} href={social.link} className="text-gray-800 hover:text-[#54c4cf]">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;