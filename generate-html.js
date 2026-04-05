import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'html-estatico');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const OBRAS = [
  {
    id: '1',
    titulo: 'Edifício Horizonte Azul',
    descricao: 'Um marco na arquitetura residencial contemporânea, o Edifício Horizonte Azul combina luxo, sustentabilidade e inovação tecnológica.',
    capa_imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    categoria: 'Residencial',
    ano: '2024',
    localizacao: 'São Paulo, SP'
  },
  {
    id: '2',
    titulo: 'Centro Empresarial Nexus',
    descricao: 'Complexo corporativo de alto padrão com certificação LEED. O projeto prioriza espaços abertos, iluminação natural.',
    capa_imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    categoria: 'Comercial',
    ano: '2023',
    localizacao: 'Curitiba, PR'
  },
  {
    id: '3',
    titulo: 'Planta Industrial LogiTech',
    descricao: 'Construção de galpão logístico de última geração, com piso de alta resistência e docas automatizadas.',
    capa_imagem: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
    categoria: 'Industrial',
    ano: '2023',
    localizacao: 'Joinville, SC'
  }
];

const NOTICIAS = [
  {
    id: '1',
    titulo: 'Exec Engenharia recebe prêmio de Sustentabilidade',
    resumo: 'A empresa foi reconhecida pelas práticas inovadoras em canteiros de obras sustentáveis.',
    imagem_capa: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop',
    data: '15/03/2026'
  },
  {
    id: '2',
    titulo: 'Novas tecnologias no setor da construção civil',
    resumo: 'Como o uso de BIM e drones está transformando a precisão das nossas entregas.',
    imagem_capa: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1000&auto=format&fit=crop',
    data: '10/02/2026'
  }
];

const CLIENTES = [
  { id: '1', nome: 'TechCorp Solutions', categoria: 'Empresas' },
  { id: '2', nome: 'Global Logistics', categoria: 'Empresas' },
  { id: '3', nome: 'Urban Living', categoria: 'Empresas' },
  { id: '7', nome: 'Construtora Alpha', categoria: 'Parceiros' },
  { id: '10', nome: 'Adm. Predial Central', categoria: 'Administradoras e Condomínios' }
];

const head = (title, isHome = false) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Exec Engenharia</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
        /* Mobile menu toggle logic */
        #mobile-menu { display: none; }
        #mobile-menu.active { display: block; }
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background-color: #f3f4f6; }
        ::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background-color: #9ca3af; }
    </style>
</head>
<body class="bg-white text-gray-900 antialiased flex flex-col min-h-screen">
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isHome ? 'bg-transparent py-4 border-transparent' : 'bg-white py-2 border-gray-200 shadow-sm'}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <a href="index.html" class="flex items-center group">
                    <img 
                        src="https://execengenharia.com.br/logo-exec-engenharia.png" 
                        alt="Exec Engenharia" 
                        class="h-12 w-auto transition-all"
                        referrerpolicy="no-referrer"
                    />
                </a>

                <!-- Desktop Nav -->
                <div class="hidden md:flex items-center gap-8">
                    <a href="index.html" class="text-sm font-bold transition-colors uppercase tracking-wide ${isHome ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-blue-600'}">Home</a>
                    <a href="empresa.html" class="text-sm font-bold transition-colors uppercase tracking-wide ${isHome ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-blue-600'}">Empresa</a>
                    <a href="obras.html" class="text-sm font-bold transition-colors uppercase tracking-wide ${isHome ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-blue-600'}">Obras</a>
                    <a href="clientes.html" class="text-sm font-bold transition-colors uppercase tracking-wide ${isHome ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-blue-600'}">Clientes</a>
                    <a href="noticias.html" class="text-sm font-bold transition-colors uppercase tracking-wide ${isHome ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-blue-600'}">Notícias</a>
                    <a href="contato.html" class="text-sm font-bold transition-colors uppercase tracking-wide ${isHome ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-blue-600'}">Contato</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="menu-btn" class="md:hidden p-2 transition-colors ${isHome ? 'text-white' : 'text-gray-800'}">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav -->
        <div id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 transition-all duration-300 shadow-lg">
            <div class="flex flex-col gap-4 px-4 py-4">
                <a href="index.html" class="text-base font-medium py-2 border-b border-gray-50 text-gray-600">Home</a>
                <a href="empresa.html" class="text-base font-medium py-2 border-b border-gray-50 text-gray-600">Empresa</a>
                <a href="obras.html" class="text-base font-medium py-2 border-b border-gray-50 text-gray-600">Obras</a>
                <a href="clientes.html" class="text-base font-medium py-2 border-b border-gray-50 text-gray-600">Clientes</a>
                <a href="noticias.html" class="text-base font-medium py-2 border-b border-gray-50 text-gray-600">Notícias</a>
                <a href="contato.html" class="text-base font-medium py-2 border-b border-gray-50 text-gray-600">Contato</a>
            </div>
        </div>
    </nav>
    <main class="flex-grow ${isHome ? '' : 'pt-20'}">
