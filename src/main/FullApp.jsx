import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function FullApp() {
  return (
    <div className="w-screen flex pl-3 ">
      <Menu />
      <div className="h-screen bg-white w-[90%] ml-5 mt-3 rounded-2xl " >
      <Outlet />
      </div>
    </div>
  );
}

export default FullApp;
