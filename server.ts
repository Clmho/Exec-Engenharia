import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import pool from "./lib/db.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize DB tables if they don't exist
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS obras (
        id VARCHAR(255) PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        descricao TEXT,
        capa_imagem VARCHAR(255),
        imagens TEXT,
        categoria VARCHAR(255),
        ano VARCHAR(50),
        localizacao VARCHAR(255)
      )
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS noticias (
        id VARCHAR(255) PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        resumo TEXT,
        conteudo TEXT,
        imagem_capa VARCHAR(255),
        data VARCHAR(50)
      )
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS clientes (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        logo_url VARCHAR(255),
        categoria VARCHAR(255)
      )
    `);
    console.log("Database tables checked/created.");

    // Populate initial data if empty
    const [obrasCount] = await pool.query("SELECT COUNT(*) as count FROM obras");
    if ((obrasCount as any)[0].count === 0) {
      const initialObras = [
        {
          id: '1',
          titulo: 'Edifício Horizonte Azul',
          descricao: 'Um marco na arquitetura residencial contemporânea, o Edifício Horizonte Azul combina luxo, sustentabilidade e inovação tecnológica. Localizado em uma área nobre, o projeto conta com sistemas de reuso de água e energia solar.',
          capa_imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
          imagens: JSON.stringify([
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
          ]),
          categoria: 'Residencial',
          ano: '2024',
          localizacao: 'São Paulo, SP'
        },
        {
          id: '2',
          titulo: 'Centro Empresarial Nexus',
          descricao: 'Complexo corporativo de alto padrão com certificação LEED. O projeto prioriza espaços abertos, iluminação natural e flexibilidade de layout para empresas de tecnologia.',
          capa_imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
          imagens: JSON.stringify([
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop'
          ]),
          categoria: 'Comercial',
          ano: '2023',
          localizacao: 'Curitiba, PR'
        },
        {
          id: '3',
          titulo: 'Planta Industrial LogiTech',
          descricao: 'Construção de galpão logístico de última geração, com piso de alta resistência e docas automatizadas. Foco em eficiência operacional e segurança.',
          capa_imagem: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
          imagens: JSON.stringify([
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
          ]),
          categoria: 'Industrial',
          ano: '2023',
          localizacao: 'Joinville, SC'
        }
      ];
      for (const obra of initialObras) {
        await pool.query("INSERT INTO obras SET ?", obra);
      }
      console.log("Initial obras inserted.");
    }

    const [noticiasCount] = await pool.query("SELECT COUNT(*) as count FROM noticias");
    if ((noticiasCount as any)[0].count === 0) {
      const initialNoticias = [
        {
          id: '1',
          titulo: 'Exec Engenharia recebe prêmio de Sustentabilidade',
          resumo: 'A empresa foi reconhecida pelas práticas inovadoras em canteiros de obras sustentáveis.',
          conteudo: 'A Exec Engenharia e Construções Ltda. recebeu nesta semana o prestigiado Prêmio EcoConstruir. O reconhecimento veio através do projeto de gestão de resíduos implementado em todas as nossas obras no último ano, reduzindo em 40% o descarte em aterros sanitários.',
          imagem_capa: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop',
          data: '15/03/2026'
        },
        {
          id: '2',
          titulo: 'Novas tecnologias no setor da construção civil',
          resumo: 'Como o uso de BIM e drones está transformando a precisão das nossas entregas.',
          conteudo: 'A digitalização do canteiro de obras não é mais uma tendência, mas uma realidade na Exec. Estamos utilizando drones para mapeamento topográfico e realidade aumentada para visualização de projetos estruturais em tempo real.',
          imagem_capa: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1000&auto=format&fit=crop',
          data: '10/02/2026'
        }
      ];
      for (const noticia of initialNoticias) {
        await pool.query("INSERT INTO noticias SET ?", noticia);
      }
      console.log("Initial noticias inserted.");
    }

    const [clientesCount] = await pool.query("SELECT COUNT(*) as count FROM clientes");
    if ((clientesCount as any)[0].count === 0) {
      const initialClientes = [
        { id: '1', nome: 'TechCorp Solutions', logo_url: 'https://logo.clearbit.com/google.com', categoria: 'Empresas' },
        { id: '2', nome: 'Global Logistics', logo_url: 'https://logo.clearbit.com/amazon.com', categoria: 'Empresas' },
        { id: '3', nome: 'Urban Living', logo_url: 'https://logo.clearbit.com/airbnb.com', categoria: 'Empresas' },
        { id: '4', nome: 'Green Energy SA', logo_url: 'https://logo.clearbit.com/tesla.com', categoria: 'Empresas' },
        { id: '5', nome: 'Inova Real Estate', logo_url: 'https://logo.clearbit.com/microsoft.com', categoria: 'Empresas' },
        { id: '6', nome: 'Prime Bank', logo_url: 'https://logo.clearbit.com/stripe.com', categoria: 'Empresas' },
        { id: '7', nome: 'Construtora Alpha', logo_url: 'https://logo.clearbit.com/autodesk.com', categoria: 'Parceiros' },
        { id: '8', nome: 'Engenharia Beta', logo_url: 'https://logo.clearbit.com/bentley.com', categoria: 'Parceiros' },
        { id: '9', nome: 'Arquitetura Gamma', logo_url: 'https://logo.clearbit.com/houzz.com', categoria: 'Parceiros' },
        { id: '10', nome: 'Adm. Predial Central', logo_url: 'https://logo.clearbit.com/zillow.com', categoria: 'Administradoras e Condomínios' },
        { id: '11', nome: 'Condomínio Solar', logo_url: 'https://logo.clearbit.com/realtor.com', categoria: 'Administradoras e Condomínios' },
        { id: '12', nome: 'Gestão Patrimonial', logo_url: 'https://logo.clearbit.com/redfin.com', categoria: 'Administradoras e Condomínios' }
      ];
      for (const cliente of initialClientes) {
        await pool.query("INSERT INTO clientes SET ?", cliente);
      }
      console.log("Initial clientes inserted.");
    }
  } catch (err) {
    console.error("Error creating tables:", err);
  }

  // API Routes
  app.get("/api/obras", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM obras");
      const obras = (rows as any[]).map(row => ({
        ...row,
        imagens: JSON.parse(row.imagens || '[]')
      }));
      res.json(obras);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  });

  app.get("/api/noticias", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM noticias");
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  });

  app.get("/api/clientes", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM clientes");
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
