import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { paths } from "../utilities/globalVar";
import { motion } from "framer-motion";

type ShowVariantType = {
  initial: {
    y: number;
    opacity: number;
  };
  animate: {
    y: number;
    opacity: number;
    transition: {
      duration: number;
    };
  };
};

const showVariant: ShowVariantType = {
  initial: {
    y: 5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function IndicationNav() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const { pathname: location } = useLocation();

  useEffect(() => {
    const activeLink: string = paths.filter((path) => path === location)[0];
    setCurrentPage(activeLink);
  }, [location]);

  return (
    <motion.div
      variants={showVariant}
      initial="initial"
      animate="animate"
      className="my-4 flex h-8 w-full items-center justify-between px-6 md:px-16 lg:px-32"
    >
      <motion.span
        variants={showVariant}
        className="text-sm font-semibold text-secondary"
      >
        ~{currentPage}
      </motion.span>
      <motion.div
        variants={showVariant}
        className="flex space-x-1 divide-x divide-primaryBg  rounded-full bg-secondaryBg"
      >
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
      </motion.div>
    </motion.div>
  );
}

export default IndicationNav;
