import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section id="hero" className="bg-white relative isolate overflow-hidden">
      <div 
        className="absolute inset-0 top-0 left-0 w-full h-full opacity-60 pointer-events-none -z-10 mix-blend-multiply" 
        style={{ background: 'radial-gradient(circle at right top, var(--color-emerald-100) 0%, transparent 50%)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6 md:pr-10 z-10 text-center md:text-right">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-lg w-max mx-auto md:mx-0">من قلب دسوق، لكل مصر</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            بنجيبلك الخلاصة في <br/><span className="text-emerald-600">الرز والقمح وتقاوي الزراعة</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
            شركة القبسي، اسم يعتمد عليه في عالم التجارة. شغالين من سنين بنشتري ونبيع أجود المحاصيل من أراضينا الخصبة لحد عندك، وطبعاً بنوصلها بأسطول عربياتنا اللي جاهز في أي وقت.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
            <button 
              onClick={onOrderClick}
              className="bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 focus:outline-none text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg text-lg flex items-center justify-center gap-2">
              اطلب شحنتك دلوقتي
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <a 
              href="#products"
              className="bg-white hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all duration-200 text-lg flex items-center justify-center leading-none">
              عرض منتجاتنا
            </a>
          </div>
        </div>
        {/* Hero Graphic / Visual */}
        <div className="flex-1 relative w-full max-w-md mx-auto aspect-square rounded-full flex items-center justify-center p-8 group">
          {/* Decorative rings */}
          <div className="absolute inset-0 border-[40px] border-emerald-50 rounded-full group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute inset-4 border-[2px] border-emerald-100 rounded-full border-dashed group-hover:rotate-12 transition-transform duration-1000"></div>
          
          <BrandLogo className="w-48 h-48 md:w-64 md:h-64 relative z-10 shadow-2xl rounded-[2rem] md:rounded-[3rem] group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};
