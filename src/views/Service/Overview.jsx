import IndustriesServed from "../../components/ServicesComponents/IndustriesServed"
import OurCompany from "../../components/ServicesComponents/OurCompany"
import ServiceSection from "../../components/ServicesComponents/ServiceSection"

const Overview = () => {
  return (
    <div>
      <ServiceSection />
      <OurCompany />
      <IndustriesServed />      
    </div>
  )
}

export default Overview