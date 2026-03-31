import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://execengenharia.com.br/logo-exec-engenharia.png" 
                alt="Exec Engenharia" 
                className="h-12 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excelência em engenharia e construções. Transformando visões em realidade com qualidade, segurança e inovação desde 1993.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/exec.engenharia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/exec-engenharia-e-construcoes-ltda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://pt-br.facebook.com/ExecEngenhariaEConstrucoesLtda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/empresa" className="hover:text-blue-400 transition-colors">A Empresa</Link></li>
              <li><Link to="/obras" className="hover:text-blue-400 transition-colors">Obras</Link></li>
              <li><Link to="/noticias" className="hover:text-blue-400 transition-colors">Notícias</Link></li>
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Construção Civil</li>
              <li>Reformas Corporativas</li>
              <li>Gestão de Projetos</li>
              <li>Engenharia Industrial</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span>Rua das Flores, 126<br />Novo Hamburgo - RS</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <a href="tel:+5551999881367" className="hover:text-blue-400 transition-colors">(51) 99988-1367</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <a href="mailto:exec@execengenharia.com.br" className="hover:text-blue-400 transition-colors">exec@execengenharia.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center">
          <p>© 2026 Exec Engenharia e Construções Ltda. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
