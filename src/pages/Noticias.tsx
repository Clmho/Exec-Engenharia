import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { NoticiaCard } from '../components/NoticiaCard';
import { NOTICIAS } from '../data/mock';

export const Noticias = () => {
  return (
    <PageLayout 
      title="Notícias"
      description="Fique por dentro das novidades da Exec Engenharia e tendências da construção civil."
    >
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
            alt="Noticias Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Notícias</h1>
          <p className="text-gray-300 max-w-xl">Acompanhe as últimas atualizações sobre nossas obras, prêmios e inovações tecnológicas.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {NOTICIAS.map((noticia) => (
              <NoticiaCard key={noticia.id} noticia={noticia} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
