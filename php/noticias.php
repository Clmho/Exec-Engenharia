<?php 
require_once 'includes/db.php';
$pageTitle = "Notícias";
include 'includes/header.php';

// Fetch Noticias
$stmt = $pdo->query("SELECT * FROM noticias ORDER BY id DESC");
$noticias = $stmt->fetchAll();
?>

<!-- Hero Section -->
<section class="relative h-[40vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/seed/news/1920/1080" 
            alt="Notícias Background" 
            class="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
        />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="max-w-3xl">
            <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Atualizações</span>
            <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Nossas <span class="text-blue-500">Notícias</span>.
            </h1>
            <p class="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                Fique por dentro das novidades, projetos e tendências do mercado de engenharia.
            </p>
        </div>
    </div>
</section>

<!-- News Grid -->
<section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <?php foreach ($noticias as $noticia): ?>
                <a href="noticia-detalhe.php?id=<?php echo $noticia['id']; ?>" class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full">
                    <div class="relative aspect-[16/9] overflow-hidden">
                        <img 
                            src="<?php echo $noticia['imagem_capa']; ?>" 
                            alt="<?php echo $noticia['titulo']; ?>" 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <div class="flex items-center gap-2 text-blue-600 text-xs mb-4 font-bold uppercase tracking-widest">
                            <i data-lucide="calendar" size="14"></i> <?php echo $noticia['data']; ?>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                            <?php echo $noticia['titulo']; ?>
                        </h3>
                        <p class="text-gray-500 text-sm mb-6 line-clamp-3">
                            <?php echo $noticia['resumo']; ?>
                        </p>
                        <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Ler Mais</span>
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
