import React from 'react'

export default function AccountSettings() {
  return (
    <>
      <div className="bg-gray-100 flex flex-col gap-3 p-5  rounded-md">
        <h1 className="text-xl font-bold">شعار المؤسسة</h1>
        <p className="text-gray-500 font-medium pb-3">
          ييمكنك تحديث شعار المؤسسة في أي وقت برقع صورة جديدة .
          أو حذفه يفضل استخدام صورة واضحة بصيغة PNG أو JPG
        </p>
        <div>
            <div className='flex gap-2 items-center font-bold'>
            <button className='w-fit bg-red-600 text-white p-2 rounded-md'>حذف</button>
            <button className='w-fit bg-white p-2 rounded-md'>تحديث</button>
            </div>
        </div>
      </div>
      
      <form className="w-full  bg-gray-100 mt-3 rounded-2xl shadow-md p-6 text-right">
        <h2 className="text-xl font-semibold mb-4">بيانات المؤسسة</h2>

        <label className="block mb-3">
          <span className="text-sm">اسم المؤسسة</span>
          <input
            type="text"
            placeholder="ادخل اسم المؤسسة"
            className="mt-1 block  bg-white w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">نوع المؤسسة</span>
          <select
            className="mt-1  bg-white block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          >
            <option value="">اختر النوع</option>
            <option value="حضانة">حضانة</option>
            <option value="مدرسة ابتدائية">مدرسة ابتدائية</option>
            <option value="إعدادية">إعدادية</option>
          </select>
        </label>

        <label className="block mb-3">
          <span className="text-sm">متوسط عدد الأطفال</span>
          <input
            type="number"
            placeholder="مثلاً: 50"
            className="mt-1  bg-white block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">العنوان</span>
          <input
            type="text"
            placeholder="ادخل العنوان"
            className="mt-1 block  bg-white w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">رقم الترخيص</span>
          <input
            type="text"
            placeholder="ادخل رقم الترخيص"
            className="mt-1 block  bg-white w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

        <label className="block mb-5">
          <span className="text-sm">رقم التواصل الرسمي</span>
          <input
            type="tel"
            placeholder="ادخل رقم التواصل"
            className="mt-1 bg-white block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
          />
        </label>

      </form>

    </>
  )
}



