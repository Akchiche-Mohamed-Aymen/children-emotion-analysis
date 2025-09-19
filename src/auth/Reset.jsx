import { useNavigate } from "react-router-dom";
import Container from "./Container";

function Reset() {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="bg-white rounded-md max-w-lg w-full p-5">
        <div className="bg-gray-200 flex flex-col gap-3 p-3 mb-5 rounded-md">
          <h1 className="text-lg font-bold">اعادة تعيين كلمة المرور</h1>
          <p >
            يرجى ادخال البريد الإلكتروني المرتبط بحسابك ، وسنرسل لك رابط لإعادة
            تعيين كلمة المرور
          </p>
        </div>
        <input
          type="password"
          placeholder="كلمة المرور الجديدة"
          className="w-full px-4 py-2 mb-3 rounded-lg border border-slate-200 focus:border-sky-300 focus:outline-none transition-transform duration-150 ease-in-out focus:-translate-y-0.5 focus:shadow-[0_12px_40px_rgba(135,206,235,0.18)]"
        />
        <input
          type="password"
          placeholder="تأكيد كلمة المرور"
          className="w-full px-4 py-2 mb-3 rounded-lg border border-slate-200 focus:border-sky-300 focus:outline-none transition-transform duration-150 ease-in-out focus:-translate-y-0.5 focus:shadow-[0_12px_40px_rgba(135,206,235,0.18)]"
        />
        <button
          type="submit"
          onClick={() => navigate("../success")}
          className="w-full py-2 rounded-lg bg-sky-500 text-white font-medium shadow-md hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200 transition duration-150 ease-in-out"
        >
          تحقق
        </button>
        <p className="py-5 text-center font-bold text-blue-800">اعادة ارسال الرمز</p>
      </div>
    </Container>
  );
}

export default Reset;
