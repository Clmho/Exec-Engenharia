import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contato() {
  return (
    <div className="bg-bg-light min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <span className="text-xs font-bold text-primary-medium tracking-[0.2em] uppercase mb-4 block">
                  FALE CONOSCO
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                  Estamos prontos para ouvir você.
                </h1>
                <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                  Tem um projeto em mente ou precisa de uma consultoria técnica? Nossa equipe está à disposição para ajudar você a construir o futuro.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: 'Telefone / WhatsApp',
                    value: '(51) 99988-1367',
                    link: 'tel:51999881367'
                  },
                  {
                    icon: Mail,
                    title: 'E-mail',
                    value: 'exec@execengenharia.com.br',
                    link: 'mailto:exec@execengenharia.com.br'
                  },
                  {
                    icon: MapPin,
                    title: 'Endereço',
                    value: 'Rua das Flores, 126 — Novo Hamburgo - RS',
                    link: 'https://maps.app.goo.gl/vheqht2Jzb1Fkpxp8'
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? "_blank" : undefined}
                    rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-6 group"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary-medium group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6 text-primary-medium group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">
                        {item.title}
                      </div>
                      <div className="text-lg font-bold text-text-main group-hover:text-primary-medium transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border-light"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-main uppercase tracking-wider">Nome Completo</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-main uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(51) 99999-9999"
                    className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider">Mensagem</label>
                  <textarea
                    rows={5}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary-medium text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2 group shadow-lg shadow-primary-medium/20"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="mt-24 rounded-3xl overflow-hidden shadow-2xl h-[450px] border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.823933075549!2d-51.1342686!3d-29.6958864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942403698797b%3A0x7000696969696969!2sRua%20das%20Flores%2C%20126%20-%20Ideal%2C%20Novo%20Hamburgo%20-%20RS%2C%2093334-020!5e0!3m2!1spt-BR!2sbr!4v1712580000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
