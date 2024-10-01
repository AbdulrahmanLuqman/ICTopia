import { useState } from "react";
import Accordion from "././FaqComponents/Accordion";
import { BsDiagram3 } from "react-icons/bs";
import { IoCloudDownloadOutline, IoPricetagOutline } from "react-icons/io5";


const AccordionItems = [
  {
    title: "Quickly maximize timely deliverables?",
    content:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas",
  },
  {
    title: "Completely synergize resource taxing?",
    content:
      "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
  },
  {
    title: "Quickly maximize timely deliverables?",
    content:
      "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
  },
  {
    title: "Quickly maximize timely deliverables?",
    content:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas",
  },
  {
    title: "Completely synergize resource taxing?",
    content:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas",
  },
  {
    title: "Quickly maximize timely deliverables?",
    content:
      "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
  },
  {
    title: "Quickly maximize timely deliverables?",
    content:
      "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
  },
  {
    title: "Completely synergize resource taxing?",
    content:
      "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions.Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
  },
];

const FaqQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div>
        <section className="lg:px-14 lg:flex">
          <section className="lg:w-[700px] xl:w-[870px]">
            <div className="grid gap-2 px-5 pt-12 pb-4 md:px-8">
              <p className="font-light tracking-wide lg:text-lg">
                FIND AN ANSWER
              </p>
              <p className="text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl">
                Frequently Asked Questions?
              </p>
              <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
              <p className="py-4 md:py-6">
                Quickly maximize maximized timely deliverables for real-time
                schemas. Dramatically maintain solutions. Efficently unleash
                cross-media information without cross-media value
              </p>
            </div>
            <div className="mx-5 pb-10 md:mx-8">
              {AccordionItems.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </section>
          <section className="grid gap-2 px-3 py-8 mx-5 my-10 border-[1px] border-gray-200 shadow-md md:px-8 md:mx-8 lg:w-[400px] lg:h-[630px] lg:gap-0 lg:mx-6 xl:w-[500px] xl:h-[600px]">
            <p className="font-light tracking-wide xl:text-lg">
              IMPORTANT NOTE
            </p>
            <p className="text-2xl font-semibold tracking-wide lg:text-3xl lg:-mt-4 xl:text-4xl">
              Need Support?
            </p>
            <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:-mt-2 lg:w-16 xl:-mt-3"></div>
            <p className="py-4 md:py-6 lg:py-0">
              Credibly innovate granular internal or “organic“ sources whereas
              high standards in web-readiness. Energistically scale future-proof
              core.
            </p>
            <div className="flex flex-col gap-4 lg:pt-2">
              <div className="flex flex-row gap-4">
                <div className="text-3xl p-3 rounded-full text-white border-[1px] border-[#54C4CF] bg-[#54C4CF] w-14 h-14 hover:bg-white hover:text-black lg:w-11 lg:h-11 lg:p-[9px] lg:text-2xl">
                  <BsDiagram3 />
                </div>
                <div>
                  <p className="text-xl font-semibold">Vision to Plan</p>
                  <p className="py-1 lg:text-sm">
                    Completely synergize resource taxing relationships via
                    premier niche markets.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="text-3xl p-3 rounded-full text-white border-[1px] border-[#54C4CF] bg-[#54C4CF] w-14 h-14 hover:bg-white hover:text-black lg:w-11 lg:h-11 lg:p-[9px] lg:text-2xl">
                  <IoPricetagOutline />
                </div>
                <div>
                  <p className="text-xl font-semibold">Plan to Market</p>
                  <p className="py-1 lg:text-sm">
                    Holisticly predominate extensible testing procedures for
                    reliable supply chains.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="text-3xl p-3 rounded-full text-white border-[1px] border-[#54C4CF] bg-[#54C4CF] w-14 h-14 hover:bg-white hover:text-black lg:w-11 lg:h-11 lg:p-[9px] lg:text-2xl">
                  <IoCloudDownloadOutline />
                </div>
                <div>
                  <p className="text-xl font-semibold">Market to Growth</p>
                  <p className="py-1 lg:text-sm">
                    Energistically scale future-proof core competencies
                    vis-a-vis experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
}
export default FaqQ;