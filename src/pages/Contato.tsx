import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
}

export const Contato = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData.nome.length < 3) {
      newErrors.nome = 'O nome deve ter pelo menos 3 caracteres.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }
    
    const phoneDigits = formData.telefone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.telefone = 'O telefone deve ter pelo menos 10 dígitos.';
    }
    
    if (formData.mensagem.length < 10) {
      newErrors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulário enviado:', formData);
      setIsSuccess(true);
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout 
      title="Contato"
      description="Entre em contato com a Exec Engenharia para orçamentos, dúvidas ou parcerias."
    >
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Fale Conosco</span>
              <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Estamos prontos para ouvir você.</h1>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Seja para um novo projeto, uma dúvida técnica ou uma proposta de parceria, nossa equipe está à disposição para atendê-lo com agilidade e profissionalismo.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Telefone / WhatsApp</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+5551999881367" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                        Ligar: (51) 99988-1367
                      </a>
                      <a href="https://wa.me/5551999881367" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors flex items-center gap-2">
                        WhatsApp: (51) 99988-1367
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">E-mail</h3>
                    <a href="mailto:exec@execengenharia.com.br" className="text-gray-500 hover:text-blue-600 transition-colors">
                      exec@execengenharia.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Endereço</h3>
                    <p className="text-gray-500">R. Dr. Emílio Ribas, 1058 - Cambuí</p>
                    <p className="text-gray-500">Campinas - SP, 13025-142</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h2>
                    <p className="text-gray-500 mb-8">Agradecemos o seu contato. Nossa equipe retornará em breve.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                        <input
                          type="text"
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${errors.nome ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50'}`}
                          placeholder=""
                        />
                        {errors.nome && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.nome}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">E-mail</label>
                        <input
                          type="email"
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50'}`}
                          placeholder=""
                        />
                        {errors.email && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Telefone / WhatsApp</label>
                      <input
                        type="text"
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${errors.telefone ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50'}`}
                        placeholder=""
                      />
                      {errors.telefone && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.telefone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Mensagem</label>
                      <textarea
                        rows={5}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none ${errors.mensagem ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50'}`}
                        placeholder=""
                      />
                      {errors.mensagem && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.mensagem}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" /> Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} /> Enviar Mensagem
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[450px] w-full bg-gray-100 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.35624127995!2d-47.0543236!3d-22.8993441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4984f9377d%3A0x2863925769246473!2sExec%20Engenharia%20e%20Constru%C3%A7%C3%B5es%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1711909312345!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Exec Engenharia"
        ></iframe>
      </section>
    </PageLayout>
  );
};
