import Login from "./login";
import img from "../assets/Rectangle 16.png";
function Register() {
  return (
    <div className="w-screen flex register h-screen">
      <div className="w-1/2 bg-white h-full flex gap-3 flex-col items-center justify-center">
        <img src={img} className="w-68 h-68 " />
        <h1 className="text-lg font-bold ">ارفع سمة الطفل بسهولة من أي جهاز</h1>
        <p className="text-gray-400 pt-3">تعتمد منصتنا على تحليل رسومات الأطفال باعتبارها وسيبة غير لفظية لفهم مشاعرهم</p>
      </div>
      <Login />
    </div>
  );
}

export default Register;
