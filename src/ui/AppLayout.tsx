import IndicationNav from "./IndicationNav";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[120px_auto_1fr] overflow-hidden bg-primaryBg  font-fredoka  ">
      <Navigation />
      <IndicationNav />
      <main className="x overflow-y-scroll  px-6  pb-12 sm:px-20 md:px-28 lg:px-32">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
