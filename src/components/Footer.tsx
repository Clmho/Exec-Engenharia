import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="https://execengenharia.com.br/logo-exec-engenharia.png" 
                alt="Exec Engenharia" 
                className="h-12 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Construindo com excelência, segurança e inovação tecnológica para entregar os melhores resultados.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/empresa" className="text-white/60 hover:text-white text-sm transition-colors">A Empresa</Link>
              </li>
              <li>
                <Link to="/obras" className="text-white/60 hover:text-white text-sm transition-colors">Portfólio</Link>
              </li>
              <li>
                <Link to="/noticias" className="text-white/60 hover:text-white text-sm transition-colors">Notícias</Link>
              </li>
              <li>
                <Link to="/contato" className="text-white/60 hover:text-white text-sm transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-medium shrink-0" />
                <span className="text-white/60 text-sm">Rua das Flores, 126 — Novo Hamburgo - RS</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-medium shrink-0" />
                <a href="tel:51999881367" className="text-white/60 hover:text-white text-sm transition-colors">(51) 99988-1367</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-medium shrink-0" />
                <a href="mailto:exec@execengenharia.com.br" className="text-white/60 hover:text-white text-sm transition-colors">exec@execengenharia.com.br</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/exec.engenharia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-medium transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://pt-br.facebook.com/ExecEngenhariaEConstrucoesLtda" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-medium transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/exec-engenharia-e-construcoes-ltda" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-medium transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            © 2026 Exec Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
