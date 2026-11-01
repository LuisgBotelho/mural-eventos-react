# Mural de Eventos do Curso
Projeto da disciplina de Programação Web para o seminário sobre React.
## Integrantes e apresentação
| Integrante | Bloco principal e orientação na oficina |
| --- | --- |
| Luis | A definir |
| Pedro | A definir |
| Victor | A definir |


## Estado desta branch: live-coding
Ponto inicial do live coding: projeto Vite com API simulada configurada.
RF1 e RF2 ainda serão implementados; a tela inicial é a do Vite.
A base da oficina será disponibilizada na branch start.
## Ambiente de referência
- Node.js: 26.13.0 LTS; npm: 11.20.0.
- React e React DOM: 19.3.1.
- React Router DOM: 7.18.5.
- Vite: 8.3.5; json-server: 1.0.0-beta.15.
- JavaScript, componentes funcionais e CSS próprio.

## Instalar os pré-requisitos
- [Node.js LTS, com npm](https://nodejs.org/pt-br/download).
- [Git para Windows](https://git-scm.com/install/windows).

Abra um terminal novo no VS Code, PowerShell ou Git Bash e confira:

```bash
node --version
npm --version
git --version
```
## Clonar e instalar esta base
```bash
git clone https://github.com/LuisgBotelho/mural-eventos-react.git
cd mural-eventos-react
git checkout live-coding
npm install
```

Selecione a branch antes de instalar as dependências. npm install obtém
React, Vite, React Router e json-server definidos pelo projeto.
Não precisa executar npm create vite dentro do clone: o projeto já existe.

## Executar o projeto
Abra dois terminais na pasta que contém package.json.
### Terminal 1: API simulada
```bash
npm run api
```
API: http://localhost:3000/eventos
### Terminal 2: aplicação React
```bash
npm run dev
```
Abra o endereço informado pelo Vite, normalmente http://localhost:5173.
Se a porta estiver ocupada, use a porta indicada no terminal.

Mantenha a API e a aplicação rodando em terminais separados.
Para encerrar cada processo, pressione Ctrl+C no terminal correspondente.
Ao reabrir o projeto, inicie ambos novamente. Não é necessário repetir
npm install em toda abertura, apenas em uma instalação nova ou após
mudanças nas dependências.
