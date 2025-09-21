const recommendations = [
    {
      type: "مرتفع",
      recommendation: "توفير جلسات دعم نفسي جماعي للأطفال",
      clarification: "يساعد الأطفال على التعبير عن مشاعرهم في بيئة آمنة والتقليل من التوتر والقلق",
      finished: false,
    },
    {
      type: "مرتفع",
      recommendation: "تدريب الأهل على أساليب التعامل مع الصدمات",
      clarification: "الأهل هم المصدر الأول للأمان، وتثقيفهم يحسن استقرار الحالة النفسية للأطفال",
      finished: false,
    },
    {
      type: "متوسط",
      recommendation: "إدماج أنشطة ترفيهية منظمة (لعب، رسم، غناء)",
      clarification: "الأنشطة الإبداعية تخفف من آثار الصدمات وتوفر متنفساً صحياً للتعبير",
      finished: false,
    },
    {
      type: "منخفض",
      recommendation: "متابعة دورية مع مختصين نفسيين عبر المدارس أو الجمعيات",
      clarification: "تضمن اكتشاف الحالات الأكثر تأثراً مبكراً ومعالجتها قبل تفاقمها",
      finished: false,
    },
    {
      type: "متوسط",
      recommendation: "إنشاء مساحات آمنة للأطفال للعب بعيداً عن أصوات القصف",
      clarification: "البيئة الهادئة تخفف القلق وتعزز الشعور بالأمان",
      finished: false,
    },
  ];

import React from 'react'

import { useState } from "react";

function RecommendationCard({ type, recommendation, clarification }) {
  const [finished, setFinished] = useState(false);

  const typeColor = {
    "مرتفع": "text-red-600 border-red-600 bg-red-200 rounded-lg p-1",
    "متوسط": "text-yellow-600 border-yellow-600 bg-yellow-200 rounded-lg p-1",
    "منخفض": "text-green-600 border-green-600 bg-green-200 rounded-lg p-1",
  };

  return (
    <div className="flex justify-between items-start p-4 w-[95%] mx-auto   rounded-lg shadow-sm bg-white">
      <div>
        <span className={`text-sm font-semibold ${typeColor[type]}`}>
          {type}
        </span>
        <h3 className="font-semibold text-gray-800 mt-1">{recommendation}</h3>
        <p className="text-sm text-gray-500 mt-1">{clarification}</p>
      </div>

      <button
        onClick={() => setFinished(!finished)}
        className="text-sm border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-100"
      >
        {finished ? "غير مكتمل" : "تعيين كمكتمل"}
      </button>
    </div>
  );
}

export default function RecommendationsList() {
  return (
    <div className="space-y-3 bg-gray-100 pt-12 pb-5">
      {recommendations.map((r, i) => (
        <RecommendationCard
          key={i}
          type={r.type}
          recommendation={r.recommendation}
          clarification={r.clarification}
        />
      ))}
    </div>
  );
}
