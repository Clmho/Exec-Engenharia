<?php 
$pageTitle = "Contato";
include 'includes/header.php'; 
?>

<section class="pt-32 pb-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Info -->
            <div>
                <span class="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Fale Conosco</span>
                <h1 class="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Estamos prontos para ouvir você.</h1>
                <p class="text-gray-500 text-lg mb-12 leading-relaxed">
                    Seja para um novo projeto, uma dúvida técnica ou uma proposta de parceria, nossa equipe está à disposição para atendê-lo com agilidade e profissionalismo.
                </p>

                <div class="space-y-8">
                    <div class="flex items-start gap-6">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                            <i data-lucide="phone" size="24"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 mb-1">Telefone / WhatsApp</h3>
                            <div class="flex flex-col gap-1">
                                <a href="tel:+5551999881367" class="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                                    Ligar: (51) 99988-1367
                                </a>
                                <a href="https://wa.me/5551999881367" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-green-600 transition-colors flex items-center gap-2">
                                    WhatsApp: (51) 99988-1367
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                            <i data-lucide="mail" size="24"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 mb-1">E-mail</h3>
                            <a href="mailto:exec@execengenharia.com.br" class="text-gray-500 hover:text-blue-600 transition-colors">
                                exec@execengenharia.com.br
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                            <i data-lucide="map-pin" size="24"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 mb-1">Endereço</h3>
                            <p class="text-gray-500">R. Dr. Emílio Ribas, 1058 - Cambuí</p>
                            <p class="text-gray-500">Campinas - SP, 13025-142</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100" x-data="{ success: false, loading: false }">
                <div x-show="success" x-cloak class="text-center py-12">
                    <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="check-circle-2" size="40"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h2>
                    <p class="text-gray-500 mb-8">Agradecemos o seu contato. Nossa equipe retornará em breve.</p>
                    <button @click="success = false" class="text-blue-600 font-bold hover:underline">
                        Enviar outra mensagem
                    </button>
                </div>

                <form x-show="!success" @submit.prevent="loading = true; setTimeout(() => { loading = false; success = true; }, 2000)" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-gray-700">Nome Completo</label>
                            <input
                                type="text"
                                required
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50 transition-all"
                                placeholder=""
                            />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-gray-700">E-mail</label>
                            <input
                                type="email"
                                required
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50 transition-all"
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-bold text-gray-700">Telefone / WhatsApp</label>
                        <input
                            type="text"
                            required
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50 transition-all"
                            placeholder=""
                        />
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-bold text-gray-700">Mensagem</label>
                        <textarea
                            rows={5}
                            required
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:ring-opacity-50 transition-all resize-none"
                            placeholder=""
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        :disabled="loading"
                        class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                    >
                        <i x-show="!loading" data-lucide="send" size="20"></i>
                        <i x-show="loading" data-lucide="loader-2" class="animate-spin"></i>
                        <span x-text="loading ? 'Enviando...' : 'Enviar Mensagem'"></span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Google Map -->
<section class="h-[450px] w-full bg-gray-100 relative overflow-hidden">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.35624127995!2d-47.0543236!3d-22.8993441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4984f9377d%3A0x2863925769246473!2sExec%20Engenharia%20e%20Constru%C3%A7%C3%B5es%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1711909312345!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style="border: 0" 
        allowfullscreen 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Localização Exec Engenharia"
    ></iframe>
</section>

<?php include 'includes/footer.php'; ?>
