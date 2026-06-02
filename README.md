# 💉 PróSoro - Sistema de Gestão de Insumos Clínicos

Uma aplicação web desenvolvida para otimizar e organizar o controle de estoque de insumos em ambientes clínicos e hospitalares, focando na precisão dos dados e na agilidade da interface.

> 🚧 Projeto em constante evolução (Fase 1.0 - MVP de Estoque Concluído)

## 💻 Sobre o Projeto

O **PróSoro** nasceu da necessidade de modernizar e resolver gargalos operacionais no gerenciamento de inventário médico. A aplicação permite o controle rigoroso de ampolas, frascos e materiais, vinculando cada insumo diretamente ao seu laboratório fornecedor. O sistema foi projetado com uma arquitetura Single Page Application (SPA), garantindo transições de tela sem recarregamento e uma experiência de usuário (UX) fluida e responsiva.

## ✨ Funcionalidades Atuais

* **CRUD Completo de Insumos:** Criação, leitura, atualização e exclusão de itens do estoque.
* **Busca Dinâmica em Tempo Real:** Filtragem instantânea de insumos sem necessidade de submissão de formulários.
* **Relacionamento de Entidades:** Vinculação inteligente via *Foreign Key* (CNPJ) entre o insumo e o laboratório cadastrado.
* **Modais Inteligentes:** Formulários de cadastro e edição integrados em modais com animações CSS suaves (Fade-in e Pop-in) para manter o contexto visual do usuário.
* **Persistência Local:** Utilização da API do Web Storage (`localStorage`) para simulação de banco de dados e persistência das sessões.

## 🗺️ Roadmap (Próximos Passos)

O sistema foi desenhado com uma visão de produto escalável. As próximas *features* a serem implementadas transformarão o projeto em uma plataforma de gestão clínica completa:

- [ ] **Módulo de Pacientes:** Cadastro e gestão centralizada de Prontuários Eletrônicos.
- [ ] **Protocolos de Tratamento:** Controle e acompanhamento de pacotes de sessões adquiridos pelos pacientes (ex: gerenciamento de sessões de Tirzepatida).
- [ ] **Dashboards Interativos:** Painel de controle com gráficos gerenciais sobre o status da clínica.
- [ ] **Relatórios de Consumo:** Exportação de dados detalhados para auxiliar na reposição e no faturamento.
- [ ] **Integração com Backend:** Migração da persistência de dados para uma API RESTful e banco de dados relacional.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e boas práticas de engenharia de software:

* **[React](https://reactjs.org/)** (com Vite)
* **[TypeScript](https://www.typescriptlang.org/)** (Tipagem estática e interfaces rigorosas)
* **[Styled-Components](https://styled-components.com/)** (CSS-in-JS, escopo isolado e CSS Grid/Flexbox)
* **[React Router DOM](https://reactrouter.com/)** (Gerenciamento de rotas e navegação)
* **[React Icons](https://react-icons.github.io/react-icons/)** (Iconografia da interface)
