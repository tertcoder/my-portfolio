import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}

export default About;
