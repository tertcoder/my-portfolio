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
              className="px-2 py-1 text-sm font-semibold text-secondary"
            >
              Projects
            </NavLink>
            <NavLink
              to="/works/experiences"
              className="px-2 py-1 text-sm font-semibold text-secondary"
            >
              Experiences
            </NavLink>
          </>
        )}
        {location.startsWith("/about/") && (
          <>
            <NavLink
              to="/about/me"
              className="px-2 py-1 text-sm font-semibold text-secondary"
            >
              Me
            </NavLink>
            <NavLink
              to="/about/contact"
              className="px-2 py-1 text-sm font-semibold text-secondary"
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
