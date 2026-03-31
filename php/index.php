<?php 
require_once 'includes/db.php';
$pageTitle = "Home";
include 'includes/header.php';

// Fetch Obras
$stmt = $pdo->query("SELECT * FROM obras ORDER BY id DESC LIMIT 3");
$obras = $stmt->fetchAll();

// Fetch Clientes
$stmt = $pdo->query("SELECT * FROM clientes LIMIT 8");
$clientes = $stmt->fetchAll();
?>

<!-- Hero Section -->
<section class="relative h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/seed/construction/1920/1080" 
            alt="Hero Background" 
            class="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
        />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="max-w-3xl">
            <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Excelência em Engenharia</span>
            <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Construindo o <span class="text-blue-500">Futuro</span> com Solidez.
            </h1>
            <p class="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                A Exec Engenharia entrega soluções completas em construção civil, reformas e gestão de projetos com foco em qualidade e inovação.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="obras.php" class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-center">
                    Nossas Obras
                </a>
                <a href="contato.php" class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center">
                    Fale Conosco
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="py-20 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div class="text-center">
                <div class="text-4xl font-extrabold text-blue-600 mb-2">30+</div>
                <div class="text-gray-500 font-medium text-sm uppercase tracking-wider">Anos de História</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-extrabold text-blue-600 mb-2">500+</div>
                <div class="text-gray-500 font-medium text-sm uppercase tracking-wider">Obras Entregues</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-extrabold text-blue-600 mb-2">150+</div>
                <div class="text-gray-500 font-medium text-sm uppercase tracking-wider">Clientes Atendidos</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-extrabold text-blue-600 mb-2">100%</div>
                <div class="text-gray-500 font-medium text-sm uppercase tracking-wider">Satisfação</div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Obras -->
<section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-16">
            <div class="max-w-2xl">
                <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Portfólio</span>
                <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Obras em Destaque</h2>
            </div>
            <a href="obras.php" class="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                Ver Todas <i data-lucide="arrow-right" size={20}></i>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php foreach ($obras as $obra): ?>
                <a href="obra-detalhe.php?id=<?php echo $obra['id']; ?>" class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full">
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img 
                            src="<?php echo $obra['imagem_capa']; ?>" 
                            alt="<?php echo $obra['titulo']; ?>" 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                        />
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider">
                            <?php echo $obra['categoria']; ?>
                        </div>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <div class="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
                            <i data-lucide="map-pin" size="14"></i> <?php echo $obra['localizacao']; ?>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                            <?php echo $obra['titulo']; ?>
                        </h3>
                        <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Detalhes</span>
                            <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <i data-lucide="chevron-right" size="18"></i>
                            </div>
                        </div>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Clients Section -->
<section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Parcerias de Sucesso</span>
            <h2 class="text-4xl font-bold text-gray-900 tracking-tight">Quem Confia em Nós</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <?php foreach ($clientes as $cliente): ?>
                <div class="flex items-center justify-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                    <span class="text-gray-400 font-bold text-lg group-hover:text-blue-600 transition-colors"><?php echo $cliente['nome']; ?></span>
                </div>
            <?php endforeach; ?>
        </div>
        
        <div class="mt-16 text-center">
            <a href="clientes.php" class="text-blue-600 font-bold hover:underline">Ver lista completa de clientes</a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
