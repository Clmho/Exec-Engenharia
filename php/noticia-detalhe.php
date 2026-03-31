<?php 
require_once 'includes/db.php';
$id = isset($_GET['id']) ? $_GET['id'] : null;

if (!$id) {
    header('Location: noticias.php');
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM noticias WHERE id = ?");
$stmt->execute([$id]);
$noticia = $stmt->fetch();

if (!$noticia) {
    header('Location: noticias.php');
    exit;
}

$pageTitle = $noticia['titulo'];
include 'includes/header.php';
?>

<article class="pt-32 pb-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="noticias.php" class="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-10 transition-colors group">
            <i data-lucide="arrow-left" size="18" class="transition-transform group-hover:-translate-x-1"></i> Voltar para Notícias
        </a>

        <header class="mb-12">
            <div class="flex items-center gap-3 text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">
                <i data-lucide="calendar" size="18"></i>
                <?php echo $noticia['data']; ?>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                <?php echo $noticia['titulo']; ?>
            </h1>
            <p class="text-xl text-gray-500 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                <?php echo $noticia['resumo']; ?>
            </p>
        </header>

        <div class="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl bg-gray-200">
            <img 
                src="<?php echo $noticia['imagem_capa']; ?>" 
                alt="<?php echo $noticia['titulo']; ?>" 
                class="w-full h-full object-cover"
                referrerPolicy="no-referrer"
            />
        </div>

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p><?php echo nl2br($noticia['conteudo']); ?></p>
            <p>
                A Exec Engenharia continua investindo em processos que garantam não apenas a qualidade técnica, mas também o respeito ao meio ambiente e à comunidade local. 
                Nossa visão estratégica para os próximos anos inclui a expansão de nossas operações com foco em construções inteligentes.
            </p>
            <p>
                Para saber mais sobre nossos projetos e como podemos ajudar sua empresa, entre em contato com nossa equipe comercial.
            </p>
        </div>

        <footer class="mt-16 pt-8 border-t border-gray-100 flex justify-end items-center">
            <a href="noticias.php" class="text-blue-600 font-bold hover:underline">
                Ver todas as notícias
            </a>
        </footer>
    </div>
</article>

<?php include 'includes/footer.php'; ?>