`;

const footer = (isHome = false) => `
    </main>
    <footer class="bg-gray-900 text-white py-16 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div class="md:col-span-1">
                    <img src="https://execengenharia.com.br/logo-exec-engenharia.png" alt="Exec Engenharia" class="h-12 mb-6 brightness-0 invert opacity-80" />
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Construindo com excelência, segurança e inovação tecnológica para entregar os melhores resultados.
                    </p>
                </div>
                <div>
                    <h4 class="text-lg font-bold mb-6">Links Rápidos</h4>
                    <ul class="space-y-3">
                        <li><a href="empresa.html" class="text-gray-400 hover:text-white transition-colors">A Empresa</a></li>
                        <li><a href="obras.html" class="text-gray-400 hover:text-white transition-colors">Portfólio</a></li>
                        <li><a href="noticias.html" class="text-gray-400 hover:text-white transition-colors">Notícias</a></li>
                        <li><a href="contato.html" class="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-bold mb-6">Contato</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <i data-lucide="map-pin" class="w-5 h-5 text-blue-500 shrink-0 mt-1"></i>
                            <span class="text-gray-400 text-sm">Rua das Flores, 126<br />Novo Hamburgo - RS</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i data-lucide="phone" class="w-5 h-5 text-blue-500 shrink-0"></i>
                            <span class="text-gray-400 text-sm">(51) 99988-1367</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i data-lucide="mail" class="w-5 h-5 text-blue-500 shrink-0"></i>
                            <span class="text-gray-400 text-sm">exec@execengenharia.com.br</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-bold mb-6">Redes Sociais</h4>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                            <i data-lucide="instagram" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                            <i data-lucide="linkedin" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                            <i data-lucide="facebook" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                &copy; 2026 Exec Engenharia. Todos os direitos reservados.
            </div>
        </div>
    </footer>
    
    <!-- WhatsApp Button -->
    <a href="https://wa.me/5551999881367" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group">
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
    </a>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const isHome = ${isHome};
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-white', 'py-2', 'border-gray-200', 'shadow-sm');
                navbar.classList.remove('bg-transparent', 'py-4', 'border-transparent');
                if(isHome) {
                    document.querySelectorAll('#navbar a.text-white\\\\/90').forEach(el => {
                        el.classList.remove('text-white/90', 'hover:text-white');
                        el.classList.add('text-gray-800', 'hover:text-blue-600');
                    });
                    document.querySelector('#menu-btn').classList.remove('text-white');
                    document.querySelector('#menu-btn').classList.add('text-gray-800');
                }
            } else {
                if(isHome) {
                    navbar.classList.remove('bg-white', 'py-2', 'border-gray-200', 'shadow-sm');
                    navbar.classList.add('bg-transparent', 'py-4', 'border-transparent');
                    document.querySelectorAll('#navbar a.text-gray-800').forEach(el => {
                        el.classList.remove('text-gray-800', 'hover:text-blue-600');
                        el.classList.add('text-white/90', 'hover:text-white');
                    });
                    document.querySelector('#menu-btn').classList.remove('text-gray-800');
                    document.querySelector('#menu-btn').classList.add('text-white');
                }
            }
        });
    </script>
