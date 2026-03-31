import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, History } from 'lucide-react';

export const Empresa = () => {
  return (
    <PageLayout 
      title="A Empresa"
      description="Conheça a história, missão e valores da Exec Engenharia e Construções."
    >
      {/* Header */}
      <section className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop"
            alt="Empresa Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Sobre Nós</span>
            <h1 className="text-5xl font-bold mb-8 tracking-tight">Construindo com ética, segurança e inovação.</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A Exec Engenharia nasceu da paixão por transformar projetos complexos em estruturas sólidas que impulsionam o desenvolvimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                alt="Nossa História"
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl hidden md:block">
                <History size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-1">33 Anos</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">De Experiência</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Nossa História</h2>
              <p className="text-gray-600 leading-relaxed">
                Fundada em 1993, a Exec Engenharia e Construções Ltda. iniciou suas atividades focada em reformas residenciais de alto padrão. Com o passar dos anos, expandimos nossa expertise para os setores comercial e industrial, consolidando-nos como uma das empresas mais confiáveis da região.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje, contamos com uma equipe multidisciplinar de engenheiros, arquitetos e técnicos altamente qualificados, comprometidos com a entrega de obras que superam as expectativas dos nossos clientes em termos de prazo, custo e qualidade final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: 'Missão',
                desc: 'Prover soluções de engenharia de alta qualidade, garantindo a satisfação dos clientes através de processos eficientes e seguros.'
              },
              {
                icon: Eye,
                title: 'Visão',
                desc: 'Ser reconhecida como a principal referência em inovação e confiabilidade no setor da construção civil nacional até 2030.'
              },
              {
                icon: ShieldCheck,
                title: 'Valores',
                desc: 'Ética inabalável, segurança em primeiro lugar, compromisso com a sustentabilidade e busca constante pela excelência técnica.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
