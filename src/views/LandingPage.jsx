import HeroSection from "../components/LandingPageComponents/HeroSection"
import ManagementSection from "../components/LandingPageComponents/ManagementSection"
import ServicesSection from "../components/LandingPageComponents/ServicesSection/ServicesSection"
import NewsEvent from "../components/LandingPageComponents/NewsEvent"

const LandingPage = () => {
  return (
    <main>
      {/* <HeroSection /> */}
        <HeroSection />
        <ServicesSection />
        <ManagementSection />
        <NewsEvent />
    </main>
  )
}

export default LandingPage