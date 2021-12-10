import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-clean flex flex-col">
        <Header />
        <Intro />
      </div>
      <div>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
