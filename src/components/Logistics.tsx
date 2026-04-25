import React from 'react';
import { Truck, Clock } from 'lucide-react';

export const Logistics = () => {
  return (
    <section id="logistics" className="py-24 bg-emerald-900 relative isolate">
      <div className="absolute inset-0 -z-10 mix-blend-multiply opacity-50 bg-gradient-to-br from-emerald-800 to-slate-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 flex flex-col lg:flex-row items-center gap-12 text-white">
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-right">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-200 text-sm font-bold rounded-lg w-max mx-auto lg:mx-0 border border-emerald-400/30">خدمات النقل اللوجستي</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              نظام النقل المتكامل <br/><span className="text-emerald-400 block mt-2">AlQabasyGo</span>
            </h2>
            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed max-w-2xl text-opacity-90">
              لوجيستيات النقل هي عصب التجارة. عشان كده أسسنا أسطول متكامل من عربيات النقل التقيل وسواقين محترفين عشان نضمن خروج وتوصيل شحنتك بأسعار تنافسية وفي المواعيد المحددة بدون تأخير.
            </p>
            <div className="flex gap-6 mt-4 justify-center lg:justify-start">
              <div className="flex flex-col gap-1 items-center lg:items-start text-emerald-100">
                <Clock className="w-8 h-8 text-emerald-400 mb-2" />
                <span className="font-bold text-xl text-white">مواعيد دقيقة</span>
                <span className="text-sm">التوصيل في الميعاد</span>
              </div>
              <div className="w-px bg-white/20 hidden sm:block"></div>
              <div className="flex flex-col gap-1 items-center lg:items-start text-emerald-100">
                <Truck className="w-8 h-8 text-emerald-400 mb-2" />
                <span className="font-bold text-xl text-white">أسطول جاهز</span>
                <span className="text-sm">نقل لأي مكان في مصر</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-square bg-emerald-800/50 rounded-full border-8 border-white/5 flex items-center justify-center shrink-0 relative shadow-2xl">
            <Truck className="w-32 h-32 text-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
