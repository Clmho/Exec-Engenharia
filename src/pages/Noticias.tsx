import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { news } from '../data';

export default function Noticias() {
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);

  return (
    <div>
      <AnimatePresence mode="wait">
        {!selectedNews ? (
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
                  src="https://picsum.photos/seed/engineering-work/1920/1080"
                  alt="Obras de Engenharia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/70"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="text-xs font-bold text-hero-blue tracking-[0.2em] uppercase mb-4 block">
                  BLOG E ATUALIZAÇÕES
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Notícias
                </h1>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Fique por dentro das novidades, tendências e conquistas da Exec Engenharia.
                </p>
              </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 bg-bg-light">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {news.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                      onClick={() => setSelectedNews(item)}
                    >
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <div className="flex items-center text-primary-medium text-xs font-bold mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.date}
                        </div>
                        <h3 className="text-2xl font-bold text-text-main mb-4 group-hover:text-primary-medium transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-sm line-clamp-3 mb-6">
                          {item.description}
                        </p>
                        <span className="text-primary-medium font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                          Ler notícia completa
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
            <section className="relative h-[35vh] flex items-end pb-16">
              <div className="absolute inset-0 z-0">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar para Notícias
                </button>
                <div className="flex items-center text-hero-blue text-sm font-bold mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  {selectedNews.date}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
                  {selectedNews.title}
                </h1>
              </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
                    <p className="mb-8 text-xl text-text-main font-medium leading-relaxed">
                      {selectedNews.description}
                    </p>
                    <p className="mb-8">
                      {selectedNews.content}
                    </p>
                    
                    <h3 className="text-2xl font-bold text-text-main mt-12 mb-8">Galeria de Imagens</h3>
                    <div className="grid grid-cols-1 gap-8 mb-12">
                      {selectedNews.gallery.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Imagem ${idx + 1}`}
                          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ))}
                    </div>
                    
                    <p>
                      Continuamos investindo em capital humano e tecnologia para garantir que cada projeto entregue pela Exec Engenharia seja um marco de qualidade e segurança. Agradecemos a todos os nossos clientes, parceiros e colaboradores por fazerem parte desta história.
                    </p>
                  </div>

                  <div className="mt-20 pt-12 border-t border-border-light flex justify-between items-center">
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="text-primary-medium font-bold flex items-center hover:underline"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Anterior
                    </button>
                    <div className="text-text-secondary text-sm italic">
                      Fim da notícia
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
