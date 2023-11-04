import { Outlet } from "react-router-dom";

function Works() {
  return (
    <div className="border-x border-x-secondaryBg px-2">
      <Outlet />
    </div>
  );
}

export default Works;
