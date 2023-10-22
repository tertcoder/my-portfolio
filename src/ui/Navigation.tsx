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
    <header className="border-secondaryBg flex items-center border-b">
      <nav className="mx-6 flex w-full items-stretch justify-between sm:mx-12 md:mx-24 ">
        <Profile name="Bon" />
        <div className=" divide-primaryBg hidden divide-x  rounded-full bg-secondaryBg md:flex">
          <NavLink
            onClick={handleMenu}
            to="home"
            className="flex items-center justify-center px-4 text-lg font-bold text-primary duration-300 hover:text-accent"
          >
            <span> Home</span>
          </NavLink>
          <NavLink
            onClick={handleMenu}
            to="works"
            className="flex items-center justify-center px-4 text-lg font-bold text-primary duration-300 hover:text-accent"
          >
            <span>Works</span>
          </NavLink>
          <NavLink
            onClick={handleMenu}
            to="about"
            className="flex items-center justify-center px-4 text-lg font-bold text-primary duration-300 hover:text-accent"
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
