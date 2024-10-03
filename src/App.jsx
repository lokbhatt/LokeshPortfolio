import { useState } from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Testimonial from './Pages/Testimonial';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
