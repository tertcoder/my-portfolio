import { Link, NavLink } from "react-router-dom";
import LinkToBtn from "./LinkToBtn";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuBtn from "./MenuBtn";
import { useState } from "react";
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

        <div className="md:hidden">
          <MenuBtn name="open" onClick={handleMenu}>
            <HiBars3BottomRight />
          </MenuBtn>

          <div
            className={`absolute inset-0 z-10 flex h-screen ${
              menuOpen ? "" : "translate-x-full opacity-0"
            } justify-end bg-secondaryBg/10 p-8 pt-8 backdrop-blur-sm duration-300`}
          >
            <div className="relative flex h-[100%] w-96 flex-col rounded-md bg-primaryBg p-4 shadow-lg">
              <MenuBtn name="close" onClick={handleMenu}>
                <HiOutlineXMark />
              </MenuBtn>
              <div className="mt-6">
                <Profile name="Bon Tertius T." />
              </div>
              <div className="flex h-full flex-col justify-center gap-2">
                <NavLink
                  onClick={handleMenu}
                  className="flex items-center justify-center rounded-full bg-secondaryBg px-4 py-4 text-lg font-bold text-primary duration-300 hover:text-accent"
                  to="home"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={handleMenu}
                  className="flex items-center justify-center rounded-full bg-secondaryBg px-4 py-4 text-lg font-bold text-primary duration-300 hover:text-accent"
                  to="works"
                >
                  Works
                </NavLink>
                <NavLink
                  onClick={handleMenu}
                  className="flex items-center justify-center rounded-full bg-secondaryBg px-4 py-4 text-lg font-bold text-primary duration-300 hover:text-accent"
                  to="about"
                >
                  About
                </NavLink>
              </div>
              <div className="justify-self-end">
                <LinkToBtn
                  onClick={handleMenu}
                  type="primary"
                  custom="py-4"
                  to="/about/contact"
                >
                  <span>Get In Touch</span>
                </LinkToBtn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
type PropsType = { name: string };
function Profile({ name }: PropsType) {
  return (
    <Link
      to="home"
      className="flex items-center space-x-4 rounded-full bg-secondaryBg  pr-4 font-bold"
    >
      <img src={"./profile.png"} alt="profile" />
      <span className="text-3xl font-bold text-primary">{name}</span>
    </Link>
  );
}
