# Zapify | Web

> Leia em inglês: [README.md](./README.md)

Frontend do **Zapify**, uma plataforma de chat em tempo real focada em testes e boas práticas modernas de desenvolvimento web.

Este repositório contém a interface web desenvolvida com **Next.js** e estilizada com **Tailwind CSS**, visando responsividade, simplicidade e integração em tempo real via WebSockets.

---

## 📚 Índice

- [📄 Descrição](#descrição)
- [🛠 Tecnologias Utilizadas](#tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#estrutura-do-projeto)
- [▶️ Como Rodar o Projeto](#como-rodar-o-projeto)
- [📌 Documentação e Organização](#documentação-e-organização)
- [🧠 Autoria e Contato](#autoria-e-contato)

---

## 📄 Descrição

Zapify Web é a interface do usuário da plataforma Zapify. Gerencia login/cadastro, chat em tempo real, integração com WebSocket e melhorias de experiência do usuário, como notificações e indicador de digitação.

O foco atual está em construir um MVP limpo, escalável e bem estruturado, permitindo fácil adição de novas features.

---

## 🛠 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) (validação de esquemas)
- [Socket.IO Client](https://socket.io/)

---

## 📁 Estrutura do Projeto

```bash
zapify-web/
├── src/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── types/
│   └── utils/
├── public/
├── .env.local
├── tailwind.config.js
├── tsconfig.json
└── package.json
```


## ▶️ Como Rodar o Projeto

1- Clone o repositório:

```bash
git clone https://github.com/leonardopolicarpo/zapify-web
```

2- Instale as dependências:

```bash
npm install
```

3- Rode o servidor de desenvolvimento:

```bash
npm run dev
```

4- Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o resultado.


## 📌 Documentação e Organização

📋 [Kanban no GitHub (Zapify Backend)](https://github.com/users/leonardopolicarpo/projects/3)

## 🧠 Autoria e Contato

Desenvolvido por [Leonardo Policarpo](https://github.com/leonardopolicarpo)
🔗 LinkedIn: [Leonardo Policarpo](https://www.linkedin.com/in/leonardodumont/)