import { useState } from "react";
// import OurCompany from "../../components/ServicesComponents/OurCompany";
//  const [service, setService] = useState([
//     {title: "Energy & Utilities", image:"", content:"Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables."},
//     {title: "Communication Services", image:"", content:"Nanotechnology immersion along the highway will close the loop on focusing solely on the bottom line."},
//     {title: "Internet of Things", image:"", content:"Quickly maximize timely deliverables for real-time schemas. Dramatically maintain click solutions."},
//     {title: "Product Development", image:"", content:"Professionally cultivate customer service with ideas. Dynamically innovate resource-leveling service."},
//     {title: "Industrial Automation", image:"", content:"Nanotechnology immersion along the highway will close the loop on focusing solely on the bottom line."},
//     {title: "Artificial Intelligence", image:"", content:"Keeping your eye on the ball while performing a deep dive on the start-up product mentality."},
//     {title: "Medical Devices", image:"", content:"Synergize resource relationships via premier markets. Dynamically innovate resource-leveling service."},
//     {title: "Industrial Manufacturing", image:"", content:"Seamlessly empower fully researched growth strategies and interoperable internal or “organic“ sources."}
//  ])
const CompanyService = () => {
    return (
        <div>
            <div className="w-full flex flex-col lg:px-[6rem] text-white md:px-[4rem] px-[2rem] py-[3rem] bg-center bg-[url('../public\images/background-factory-verydark.jpg')] bg-no-repeat bg-cover">
                <div className="flex w-[50%] items-center mx-auto flex-col gap-[1rem]">
                    <p className="font-[300] text-[20px] leading-[2px]">WHAT WE OFFER</p>
                    <h1 className="text-[44px] font-[500]">Our company services</h1>
                    <p className="w-[5rem] h-[4px] bg-[#54c4cf]"></p>
                    <p className="text-center text-[20px]">Holistically pontificate installed base portals after maintainable products. Nanotechnology immersion along the highway will close the loop on focusing solely on the bottom line.</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyService