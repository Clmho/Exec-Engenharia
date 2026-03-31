import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Obra } from '../data/mock';
import { motion } from 'motion/react';

interface ObraCardProps {
  obra: Obra;
}

export const ObraCard: React.FC<ObraCardProps> = ({ obra }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={obra.capa_imagem}
          alt={obra.titulo}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {obra.categoria}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-gray-400 text-[11px] mb-3 uppercase tracking-wide font-medium">
          <span className="flex items-center gap-1"><MapPin size={12} /> {obra.localizacao}</span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {obra.ano}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {obra.titulo}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
          {obra.descricao}
        </p>
        <Link
          to={`/obras/${obra.id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/btn"
        >
          Ver detalhes
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
