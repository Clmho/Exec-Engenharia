import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Clock } from 'lucide-react';

export default function Empresa() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/office/1920/1080"
            alt="Escritório Exec Engenharia"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-xs font-bold text-hero-blue tracking-[0.2em] uppercase mb-4 block">
            SOBRE NÓS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Construindo com ética, segurança e inovação.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Desde 1993, transformamos o cenário urbano com excelência técnica e compromisso inabalável com nossos clientes.
          </p>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/history/800/600"
                alt="História da Empresa"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary-medium text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <Clock className="w-10 h-10" />
                  <div>
                    <div className="text-3xl font-bold">33 Anos</div>
                    <div className="text-xs font-bold tracking-widest uppercase opacity-80">DE EXPERIÊNCIA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main">Nossa História</h2>
              <p className="text-text-secondary leading-relaxed">
                Fundada em 1993 em Novo Hamburgo, a Exec Engenharia e Construções Ltda. nasceu com o propósito de elevar os padrões da construção civil na região. Ao longo de mais de três décadas, consolidamos nossa marca através da entrega de projetos complexos e de alta qualidade.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Nossa trajetória é pautada pela transparência, pelo respeito aos prazos e, acima de tudo, pela segurança em cada m² construído. Hoje, somos referência em obras residenciais, comerciais e industriais, sempre buscando as tecnologias mais avançadas para garantir o melhor resultado final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores Section */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Missão',
                text: 'Entregar soluções de engenharia com excelência técnica, superando as expectativas dos clientes através da inovação e do compromisso com a qualidade.'
              },
              {
                icon: Eye,
                title: 'Visão',
                text: 'Ser reconhecida como a construtora mais confiável e inovadora do sul do país, sendo referência em gestão de obras e sustentabilidade.'
              },
              {
                icon: ShieldCheck,
                title: 'Valores',
                text: 'Ética inegociável, segurança absoluta, transparência total, inovação constante e valorização das pessoas em todos os níveis.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-border-light hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-medium/10 rounded-xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-primary-medium" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
