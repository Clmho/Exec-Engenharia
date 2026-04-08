import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize2, MapPin, Calendar } from 'lucide-react';
import { works } from '../data';

export default function Obras() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <div>
      <AnimatePresence mode="wait">
        {!selectedWork ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="relative py-24 flex items-center">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://picsum.photos/seed/portfolio/1920/1080"
                  alt="Portfólio Exec Engenharia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/70"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="text-xs font-bold text-hero-blue tracking-[0.2em] uppercase mb-4 block">
                  PORTFÓLIO
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Nossas Obras
                </h1>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Conheça os projetos que construímos com excelência e dedicação ao longo dos anos.
                </p>
              </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 bg-bg-light">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {works.map((work, index) => (
                    <motion.div
                      key={work.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                      onClick={() => setSelectedWork(work)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white text-primary-dark p-3 rounded-full">
                            <Maximize2 className="w-6 h-6" />
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <span className="text-[10px] font-bold text-primary-medium tracking-widest uppercase mb-3 block">
                          {work.category}
                        </span>
                        <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary-medium transition-colors">
                          {work.title}
                        </h3>
                        <p className="text-text-secondary text-sm line-clamp-2 mb-6">
                          {work.description}
                        </p>
                        <span className="text-primary-medium font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                          Mais informações
                          <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white"
          >
            {/* Detail Hero */}
            <section className="relative h-[42vh] flex items-end pb-16">
              <div className="absolute inset-0 z-0">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar para Portfólio
                </button>
                <span className="text-xs font-bold text-hero-blue tracking-[0.2em] uppercase mb-4 block">
                  {selectedWork.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  {selectedWork.title}
                </h1>
              </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-text-main mb-8">Sobre a Obra</h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-12">
                      {selectedWork.fullDescription}
                    </p>

                    <h3 className="text-2xl font-bold text-text-main mb-8">Galeria do Projeto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedWork.gallery.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${selectedWork.title} - ${idx + 1}`}
                          className="rounded-xl shadow-md w-full h-64 object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-bg-light p-8 rounded-2xl sticky top-32">
                      <h3 className="text-xl font-bold text-text-main mb-6">Detalhes Técnicos</h3>
                      <ul className="space-y-6">
                        <li className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                            <MapPin className="w-5 h-5 text-primary-medium" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Localização</div>
                            <div className="text-text-main font-semibold">Novo Hamburgo, RS</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                            <Maximize2 className="w-5 h-5 text-primary-medium" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Área Construída</div>
                            <div className="text-text-main font-semibold">12.500 m²</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                            <Calendar className="w-5 h-5 text-primary-medium" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Ano de Entrega</div>
                            <div className="text-text-main font-semibold">2025</div>
                          </div>
                        </li>
                      </ul>
                      <a 
                        href="https://wa.me/5551999881367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-10 py-4 bg-primary-medium text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center"
                      >
                        Solicitar Informações
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
