import HeroSection from "../components/LandingPageComponents/HeroSection"
import ServicesSection from "../components/LandingPageComponents/ServicesSection/ServicesSection"
import ManagementSection from "../components/LandingPageComponents/management"
import NewsEvent from "../components/LandingPageComponents/NewsEvent"

const LandingPage = () => {
  return (
    <main>
        <HeroSection />
        <ServicesSection />
        <ManagementSection />
        <NewsEvent />
    </main>
  )
}

export default LandingPage