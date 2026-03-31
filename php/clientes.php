<?php 
require_once 'includes/db.php';
$pageTitle = "Clientes";
include 'includes/header.php';

// Fetch Clientes
$stmt = $pdo->query("SELECT * FROM clientes ORDER BY nome ASC");
$clientes = $stmt->fetchAll();

// Group Clientes
$grupos = [
    'Empresas' => [],
    'Parceiros' => [],
    'Administradoras e Condomínios' => []
];

foreach ($clientes as $cliente) {
    if (isset($grupos[$cliente['grupo']])) {
        $grupos[$cliente['grupo']][] = $cliente;
    } else {
        $grupos['Empresas'][] = $cliente; // Fallback
    }
}
?>

<!-- Hero Section -->
<section class="relative h-[40vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/seed/business/1920/1080" 
            alt="Clientes Background" 
            class="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
        />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="max-w-3xl">
            <span class="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Confiança</span>
            <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Nossos <span class="text-blue-500">Clientes</span>.
            </h1>
            <p class="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                A Exec Engenharia orgulha-se de construir parcerias sólidas e duradouras com grandes nomes do mercado.
            </p>
        </div>
    </div>
</section>

<!-- Clients List -->
<section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-24">
            <?php foreach ($grupos as $titulo => $lista): ?>
                <?php if (count($lista) > 0): ?>
                    <div>
                        <div class="flex items-center gap-6 mb-12">
                            <h2 class="text-3xl font-bold text-gray-900 tracking-tight whitespace-nowrap"><?php echo $titulo; ?></h2>
                            <div class="h-px bg-gray-100 w-full"></div>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <?php foreach ($lista as $cliente): ?>
                                <div class="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg group flex items-center justify-center text-center h-32">
                                    <span class="text-gray-600 font-bold text-lg group-hover:text-blue-600 transition-colors">
                                        <?php echo $cliente['nome']; ?>
                                    </span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
