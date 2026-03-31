<?php 
$pageTitle = "A Empresa";
include 'includes/header.php'; 
?>

<!-- Hero Section -->
<section class="relative h-[60vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/seed/engineering/1920/1080" 
            alt="Empresa Background" 
            class="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
        />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="max-w-3xl">
            <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Nossa História</span>
            <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Tradição e <span class="text-blue-500">Inovação</span>.
            </h1>
            <p class="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                Desde 1993, a Exec Engenharia constrói uma trajetória marcada pela excelência técnica e pelo compromisso com o sucesso de cada projeto.
            </p>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="space-y-8">
                <div class="max-w-xl">
                    <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Quem Somos</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Mais de três décadas de experiência no mercado.</h2>
                    <p class="text-gray-500 text-lg leading-relaxed mb-6">
                        A Exec Engenharia e Construções Ltda. é uma empresa consolidada no setor da construção civil, com sede em Novo Hamburgo - RS. Nossa atuação abrange desde projetos residenciais de alto padrão até complexas obras industriais e corporativas.
                    </p>
                    <p class="text-gray-500 text-lg leading-relaxed">
                        Nossa filosofia de trabalho baseia-se na transparência, no cumprimento rigoroso de prazos e na busca incessante pela qualidade em cada detalhe. Contamos com uma equipe técnica altamente qualificada e comprometida com a entrega de resultados superiores.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                            <i data-lucide="target" size="24"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            Prover soluções de engenharia que superem as expectativas de nossos clientes, agregando valor através da inovação e sustentabilidade.
                        </p>
                    </div>
                    <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                            <i data-lucide="eye" size="24"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Visão</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            Ser referência nacional em excelência construtiva e gestão de projetos, reconhecida pela ética e qualidade técnica.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="relative">
                <div class="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                    <img 
                        src="https://picsum.photos/seed/office/800/1000" 
                        alt="Nossa Equipe" 
                        class="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div class="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-[2rem] text-white shadow-2xl hidden md:block">
                    <div class="text-5xl font-extrabold mb-2">30+</div>
                    <div class="text-sm font-bold uppercase tracking-widest opacity-80">Anos de Mercado</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values Section -->
<section class="py-24 bg-gray-900 text-white overflow-hidden relative">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl -z-0"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
            <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Nossos Pilares</span>
            <h2 class="text-4xl font-bold tracking-tight">Valores que nos guiam.</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="space-y-6">
                <div class="text-blue-500 text-5xl font-bold opacity-20">01</div>
                <h3 class="text-2xl font-bold">Qualidade Técnica</h3>
                <p class="text-gray-400 leading-relaxed">
                    Utilizamos as melhores práticas e tecnologias do mercado para garantir que cada obra seja executada com precisão e durabilidade.
                </p>
            </div>
            <div class="space-y-6">
                <div class="text-blue-500 text-5xl font-bold opacity-20">02</div>
                <h3 class="text-2xl font-bold">Segurança</h3>
                <p class="text-gray-400 leading-relaxed">
                    Priorizamos a segurança de nossos colaboradores e do entorno de nossas obras, seguindo rigorosamente todas as normas vigentes.
                </p>
            </div>
            <div class="space-y-6">
                <div class="text-blue-500 text-5xl font-bold opacity-20">03</div>
                <h3 class="text-2xl font-bold">Ética e Transparência</h3>
                <p class="text-gray-400 leading-relaxed">
                    Construímos relacionamentos sólidos baseados na confiança mútua e na clareza em todas as etapas do processo.
                </p>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
