# 🎬 Movie Streaming Platform (TMDB Integration)

Este projeto nasceu de uma aprendizagem: estruturar uma plataforma de streaming do zero **(*sem o streaming, Sockets são bem chatos de serem integrados sem custo**)*. Aproveitei a oportunidade para mergulhar no ecossistema do **Next.js** e entender como gerenciar grandes volumetria de dados de mídia.

---

##  O que eu quis resolver (e aprender)

Listar filmes, o objetivo aqui foi dominar a interface de entretenimento **(*tentar pele menos*)**. 

* **Páginas Dinâmicas:** Implementei uma arquitetura de rotas via parâmetros. Isso significa que o app não é estático; ele entende o contexto da URL. Se você clica em *Band of Brothers*, o sistema identifica o `tv/{id_show}` e constrói a página em tempo real com base nos dados da API.
* **Gerenciamento de Estado:** Utilizei **Redux** para a funcionalidade de "Favoritos". Foi um excelente laboratório para entender como persistir escolhas do usuário globalmente na aplicação enquanto eu ainda consolidava meus estudos na biblioteca.
* **Consumo de Dados:** Usei **React Query** para lidar com o cache e as chamadas à API do *The Movie Database (TMDB)*, garantindo que a navegação entre filmes fosse rápida e sem *loadings* desnecessários.

---

##  O que tem "debaixo do capô"

* **Next.js:** Framework base para SSR e roteamento.
* **Tailwind CSS:** Toda a estilização foi feita na mão com Tailwind (neste projeto optei por não usar componentes prontos como Shadcn para praticar o CSS utilitário puro).
* **TMDB API:** Fonte de dados para filmes, séries e detalhes técnicos.
* **Redux:** Gestão de estado dos favoritos.
* **React Query:** Sincronização e cache de dados do servidor.

---

## Observações de Desenvolvimento

* **Estética:** O projeto conta com uma *Landing Page* padrão de serviços de streaming, focada em conversão e exibição visual impactante.
* **Evolução:** Este projeto foi focado em arquitetura e fluxo de dados. Por ser um ambiente de aprendizado inicial de Next.js, ele não conta com testes automatizados (RTL) nem otimização.
* **Mobile:** Criei pensando em mobile.

---

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências: `npm install` ou `yarn`.
3. Crie um arquivo `.env` com sua chave da API do TMDB e o nome NEXT_PUBLIC_BASE_API_URL: **CHAVE**.
4. Rode o ambiente de desenvolvimento: `npm run dev`.

---

> _"Lembrando que isso foi apenas para aprendizagem, a cada dia que passa, eu aprendo novas maneiras de criar projetos de forma mais organizada e eficiente, ou seja, a uma ano atrás com os mesmo conhecimento, iria ter testes via RTL, talvez um storybook, uma estrutura mais organizada de pastas, componentes mais estruturados e dinâmicos, interfaces, mais hooks, uns commits mais estruturados, branchs separadas ... e claro, quanto mais nativo for melhor."_
