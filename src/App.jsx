import { Routes, Route } from "react-router-dom"
import LandingPage from "./views/LandingPage"
import AboutUs from "./views/AboutUs"
import Services from "./views/Services"
import Projects from "./views/Projects"
import Blog from "./views/Blog"
import Header from "./components/Header"
import Footer from "./components/Footer"

// #0106a0 dark blue
// #54c4cf green
// #2e3192 faint blue
// #0058ea light blue

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs/>}>
          {/* about us children routes should be added here */}
        </Route>
        <Route path="/services" element={<Services/>}>
          {/* services children routes should be added here */}
        </Route>
        <Route path="/projects" element={<Projects/>}>
          {/* projects children routes should be added here */}
        </Route>
        <Route path="/blogs" element={<Blog/>}>
          {/* blogs children routes should be added here */}
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App