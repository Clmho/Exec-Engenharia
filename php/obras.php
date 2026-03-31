<?php 
require_once 'includes/db.php';
$pageTitle = "Obras";
include 'includes/header.php';

// Fetch Obras
$stmt = $pdo->query("SELECT * FROM obras ORDER BY id DESC");
$obras = $stmt->fetchAll();
?>

<!-- Hero Section -->
<section class="relative h-[40vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/seed/portfolio/1920/1080" 
            alt="Obras Background" 
            class="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
        />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="max-w-3xl">
            <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Portfólio</span>
            <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Nossas <span class="text-blue-500">Obras</span>.
            </h1>
            <p class="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                Conheça alguns dos projetos entregues pela Exec Engenharia ao longo de sua trajetória.
            </p>
        </div>
    </div>
</section>

<!-- Obras Grid -->
<section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                        <p class="text-gray-500 text-sm mb-6 line-clamp-3">
                            <?php echo $obra['descricao']; ?>
                        </p>
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

<?php include 'includes/footer.php'; ?>
