import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Cliente } from '../data/mock';
import { api } from '../services/api';
import { motion } from 'motion/react';

export const Clientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    api.getClientes().then(setClientes).catch(console.error);
  }, []);

  return (
    <PageLayout 
      title="Nossos Clientes"
      description="Empresas e parceiros que confiam na Exec Engenharia para realizar seus projetos."
    >
      {/* Header */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
            alt="Clientes Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Nossos Parceiros</span>
            <h1 className="text-4xl font-bold mb-6 tracking-tight">Empresas que confiam em nossa excelência.</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ao longo de nossa trajetória, construímos relacionamentos sólidos com grandes empresas de diversos setores, entregando resultados que superam expectativas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {['Empresas', 'Parceiros', 'Administradoras e Condomínios'].map((categoria) => {
            const clientesDaCategoria = clientes.filter(c => c.categoria === categoria);
            if (clientesDaCategoria.length === 0) return null;

            return (
              <div key={categoria} className="mb-24 last:mb-0">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">{categoria}</h2>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {clientesDaCategoria.map((cliente, i) => (
                    <motion.div
                      key={cliente.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="bg-white p-6 rounded-xl border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-blue-100 transition-all group"
                    >
                      <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600 transition-colors text-center uppercase tracking-wider">
                        {cliente.nome}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Seja nosso próximo parceiro</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Estamos prontos para atender as demandas mais exigentes da sua empresa com soluções inteligentes de engenharia.
          </p>
          <a 
            href="/contato" 
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all"
          >
            Entrar em Contato
          </a>
        </div>
      </section>
    </PageLayout>
  );
};
