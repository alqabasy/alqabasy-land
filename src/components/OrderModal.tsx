import React, { useState, useEffect, useRef } from 'react';
import { Package, Leaf, Wheat, Activity, Check, ChevronLeft, ChevronRight, X, MapPin, Navigation, ShoppingCart, Tag } from 'lucide-react';

interface OrderModalProps {
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLocating, setIsLocating] = useState(false);
  const [formData, setFormData] = useState({
    operation: 'buy', // 'buy' | 'sell'
    productType: '',
    quantity: '',
    unit: 'طن',
    location: '',
    fullName: '',
    phone: '',
    notes: ''
  });

  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap & Escape key listener
  useEffect(() => {
    // Focus the modal content initially for screen readers
    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(6); // Success step
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('الموقع الجغرافي غير مدعوم في متصفحك');
      return;
    }
    
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&accept-language=ar`);
          if(response.ok) {
              const data = await response.json();
              if(data.display_name) {
                  updateForm('location', data.display_name);
              } else {
                  updateForm('location', `${position.coords.latitude}, ${position.coords.longitude}`);
              }
          }
        } catch (error) {
          updateForm('location', `خط العرض: ${position.coords.latitude}, خط الطول: ${position.coords.longitude}`);
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        alert('حدث خطأ أثناء تحديد الموقع، يرجى كتابته يدويا');
      }
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 shadow-2xl my-8 mx-auto self-start sm:self-center focus:outline-none"
      >
          <button 
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="absolute top-4 left-4 md:top-6 md:left-6 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 z-10"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="flex flex-col gap-10 mt-4 md:mt-0">
            {/* Header & Stepper */}
            <div className="flex flex-col gap-6 items-center">
              <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
                {formData.operation === 'buy' ? 'اطلب منتجات' : 'بيع منتجات'}
              </h2>
              
              <div 
                className="flex items-start w-full max-w-xl mx-auto text-sm font-bold mt-4" 
                dir="rtl"
                aria-label="مراحل الطلب"
              >
                {[
                  { step: 1, label: 'النوع' },
                  { step: 2, label: 'الكمية' },
                  { step: 3, label: 'المكان' },
                  { step: 4, label: 'البيانات' },
                  { step: 5, label: 'مراجعة' }
                ].map((s) => (
                  <div key={s.step} className={`flex items-start ${s.step < 5 ? 'flex-1' : ''}`} aria-current={currentStep === s.step ? 'step' : undefined}>
                    <div className="flex flex-col items-center gap-2 shrink-0 w-12 sm:w-16">
                      <div aria-hidden="true" className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        currentStep === s.step 
                          ? 'bg-slate-900 text-white shadow-md' 
                          : currentStep > s.step 
                            ? 'bg-emerald-100 text-emerald-600' 
                            : 'bg-slate-50 text-slate-400 border border-slate-200'
                      }`}>
                        {currentStep > s.step ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s.step}
                      </div>
                      <span className={`text-[10px] sm:text-xs whitespace-nowrap text-center ${currentStep >= s.step ? 'text-slate-900' : 'text-slate-400'}`}>
                        <span className="sr-only">الخطوة {s.step}: </span>
                        {s.label}
                      </span>
                    </div>
                    {/* Stepper separator */}
                    {s.step < 5 && (
                      <div className={`flex-1 h-0.5 mt-4 sm:mt-5 mx-1 sm:mx-2 transition-colors duration-300 ${currentStep > s.step ? 'bg-emerald-400' : 'bg-slate-200'}`} aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Form Content */}
            <form onSubmit={submitForm} className="w-full mx-auto flex flex-col gap-8 min-h-[300px]">
              {/* Aria Live Region for announcing step changes to Screen Readers */}
              <div aria-live="polite" className="sr-only">
                {currentStep === 1 && 'الخطوة 1: اختار العملية ونوع المحصول'}
                {currentStep === 2 && 'الخطوة 2: الكمية المطلوبة'}
                {currentStep === 3 && 'الخطوة 3: تحديد المكان'}
                {currentStep === 4 && 'الخطوة 4: بيانات التواصل'}
                {currentStep === 5 && 'الخطوة 5: مراجعة الطلب'}
                {currentStep === 6 && 'تم إرسال طلبك بنجاح'}
              </div>

              {/* Step 1: Product Type & Buy/Sell */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 id="operation-type-heading" className="text-xl font-bold text-slate-800 text-center mb-2">نوع العملية والمحصول</h3>
                  
                  <div className="bg-slate-50 p-2 rounded-2xl flex border border-slate-200" role="radiogroup" aria-label="نوع العملية">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={formData.operation === 'buy'}
                      onClick={() => updateForm('operation', 'buy')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 ${
                        formData.operation === 'buy'
                          ? 'bg-white text-blue-700 shadow-sm border border-slate-100'
                          : 'text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      ارز/تقاوي
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={formData.operation === 'sell'}
                      onClick={() => updateForm('operation', 'sell')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 ${
                        formData.operation === 'sell'
                          ? 'bg-white text-emerald-700 shadow-sm border border-slate-100'
                          : 'text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      <Tag className="w-5 h-5" />
                      بيع محصول
                    </button>
                  </div>

                  <div 
                    role="radiogroup" 
                    aria-labelledby="product-type-heading" 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
                  >
                    {[
                      { id: 'rice-broad', name: 'أرز عريض', icon: <Package className="w-8 h-8 mb-3" aria-hidden="true" />, color: 'blue' },
                      { id: 'rice-fine', name: 'أرز رفيع', icon: <Package className="w-8 h-8 mb-3" aria-hidden="true" />, color: 'indigo' },
                      { id: 'seeds', name: 'تقاوي أرز', icon: <Leaf className="w-8 h-8 mb-3" aria-hidden="true" />, color: 'emerald' },
                      { id: 'wheat', name: 'قمح مصري', icon: <Wheat className="w-8 h-8 mb-3" aria-hidden="true" />, color: 'amber' }
                    ].map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        role="radio"
                        aria-checked={formData.productType === product.id}
                        onClick={() => updateForm('productType', product.id)}
                        className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-${product.color}-200 ${
                          formData.productType === product.id 
                            ? `border-${product.color}-500 bg-${product.color}-50 text-${product.color}-700 shadow-md` 
                            : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {product.icon}
                        <span className="font-bold text-lg">{product.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Quantity */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-2">الكمية المطلوبة</h3>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="quantity-input" className="text-sm font-bold text-slate-700 text-center">اكتب الكمية (أرقام)</label>
                      <input 
                        id="quantity-input"
                        type="number" 
                        value={formData.quantity}
                        onChange={(e) => updateForm('quantity', e.target.value)}
                        placeholder="0.00" 
                        className="bg-white border border-slate-200 text-slate-900 text-3xl font-bold text-center rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block w-full py-6 outline-none transition-colors" 
                        dir="ltr"
                        required
                        aria-required="true"
                      />
                    </div>
                    
                    <div 
                      className="flex bg-slate-200/50 p-1 rounded-xl"
                      role="radiogroup"
                      aria-label="وحدة القياس"
                    >
                      {['طن', 'أردب', 'كيلو'].map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          role="radio"
                          aria-checked={formData.unit === unit}
                          onClick={() => updateForm('unit', unit)}
                          className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                            formData.unit === unit 
                              ? 'bg-blue-600 text-white shadow-sm' 
                              : 'text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {unit}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-2">تحديد المكان</h3>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="location-input" className="text-sm font-bold text-slate-700 text-right">عنوان التوصيل أو الاستلام</label>
                      <div className="relative">
                        <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          id="location-input"
                          type="text" 
                          value={formData.location}
                          onChange={(e) => updateForm('location', e.target.value)}
                          placeholder="اكتب العنوان بالتفصيل..." 
                          className="bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block w-full p-4 pr-12 outline-none transition-colors" 
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-slate-200"></div>
                        <span className="shrink-0 mx-4 text-slate-400 text-sm">أو</span>
                        <div className="flex-grow border-t border-slate-200"></div>
                    </div>

                    <button
                      type="button"
                      onClick={handleGetLocation}
                      disabled={isLocating}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl px-6 py-4 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 disabled:opacity-70"
                    >
                      {isLocating ? (
                        <span className="flex items-center gap-2">
                          <Activity className="w-5 h-5 animate-spin" />
                          جاري تحديد الموقع...
                        </span>
                      ) : (
                        <>
                          <Navigation className="w-5 h-5" />
                          استخدام موقعي الحالي
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact details */}
              {currentStep === 4 && (
                <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-2">بيانات التواصل</h3>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullname-input" className="text-sm font-bold text-slate-700">الاسم بالكامل</label>
                    <input 
                      id="fullname-input"
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => updateForm('fullName', e.target.value)}
                      placeholder="مثال: أحمد محمود" 
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block w-full p-4 outline-none transition-colors" 
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone-input" className="text-sm font-bold text-slate-700">رقم التليفون (للتواصل السريع)</label>
                    <input 
                      id="phone-input"
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                      placeholder="01X XXXX XXXX" 
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block w-full p-4 outline-none transition-colors text-right" 
                      dir="auto"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="notes-input" className="text-sm font-bold text-slate-700">تفاصيل تانية (اختياري)</label>
                    <textarea 
                      id="notes-input"
                      value={formData.notes}
                      onChange={(e) => updateForm('notes', e.target.value)}
                      rows={3} 
                      placeholder="اكتب أي ملاحظات ليها علاقة بالتوصيل..." 
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block w-full p-4 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-2">مراجعة الطلب</h3>
                  
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span className="text-slate-500">نوع العملية:</span>
                      <span className="font-bold text-slate-900 text-lg">
                        {formData.operation === 'buy' ? 'شراء من المحطة' : 'بيع للمحطة'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span className="text-slate-500">المنتج والكمية:</span>
                      <span className="font-bold text-slate-900 text-lg">
                        {formData.quantity || '0'} {formData.unit} - {formData.productType === 'wheat' ? 'قمح مصري' : formData.productType === 'rice-broad' ? 'أرز عريض' : formData.productType === 'rice-fine' ? 'أرز رفيع' : formData.productType === 'seeds' ? 'تقاوي أرز' : 'لم يحدد'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span className="text-slate-500">المكان:</span>
                      <span className="font-bold text-slate-900 text-right w-1/2 max-w-[200px] truncate" title={formData.location || 'لم يحدد'}>{formData.location || 'لم يحدد'}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span className="text-slate-500">الاسم:</span>
                      <span className="font-bold text-slate-900">{formData.fullName || 'لم يحدد'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">رقم التواصل:</span>
                      <span className="font-bold text-slate-900" dir="ltr">{formData.phone || 'لم يحدد'}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm font-medium border border-blue-100 flex items-start gap-3">
                    <Activity className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <p>بعد الإرسال، هيتواصل معاك واحد من فريق المبيعات في أقرب وقت لتأكيد الأسعار والتوصيل.</p>
                  </div>
                </div>
              )}
              
              {/* Step 6: Success */}
              {currentStep === 6 && (
                <div className="flex flex-col items-center justify-center gap-4 py-8 animate-in zoom-in duration-500 text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                    <Check className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">تم إرسال طلبك بنجاح!</h3>
                  <p className="text-slate-600">طلبك رقم <span className="font-bold">#4829</span> وصل لفريق المبيعات، وهنتواصل معاك قريب جداً.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
                    <button 
                      type="button"
                      onClick={() => {
                        setCurrentStep(1);
                        setFormData({operation: 'buy', productType: '', quantity: '', unit: 'طن', location: '', fullName: '', phone: '', notes: ''});
                        onClose();
                      }}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-8 py-3.5 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
                    >
                      إغلاق
                    </button>
                    <button 
                      type="button"
                      onClick={() => {
                        setCurrentStep(1);
                        setFormData({operation: 'buy', productType: '', quantity: '', unit: 'طن', location: '', fullName: '', phone: '', notes: ''});
                      }}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl px-8 py-3.5 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
                    >
                      طلب جديد
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              {currentStep < 6 && (
                <div className="flex gap-4 mt-auto pt-4">
                  <button 
                    type="button" 
                    onClick={currentStep === 5 ? submitForm : nextStep}
                    disabled={
                      (currentStep === 1 && !formData.productType) || 
                      (currentStep === 2 && !formData.quantity) ||
                      (currentStep === 3 && !formData.location) ||
                      (currentStep === 4 && (!formData.fullName || !formData.phone))
                    }
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-4 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 text-lg flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-disabled={
                      (currentStep === 1 && !formData.productType) || 
                      (currentStep === 2 && !formData.quantity) ||
                      (currentStep === 3 && !formData.location) ||
                      (currentStep === 4 && (!formData.fullName || !formData.phone))
                    }
                  >
                    {currentStep === 5 ? 'تأكيد وإرسال' : 'التالي'}
                    {currentStep < 5 && <ChevronLeft className="w-5 h-5" aria-hidden="true" />}
                  </button>
                  
                  {currentStep > 1 && (
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl px-6 py-4 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300 text-lg flex items-center justify-center gap-2"
                    >
                      <ChevronRight className="w-5 h-5" aria-hidden="true" />
                      السابق
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>
      </div>
    </div>
  );
};

