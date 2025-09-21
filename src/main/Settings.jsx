import { useState } from "react";
import { useNavigate } from "react-router-dom";
import General from "./General";
import AccountSettings from "./AccountSettings";

function Settings() {
  const navigate = useNavigate();
  const [current , setCurrent] = useState(true);
  const cls = "border-1 text-black  border-gray-300 rounded-2xl p-2"
  return (
    <>
      <div className=" py-8 border-b-1  border-gray-300">
        <h1 className="text-2xl font-bold px-5 ">الاعدادات</h1>
      </div>
      <div className=" py-5 px-3 flex gap-3 border-b-1  border-gray-200">
        <button onClick={()=>setCurrent(!current)} className={`font-medium ${current ? cls : "text-gray-400"}`}>المعلومات العامة</button>
        <button onClick={()=>setCurrent(!current)} className={`font-medium ${!current ? cls : "text-gray-400"}`}>اعدادات الحساب</button>
      </div>
     <div className="w-full  flex items-center  mt-5 justify-center">
     <div className="w-2xl ">
            {current ? <General/>  : <AccountSettings/> }
     </div>
     </div>
    </>
  );
}

export default Settings;
