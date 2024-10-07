/* eslint-disable react/prop-types */

import { PiAirplaneLight } from "react-icons/pi";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { BsBicycle } from "react-icons/bs";
import { PiDrop } from "react-icons/pi";
import { SiMoleculer } from "react-icons/si";
import { HiCubeTransparent } from "react-icons/hi";
import { TfiPackage } from "react-icons/tfi";


const IndustryProps = ({icon, title, text}) => {
  return (
    <div className="">
      <p className="text-white text-6xl py-1">{icon}</p>  
      <p className="font-bold text-xl py-1">{title}</p>
      <p className="font-normal text-sm py-2">{text}</p>
    </div>
  )
}


const IndustriesServed = () => {
  return (
    <div className="relative bg-center bg-serviceBg bg-fixed bg-cover  text-white">
      <div className="bg-black opacity-60 px-24 py-20">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-lg font-light">OUR SERVICES</h1>
            <h1 className="font-extrabold text-4xl py-4 text-white">Industries Served</h1>      
            <div className="w-16 bg-blue-800 h-[2px] rounded-lg my-2"></div>
            <h1 className="text-base font-semibold py-1">
              Override the digital divide with additional clickthroughs from  DevOps. Nanotechnology immersion along the information highway will  close the loop on focusing solely on the bottom line.
            </h1>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-x-10 gap-y-8 py-10">
          <IndustryProps icon={<PiAirplaneLight />} title={'Aerospace'} text={'Automotive components and assemblies are subject to performance evaluations according to industry standards.'} />
          <IndustryProps icon={<LiaCarSideSolid />} title={'Automotive'} text={'The materials selection process and safety protocols rank aerospace among the most carefully regulated in industry today.'} />
          <IndustryProps icon={<HiCubeTransparent />} title={'Coatings & Plating'} text={'Testing materials with a desired outward appearance and protection from corrosion, heat, abrasion, and chemicals.'} />
          <IndustryProps icon={<BsBicycle />} title={'Consumer Products & Toys'} text={'Industrial has enhanced our services to include the latest technology for testing toys and childrens products.'} />
          <IndustryProps icon={<PiDrop />} title={'Oil & Gas'} text={'Our scope of work includes testing for structural fabrication, pressure systems and material selection.'} />
          <IndustryProps icon={<SiMoleculer />} title={'Plastics & Composites'} text={'Physcial, mechanical testing, spectrometric and microscopic characterization that benefit our client’s product development.'} />
          <IndustryProps icon={<TfiPackage />} title={'Packaging & Plastics'} text={'For many years, Industrial has conducted field studies involving the public for the purposes of product screening.'} />
          <IndustryProps icon={<FaReact />} title={'Nuclear'} text={'Routine testing includes data collection for CMTR generation using mechanical, chemical and metallurgical techniques.'} />
        </div>

      </div>

    </div>
  )
}

export default IndustriesServed