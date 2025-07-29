// backend/src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

type Link = {
  id: string;
  originalUrl: string;
  shortUrl: string;
  visits: number;
};

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(cors());
app.use(express.json());

const links: Record<string, Link> = {};

// Gera um ID curto
function generateShortId(): string {
  return uuidv4().replace(/-/g, "").slice(0, 8);
}

// Cria um link encurtado
app.post("/api/shorten", (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL obrigatória." });
  }

  const id = generateShortId();
const shortUrl = `${process.env.RENDER_EXTERNAL_URL || "http://localhost:" + port}/${id}`;
  links[id] = { id, originalUrl: url, shortUrl, visits: 0 };

  return res.status(201).json({ id, shortUrl });
});

// Redireciona e contabiliza visita
app.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const link = links[id];
  if (!link) {
    return res.status(404).send("Link não encontrado.");
  }
  link.visits += 1;
  return res.redirect(link.originalUrl);
});

// Retorna analytics do link
app.get("/api/analytics/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const link = links[id];
  if (!link) {
    return res.status(404).json({ error: "Link não encontrado." });
  }
  return res.json({
    id: link.id,
    originalUrl: link.originalUrl,
    shortUrl: link.shortUrl,
    visits: link.visits,
  });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
