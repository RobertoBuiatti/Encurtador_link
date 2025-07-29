# 🚀 Encurtador de Links

Um projeto completo de encurtador de URLs, desenvolvido com foco em modularidade, escalabilidade e boas práticas de desenvolvimento. Este repositório contém tanto o **frontend** (React + TypeScript) quanto o **backend** (Node.js + TypeScript), organizados em pastas separadas para facilitar manutenção e evolução.

---

## 📂 Estrutura de Pastas

```
encurtador_link/
├── backend/         # API REST para encurtamento de URLs
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/        # Interface web para usuários
│   ├── src/
│   │   ├── components/
│   │   │   ├── Shortener.tsx
│   │   │   └── Shortener.module.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
└── README.md        # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces de usuário reativas e componentizadas.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e legibilidade do código.
- **Vite:** Ferramenta moderna de build e desenvolvimento rápido para projetos frontend, com hot reload eficiente.
- **CSS Modules:** Abordagem para escopo local de estilos, evitando conflitos e facilitando manutenção.
- **Node.js:** Ambiente de execução para JavaScript no servidor, utilizado para construir APIs rápidas e escaláveis.
- **Express:** Framework minimalista para Node.js, facilita a criação de APIs RESTful de forma simples e modular.
- **ESLint:** Ferramenta de análise estática que garante padrões de qualidade e estilo no código.
- **Git:** Sistema de controle de versão distribuído, essencial para colaboração e histórico de mudanças.

---

## 🎨 Organização e Boas Práticas

- **Componentização:** Componentes reutilizáveis e bem tipados.
- **Estilos:** Separação total dos estilos em arquivos CSS Modules.
- **Tipagem:** Uso extensivo de TypeScript para segurança e clareza.
- **Modularidade:** Código dividido em módulos e pastas específicas.
- **Escalabilidade:** Estrutura pensada para fácil expansão.

---

## ⚡ Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/RobertoBuiatti/Encurtador_link.git
cd Encurtador_link
```

### 2. Instalar dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3. Rodar o Backend

```bash
npm run dev
```

### 4. Rodar o Frontend

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para visualizar a interface.

---

## 🧩 Detalhamento da Implementação

### Backend

- **Express API** para receber URLs e retornar versões encurtadas.
- **Validação** de URLs e tratamento de erros.
- **Estrutura modular** para fácil adição de novas funcionalidades.

### Frontend

- **Formulário** para entrada de URLs.
- **Exibição** do link encurtado com opção de copiar.
- **Componentes** com tipagem forte e estilos isolados.

---

## 📋 Exemplos de Uso

1. Insira uma URL no campo do formulário.
2. Clique em "Encurtar".
3. O link encurtado será exibido e poderá ser copiado.

---

## 🏆 Diferenciais

- Código limpo, legível e eficiente.
- Separação clara entre frontend e backend.
- Fácil de escalar e manter.
- Estilos totalmente isolados via CSS Modules.
- Tipagem robusta com TypeScript.

---

## 📢 Contribuição

Sinta-se à vontade para abrir issues ou pull requests com sugestões, melhorias ou correções!

---

## 📄 Licença

Este projeto está sob a licença MIT.

---
