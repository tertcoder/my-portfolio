import { Outlet } from "react-router-dom";

function About() {
  return (
    <div className="border-x border-x-secondaryBg px-4">
      <Outlet />
    </div>
  );
}

export default About;
