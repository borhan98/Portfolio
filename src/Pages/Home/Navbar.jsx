import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  //   const activeRoute = ({ isActive }) =>
  //     isActive
  //       ? "bg-[#43A656] py-2 px-3 rounded-md text-white"
  //       : "py-2 px-3 rounded-md";

  const menuLink = (
    <>
      <li>
        <HashLink
          className="hover:bg-[#43A656] hover:text-white uppercase"
          smooth
          to={"#home"}
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          className="hover:bg-[#43A656] hover:text-white uppercase"
          smooth
          to={"#about"}
        >
          About
        </HashLink>
      </li>
      <li>
        <HashLink
          className="hover:bg-[#43A656] hover:text-white uppercase"
          smooth
          to={"#educations"}
        >
          Educations
        </HashLink>
      </li>
      <li>
        <HashLink
          className="hover:bg-[#43A656] hover:text-white uppercase"
          smooth
          to={"#projects"}
        >
          Projects
        </HashLink>
      </li>
      <li>
        <HashLink
          className="hover:bg-[#43A656] hover:text-white uppercase"
          smooth
          to={"#skills"}
        >
          Skills
        </HashLink>
      </li>
    </>
  );

  return (
    <div className="shadow sticky top-0 bg-[#ebedff] z-50">
      <div className="container mx-auto px-2 lg:px-0 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="p-1 rounded-md bg-[#43A656] text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-40 md:w-52"
            >
              {menuLink}
            </ul>
          </div>
          <Link to={"/"}>
            <figure>
              <img
                className="w-20 md:w-28 lg:w-40"
                src={"https://i.ibb.co/DkZbcm6/Borhan-logo.png"}
                alt="Logo"
              />
            </figure>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLink}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="flex items-center gap-2 border border-[#43A656] p-1 md:p-2 rounded-md text-[12px] md:text-sm lg:text-base"
            href="callto: +8801707838498"
          >
            <span className="text-[#43A656]">
              <FaPhoneAlt />
            </span>{" "}
            +8801707838498
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
