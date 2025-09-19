import Container from "./Container";
import icon from '../assets/Slected.svg'
import { useNavigate } from "react-router-dom";
function Success() {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="bg-white flex flex-col items-center gap-3 rounded-md max-w-lg w-full p-5">
      <img src={icon} alt="icon" className="w-10 h-10 mr-2" />
        <h1 className="text-lg font-bold ">
          تم تغيير كلمة المرور بنجاح
        </h1>
        <p className="text-gray-400">
          يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة{" "}
        </p>

        <button
          type="button"
          onClick={() => navigate("../")}
          className="w-full py-2 mt-5 rounded-lg bg-sky-500 text-white font-medium shadow-md hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200 transition duration-150 ease-in-out"
        >
          العودة لتسجيل الدخول
        </button>
      </div>
    </Container>
  );
}

export default Success;
