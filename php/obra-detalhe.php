<?php 
require_once 'includes/db.php';
$id = isset($_GET['id']) ? $_GET['id'] : null;

if (!$id) {
    header('Location: obras.php');
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM obras WHERE id = ?");
$stmt->execute([$id]);
$obra = $stmt->fetch();

if (!$obra) {
    header('Location: obras.php');
    exit;
}

$pageTitle = $obra['titulo'];
include 'includes/header.php';

// Decode imagens (stored as JSON in DB)
$imagens = json_decode($obra['imagens'], true) ?: [];
?>

<section class="pt-32 pb-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="obras.php" class="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-10 transition-colors group">
            <i data-lucide="arrow-left" size="18" class="transition-transform group-hover:-translate-x-1"></i> Voltar para Obras
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <!-- Content -->
            <div class="space-y-12">
                <header>
                    <div class="flex items-center gap-3 text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">
                        <i data-lucide="tag" size="18"></i>
                        <?php echo $obra['categoria']; ?>
                    </div>
                    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                        <?php echo $obra['titulo']; ?>
                    </h1>
                    <div class="flex flex-wrap gap-8 text-gray-500 font-medium">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                                <i data-lucide="map-pin" size="20"></i>
                            </div>
                            <?php echo $obra['localizacao']; ?>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                                <i data-lucide="calendar" size="20"></i>
                            </div>
                            <?php echo $obra['ano']; ?>
                        </div>
                    </div>
                </header>

                <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    <p class="text-xl text-gray-900 font-medium mb-6"><?php echo $obra['descricao']; ?></p>
                    <p>
                        A Exec Engenharia aplicou as mais modernas técnicas de construção civil neste projeto, garantindo eficiência energética, sustentabilidade e durabilidade estrutural. 
                        Cada etapa foi rigorosamente monitorada por nossa equipe técnica para assegurar o cumprimento dos mais altos padrões de qualidade.
                    </p>
                </div>

                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 class="text-xl font-bold text-gray-900 mb-6">Destaques Técnicos</h3>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li class="flex items-center gap-3 text-gray-600">
                            <div class="w-2 h-2 bg-blue-600 rounded-full"></div> Gestão de resíduos eficiente
                        </li>
                        <li class="flex items-center gap-3 text-gray-600">
                            <div class="w-2 h-2 bg-blue-600 rounded-full"></div> Estrutura de alta performance
                        </li>
                        <li class="flex items-center gap-3 text-gray-600">
                            <div class="w-2 h-2 bg-blue-600 rounded-full"></div> Acabamentos premium
                        </li>
                        <li class="flex items-center gap-3 text-gray-600">
                            <div class="w-2 h-2 bg-blue-600 rounded-full"></div> Prazo de entrega antecipado
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Gallery -->
            <div class="space-y-6" x-data="{ selectedIndex: null }">
                <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                    <img 
                        src="<?php echo $obra['imagem_capa']; ?>" 
                        alt="<?php echo $obra['titulo']; ?>" 
                        class="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                
                <div class="grid grid-cols-3 gap-4">
                    <?php foreach ($imagens as $index => $img): ?>
                        <div 
                            @click="selectedIndex = <?php echo $index; ?>"
                            class="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity bg-gray-200"
                        >
                            <img 
                                src="<?php echo $img; ?>" 
                                alt="Galeria <?php echo $index; ?>" 
                                class="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    <?php endforeach; ?>
                </div>

                <!-- Lightbox -->
                <div 
                    x-show="selectedIndex !== null" 
                    x-cloak
                    class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    @keydown.escape.window="selectedIndex = null"
                >
                    <button @click="selectedIndex = null" class="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors">
                        <i data-lucide="x" size="32"></i>
                    </button>

                    <button 
                        @click="selectedIndex = (selectedIndex > 0) ? selectedIndex - 1 : <?php echo count($imagens) - 1; ?>"
                        class="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                    >
                        <i data-lucide="chevron-left" size="48"></i>
                    </button>

                    <div class="max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center">
                        <template x-if="selectedIndex !== null">
                            <img 
                                :src="[<?php echo "'" . implode("','", $imagens) . "'"; ?>][selectedIndex]" 
                                class="max-w-full max-h-full object-contain rounded-lg"
                                referrerPolicy="no-referrer"
                            />
                        </template>
                    </div>

                    <button 
                        @click="selectedIndex = (selectedIndex < <?php echo count($imagens) - 1; ?>) ? selectedIndex + 1 : 0;"
                        class="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                    >
                        <i data-lucide="chevron-right" size="48"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
