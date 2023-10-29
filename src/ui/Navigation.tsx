import { NavLink } from "react-router-dom";
import LinkToBtn from "./LinkToBtn";
import { useState } from "react";
import Profile from "./Profile";
import MobileNav from "./MobileNav";
function Navigation() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  function handleMenu(): void {
    setMenuOpen((o) => !o);
  }
  return (
    <header className="flex items-center border-b border-secondaryBg px-6 md:px-16 lg:px-32">
      <nav className="flex w-full items-stretch justify-between  ">
        <Profile name="Bon" />
        <div className=" hidden divide-x divide-primaryBg  rounded-full bg-secondaryBg md:flex">
          <NavLink
            onClick={handleMenu}
            to="home"
            className="flex items-center justify-center rounded-l-full px-4 text-lg font-bold text-primary duration-300 hover:text-highlight  focus:outline-none focus:ring-1 focus:ring-highlight focus:ring-offset-2  focus:ring-offset-primaryBg "
          >
            <span> Home</span>
          </NavLink>
          <NavLink
            onClick={handleMenu}
            to="works"
            className="flex items-center justify-center px-4 text-lg font-bold text-primary duration-300 hover:text-highlight focus:outline-none  focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg "
          >
            <span>Works</span>
          </NavLink>
          <NavLink
            onClick={handleMenu}
            to="about"
            className="flex  items-center  justify-center rounded-r-full px-4 text-lg font-bold text-primary duration-300 hover:text-highlight focus:outline-none  focus:ring-1 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primaryBg "
          >
            <span> About</span>
          </NavLink>
        </div>
        <div className="hidden md:flex">
          <LinkToBtn type="primary" to="/about/contact">
            <span>Get In Touch</span>
          </LinkToBtn>
        </div>

        <MobileNav menuOpen={menuOpen} handleMenu={handleMenu} />
      </nav>
    </header>
  );
}

export default Navigation;
