import jwtLogo from "../../assets/jwt.png";
import SectionTitle from "../../Components/SectionTitle";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className="pt-14 md:pt-28 pb-6">
      <div className="max-w-lg mx-auto text-center">
        <SectionTitle
          secTitle={"My Skills"}
          secDetail={
            "I believe in the fact that learning never stops and I am interested in learning new technologies and programming languages that will help me design and develop a better output in less time."
          }
        />
      </div>
      <div className="max-w-3xl mx-auto mt-14 grid gap-4 grid-cols-3 md:grid-cols-5">
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <FaHtml5 />
          </span>
          <CountUp end={80} suffix="%" />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md ">
            HTML
          </span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <FaCss3 />
          </span>
          <CountUp
            end={73}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">CSS</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <SiTailwindcss />
          </span>
          <CountUp
            end={67}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">Tailwind CSS</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <FaBootstrap />
          </span>
          <CountUp
            end={62}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">Bootstrap</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <RiJavascriptLine />
          </span>
          <CountUp
            end={60}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">JavaScript</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <FaReact />
          </span>
          <CountUp
            end={69}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">React JS</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <SiFirebase />
          </span>
          <CountUp
            end={60}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">Firebase</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <SiMongodb />
          </span>
          <CountUp
            end={55}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">MongoDB</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <FaNodeJs />
          </span>
          <CountUp
            end={47}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">Node JS</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <SiExpress />
          </span>
          <CountUp
            end={60}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">ExpressJS</span>
        </div>
        <div className="py-10 px-2 border flex flex-col justify-center items-center shadow-md bg-base-200 rounded-md ">
          <span className="p-4 text-[#43A656] text-3xl md:text-6xl rounded-md">
            <img src={jwtLogo} alt="" />
          </span>
          <CountUp
            end={60}
            suffix="%"
          />
          <span className="w-full text-center text-xl mt-4 py-1 font-medium bg-[#C4FED0] shadow-md">JWT</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
