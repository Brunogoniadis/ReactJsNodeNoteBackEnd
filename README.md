# Projeto de Anotações com Backend Node.js e MongoDB

## Descrição

Este projeto é um backend simples para uma aplicação de anotações, construído com Node.js e MongoDB. Ele permite aos usuários criar, ler, atualizar e excluir anotações, além de definir prioridades para elas.

## Tecnologias Utilizadas

- Node.js
- Express
- Mongoose
- MongoDB
- CORS

## Funcionalidades

### CRUD de Anotações

- Criar novas anotações com título, conteúdo e prioridade (opcional).
- Listar todas as anotações ou filtrar por prioridade.
- Editar o conteúdo de uma anotação existente.
- Excluir anotações indesejadas.

### Priorização de Anotações

- Marcar uma anotação como prioritária para facilitar a organização.

## Execução

1. Clonar o repositório.
2. Instalar as dependências: `npm install`
3. Criar um arquivo `.env` com a URI do MongoDB: `MONGO_URI=<MONGO_URI>`
4. Iniciar o servidor: `npm start`
