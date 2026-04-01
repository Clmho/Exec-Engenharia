import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { Noticia } from '../data/mock';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Loader2 } from 'lucide-react';

export const NoticiaDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/noticias/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setNoticia(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch noticia:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <PageLayout title="Carregando...">
        <div className="flex justify-center items-center py-32">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </PageLayout>
    );
  }

  if (!noticia) {
    return (
      <PageLayout title="Notícia não encontrada">
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Notícia não encontrada</h1>
          <Link to="/noticias" className="text-blue-600 font-bold hover:underline">Voltar para notícias</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title={noticia.titulo}
      description={noticia.resumo}
    >
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-10 transition-colors group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Voltar
        </button>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-blue-600 font-bold text-sm mb-6">
            <Calendar size={18} />
            {noticia.data}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            {noticia.titulo}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed italic border-l-4 border-blue-600 pl-6">
            {noticia.resumo}
          </p>
        </header>

        <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={noticia.imagem_capa} 
            alt={noticia.titulo} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>{noticia.conteudo}</p>
          <p>
            A Exec Engenharia continua investindo em processos que garantam não apenas a qualidade técnica, mas também o respeito ao meio ambiente e à comunidade local. 
            Nossa visão estratégica para os próximos anos inclui a expansão de nossas operações com foco em construções inteligentes.
          </p>
          <p>
            Para saber mais sobre nossos projetos e como podemos ajudar sua empresa, entre em contato com nossa equipe comercial.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-end items-center">
          <Link to="/noticias" className="text-blue-600 font-bold hover:underline">
            Ver todas as notícias
          </Link>
        </footer>
      </article>
    </PageLayout>
  );
};
