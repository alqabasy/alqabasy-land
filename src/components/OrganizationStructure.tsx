import React from 'react';
import { Briefcase, Calculator, ShoppingCart, Headset, Users, Truck, HardHat, Wrench } from 'lucide-react';

export const OrganizationStructure = () => {
  return (
    <section id="structure" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">عيلة القبسي والهيكل بتاعنا</h2>
          <p className="text-lg text-slate-600">
            إيد واحدة بتشتغل وتتعب عشان الشغلانة تطلع صح. من الإدارة والمكاتب لحد أقل عامل، كل الترس بيلف عشان راحتك إنت.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-8 hidden sm:block">
          {/* CEO Level */}
          <div className="flex justify-center relative z-10">
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col items-center min-w-[240px] border-4 border-white hover:-translate-y-1 transition-transform scale-105">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <Briefcase className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="font-bold text-xl">مدير الشركة</h3>
              <p className="text-slate-300 text-sm mt-1">م/ محمد محروس القبسي</p>
            </div>
          </div>
          
          {/* Vertical line from CEO */}
          <div className="w-1 bg-emerald-200 h-10 mx-auto"></div>
          
          {/* Horizontal Connector */}
          <div className="w-[75%] mx-auto bg-emerald-200 h-1 relative">
            <div className="absolute top-0 left-0 w-1 bg-emerald-200 h-10"></div>
            <div className="absolute top-0 right-0 w-1 bg-emerald-200 h-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-emerald-200 h-10"></div>
          </div>

          {/* Three Main Branches */}
          <div className="grid grid-cols-3 gap-6 pt-10 px-4">
            
            {/* Branch 1. Accounting & Sales */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg flex flex-col items-center w-full min-h-[140px] justify-center border border-slate-200 relative group overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-500"></div>
                <Calculator className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold tracking-wide">فريق الحسابات</h3>
              </div>
              <div className="w-px bg-slate-200 h-8"></div>
              <div className="bg-white text-slate-800 rounded-xl px-4 py-4 shadow-md border border-slate-200 text-center w-full min-h-[100px] flex flex-col justify-center items-center">
                 <ShoppingCart className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                 <span className="font-bold text-sm">التسعير والمبيعات</span>
              </div>
            </div>

            {/* Branch 2. Customer Service */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg flex flex-col items-center w-full min-h-[140px] justify-center border border-slate-200 relative group overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500"></div>
                <Headset className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold tracking-wide">خدمة العملاء</h3>
              </div>
               <div className="w-px bg-slate-200 h-8"></div>
              <div className="bg-white text-slate-800 rounded-xl px-4 py-4 shadow-md border border-slate-200 text-center w-full min-h-[100px] flex flex-col justify-center items-center">
                 <Users className="w-6 h-6 mx-auto mb-2 text-emerald-400" />
                 <span className="font-bold text-sm">متابعة دايماً معاك</span>
              </div>
            </div>

            {/* Branch 3. Operations */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg flex flex-col items-center w-full min-h-[140px] justify-center border border-slate-200 relative group overflow-hidden">
                 <div className="absolute top-0 inset-x-0 h-1.5 bg-amber-500"></div>
                <Truck className="w-8 h-8 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold tracking-wide">فريق السائقين</h3>
              </div>
              
              {/* Sub branch */}
               <div className="w-px bg-slate-200 h-8"></div>
              <div className="bg-white text-slate-800 rounded-xl px-4 py-4 shadow-md border border-slate-200 text-center w-full flex flex-col justify-center items-center">
                 <HardHat className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                 <span className="font-bold text-sm">عمال التحميل المهرة</span>
              </div>
               <div className="w-px bg-slate-200 h-6"></div>
              <div className="bg-white text-slate-800 rounded-xl px-4 py-4 shadow-md border border-slate-200 text-center w-full flex flex-col justify-center items-center">
                 <Wrench className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                 <span className="font-bold text-sm">المعدات التقيلة</span>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile View Organization (Simpler layout for small screens) */}
        <div className="sm:hidden flex flex-col gap-6">
           <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-lg flex items-center gap-4 border border-slate-800 relative overflow-hidden">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                <Briefcase className="w-7 h-7 text-emerald-300" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-xl">مدير الشركة</h3>
                <p className="text-emerald-300 text-sm font-medium mt-0.5">المعلم والريس</p>
              </div>
           </div>
           
           <div className="mr-6 border-r-2 border-emerald-200 pr-6 flex flex-col gap-5 relative pt-2">
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4 relative hover:shadow-md transition-shadow">
                <div className="absolute top-1/2 -right-6 w-6 h-0.5 bg-emerald-200"></div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">فرق المبيعات والحسابات</h3>
                  <p className="text-sm text-slate-500 mt-0.5">تظبيط الأسعار والمشتريات</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4 relative hover:shadow-md transition-shadow">
                <div className="absolute top-1/2 -right-6 w-6 h-0.5 bg-emerald-200"></div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <Headset className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">خدمة العملاء</h3>
                  <p className="text-sm text-slate-500 mt-0.5">بنرد ومتابعين معاك دايماً</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-start gap-4 relative hover:shadow-md transition-shadow">
                <div className="absolute top-6 -right-6 w-6 h-0.5 bg-emerald-200"></div>
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-slate-900 text-lg">فريق السائقين</h3>
                  <p className="text-sm text-slate-500 mt-0.5">أبطال الشركة على الطريق</p>
                  
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                       <div className="bg-slate-100 p-2 rounded-lg"><HardHat className="w-4 h-4 text-amber-600" /></div>
                       عمال التحميل بيشيلوا الشغل
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                       <div className="bg-slate-100 p-2 rounded-lg"><Wrench className="w-4 h-4 text-emerald-600" /></div>
                       معداتنا جاهزة للتقيل
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
