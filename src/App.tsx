import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Logistics } from './components/Logistics';
import { OrganizationStructure } from './components/OrganizationStructure';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans w-full relative overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      <Header onOrderClick={() => setIsModalOpen(true)} />

      <main className="w-full flex flex-col pt-20">
        <Hero onOrderClick={() => setIsModalOpen(true)} />
        <About />
        <Products onOrderClick={() => setIsModalOpen(true)} />
        <Logistics />
        <OrganizationStructure />
        <Contact onOrderClick={() => setIsModalOpen(true)} />
      </main>

      <Footer />

      {isModalOpen && (
        <OrderModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
