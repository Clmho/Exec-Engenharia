import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Trophy, Users, Building, Loader2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { ObraCard } from '../components/ObraCard';
import { NoticiaCard } from '../components/NoticiaCard';
import { Obra, Noticia } from '../data/mock';
import { motion } from 'motion/react';

export const Home = () => {
  const [obras, setObras] = useState<Obra[]>([]);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/obras').then(res => res.json()),
      fetch('/api/noticias').then(res => res.json())
    ])
    .then(([obrasData, noticiasData]) => {
      setObras(obrasData);
      setNoticias(noticiasData);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to fetch data:', err);
      setLoading(false);
    });
  }, []);

  return (
    <PageLayout 
      title="Excelência em Engenharia e Construções"
      description="A Exec Engenharia é referência em construções residenciais, comerciais e industriais de alto padrão."
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Exec Engenharia Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 mt-[100px]">
              Desde 1993 construindo o futuro
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Construímos com <span className="text-blue-500">Precisão</span> e Inovação.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Especialistas em transformar grandes projetos em realidades sólidas. Qualidade técnica e compromisso com o prazo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/obras"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
              >
                Ver Portfólio <ArrowRight size={20} />
              </Link>
              <Link
                to="/contato"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, label: 'Obras Entregues', value: '150+' },
              { icon: Users, label: 'Clientes Satisfeitos', value: '80+' },
              { icon: Trophy, label: 'Anos de Mercado', value: '16' },
              { icon: Building, label: 'm² Construídos', value: '250k' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Nosso Portfólio</span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Obras em Destaque</h2>
              <p className="text-gray-500 mt-4 text-lg">Conheça alguns dos nossos projetos mais recentes que definem nosso padrão de excelência.</p>
            </div>
            <Link to="/obras" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
              Ver todas as obras <ArrowRight size={18} />
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {obras.slice(0, 3).map((obra) => (
                <ObraCard key={obra.id} obra={obra} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Fique por dentro</span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Últimas Notícias</h2>
              <p className="text-gray-500 mt-4 text-lg">Acompanhe as novidades, tendências e conquistas da Exec Engenharia.</p>
            </div>
            <Link to="/noticias" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
              Ver todas as notícias <ArrowRight size={18} />
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {noticias.slice(0, 4).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Pronto para iniciar seu projeto?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Nossa equipe técnica está preparada para oferecer as melhores soluções em engenharia para sua empresa ou residência.
          </p>
          <Link
            to="/contato"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
          >
            Solicitar um Orçamento Agora
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};