</body>
</html>
`;

// index.html
const indexHtml = head('Início', true) + `
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
            <div class="max-w-2xl">
                <span class="inline-block bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6">
                    Desde 1993 construindo o futuro
                </span>
                <h1 class="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                    Construímos com <span class="text-blue-500">Precisão</span> e Inovação.
                </h1>
                <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                    Especialistas em transformar grandes projetos em realidades sólidas. Qualidade técnica e compromisso com o prazo.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="obras.html" class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                        Ver Portfólio <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                    <a href="contato.html" class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                        Fale Conosco
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <i data-lucide="check-circle-2" class="w-8 h-8 text-blue-600 mx-auto mb-4"></i>
                    <div class="text-3xl font-bold text-gray-900 mb-1">150+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wider">Obras Entregues</div>
                </div>
                <div class="text-center">
                    <i data-lucide="users" class="w-8 h-8 text-blue-600 mx-auto mb-4"></i>
                    <div class="text-3xl font-bold text-gray-900 mb-1">80+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wider">Clientes Satisfeitos</div>
                </div>
                <div class="text-center">
                    <i data-lucide="trophy" class="w-8 h-8 text-blue-600 mx-auto mb-4"></i>
                    <div class="text-3xl font-bold text-gray-900 mb-1">33</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wider">Anos de Mercado</div>
                </div>
                <div class="text-center">
                    <i data-lucide="building" class="w-8 h-8 text-blue-600 mx-auto mb-4"></i>
                    <div class="text-3xl font-bold text-gray-900 mb-1">250k</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wider">m² Construídos</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Featured Works -->
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div class="max-w-2xl">
                    <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Nosso Portfólio</span>
                    <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Obras em Destaque</h2>
                    <p class="text-gray-500 mt-4 text-lg">Conheça alguns dos nossos projetos mais recentes que definem nosso padrão de excelência.</p>
                </div>
                <a href="obras.html" class="text-blue-600 font-bold flex items-center gap-2 hover:underline">
                    Ver todas as obras <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${OBRAS.map(o => `
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl mb-6">
                            <img src="${o.capa_imagem}" alt="${o.titulo}" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">${o.categoria}</span>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">${o.titulo}</h3>
                        <p class="text-gray-500 line-clamp-2">${o.descricao}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Latest News -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div class="max-w-2xl">
                    <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Fique por dentro</span>
                    <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Últimas Notícias</h2>
                    <p class="text-gray-500 mt-4 text-lg">Acompanhe as novidades, tendências e conquistas da Exec Engenharia.</p>
                </div>
                <a href="noticias.html" class="text-blue-600 font-bold flex items-center gap-2 hover:underline">
                    Ver todas as notícias <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                ${NOTICIAS.map(n => `
                    <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row group cursor-pointer hover:shadow-md transition-shadow">
                        <div class="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                            <img src="${n.imagem_capa}" alt="${n.titulo}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div class="p-8 sm:w-3/5 flex flex-col justify-center">
                            <div class="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                                <i data-lucide="calendar" class="w-4 h-4"></i> ${n.data}
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">${n.titulo}</h3>
                            <p class="text-gray-500 text-sm line-clamp-2">${n.resumo}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-blue-600 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Pronto para iniciar seu projeto?</h2>
            <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Nossa equipe técnica está preparada para oferecer as melhores soluções em engenharia para sua empresa ou residência.
            </p>
            <a href="contato.html" class="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                Solicitar um Orçamento Agora
            </a>
        </div>
    </section>
` + footer(true);
fs.writeFileSync(path.join(outDir, 'index.html'), indexHtml);

// obras.html
const obrasHtml = head('Obras') + `
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Portfólio</span>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Nossas Obras</h1>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">Conheça os projetos que construímos com excelência e dedicação ao longo dos anos.</p>
        </div>
    </section>
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${OBRAS.map(o => `
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl mb-6">
                            <img src="${o.capa_imagem}" alt="${o.titulo}" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">${o.categoria}</span>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">${o.titulo}</h3>
                        <p class="text-gray-500 line-clamp-2">${o.descricao}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
` + footer(false);
fs.writeFileSync(path.join(outDir, 'obras.html'), obrasHtml);

// noticias.html
const noticiasHtml = head('Notícias') + `
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Blog e Atualizações</span>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Notícias</h1>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">Fique por dentro das novidades, tendências e conquistas da Exec Engenharia.</p>
        </div>
    </section>
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                ${NOTICIAS.map(n => `
                    <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row group cursor-pointer hover:shadow-md transition-shadow">
                        <div class="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                            <img src="${n.imagem_capa}" alt="${n.titulo}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div class="p-8 sm:w-3/5 flex flex-col justify-center">
                            <div class="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                                <i data-lucide="calendar" class="w-4 h-4"></i> ${n.data}
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">${n.titulo}</h3>
                            <p class="text-gray-500 text-sm line-clamp-2">${n.resumo}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
` + footer(false);
fs.writeFileSync(path.join(outDir, 'noticias.html'), noticiasHtml);

// clientes.html
const clientesHtml = head('Clientes') + `
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Parcerias de Sucesso</span>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Nossos Clientes</h1>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">Empresas que confiam na Exec Engenharia para realizar seus projetos.</p>
        </div>
    </section>
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ${CLIENTES.map(c => `
                    <div class="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                            <i data-lucide="building-2" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-1">${c.nome}</h3>
                        <span class="text-xs text-gray-500 uppercase tracking-wider">${c.categoria}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
` + footer(false);
fs.writeFileSync(path.join(outDir, 'clientes.html'), clientesHtml);

// empresa.html
const empresaHtml = head('Empresa') + `
    <section class="relative py-32 text-white overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl">
                <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Sobre Nós</span>
                <h1 class="text-5xl font-bold mb-8 tracking-tight">Construindo com ética, segurança e inovação.</h1>
                <p class="text-xl text-gray-400 leading-relaxed">
                    A Exec Engenharia nasceu da paixão por transformar projetos complexos em estruturas sólidas que impulsionam o desenvolvimento.
                </p>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" class="rounded-3xl shadow-2xl" />
                    <div class="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl hidden md:block">
                        <i data-lucide="history" class="w-10 h-10 mb-4"></i>
                        <div class="text-3xl font-bold mb-1">33 Anos</div>
                        <div class="text-sm font-medium uppercase tracking-wider opacity-80">De Experiência</div>
                    </div>
                </div>
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold text-gray-900">Nossa História</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Fundada em 1993, a Exec Engenharia e Construções Ltda. iniciou suas atividades focada em reformas residenciais de alto padrão. Com o passar dos anos, expandimos nossa expertise para os setores comercial e industrial, consolidando-nos como uma das empresas mais confiáveis da região.
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        Hoje, contamos com uma equipe multidisciplinar de engenheiros, arquitetos e técnicos altamente qualificados, comprometidos com a entrega de obras que superam as expectativas dos nossos clientes em termos de prazo, custo e qualidade final.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <i data-lucide="target" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                    <p class="text-gray-500 leading-relaxed">Prover soluções de engenharia de alta qualidade, garantindo a satisfação dos clientes através de processos eficientes e seguros.</p>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <i data-lucide="eye" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                    <p class="text-gray-500 leading-relaxed">Ser reconhecida como a principal referência em inovação e confiabilidade no setor da construção civil nacional até 2030.</p>
                </div>
                <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <i data-lucide="shield-check" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                    <p class="text-gray-500 leading-relaxed">Ética inabalável, segurança em primeiro lugar, compromisso com a sustentabilidade e busca constante pela excelência técnica.</p>
                </div>
            </div>
        </div>
    </section>
` + footer(false);
fs.writeFileSync(path.join(outDir, 'empresa.html'), empresaHtml);

// contato.html
const contatoHtml = head('Contato') + `
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Fale Conosco</span>
                    <h1 class="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Estamos prontos para ouvir você.</h1>
                    <p class="text-gray-500 text-lg mb-12 leading-relaxed">
                        Seja para um novo projeto, uma dúvida técnica ou uma proposta de parceria, nossa equipe está à disposição para atendê-lo com agilidade e profissionalismo.
                    </p>

                    <div class="space-y-8">
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                                <i data-lucide="phone"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-1">Telefone / WhatsApp</h3>
                                <div class="flex flex-col gap-1">
                                    <a href="tel:+5551999881367" class="text-gray-500 hover:text-blue-600 transition-colors">Ligar: (51) 99988-1367</a>
                                    <a href="https://wa.me/5551999881367" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-green-600 transition-colors">WhatsApp: (51) 99988-1367</a>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                                <i data-lucide="mail"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-1">E-mail</h3>
                                <a href="mailto:exec@execengenharia.com.br" class="text-gray-500 hover:text-blue-600 transition-colors">exec@execengenharia.com.br</a>
                            </div>
                        </div>

                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                                <i data-lucide="map-pin"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-1">Endereço</h3>
                                <p class="text-gray-500">Rua das Flores, 126</p>
                                <p class="text-gray-500">Novo Hamburgo - RS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <form class="space-y-6" onsubmit="event.preventDefault(); alert('Formulário enviado com sucesso!'); this.reset();">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">Nome Completo</label>
                                <input type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="Ex: João Silva" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">E-mail</label>
                                <input type="email" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="joao@exemplo.com" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-bold text-gray-700">Telefone / WhatsApp</label>
                            <input type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="(11) 99999-9999" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-bold text-gray-700">Mensagem</label>
                            <textarea rows="5" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                        </div>

                        <button type="submit" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20">
                            <i data-lucide="send" class="w-5 h-5"></i> Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="h-[450px] w-full bg-gray-100 relative overflow-hidden">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.04359871638!2d-51.1289183!3d-29.679683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943bb26866bd5%3A0x3a62f60d139cb749!2sR.+das+Fl%C3%B4res%2C+126+-+Centro%2C+Novo+Hamburgo+-+RS%2C+93510-090!5e0!3m2!1spt-BR!2sbr!4v1711909312345!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style="border: 0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização Exec Engenharia"
        ></iframe>
    </section>
` + footer(false);
fs.writeFileSync(path.join(outDir, 'contato.html'), contatoHtml);

console.log('HTML files generated successfully in /html-estatico!');
