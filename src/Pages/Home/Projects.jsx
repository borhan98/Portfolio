import SectionTitle from "../../Components/SectionTitle";
import UniFood from "../../Components/UniFood";

const Projects = () => {
  return (
    <div id="projects" className="pt-14 md:pt-28 pb-6">
      <div className="max-w-lg mx-auto text-center mb-14">
        <SectionTitle
          secTitle={"Some Projects"}
          secDetail={
            "Explore a showcase of my diverse and innovative web development projects, each crafted with precision and creativity."
          }
        />
      </div>
      <div>
      {/* Project 1 */}
        <UniFood />
      </div>
    </div>
  );
};

export default Projects;
