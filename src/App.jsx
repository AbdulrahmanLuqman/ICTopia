import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Loading from "./components/Loading";

const LandingPage = lazy(() => import("./views/LandingPage"));
const AboutUs = lazy(() => import("./views/AboutUs/AboutUs"));
const Overview = lazy(() => import("./views/AboutUs/Overview"));
const History = lazy(() => import("./views/AboutUs/History"));
const ClientsAndTestimonials = lazy(() => import("./views/AboutUs/ClientsAndTestimonials"));
const PersonalBio = lazy(() => import("./views/AboutUs/PersonalBio"));
const TeamMembers = lazy(() => import("./views/AboutUs/TeamMembers"));
const Location = lazy(() => import("./views/AboutUs/Location"));
const Contact = lazy(() => import("./views/AboutUs/Contact"));
const Services = lazy(() => import("./views/Service/Services"));
const Faq = lazy(() => import("./views/Service/Faq"));
const Projects = lazy(() => import("./views/Projects"));
const Blog = lazy(() => import("./views/Blog"));
const Industry = lazy(() => import("./views/Industry"));

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/overview" element={<Overview />} />
          <Route path="/about-us/history" element={<History />} />
          <Route path="/about-us/clients-and-testimonials" element={<ClientsAndTestimonials />} />
          <Route path="/about-us/personal-biography" element={<PersonalBio />} />
          <Route path="/about-us/team-members" element={<TeamMembers />} />
          <Route path="/about-us/location" element={<Location />} />
          <Route path="/about-us/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/faqs" element={<Faq />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/industry" element={<Industry />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;