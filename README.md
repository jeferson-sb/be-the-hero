<div align="center">
  <img src=".github/logo.svg">
  <p>Apoie ONGs, apoie as boas causas, <strong>be a hero!</strong><p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/a105875c-8c87-46d0-888a-f6b21ddb5323/deploy-status)](https://app.netlify.com/sites/be-thehero/deploys) ![](https://img.shields.io/badge/omnistack-11-blueviolet?style=flat-square)
![alt release](https://img.shields.io/github/v/release/jeferson-sb/be-the-hero?style=flat-square)

</div>

![alt Mockup frontend](.github/mockup.png)

## 💡 Projeto

O projeto propõe o auxílio a organizações não governamentais em suas campanhas financeiras.
Você pode cadastrar sua ONG e seu(s) caso(s) e obter contato dos apoiadores.

## 🛠 Ferramentas

- [Node.js](https://nodejs.org/en/docs/)
- [React](https://reactjs.org/)
- [React Native](http://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Express](http://expressjs.com/)
- [Knex](http://knexjs.org/)
- [Jest](https://jestjs.io/)
- [Styled Components](https://styled-components.com/)

## 💻 Demo

[https://be-thehero.netlify.com/](https://be-thehero.netlify.com/)

## 🚀 Quick start

### Instalação

```bash
$ npm install -g pnpm
$ pnpm install
```

### Utilização

Copie as variáveis de ambiente troque os valores com base no seu sistema.

```bash
$ cp packages/server/.env.example packages/server/.env
$ cp packages/web/.env.example packages/web/.env.local
```

Rode o frontend

```bash
$ pnpm web:dev
```

> Abra outro terminal na raiz do projeto e execute

```bash
$ pnpm server:db:migrate
$ pnpm server:dev
```

[Veja todos os endpoints](./backend/README.md)

## 📝 Licença

Este projeto está sob a licença [MIT](https://github.com/jeferson-sb/be-the-hero/blob/master/LICENSE.md)

`Made with ❤ by Jeferson © 2020`
