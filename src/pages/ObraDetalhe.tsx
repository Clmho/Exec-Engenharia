import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { Obra } from '../data/mock';
import { api } from '../services/api';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Tag, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export const ObraDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [obra, setObra] = useState<Obra | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    api.getObras().then(obras => {
      const found = obras.find(o => o.id === id);
      setObra(found || null);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <PageLayout title="Carregando...">
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Carregando...</h1>
        </div>
      </PageLayout>
    );
  }

  if (!obra) {
    return (
      <PageLayout title="Obra não encontrada">
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Obra não encontrada</h1>
          <Link to="/obras" className="text-blue-600 font-bold hover:underline">Voltar para obras</Link>
        </div>
      </PageLayout>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + obra.imagens.length) % obra.imagens.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % obra.imagens.length);
    }
  };

  return (
    <PageLayout 
      title={obra.titulo}
      description={obra.descricao}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-10 transition-colors group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">{obra.titulo}</h1>
            
            <div className="aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl">
              <img 
                src={obra.capa_imagem} 
                alt={obra.titulo} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Projeto</h3>
              <p>{obra.descricao}</p>
              <p className="mt-4">
                Cada detalhe desta obra foi planejado para garantir a máxima eficiência estrutural e estética. 
                Utilizamos materiais de primeira linha e técnicas construtivas avançadas para assegurar a durabilidade e o conforto dos usuários.
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Galeria de Imagens</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {obra.imagens.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img 
                      src={img} 
                      alt={`${obra.titulo} - ${idx + 1}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Detalhes Técnicos</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <Tag size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Categoria</div>
                    <div className="text-gray-900 font-bold">{obra.categoria}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Localização</div>
                    <div className="text-gray-900 font-bold">{obra.localizacao}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ano de Conclusão</div>
                    <div className="text-gray-900 font-bold">{obra.ano}</div>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link 
                  to="/contato" 
                  className="block w-full bg-blue-600 text-white text-center py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                >
                  Solicitar Projeto Similar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/70 hover:text-white p-2"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={obra.imagens[selectedImageIndex]}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 md:right-10 text-white/70 hover:text-white p-2"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
              {selectedImageIndex + 1} / {obra.imagens.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};
