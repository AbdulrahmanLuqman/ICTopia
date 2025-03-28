import { Routes, Route } from "react-router-dom"
import LandingPage from "./views/LandingPage"
import AboutUs from "./views/AboutUs/AboutUs"
import Overview from "./views/AboutUs/Overview"
import History from "./views/AboutUs/History"
import ClientsAndTestimonials from "./views/AboutUs/ClientsAndTestimonials"
import PersonalBio from "./views/AboutUs/PersonalBio"
import TeamMembers from "./views/AboutUs/TeamMembers"
import Location from "./views/AboutUs/Location"
import Contact from "./views/AboutUs/Contact"
import Services from "./views/Service/Services"
import Projects from "./views/Projects"
import Blog from "./views/Blog"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Register from "./views/RegisterPage"
import Faq from "./views/Service/Faq"
import ScrollToTop from "./ScrollToTop"
import Industry from "./views/Industry"


const App = () => {

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/about-us/overview" element={<Overview/>} />
        <Route path="/about-us/history" element={<History/>} />
        <Route path="/about-us/clients-and-testimonials" element={<ClientsAndTestimonials/>} />
        <Route path="/about-us/personal-biography" element={<PersonalBio/>} />
        <Route path="/about-us/team-members" element={<TeamMembers/>} />
        <Route path="/about-us/location" element={<Location/>} />
        <Route path="/about-us/contact" element={<Contact/>} />
        
        <Route path="/services" element={<Services/>} />
        <Route path="/services/faqs" element={<Faq/>} />

        <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/industry" element={<Industry/>} />

        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App