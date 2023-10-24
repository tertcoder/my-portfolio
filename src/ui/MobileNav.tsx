import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuBtn from "./MenuBtn";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import LinkToBtn from "./LinkToBtn";
import { useEffect, useRef } from "react";
// import { useAnimate } from "framer-motion";
// import { useEffect } from "react";

type PropsType = {
  menuOpen: boolean;
  handleMenu: () => void;
};
function MobileNav({ menuOpen, handleMenu }: PropsType) {
  const menuContainer = useRef(null);
  useEffect(() => {
    function handleClick(e: Event) {
      if (e.target === menuContainer.current) handleMenu();
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleMenu, menuContainer]);
  return (
    <div className="md:hidden">
      <MenuBtn name="open" onClick={handleMenu}>
        <HiBars3BottomRight />
      </MenuBtn>

      <div
        className={`menu absolute inset-0 z-10 flex  ${
          menuOpen ? "scale-100" : "scale-0"
        } origin-top justify-end bg-secondaryBg/10 p-8 pt-8 backdrop-blur-sm duration-150 ease-in`}
        ref={menuContainer}
      >
        <div className="relative flex h-[100%] w-96 flex-col rounded-md bg-primaryBg p-4 shadow-lg">
          <MenuBtn name="close" onClick={handleMenu}>
            <HiOutlineXMark />
          </MenuBtn>
          <div className="mt-6" onClick={handleMenu}>
            <Profile name="Bon Tertius" />
          </div>
          <div className="flex h-full flex-col justify-center gap-2">
            <NavLink
              onClick={handleMenu}
              className="flex items-center justify-center rounded-full bg-secondaryBg px-4 py-3.5 text-lg font-bold text-primary duration-300 hover:text-accent"
              to="home"
            >
              Home
            </NavLink>
            <NavLink
              onClick={handleMenu}
              className="flex items-center justify-center rounded-full bg-secondaryBg px-4 py-3.5 text-lg font-bold text-primary duration-300 hover:text-accent"
              to="works"
            >
              Works
            </NavLink>
            <NavLink
              onClick={handleMenu}
              className="flex items-center justify-center rounded-full bg-secondaryBg px-4 py-3.5 text-lg font-bold text-primary duration-300 hover:text-accent"
              to="about"
            >
              About
            </NavLink>
          </div>
          <div className="justify-self-end">
            <LinkToBtn
              onClick={handleMenu}
              type="primary"
              custom="py-3.5"
              to="/about/contact"
            >
              <span>Get In Touch</span>
            </LinkToBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileNav;
