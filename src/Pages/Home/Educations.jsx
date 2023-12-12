import SectionTitle from "../../Components/SectionTitle";
import { FaGraduationCap, FaCircleCheck } from "react-icons/fa6";

const Educations = () => {
  return (
    <div id="educations" className="pt-14 md:pt-28 pb-6">
      <div className="max-w-lg mx-auto text-center">
        <SectionTitle
          secTitle={"Educational Qualifications"}
          secDetail={
            "Credentials that power my code. Uncover my educational journey in a glance, fueling my prowess in front-end development"
          }
        />
      </div>
      {/* ------------------------------------------------------- */}
      <ul className="timeline timeline-vertical mt-14">
        <li>
          <div className="timeline-middle p-3 border-4 border-[#43A656] rounded-full ">
            <span className="text-xl md:text-2xl text-[#43A656] ">
              <FaGraduationCap />
            </span>
          </div>
          <hr className="bg-[#43A656] h-10" />
        </li>
        <li>
          <hr className="bg-[#43A656]" />
          <div className="timeline-middle p-1 border-4 border-[#43A656] rounded-full ">
            <span className="text-[#43A656] ">
              <FaCircleCheck />
            </span>
          </div>
          <div className="my_shadow timeline-start timeline-box text-right py-4 mt-6 text-zinc-600">
            <h4 className="text-xl font-medium">
              Diploma in Computer Engineering
            </h4>
            <p>Magura College of Engineering & Technology, Magura</p>
            <span className="uppercase">Jul 2018 - Dec 2022</span>
            <p>CGPA- 3.81 Out of 4.00</p>
          </div>
          <hr className="bg-[#43A656]" />
        </li>
        <li>
          <hr className="bg-[#43A656]" />
          <div className="my_shadow timeline-end timeline-box py-4 mt-6 text-zinc-600">
            <h4 className="text-xl font-medium">
              Industrial Attachment in Professional Web Design
            </h4>
            <p>Creative IT Institute</p>
            <span className="uppercase">
              Sec# 07, Azampur, Uttara, Dhaka-1230
            </span>
            <p>Duration : 3 Months</p>
          </div>
          <div className="timeline-middle p-1 border-4 border-[#43A656] rounded-full ">
            <span className="text-[#43A656] ">
              <FaCircleCheck />
            </span>
          </div>
          <hr className="bg-[#43A656]" />
        </li>
        <li>
          <hr className="bg-[#43A656]" />
          <div className="timeline-middle p-1 border-4 border-[#43A656] rounded-full ">
            <span className="text-[#43A656] ">
              <FaCircleCheck />
            </span>
          </div>
          <div className="my_shadow timeline-start timeline-box text-right py-4 mt-6 text-zinc-600">
            <h4 className="text-xl font-medium">
              Secondary School Certificate(S.S.C)
            </h4>
            <p>Memnagar B.D High School, Dorshana, Chuadanga</p>
            <span className="uppercase">Jan 2013 - Dec 2018</span>
            <p>GPA- 3.83 Out of 5.00</p>
          </div>
          <hr className="bg-[#43A656]" />
        </li>
      </ul>
    </div>
  );
};

export default Educations;
