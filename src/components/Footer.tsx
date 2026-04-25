import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-right">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-10 h-10 shrink-0 shadow-sm rounded-xl" />
              <div className="text-right">
                <h2 className="text-xl font-bold text-slate-900 leading-none">القبسي للتجارة</h2>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mt-1">AlQabasy</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mt-2">
              شريكك الأقوى في تجارة المحاصيل الزراعية والنقل اللوجستي على مستوى الجمهورية.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-900 mb-2">روابط سريعة</h4>
            <a href="#hero" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">الرئيسية</a>
            <a href="#products" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">منتجاتنا</a>
            <a href="#logistics" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">أسطول النقل</a>
          </div>
        </div>
        
        <div className="w-full h-px bg-slate-200 mt-4 outline-none border-none"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
          <p className="text-slate-500 text-sm font-medium text-center md:text-right">
            &copy; {new Date().getFullYear()} القبسي للتجارة. <span className="hidden sm:inline">جميع الحقوق محفوظة.</span>
          </p>
          <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium text-center px-4 py-2.5 rounded-full" dir="ltr">
            <span>Developed with</span>
            <span className="text-rose-500 animate-pulse">&hearts;</span>
            <span>by</span>
            <a 
              href="https://github.com/elqabasy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 font-bold tracking-tight transition-colors flex items-center gap-1 group"
            >
              <code className="text-[13px] group-hover:bg-emerald-50 px-2 py-0.5 rounded-md transition-colors">@mahros.elqabasy</code>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
