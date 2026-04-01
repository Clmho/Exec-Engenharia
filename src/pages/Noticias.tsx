import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { NoticiaCard } from '../components/NoticiaCard';
import { Noticia } from '../data/mock';
import { Loader2 } from 'lucide-react';

export const Noticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/noticias')
      .then(res => res.json())
      .then(data => {
        setNoticias(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch noticias:', err);
        setLoading(false);
      });
  }, []);

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
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : noticias.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {noticias.map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Nenhuma notícia encontrada.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};
