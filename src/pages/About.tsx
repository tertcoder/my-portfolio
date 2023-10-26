import { Outlet } from "react-router-dom";

function About() {
  return (
    <div className="h-full border-x border-x-secondaryBg">
      <Outlet />
    </div>
  );
}

export default About;
