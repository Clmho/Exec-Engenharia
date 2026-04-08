import { motion } from 'motion/react';
import { clients } from '../data';

export default function Clientes() {
  const categories = [
    { key: 'empresas', title: 'EMPRESAS' },
    { key: 'parceiros', title: 'PARCEIROS' },
    { key: 'administradoras', title: 'ADMINISTRADORAS E CONDOMÍNIOS' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/clients/1920/1080"
            alt="Clientes Exec Engenharia"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-xs font-bold text-hero-blue tracking-[0.2em] uppercase mb-4 block">
            PARCERIAS DE SUCESSO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossos Clientes
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Empresas que confiam na Exec Engenharia para realizar seus projetos com segurança e qualidade.
          </p>
        </div>
      </section>

      {/* Clients List Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {categories.map((cat, catIdx) => (
            <div key={cat.key} className={catIdx > 0 ? 'mt-20 pt-20 border-t border-border-light' : ''}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-text-main tracking-tight mb-4">{cat.title}</h2>
                <div className="h-1 w-12 bg-primary-medium"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                {clients[cat.key as keyof typeof clients].map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-center space-x-3 py-2 border-b border-border-light/50 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-medium/40 group-hover:bg-primary-medium transition-colors"></div>
                    <span className="text-lg text-text-secondary group-hover:text-text-main transition-colors font-medium">
                      {client.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
