# Projeto Skabe - Versão HTML Autônoma

Este projeto foi convertido para funcionar de forma **totalmente autônoma** diretamente no seu navegador, sem a necessidade de instalar o Node.js, rodar servidores ou processos de build. Todo o CSS, JavaScript e imagens necessárias foram embutidos em um único arquivo HTML.

## 🚀 Como Visualizar o Site

1. Após baixar e extrair o arquivo ZIP, procure pelo arquivo chamado **`site-pronto.html`** na pasta principal.
2. Dê um **duplo clique** neste arquivo para abri-lo no seu navegador (Chrome, Firefox, Safari, Edge, etc.).
3. O site funcionará perfeitamente, incluindo todas as páginas, navegação e animações.

## ⚠️ Notas Importantes

*   **Navegação**: A navegação entre as páginas (Home, Empresa, Obras, etc.) funciona perfeitamente dentro deste único arquivo HTML. Você notará que a URL no navegador terá um `#` (ex: `site-pronto.html#/obras`). Isso é normal e esperado para que o site funcione sem um servidor.
*   **Hospedagem**: Se você for colocar o site na internet (como em um cPanel ou qualquer hospedagem simples), basta fazer o upload do arquivo **`site-pronto.html`** (você pode renomeá-lo para `index.html` no seu servidor) e ele funcionará sem precisar de nenhuma configuração especial.
*   **Dados**: Os dados das obras, notícias e clientes foram embutidos diretamente no código, removendo a dependência de um banco de dados externo para que o site funcione offline.
*   **Edição**: Como todo o código (React, Tailwind, Framer Motion) foi compilado e embutido neste único arquivo para garantir que o layout fique *exatamente* como no preview, o código fonte do `site-pronto.html` é minificado (compactado). Se você precisar fazer alterações no conteúdo ou layout no futuro, deverá editar os arquivos na pasta `src/` e gerar um novo build.

