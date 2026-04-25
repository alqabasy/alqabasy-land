import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';

interface ContactProps {
  onOrderClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOrderClick }) => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">شرفنا بالتواصل معانا في أي وقت</h2>
              <p className="text-lg text-slate-600">
                فريقنا دايماً متاح للرد على استفساراتك وطلبياتك. سواء كنت بتدور على منتج، أو حابب تسأل عن الشحن، كلمنا.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white border border-slate-200 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-lg">مقر الشركة والمخازن</span>
                  <span className="text-slate-600 mt-1">مركز دسوق - محافظة كفر الشيخ - مصر</span>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <PhoneCall className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-lg">كلمنا دلوقتي</span>
                  <a
                    href="tel:+201005603378"
                    className="flex items-end gap-1 font-extrabold tracking-wide tabular-nums"
                    dir="ltr"
                  >
                    <span className="text-base text-gray-500">0100</span>
                    <span className="text-2xl text-emerald-600 leading-none">560</span>
                    <span className="text-xl text-emerald-500 leading-none">33</span>
                    <span className="text-base text-gray-500">78</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Area within Contact */}
          <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl text-white text-center flex flex-col items-center justify-center gap-6 border border-slate-800 isolate relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold relative z-10">جاهز تطلب شحنتك؟</h3>
            <p className="text-slate-300 text-lg relative z-10">
              سجل تفاصيل الطلب عن طريق الموقع، أو اطلبنا على الموبايل واحنا هنقوم باللازم.
            </p>
            <button 
              onClick={onOrderClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold w-full sm:w-auto px-10 py-4 rounded-xl transition-colors shadow-lg focus:ring-4 focus:ring-emerald-900 outline-none mt-2 relative z-10 text-lg">
              اطلب دلوقتي بسهولة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
