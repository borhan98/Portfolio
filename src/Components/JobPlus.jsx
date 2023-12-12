import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import ssOne from "../assets/JobPlus/One.png";
import ssTwo from "../assets/JobPlus/two.png";
import ssThree from "../assets/JobPlus/three.png";
import ssFour from "../assets/JobPlus/four.png";

const JobPlus = () => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium text-zinc-600 mb-4">
        Job Seeking Website
      </h3>
      <div className="divider"></div>
      <div className="grid gap-4 md:grid-cols-2 ">
        {/* Project Demo Image part */}
        <div className="grid gap-2 grid-cols-4 grid-rows-3 min-h-[420px] max-h-[450px] ">
          <figure className="col-span-2 row-span-2 p-1 rounded-md bg-[#C4FED0]">
            <img className="h-full w-full rounded-md" src={ssThree} alt="" />
          </figure>
          <figure className="col-span-2 row-span-1 p-1 rounded-md bg-[#C4FED0]">
            <img className="h-full w-full rounded-md" src={ssOne} alt="" />
          </figure>
          <figure className="col-span-2 row-span-2 p-1 rounded-md bg-[#C4FED0]">
            <img className="h-full w-full rounded-md" src={ssTwo} alt="" />
          </figure>
          <figure className="col-span-2 row-span-1 p-1 rounded-md bg-[#C4FED0]">
            <img className="h-full w-full rounded-md" src={ssFour} alt="" />
          </figure>
        </div>
        {/* Project Details part */}
        <div className="space-y-4">
          <h4 className="text-xl md:text-2xl font-medium text-zinc-600 mb-4">
            Job<span className="text-[#FF5200]">Plus</span>
          </h4>
          <p>
            &#39;JobPlus&#39; is a job seeking website.An employeer can post any
            type of jobs he/she is looking for the candidate. Users can find
            their job which jobs he/she is looking for and he/she can apply one
            time to a job post.
          </p>
          <p>
            This is a{" "}
            <strong title="MongoDB, ExpressJS, ReactJS & NodeJS">MERN</strong>{" "}
            stack project. In this project i&#39;ve implement authentication
            system for client & server site. To authenticate client site
            i&#39;ve use firebase authentication system & in the server site
            i&#39;ve used Json Web Token(JWT) authentication system.
          </p>
          <p className="flex gap-2 items-center text-xl md:text-2xl ">
            <span>Technology:</span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <FaHtml5 />
            </span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <SiTailwindcss />
            </span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <FaReact />
            </span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <SiFirebase />
            </span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <SiExpress />
            </span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <FaNodeJs />
            </span>
            <span className="text-[#43A656] border border-[#43A656] p-2 rounded-full ">
              <SiMongodb />
            </span>
          </p>
          <div className="flex gap-2">
            <a
              className="inline-block py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-6 mt-4 rounded-md font-bold text-[#43A656] border border-[#43A656] hover:bg-[#43A656] hover:text-white duration-300 "
              href="https://jobplus-5380c.web.app/"
            >
              Live Preview
            </a>
            <a
              className="inline-block py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-6 mt-4 rounded-md font-bold text-[#43A656] border border-[#43A656] hover:bg-[#43A656] hover:text-white duration-300 "
              href="https://github.com/borhan98/JobPlus-client"
            >
              Frontend Code
            </a>
            <a
              className="inline-block py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-6 mt-4 rounded-md font-bold text-[#43A656] border border-[#43A656] hover:bg-[#43A656] hover:text-white duration-300 "
              href="https://github.com/borhan98/JobPlus-Server"
            >
              Backend Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPlus;
