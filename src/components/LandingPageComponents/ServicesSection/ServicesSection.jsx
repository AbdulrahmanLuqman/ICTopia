import Service from './ServicesSectionImages/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp, faLaptop, faFireFlameSimple, faSuitcase, faAtom, faTruckPickup} from '@fortawesome/free-solid-svg-icons';
const ServicesSection = () => {
  return (
    <div className='bg-service-img bg-cover bg-center bg-blue-600 md:p-24 p-4 sm:text-left text-center'>
      <div>
        <p className='sm:text-5xl mb-5'>What We Offer</p>
        <h1 className='sm:text-3xl'>Key Initiatives</h1>
        <div className='bg-cyan-500 h-1 lg:w-56 md:w-[27%] mt-3'></div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-8 mt-12'>
        <Service durationTime={300} servdesc={"A platform to bring together thought students, educators, leaders and innovators, fostering engaging discussions and insights on emerging ICT trends."} servname={"Annual Summit & Talk Show"} Icon={<FontAwesomeIcon icon={faPlaneUp} />} />

        <Service durationTime={300} servdesc={"Competitions designed to challenge and inspire students to showcase their creativity, problem-solving, and technical skills in ICT fields"} servname={"ICT Scholarly Competitions"} Icon={<FontAwesomeIcon icon={faTruckPickup} />} />


        <Service durationTime={300} servdesc={"Promoting the exploration and development of AI and robotics to drive innovation, learning, and future-ready skillsets for students and educators."} servname={"Artificial Intelligence & Robotics"} Icon={<FontAwesomeIcon icon={faLaptop} />} />


        <Service durationTime={300} servdesc={"Equipping learners with the ability to solve complex problems through logical reasoning, breaking them into smaller, manageable parts."} servname={"Computational Thinking"} Icon={<FontAwesomeIcon icon={faFireFlameSimple} />} />


        <Service durationTime={500} servdesc={"Teaching individuals to use technology responsibly, ethically, and effectively, while cultivating awareness of online safety and privacy"} servname={"Digital Citizenship"} Icon={<FontAwesomeIcon icon={faSuitcase} />} />


        <Service durationTime={500} servdesc={"Enhancing teaching and learning processes through the integration of modern tools, platforms, and digital resources in classrooms"} servname={"Educational Technology"} Icon={<FontAwesomeIcon icon={faAtom} />} />


        <Service durationTime={500} servdesc={"Focusing on Science, Technology, Engineering, Arts, and Mathematics to provide a holistic, interdisciplinary approach to education"} servname={"STEAM in Education"} Icon={<FontAwesomeIcon icon={faAtom} />} />


        <Service durationTime={500} servdesc={"Empowering educators with resources, roadmaps, and guidance to help students navigate ICT career opportunities and professional growth"} servname={"ICT Educators ICT Careers Guides"} Icon={<FontAwesomeIcon icon={faAtom} />} />
      </div>
    </div>
  )
}

export default ServicesSection
