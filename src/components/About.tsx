import React from 'react';
import { ShieldCheck, Truck, History } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative isolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ليه تختار شركة القبسي؟</h2>
          <p className="text-lg text-slate-600">
            خبرة أكتر من ٢٠ سنة في السوق بتخلينا دايماً في صدارة الخيارات للمزارعين والتجار. هنا الثقة مش مجرد كلمة، دي أفعال وتاريخ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 text-center md:text-right hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">جودة وأسعار منافسة</h3>
            <p className="text-slate-600 leading-relaxed">
              بنجيبلك الخلاصة من الأرض للمخزن، بأفضل جودة وسعر ينافس في السوق من غير مصاريف وسطاء كتير.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 text-center md:text-right hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shrink-0">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">أسطول سيارات متكامل</h3>
            <p className="text-slate-600 leading-relaxed">
              عربيات نقل تقيل وفريق سواقين محترفين جاهزين لتوصيل أي كمية لأي مكان في مصر بمواعيد مظبوطة ومضمونة.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 text-center md:text-right hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shrink-0">
              <History className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">٢٠ سنة من الثقة</h3>
            <p className="text-slate-600 leading-relaxed">
              استقرار وخبرة طويلة في تجارة المحاصيل. ببنني علاقات طويلة الأمد مع عملائنا والموردين عشان الكل يكون كسبان.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
