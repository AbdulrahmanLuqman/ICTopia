import OurCompany from "../../components/ServicesComponents/OurCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFireFlameCurved, faFlaskVial, faHammer, faIndustry, faSitemap, faTachometerAlt, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
const CompanyService = () => {
    return (
        <div>
            <div className="w-full flex flex-col gap-[3rem] lg:px-[6rem] text-white md:px-[4rem] px-[2rem] py-[3rem] bg-center bg-[url('../public\images/background-factory-verydark.jpg')] bg-no-repeat bg-cover">
                <div className="flex w-[50%] items-center mx-auto flex-col gap-[1rem]">
                    <p className="font-[300] text-[20px] leading-[2px]">WHAT WE OFFER</p>
                    <h1 className="text-[44px] font-[500]">Our company services</h1>
                    <p className="w-[5rem] h-[4px] bg-[#54c4cf]"></p>
                    <p className="text-center text-[20px]">Holistically pontificate installed base portals after maintainable products. Nanotechnology immersion along the highway will close the loop on focusing solely on the bottom line.</p>
                </div>
                <div className="w-full grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-[3rem]">
                    <OurCompany className="w-full" title={"Energy & Utilities"} content={"Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables."} Image={<FontAwesomeIcon icon={faFireFlameCurved} />} />
                    <OurCompany className="w-full" title={"Communication Services"} content={"Nanotechnology immersion along the highway will close the loop on focusing solely on the bottom line."} Image={<FontAwesomeIcon icon={faTachometerAlt} />} />
                    <OurCompany className="w-full" title={"Internet of Things"} content={"Quickly maximize timely deliverables for real-time schemas. Dramatically maintain click solutions."} Image={<FontAwesomeIcon icon={faTicket} />} />
                    <OurCompany className="w-full" title={"Product Development"} content={"Professionally cultivate customer service with ideas. Dynamically innovate resource-leveling service."} Image={<FontAwesomeIcon icon={faHammer} />} />
                    <OurCompany className="w-full" title={"Industrial Automation"} content={"Nanotechnology immersion along the highway will close the loop on focusing solely on the bottom line."} Image={<FontAwesomeIcon icon={faSitemap} />}  />
                    <OurCompany className="w-full" title={"Artificial Intelligence"} content={"Keeping your eye on the ball while performing a deep dive on the start-up product mentality."} Image={<FontAwesomeIcon icon={faMicrochip} />} />
                    <OurCompany className="w-full" title={"Medical Devices"} content={"Synergize resource relationships via premier markets. Dynamically innovate resource-leveling service."} Image={<FontAwesomeIcon icon={faFlaskVial} />} />
                    <OurCompany className="w-full" title={"Industrial Manufacturing"} content={"Seamlessly empower fully researched growth strategies and interoperable internal or “organic“ sources."} Image={<FontAwesomeIcon icon={faIndustry} />} />
                </div>
            </div>
        </div>
    )
}

export default CompanyService