import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Noticia } from '../data/mock';
import { motion } from 'motion/react';

interface NoticiaCardProps {
  noticia: Noticia;
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col md:flex-row gap-6 bg-white p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all"
    >
      <div className="w-full md:w-64 h-48 shrink-0 overflow-hidden rounded-xl">
        <img
          src={noticia.imagem_capa}
          alt={noticia.titulo}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center py-2">
        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold mb-3">
          <Calendar size={14} />
          {noticia.data}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {noticia.titulo}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {noticia.resumo}
        </p>
        <Link
          to={`/noticias/${noticia.id}`}
          className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm group/link"
        >
          Ler notícia completa
          <ArrowRight size={16} className="text-blue-600 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
