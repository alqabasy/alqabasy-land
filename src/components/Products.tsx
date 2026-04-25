import React from 'react';
import { Package, Leaf, Wheat, ArrowLeft } from 'lucide-react';

interface ProductsProps {
  onOrderClick: () => void;
}

export const Products: React.FC<ProductsProps> = ({ onOrderClick }) => {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">بنتعامل في إيه؟</h2>
          <p className="text-lg text-slate-600">
            أبرز المحاصيل الزراعية والمنتجات اللي بنوفرها بكميات تجارية بجودة وتغليف يعتمد عليهم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">أرز عريض</h3>
              <p className="text-sm text-slate-600">أجود أنواع الرز العريض الصافي للقطاع التجاري وتجار التجزئة.</p>
            </div>
          </div>
          <div className="group bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">أرز رفيع</h3>
              <p className="text-sm text-slate-600">أرز رفيع عالي الجودة للعلامات التجارية ومضارب الأرز.</p>
            </div>
          </div>
          <div className="group bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">تقاوي أرز</h3>
              <p className="text-sm text-slate-600">بذور وتقاوي معتمدة لضمان محصول وفير ونسبة إنبات عالية.</p>
            </div>
          </div>
          <div className="group bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Wheat className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">قمح مصري</h3>
              <p className="text-sm text-slate-600">قمح ذهبي أصيل يعتمد عليه بنقاوة وخلو من الشوائب.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button 
            onClick={onOrderClick}
            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus:ring-4 focus:ring-emerald-200 font-bold px-8 py-4 rounded-xl transition-colors border border-emerald-200 flex items-center gap-2">
            سجل طلبك للمحاصيل دلوقتي
            <ArrowLeft className="w-5 h-5 opacity-70" />
          </button>
        </div>
      </div>
    </section>
  );
};
