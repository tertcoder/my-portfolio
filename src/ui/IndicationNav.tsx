import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { paths } from "../utilities/globalVar";

function IndicationNav() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const { pathname: location } = useLocation();

  useEffect(() => {
    const activeLink: string = paths.filter((path) => path === location)[0];
    setCurrentPage(activeLink);
  }, [location]);
  return (
    <div className="my-4 flex h-8 w-full items-center justify-between px-6  sm:px-12 md:px-24">
      <span className="text-sm font-semibold text-secondary">
        ~{currentPage}
      </span>
      <div className="flex space-x-1 divide-x divide-primaryBg  rounded-full bg-secondaryBg">
        {location.startsWith("/works/") && (
          <>
            <NavLink
              to="/works/projects"
              className="rounded-l-full px-2 py-1 text-sm font-semibold text-secondary duration-300  focus:outline-none focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg"
            >
              Projects
            </NavLink>
            <NavLink
              to="/works/experiences"
              className="rounded-r-full px-2 py-1 text-sm font-semibold text-secondary duration-300  focus:outline-none focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg"
            >
              Experiences
            </NavLink>
          </>
        )}
        {location.startsWith("/about/") && (
          <>
            <NavLink
              to="/about/me"
              className="rounded-l-full px-2 py-1 text-sm font-semibold text-secondary  duration-300 focus:outline-none focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg"
            >
              Me
            </NavLink>
            <NavLink
              to="/about/contact"
              className="rounded-r-full px-2 py-1 text-sm font-semibold text-secondary duration-300  focus:outline-none focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg"
            >
              Contact
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default IndicationNav;
