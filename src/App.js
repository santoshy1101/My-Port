
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience"
import Service  from "./components/service/Service"; 
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from  "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
