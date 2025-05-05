import HeroSection from "../components/LandingPageComponents/HeroSection"
import ServicesSection from "../components/LandingPageComponents/ServicesSection"
import ManagementSection from "../components/LandingPageComponents/ManagementSection"
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