import About from "./About";
import Banner from "./Banner";
import Educations from "./Educations";
import Navbar from "./Navbar";

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
      <div id="projects" className="container mx-auto px-2 lg:px-0 py-10">
        projects
      </div>
      <div id="skills" className="container mx-auto px-2 lg:px-0 py-10">
        Skills
      </div>
    </div>
  );
};

export default Home;
