import JobPlus from "../../Components/JobPlus";
import SectionTitle from "../../Components/SectionTitle";
import TechTroninx from "../../Components/TechTroninx";
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
      <div className="space-y-28">
      {/* Project 1 */}
        <UniFood />
      {/* Project 2 */}
        <JobPlus />
      {/* Project 2 */}
        <TechTroninx />
      </div>
    </div>
  );
};

export default Projects;
