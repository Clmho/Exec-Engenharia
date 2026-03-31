import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { ObraCard } from '../components/ObraCard';
import { OBRAS } from '../data/mock';
import { motion } from 'motion/react';
import { Search, Filter } from 'lucide-react';

export const Obras = () => {
  const [filter, setFilter] = useState('Todas');
  const categories = ['Todas', 'Residencial', 'Comercial', 'Industrial'];

  const filteredObras = filter === 'Todas' 
    ? OBRAS 
    : OBRAS.filter(o => o.categoria === filter);

  return (
    <PageLayout 
      title="Portfólio de Obras"
      description="Confira nossos projetos residenciais, comerciais e industriais realizados com excelência."
    >
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
            alt="Obras Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 tracking-tight">Nosso Portfólio</h1>
              <p className="text-blue-100 max-w-xl">Explore a diversidade e a qualidade técnica dos projetos executados pela Exec Engenharia.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mr-2 flex items-center gap-2">
                <Filter size={14} /> Filtrar por:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === cat 
                      ? 'bg-white text-blue-600 shadow-lg' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredObras.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredObras.map((obra) => (
                <ObraCard key={obra.id} obra={obra} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Nenhuma obra encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};
