import { useNavigate } from "react-router-dom";
import Logo from '../Logo'
function Login() {
  const navigate = useNavigate()
  return (
    <div className="px-2  w-1/2">
     <Logo  />
      <div className="min-h-screen  flex items-center justify-center p-6">
        <div className="w-full max-w-md  rounded-2xl p-8 ">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            تسجيل الدخول إلى حسابك
          </h1>
          <p className="text-slate-500 mb-6">مرحبا بك ، سجل الدخول للمتابعة</p>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full px-4 py-2 bg-white rounded-lg border border-slate-200 focus:border-sky-300 focus:outline-none transition focus:shadow-[0_8px_24px_rgba(135,206,235,0.18)]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder=". . . . ."
              className="w-full px-4 py-2 rounded-lg border bg-white border-slate-200 focus:border-sky-300 focus:outline-none transition focus:shadow-[0_8px_24px_rgba(135,206,235,0.18)]"
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-sky-500 focus:ring-sky-300"
              />
              <span className=" font-medium">تذكرني</span>
            </label>
            <button
              type="button"
              className="text-sm text-sky-800 font-lg"
              onClick={()=>navigate("../forgot")}
            >
              نسيت كلمة المرور ؟{" "}
            </button>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            onClick={()=>navigate("/main")}
            className="w-full py-2 rounded-lg bg-sky-600 text-white font-medium shadow-md hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-200 transition"
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
