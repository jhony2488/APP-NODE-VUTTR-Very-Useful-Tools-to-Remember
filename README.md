<h1 align="center" id="vuttr">
   VUTTR
</h1>

<p align="center">🚀 VUTTR é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags</p>

<h2 id="tabela-de-conteudo">Tabela de conteúdos</h2>
<!--ts-->
   
- [Sobre](#---vuttr)

- [Tabela de Conteudo](#tabela-de-conteudo)

- [Status do projeto](#----vuttr--em-construção--)

- [Features](#----features)

- [Demonstração da aplicação](#----demonstração-da-aplicação)

- [Como usar](#como-usar)

  - [Pre Requisitos](#pré-requisitos)

  - [Instalação](#instalação)

  - [Rodando a API](#-rodando-a-api)

- [Testes](#-testes)

- [Documentação](#----documentatação-da-aplicação)

- [Tecnologias](#-tecnologias)

- [Autor](#autor)

- [Licença](#licença)
<!--te-->

<h2  id="status-projeto">  
	🚧  VUTTR Back End 🚀 Concluido
</h2>

<h2  id="features">  
  Features
</h2>

- [x] Desenvolver e realizar os testes
- [x] Cadastro de usuário
- [x] Pegar dados de um unico usuario
- [x] Alterar dados de usuário
- [x] Deletar usuário
- [x] Cadastro de Ferramentas
- [x] Pegar dados das ferramentas de um unico usuario
- [x] Alterar dados das ferramentas de um unico usuario
- [x] Deletar dados das ferramentas de um unico usuario
- [x] Cadastro de Tags
- [x] Pegar dados das tags
- [x] Alterar dados das tags
- [x] Deletar tags
- [x] cadastro de usuario administrador
- [x] Admninistrador pegar dados de um unico usuario
- [x] Admninistrador pegar dados de todos os usuarios

<h2 id="app-demo">  
  Demonstração da API
</h2>
<a href="#" align="center">Link Da API</a>

<h2>Como usar</h2>

<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h3 id="instalacao">Instalação</h3>

```bash
# Clone este repositório
$ git clone <https://github.com/jhony2488/API-NODE-VUTTR-Very-Useful-Tools-to-Remember>

# Acesse a pasta do projeto no terminal/cmd
$ cd API-NODE-VUTTR-Very-Useful-Tools-to-Remember

# Instale as dependências
$ npm install || yarn add

```

<h3 id="rodando-api">🎲 Rodando a API em modo de desenvolvimentor</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o MSQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

```bash
# Execute o mysql no seu terminal/CMD
$  mysql -h localhost -u root -p

# Crie um banco de dados chamado vuttr_development no MySQL
$ CREATE DATABASE vuttr_development;

# Execute a aplicação em modo de desenvolvimento
$ npm run dev || yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

<h3 id="rodando-api">🎲 Rodando a API em modo de produção </h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o MySQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

```bash
# Execute o mysql no seu terminal/CMD
$  mysql -h localhost -u root -p

# Crie um banco de dados chamado vuttr no MySQL
$ CREATE DATABASE vuttr;

# Execute o build aplicação
$ npm run build || yarn build

# Execute a aplicação em modo de desenvolvimento
$ npm run start || yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

<h2 id="tests">🛠 Testes</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Instale o MySQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

```bash
# Execute o mysql no seu terminal/CMD
$  mysql -h localhost -u root -p

# Crie um banco de dados chamado vuttr_test no MySQL
$ CREATE DATABASE vuttr_test;

# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```

<h2 id="app-demo">  
  Documentação da aplicação
</h2>

```bash
#  Executar o build da documentação caso ja esteja com a aplicação rodando com o docker , basta apenas acessar a URL abaixo
$ npm run documentation || yarn documentation

# O servidor inciará na porta:3000 - acesse a documentação <http://localhost:3000/documentation/>
```

Caso a aplicação já esteja sendo executada com docker basta acessar sem precisar executar o comando acima - <http://localhost:3000/documentation/>

### Acesse a documentação da localmente

- [http://localhost:3000/documentation/](http://localhost:3000/documentation/)

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [MySQL](https://www.mysql.com/)

<h2 id="autor" align="center">Autor</h2>

<div align="center">

<a href="https://jhonyaraujo.netlify.app/">
 <img style="border-radius: 50%;" src="https://raw.githubusercontent.com/jhony2488/images/master/perfil.jpg" width="200px;" alt="Jhonata Vinicius"/>
 <br />
 <h2>Jhonata Vinicius Da Silva Araujo(Jhony Araujo) </h2></a>

<p>Feito por Jhonata Vinicius 👋🏽 Entre em contato!</p>

<a href="https://twitter.com/JhonyAraujoDev" align="center"><img src="https://raw.githubusercontent.com/jhony2488/images/master/twitter.png" height="60px" width="60px" /></a>
<a href="https://www.linkedin.com/in/jhonatavinicius2488/"><img src="https://raw.githubusercontent.com/jhony2488/images/master/linkedin.png" style="margin-left:10px;" height="60px" width="60px" /></a>
<a href="https://join.skype.com/invite/v9azzgZrhpWh"><img src="https://raw.githubusercontent.com/jhony2488/images/master/skype%20(1).png" height="60px" width="60px" /></a>
<a href="https://www.facebook.com/jhony.araujo.dev/"><img src="https://raw.githubusercontent.com/jhony2488/images/master/facebook%20(1).png" height="60px" width="60px" /></a>
<a href="https://www.instagram.com/jhony_araujo.dev/"><img src="https://raw.githubusercontent.com/jhony2488/images/master/instagram.png" height="60px" width="60px" /></a>
<a href="https://api.whatsapp.com/send?phone=5581983708177"><img src="https://raw.githubusercontent.com/jhony2488/images/master/whatsapp.png" height="60px" width="60px" /></a>
<a href="https://www.behance.net/jhonyaraujo"><img src="https://raw.githubusercontent.com/jhony2488/images/master/behance.png" height="60px" width="60px" /></a>

</div>

<h2 id="licenca">Licença</h2>

<a href="https://github.com/jhony2488/API-NODE-VUTTR-Very-Useful-Tools-to-Remember/blob/master/LICENSE" align="center">GNU GENERAL PUBLIC LICENSE</a>
