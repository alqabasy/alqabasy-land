import React, { useState, Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

// Lazy loaded components for better performance
const Products = lazy(() =>
  import("./components/Products").then((m) => ({ default: m.Products })),
);
const Logistics = lazy(() =>
  import("./components/Logistics").then((m) => ({ default: m.Logistics })),
);
const OrganizationStructure = lazy(() =>
  import("./components/OrganizationStructure").then((m) => ({
    default: m.OrganizationStructure,
  })),
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer })),
);
const OrderModal = lazy(() =>
  import("./components/OrderModal").then((m) => ({ default: m.OrderModal })),
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans w-full relative overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      <Header onOrderClick={() => setIsModalOpen(true)} />

      <main className="w-full flex flex-col pt-20">
        <Hero onOrderClick={() => setIsModalOpen(true)} />
        <About />
        <Suspense
          fallback={
            <div className="py-20 text-center text-slate-400 font-medium">
              جاري التحميل...
            </div>
          }
        >
          <Products onOrderClick={() => setIsModalOpen(true)} />
          <Logistics />
          <OrganizationStructure />
          <Contact onOrderClick={() => setIsModalOpen(true)} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}
      </Suspense>
    </div>
  );
}
