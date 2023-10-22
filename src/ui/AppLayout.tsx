import Navigation from "./Navigation";
import IndicationNav from "./IndicationNav";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="font-fredoka grid h-screen grid-rows-[120px_auto_1fr]  bg-primaryBg">
      <Navigation />
      <IndicationNav />
      <main className="overflow-y-scroll px-6 pb-12 sm:px-12  md:px-24">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
