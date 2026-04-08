import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Calendar, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { works, news } from '../data';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/construction-hero/1920/1080"
            alt="Construção Urbana"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-medium text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-8">
              DESDE 1993 CONSTRUINDO O FUTURO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Construímos com <span className="text-hero-blue">Precisão</span> e Inovação.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl">
              Excelência em engenharia e construção civil, entregando projetos que transformam visões em realidade com segurança e tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/obras"
                className="px-8 py-4 bg-primary-medium text-white font-bold rounded hover:bg-primary-dark transition-colors flex items-center justify-center group"
              >
                Ver Portfólio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contato"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Building2, number: '150+', label: 'OBRAS ENTREGUES' },
              { icon: Users, number: '80+', label: 'CLIENTES SATISFEITOS' },
              { icon: Calendar, number: '33', label: 'ANOS DE MERCADO' },
              { icon: Maximize2, number: '250k', label: 'M² CONSTRUÍDOS' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary-medium mx-auto mb-4" />
                <div className="text-4xl font-bold text-text-main mb-2">{stat.number}</div>
                <div className="text-xs font-semibold text-text-secondary tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-primary-medium tracking-[0.2em] uppercase mb-3 block">
                NOSSO PORTFÓLIO
              </span>
              <h2 className="text-4xl font-bold text-text-main">Obras em Destaque</h2>
              <p className="text-text-secondary mt-4 max-w-xl">
                Conheça alguns dos projetos que definem nosso compromisso com a qualidade e a inovação técnica.
              </p>
            </div>
            <Link to="/obras" className="text-primary-medium font-bold flex items-center hover:underline group">
              Ver todas as obras
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {works.slice(0, 3).map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
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
                  <Link 
                    to="/obras" 
                    className="text-primary-medium font-bold text-sm flex items-center hover:underline"
                  >
                    Mais informações
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-primary-medium tracking-[0.2em] uppercase mb-3 block">
                FIQUE POR DENTRO
              </span>
              <h2 className="text-4xl font-bold text-text-main">Últimas Notícias</h2>
            </div>
            <Link to="/noticias" className="text-primary-medium font-bold flex items-center hover:underline group">
              Ver todas as notícias
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-bg-light rounded-xl overflow-hidden group"
              >
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center text-primary-medium text-xs font-bold mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary-medium transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2 mb-6">
                    {item.description}
                  </p>
                  <Link 
                    to="/noticias" 
                    className="text-primary-medium font-bold text-sm flex items-center hover:underline mt-auto"
                  >
                    Ler notícia completa
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para iniciar seu projeto?</h2>
              <p className="text-lg text-white/80 mb-10">
                Entre em contato com nossa equipe técnica e solicite um orçamento personalizado para sua obra.
              </p>
              <a
                href="https://wa.me/5551999881367"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-dark transition-all inline-block"
              >
                Solicitar um Orçamento Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
