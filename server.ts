import express from "express";
import { createServer as createViteServer } from "vite";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "mysql.skabe.com.br",
  user: process.env.DB_USER || "skabe07",
  password: process.env.DB_PASSWORD || "int13cam",
  database: process.env.DB_NAME || "skabe07",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", async (req, res) => {
    try {
      const connection = await pool.getConnection();
      connection.release();
      res.json({ status: "ok", database: "connected" });
    } catch (error) {
      console.error("Database connection failed:", error);
      res.status(500).json({ status: "error", database: "disconnected", error: String(error) });
    }
  });

  app.get("/api/obras", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM obras");
      // Parse JSON strings back to arrays if needed
      const obras = (rows as any[]).map(row => ({
        ...row,
        imagens: row.imagens ? JSON.parse(row.imagens) : []
      }));
      res.json(obras);
    } catch (error) {
      console.error("Error fetching obras:", error);
      res.status(500).json({ error: "Failed to fetch obras" });
    }
  });

  app.get("/api/obras/:id", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM obras WHERE id = ?", [req.params.id]);
      const obras = rows as any[];
      if (obras.length === 0) return res.status(404).json({ error: "Obra not found" });
      const obra = {
        ...obras[0],
        imagens: obras[0].imagens ? JSON.parse(obras[0].imagens) : []
      };
      res.json(obra);
    } catch (error) {
      console.error("Error fetching obra:", error);
      res.status(500).json({ error: "Failed to fetch obra" });
    }
  });

  app.get("/api/noticias", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM noticias");
      res.json(rows);
    } catch (error) {
      console.error("Error fetching noticias:", error);
      res.status(500).json({ error: "Failed to fetch noticias" });
    }
  });

  app.get("/api/noticias/:id", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM noticias WHERE id = ?", [req.params.id]);
      const noticias = rows as any[];
      if (noticias.length === 0) return res.status(404).json({ error: "Noticia not found" });
      res.json(noticias[0]);
    } catch (error) {
      console.error("Error fetching noticia:", error);
      res.status(500).json({ error: "Failed to fetch noticia" });
    }
  });

  app.get("/api/clientes", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM clientes");
      res.json(rows);
    } catch (error) {
      console.error("Error fetching clientes:", error);
      res.status(500).json({ error: "Failed to fetch clientes" });
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
