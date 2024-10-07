import HeroSection from "../components/LandingPageComponents/HeroSection"
import ManagementSection from "../components/LandingPageComponents/ManagementSection"
import NewsEvent from "../components/LandingPageComponents/NewsEvent"
import IndustriesServed from "../components/ServicesComponents/IndustriesServed"

const LandingPage = () => {
  return (
    <main>
      {/* <HeroSection /> */}
        <HeroSection />
        <IndustriesServed />
        <ManagementSection />
        <NewsEvent />
    </main>
  )
}

export default LandingPage