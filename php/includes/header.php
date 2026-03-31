<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle . " | Exec Engenharia" : "Exec Engenharia"; ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        [x-cloak] { display: none !important; }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        blue: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            200: '#bfdbfe',
                            300: '#93c5fd',
                            400: '#60a5fa',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            800: '#1e40af',
                            900: '#1e3a8a',
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-white text-gray-900">
    <?php 
    $current_page = basename($_SERVER['PHP_SELF']); 
    $is_home = ($current_page == 'index.php' || $current_page == '');
    ?>
    
    <nav
        x-data="{ isOpen: false, isScrolled: false }"
        x-init="window.addEventListener('scroll', () => isScrolled = window.scrollY > 20)"
        :class="(isScrolled || !<?php echo $is_home ? 'true' : 'false'; ?>) ? 'bg-white py-2 border-gray-200 shadow-sm' : 'bg-transparent py-4 border-transparent'"
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <a href="index.php" class="flex items-center group">
                    <img 
                        src="https://execengenharia.com.br/logo-exec-engenharia.png" 
                        alt="Exec Engenharia" 
                        :class="(isScrolled || !<?php echo $is_home ? 'true' : 'false'; ?>) ? 'h-12' : 'h-16'"
                        class="w-auto transition-all"
                        referrerPolicy="no-referrer"
                    />
                </a>

                <!-- Desktop Nav -->
                <div class="hidden md:flex items-center gap-8">
                    <?php
                    $navLinks = [
                        ['name' => 'Home', 'path' => 'index.php'],
                        ['name' => 'Empresa', 'path' => 'empresa.php'],
                        ['name' => 'Obras', 'path' => 'obras.php'],
                        ['name' => 'Clientes', 'path' => 'clientes.php'],
                        ['name' => 'Notícias', 'path' => 'noticias.php'],
                        ['name' => 'Contato', 'path' => 'contato.php'],
                    ];

                    foreach ($navLinks as $link):
                        $active = ($current_page == $link['path']);
                        $text_class = "";
                        if ($is_home) {
                            $text_class = "isScrolled ? '" . ($active ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600') . "' : '" . ($active ? 'text-white' : 'text-white/90 hover:text-white underline-offset-8 hover:underline') . "'";
                        } else {
                            $text_class = "'" . ($active ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600') . "'";
                        }
                    ?>
                        <a
                            href="<?php echo $link['path']; ?>"
                            :class="<?php echo $text_class; ?>"
                            class="text-sm font-bold transition-colors uppercase tracking-wide"
                        >
                            <?php echo $link['name']; ?>
                        </a>
                    <?php endforeach; ?>
                </div>

                <!-- Mobile Menu Button -->
                <button
                    class="md:hidden p-2 transition-colors"
                    :class="(isScrolled || !<?php echo $is_home ? 'true' : 'false'; ?>) ? 'text-gray-800' : 'text-white'"
                    @click="isOpen = !isOpen"
                >
                    <i x-show="!isOpen" data-lucide="menu"></i>
                    <i x-show="isOpen" data-lucide="x"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav -->
        <div
            x-show="isOpen"
            x-cloak
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 max-h-0"
            x-transition:enter-end="opacity-100 max-h-96"
            x-transition:leave="transition ease-in duration-300"
            x-transition:leave-start="opacity-100 max-h-96"
            x-transition:leave-end="opacity-0 max-h-0"
            class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 overflow-hidden py-4"
        >
            <div class="flex flex-col gap-4 px-4">
                <?php foreach ($navLinks as $link): 
                    $active = ($current_page == $link['path']);
                ?>
                    <a
                        href="<?php echo $link['path']; ?>"
                        class="text-base font-medium py-2 border-b border-gray-50 <?php echo $active ? 'text-blue-600' : 'text-gray-600'; ?>"
                    >
                        <?php echo $link['name']; ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </nav>
    <script>lucide.createIcons();</script>
