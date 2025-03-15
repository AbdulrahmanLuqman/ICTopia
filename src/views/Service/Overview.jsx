import IndustriesServed from "../../components/ServicesComponents/IndustriesServed"
import CompanyService from "./CompanyService"
import ServiceSection from "../../components/ServicesComponents/ServiceSection"

const Overview = () => {
  return (
    <div>
      <ServiceSection />
      <CompanyService />
      <IndustriesServed />      
    </div>
  )
}

export default Overview