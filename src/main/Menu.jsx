import Logo from "@/Logo";
import { TiHomeOutline } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useAppContext } from "@/context/AppContext";

export default function Menu() {
    const {index, setIndex} = useAppContext()
  return (
    <div className="w-72 h-screen flex flex-col justify-between p-3">
      <div>
        <Logo />
        <div className="flex select  flex-col gap-2 border-b-2 border-dashed ">
          <button  onClick={()=>setIndex(1)} className={ index == 1 && "selected"}>
            الرئيسية <TiHomeOutline />
          </button>
          <button onClick={()=>setIndex(2)} className={ index == 2 && "selected"}>
            ادارة الأطفال <MdOutlineManageAccounts />
          </button>
          <button onClick={()=>setIndex(3)} className={ index == 3 && "selected"}>
            التوصيات المقترحة <BsStars />
          </button>
        </div>
        <div className="flex select flex-col gap-2   py-3">
          <button  onClick={()=>setIndex(4)} className={ index == 4 && "selected"}>
            اضافة طفل جديد <IoMdPersonAdd />
          </button>
          <button onClick={()=>setIndex(5)}  className={ index == 5 && "selected"}>
            اضافة رسمة جديدة <IoMdAdd />
          </button>
        </div>
      </div>
      <div className="flex select flex-col gap-2  py-3">
          <button onClick={()=>setIndex(6)}  className={ index == 6 && "selected"}>
            الاعدادات <IoSettingsOutline />
          </button>
   
        </div>
    </div>
  );
}
