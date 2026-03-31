# Projeto Skabe - Full-Stack (React + Node.js)

Este projeto foi migrado para uma arquitetura moderna **Full-Stack**. Isso significa que ele **não funciona** apenas abrindo o arquivo `index.html` no navegador. Ele precisa de um ambiente **Node.js** para rodar o servidor e processar o código React.

## 🚀 Como Rodar o Projeto Localmente

Siga estes passos após baixar e extrair o arquivo ZIP:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado em seu computador (versão 18 ou superior). Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### 2. Instalar Dependências
Abra o terminal (ou prompt de comando) na pasta onde você extraiu o projeto e digite:
```bash
npm install
```

### 3. Configurar Banco de Dados (Opcional)
O projeto já vem configurado para conectar ao banco de dados da Skabe. Se você quiser usar um banco local:
1. Copie o arquivo `.env.example` e renomeie para `.env`.
2. Edite as informações de conexão no arquivo `.env`.

### 4. Iniciar o Servidor de Desenvolvimento
Para rodar o site no seu computador, digite:
```bash
npm run dev
```
O terminal mostrará um endereço (geralmente `http://localhost:3000`). Abra esse endereço no seu navegador.

---

## ⚠️ Notas Importantes

*   **Não abra o `index.html` diretamente**: O navegador não conseguirá processar o código React sem o servidor rodando.
*   **Hospedagem**: Se você for colocar o site em um servidor de hospedagem comum (como cPanel que só aceita PHP), ele não funcionará da mesma forma. Este site agora precisa de um ambiente que suporte **Node.js**.
*   **Banco de Dados**: A conexão com o banco de dados depende de internet. Se o seu computador estiver bloqueando a conexão com o servidor da Skabe, os dados (obras, notícias) podem não aparecer.
