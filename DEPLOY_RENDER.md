# Instruções de Deploy no Render

## Backend (Node.js + TypeScript)

1. **Acesse o painel do Render** e clique em "New Web Service".
2. **Conecte seu repositório GitHub** e selecione o diretório `backend`.
3. **Configurações principais:**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Node Version:** Recomenda-se usar a versão LTS mais recente.
4. **Variáveis de ambiente:** Adicione conforme necessário (exemplo: URL do banco de dados, porta, etc).
5. **Deploy:** Clique em "Create Web Service" e aguarde o build e deploy.

## Frontend (React + Vite)

1. **Acesse o painel do Render** e clique em "New Static Site".
2. **Conecte seu repositório GitHub** e selecione o diretório `frontend`.
3. **Configurações principais:**
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Root Directory:** `frontend`
4. **Deploy:** Clique em "Create Static Site" e aguarde o build e deploy.

## Observações

- Certifique-se de que ambos os projetos estejam atualizados no GitHub antes de iniciar o deploy.
- O backend deve expor as rotas necessárias para o frontend consumir.
- Se precisar de variáveis de ambiente, configure-as no painel do Render em cada serviço.
- Para integração entre frontend e backend, utilize a URL pública do backend gerada pelo Render.

---
Deploy modular, escalável e seguindo boas práticas. Qualquer dúvida, consulte a [documentação oficial do Render](https://render.com/docs).
