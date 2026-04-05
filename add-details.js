import fs from 'fs';
import path from 'path';
let content = fs.readFileSync('generate-html.js', 'utf8');

content = content.replace(/capa_imagem: '.*',/g, match => match + "\n    imagens: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop'],");
content = content.replace(/imagem_capa: '.*',/g, match => match + "\n    conteudo: 'Conteúdo completo da notícia detalhando as inovações e práticas da empresa.',");

const generateDetails = `
// Generate Obra Details
OBRAS.forEach(obra => {
    const html = head(obra.titulo) + \\\`
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="obras.html" class="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-10 transition-colors group">
                <i data-lucide="arrow-left" class="w-4 h-4"></i> Voltar
            </a>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div class="lg:col-span-2">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">\\\${obra.titulo}</h1>
                    <div class="aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl">
                        <img src="\\\${obra.capa_imagem}" alt="\\\${obra.titulo}" class="w-full h-full object-cover" />
                    </div>
                    <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Sobre o Projeto</h3>
                        <p>\\\${obra.descricao}</p>
                        <p class="mt-4">Cada detalhe desta obra foi planejado para garantir a máxima eficiência estrutural e estética. Utilizamos materiais de primeira linha e técnicas construtivas avançadas para assegurar a durabilidade e o conforto dos usuários.</p>
                    </div>
                    <div class="mt-12">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Galeria</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                            \\\${obra.imagens.map(img => \\\`
                                <div class="aspect-square rounded-2xl overflow-hidden cursor-pointer group">
                                    <img src="\\\${img}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            \\\`).join('')}
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1">
                    <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
                        <h3 class="text-xl font-bold text-gray-900 mb-6">Detalhes da Obra</h3>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-50 p-3 rounded-xl text-blue-600">
                                    <i data-lucide="tag" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Categoria</p>
                                    <p class="text-gray-900 font-medium">\\\${obra.categoria}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-50 p-3 rounded-xl text-blue-600">
                                    <i data-lucide="calendar" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Ano</p>
                                    <p class="text-gray-900 font-medium">\\\${obra.ano}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-50 p-3 rounded-xl text-blue-600">
                                    <i data-lucide="map-pin" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Localização</p>
                                    <p class="text-gray-900 font-medium">\\\${obra.localizacao}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    \\\` + footer(false);
    fs.writeFileSync(path.join(outDir, \\\`obra-\\\${obra.id}.html\\\`), html);
});

// Generate Noticia Details
NOTICIAS.forEach(noticia => {
    const html = head(noticia.titulo) + \\\`
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <a href="noticias.html" class="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-10 transition-colors group">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Voltar
        </a>
        <header class="mb-12">
            <div class="flex items-center gap-3 text-blue-600 font-bold text-sm mb-6">
                <i data-lucide="calendar" class="w-4 h-4"></i> \\\${noticia.data}
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">\\\${noticia.titulo}</h1>
            <p class="text-xl text-gray-500 leading-relaxed italic border-l-4 border-blue-600 pl-6">\\\${noticia.resumo}</p>
        </header>
        <div class="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img src="\\\${noticia.imagem_capa}" alt="\\\${noticia.titulo}" class="w-full h-full object-cover" />
        </div>
        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>\\\${noticia.conteudo}</p>
            <p>A Exec Engenharia continua investindo em processos que garantam não apenas a qualidade técnica, mas também o respeito ao meio ambiente e à comunidade local. Nossa visão estratégica para os próximos anos inclui a expansão de nossas operações com foco em construções inteligentes.</p>
            <p>Para saber mais sobre nossos projetos e como podemos ajudar sua empresa, entre em contato com nossa equipe comercial.</p>
        </div>
        <footer class="mt-16 pt-8 border-t border-gray-100 flex justify-end items-center">
            <a href="noticias.html" class="text-blue-600 font-bold hover:underline">Ver todas as notícias</a>
        </footer>
    </article>
    \\\` + footer(false);
    fs.writeFileSync(path.join(outDir, \\\`noticia-\\\${noticia.id}.html\\\`), html);
});
`;

content = content.replace("console.log('HTML files generated successfully in /html-estatico!');", generateDetails + "\nconsole.log('HTML files generated successfully in /html-estatico!');");

// Also update links in obras.html and noticias.html to point to the detail pages
content = content.replace(/<div class="group cursor-pointer">/g, '<a href="obra-${o.id}.html" class="group cursor-pointer block">');
content = content.replace(new RegExp('<\\\\/div>\\\\s*`\\\\)\\\\.join\\\\(\\\'\\\'\\\\)\\\\}\\\\s*<\\\\/div>', 'g'), "</a>\\n                `).join('')}\\n            </div>");

content = content.replace(/<div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row group cursor-pointer hover:shadow-md transition-shadow">/g, '<a href="noticia-${n.id}.html" class="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row group cursor-pointer hover:shadow-md transition-shadow block">');
content = content.replace(new RegExp('<\\\\/div>\\\\s*`\\\\)\\\\.join\\\\(\\\'\\\'\\\\)\\\\}\\\\s*<\\\\/div>\\\\s*<\\\\/div>\\\\s*<\\\\/section>', 'g'), "</a>\\n                `).join('')}\\n            </div>\\n        </div>\\n    </section>");

fs.writeFileSync('generate-html.js', content);
