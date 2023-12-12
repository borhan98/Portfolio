import About from "./About";
import Banner from "./Banner";
import Educations from "./Educations";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Banner />
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <About />
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <Educations />
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <Projects />
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
