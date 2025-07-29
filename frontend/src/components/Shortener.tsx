import React, { useState } from "react";
import styles from "./Shortener.module.css";

type ShortenResponse = {
  id: string;
  shortUrl: string;
};

const Shortener: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState<ShortenResponse | null>(null);
  const [error, setError] = useState("");
  const [analytics, setAnalytics] = useState<{ visits: number } | null>(null);

  const handleShorten = async () => {
    setError("");
    setShortened(null);
    setAnalytics(null);
    try {
      const res = await fetch("http://localhost:3001/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (res.ok) {
        setShortened(data);
      } else {
        setError(data.error || "Erro ao encurtar.");
      }
    } catch {
      setError("Erro de conexão.");
    }
  };

  const fetchAnalytics = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3001/api/analytics/${id}`);
      const data = await res.json();
      if (res.ok) {
        setAnalytics({ visits: data.visits });
      } else {
        setError(data.error || "Erro ao buscar analytics.");
      }
    } catch {
      setError("Erro de conexão.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Encurtador de Links</h2>
      <input
        type="text"
        placeholder="Cole a URL aqui"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleShorten} className={styles.button}>
        Encurtar
      </button>
      {error && <div className={styles.error}>{error}</div>}
      {shortened && (
        <div className={styles.result}>
          <p>
            Link encurtado:{" "}
            <a href={shortened.shortUrl} target="_blank" rel="noopener noreferrer">
              {shortened.shortUrl}
            </a>
          </p>
          <button
            onClick={() => fetchAnalytics(shortened.id)}
            className={styles.button}
          >
            Ver Analytics
          </button>
        </div>
      )}
      {analytics && (
        <div className={styles.analytics}>
          <p>Visitas: {analytics.visits}</p>
        </div>
      )}
    </div>
  );
};

export default Shortener;
