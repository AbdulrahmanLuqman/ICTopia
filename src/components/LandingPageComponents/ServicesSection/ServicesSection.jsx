import Service from './ServicesSectionImages/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp, faLaptop, faFireFlameSimple, faSuitcase, faAtom, faTruckPickup} from '@fortawesome/free-solid-svg-icons';
const ServicesSection = () => {
  return (
    <div className='bg-service-img bg-cover bg-center bg-blue-600 md:p-24 p-4 sm:text-left text-center'>
      <div>
        <p className='sm:text-5xl mb-5'>OUR SERVICES</p>
        <h1 className='sm:text-3xl'>Industries Served</h1>
        <div className='bg-cyan-500 h-1 lg:w-56 md:w-[27%] mt-3'></div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-8 mt-12'>
        <Service durationTime={300} servdesc={"Automotive components and assemblies are subject to performance evaluations according to industry standards"} servname={"Aerospace"} Icon={<FontAwesomeIcon icon={faPlaneUp} />} />

        <Service durationTime={300} servdesc={"The materials selection process and safety protocols rank aerospace among the most carefully regulated in industry today."} servname={"Automotive"} Icon={<FontAwesomeIcon icon={faTruckPickup} />} />


        <Service durationTime={300} servdesc={"Testing materials with a desired outward appearance and protection from corrosion, heat, abrasion, and chemicals."} servname={"Coatings & Plating"} Icon={<FontAwesomeIcon icon={faLaptop} />} />


        <Service durationTime={300} servdesc={"Industrial has enhanced our services to include the latest technology for testing toys and childrens products."} servname={"Consumer Products & Toys"} Icon={<FontAwesomeIcon icon={faFireFlameSimple} />} />


        <Service durationTime={500} servdesc={"Our scope of work includes testing for structural fabrication, pressure systems and material selection."} servname={"Oil & Gas"} Icon={<FontAwesomeIcon icon={faSuitcase} />} />


        <Service durationTime={500} servdesc={"Physcial, mechanical testing, spectrometric and microscopic characterization that benefit our client’s product development."} servname={"Plastics & Composites"} Icon={<FontAwesomeIcon icon={faAtom} />} />


        <Service durationTime={500} servdesc={"For many years, Industrial has conducted field studies involving the public for the purposes of product screening."} servname={"Packaging & Plastics"} Icon={<FontAwesomeIcon icon={faAtom} />} />


        <Service durationTime={500} servdesc={"Routine testing includes data collection for CMTR generation using mechanical, chemical and metallurgical techniques."} servname={"Nuclear"} Icon={<FontAwesomeIcon icon={faAtom} />} />
      </div>
    </div>
  )
}

export default ServicesSection
