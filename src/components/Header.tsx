import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo className="w-10 h-10 md:w-12 md:h-12 shrink-0 shadow-sm rounded-[10px] md:rounded-xl" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-none tracking-tight">القبسي للتجارة</h1>
            <p className="text-xs md:text-sm text-emerald-600 font-bold uppercase tracking-wider mt-1">AlQabasy</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#hero" className="hover:text-emerald-600 transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">من نحن</a>
          <a href="#products" className="hover:text-emerald-600 transition-colors">منتجاتنا</a>
          <a href="#logistics" className="hover:text-emerald-600 transition-colors">أسطول النقل</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">تواصل معنا</a>
        </nav>

        <button 
          onClick={onOrderClick}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200 px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-bold shadow-md focus:ring-4 focus:ring-emerald-100 outline-none">
          <span className="hidden sm:block">اطلب طلبية</span>
          <span className="sm:hidden">اطلب</span>
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
      </div>
    </header>
  );
};
