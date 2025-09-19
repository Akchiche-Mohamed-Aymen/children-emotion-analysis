import React from "react";

export default function General() {
  return (
    <div className="w-2xl">
      <div className="bg-gray-100 flex flex-col gap-3 p-5 mb-5 rounded-md">
        <h1 className="text-2xl font-bold"> معلومات الدخول و اعدادات الأمان</h1>
        <p className="text-gray-500 font-medium">
          يمكنك من هنا تعديل بيانات الدخول الخاصة بك و تحديث كلمة المرور لضمان
          حماية حساب المؤسسة
        </p>
      </div>
      <form
        className="w-full bg-gray-100 rounded-2xl shadow-md p-6 text-right"
      >

        <label className="block mb-3">
          <span className="text-sm">البريد الإلكتروني</span>
          <input
            name="email"
            type="email"
            required
            placeholder="البريد الإلكتروني"
            className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">كلمة المرور الحالية</span>
          <input
            name="password"
            type="password"
           
            required
            placeholder="ادخل كلمة المرور الحالية"
            className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <label className="block mb-5">
          <span className="text-sm">كلمة المرور الجديدة</span>
          <input
            name="newPassword"
            type="password"
          
            required
            placeholder="ادخل كلمة المرور الجديدة"
            className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <div className="flex gap-2 w-full">{/* justify-start يعطي ترتيب الأزرار من اليمين لليسار بسبب dir=rtl */}
          <button
            type="submit"
            className="px-4 w-1/2 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            حفظ
          </button>

          <button
            type="button"
            className="px-4 py-2 w-1/2 rounded-lg bg-white border border-gray-300 text-gray-800 font-medium shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            إلغاء
          </button>
        </div>
      </form>
  

    </div>
  );
}

     