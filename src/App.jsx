import { Routes, Route } from "react-router-dom"
import LandingPage from "./views/LandingPage"
import AboutUs from "./views/AboutUs/AboutUs"
import Overview from "./views/AboutUs/Overview"
import TeamMembers from "./views/AboutUs/TeamMembers"
import Contact from "./views/AboutUs/Contact"
import Blog from "./views/Blog"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Register from "./views/RegisterPage"
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
        <Route path="/about-us/team-members" element={<TeamMembers/>} />
        <Route path="/about-us/contact" element={<Contact/>} />
        
        
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/industry" element={<Industry/>} />

        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App