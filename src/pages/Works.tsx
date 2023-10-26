import { Outlet } from "react-router-dom";

function Works() {
  return (
    <div className="border-x border-x-secondaryBg">
      <Outlet />
    </div>
  );
}

export default Works;
