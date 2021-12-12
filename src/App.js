import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import {useState} from 'react';

function App() {
  const [mobileMenu,showMobileMenu] = useState(false)

  return (
    <div>
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu}/>
      {mobileMenu && <MobileMenu showMobileMenu={showMobileMenu}/>}
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
