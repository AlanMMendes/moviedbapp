# 🎬 Movie Streaming Platform (TMDB Integration)

Este projeto é um meio que usei antes para aprendizagem: estruturar uma plataforma de exibição de séries/filmes do zero **(*sem o streaming**)*. Aproveitei a oportunidade para entender o ecossistema do **Next.js** e entender cacheamento mais ofensivo no front-end.

---

##  O que eu quis resolver (e aprender)

Listar filmes, o objetivo aqui foi dominar a interface de entretenimento **(*tentar pelo menos*)**. 

* **Páginas Dinâmicas:** Implementei uma arquitetura de rotas via parâmetros. Isso significa que o app não é estático; ele entende o contexto da URL. Se você clica em *Band of Brothers*, o sistema identifica o `tv/{id_show}` e constrói a página com base nos dados da API.
* **Gerenciamento de Estado:** Utilizei **Redux** para a funcionalidade de "Favoritos". Para entender como persistir escolhas do usuário.
* **Consumo de Dados:** Usei **React Query** para lidar com o cache e as chamadas à API do *The Movie Database (TMDB)*, para que a navegação fosse rápida e sem carregamentos dos itens em cache, ou seja, cliquei na série/filme, sai da página, voltei novamente, cache ainda ativo (tem tempo para manter), loading é para ser mais fluído.

---

##  O que tem "debaixo do capô"

* **Next.js:** Framework base para roteamento.
* **Tailwind CSS:** Toda a estilização foi feita com Tailwind.
* **TMDB API:** Fonte de dados para filmes, séries e detalhes técnicos.
* **Redux:** Gestão de estado dos favoritos.
* **React Query:** Sincronização e cache de dados do servidor.

---

## Observações de Desenvolvimento

* **Estética:** O projeto conta com uma *Landing Page* padrão de serviços de streaming, focada em conversão e exibição das séries e filmes.
* **Evolução:** Este projeto foi focado em arquitetura e fluxo de dados. Por ser um ambiente de aprendizado inicial de Next.js, ele não conta com testes (RTL) nem otimização.
* **Mobile:** Criei pensando em mobile.

---

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências: `npm install` ou `yarn`.
3. Crie um arquivo `.env` com sua chave da API do TMDB e o nome NEXT_PUBLIC_BASE_API_URL: **CHAVE**.
4. Rode o ambiente de desenvolvimento: `npm run dev`.

---

> _"Lembrando que isso foi apenas para aprendizagem. "_
