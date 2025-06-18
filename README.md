# 🚀 Desafio 03 - GitHub Blog

Este projeto é parte do curso **Ignite React** da [Rocketseat](https://rocketseat.com.br), e foi desenvolvido como solução para o **Desafio 03: GitHub Blog**. O objetivo é criar uma aplicação que consome dados da API do GitHub e exibe publicações como se fosse um blog técnico.

<!-- ## 📸 Preview
 -->

## 🧩 Funcionalidades

* Listagem de publicações a partir de issues de um repositório no GitHub
* Visualização de detalhes de uma publicação
* Busca por publicações utilizando a API do GitHub
* Estilização com base em um layout fornecido (Figma)
* Perfil do autor com avatar, bio, GitHub e Rocketseat

## 🛠️ Tecnologias utilizadas

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [React Router Dom](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [Styled Components](https://styled-components.com/) ou outro CSS-in-JS (ajuste conforme usado)
* [Phosphor Icons](https://phosphoricons.com/)

## 🔍 Como funciona

A aplicação consome dados da API pública do GitHub para listar issues de um repositório específico, funcionando como um blog. O conteúdo da issue representa o conteúdo de uma postagem.

* O título da issue = título da publicação
* O corpo da issue = conteúdo da publicação
* A data de criação = data da publicação
* A busca usa `GET /search/issues?q=...` para filtrar posts

## 🖥️ Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/sua-usuaria/github-blog

# Acesse a pasta
cd github-blog

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

> A aplicação estará disponível em `http://localhost:5173`

## 📁 Organização

* `src/pages`: páginas da aplicação (Home, Post)
* `src/components`: componentes reutilizáveis (Header, ProfileCard, PostCard etc.)
* `src/services`: configuração do Axios e chamadas à API
* `src/styles`: temas globais e estilos

## 📌 Desafio proposto por:

[Rocketseat - Ignite React 2021](https://rocketseat.com.br/ignite)

