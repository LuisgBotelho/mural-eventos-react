# Mural de Eventos do Curso

Projeto da disciplina de Programação Web para o seminário sobre React.
O mural reúne eventos acadêmicos do curso. O desenvolvimento inclui listagem,
busca, filtro por categoria, cadastro, detalhes e marcação de interesse,
divididos entre a demonstração e a oficina prática.

## Pré-requisitos

1. Instale o [Node.js LTS, com npm](https://nodejs.org/pt-br/download).
2. Instale o [Git para Windows](https://git-scm.com/install/windows).
3. Use o VS Code ou outro editor de sua preferência.

Depois de instalar, abra um terminal novo no PowerShell ou Git Bash e confira:

```bash
node --version
npm --version
git --version
```

## Ambiente de referência

- Node.js: 26.13.0 LTS; npm: 11.20.0.
- React e React DOM: 19.3.1.
- React Router DOM: 7.18.5.
- Vite: 8.3.5; json-server: 1.0.0-beta.15.
- JavaScript, componentes funcionais e CSS próprio.

React, Vite, React Router e json-server são instalados pelo `npm install`,
usando as dependências do projeto.

## Clonar e instalar

A turma utiliza a branch `start` como base da oficina. Selecione essa branch
antes de instalar as dependências:

```bash
git clone https://github.com/LuisgBotelho/mural-eventos-react.git
cd mural-eventos-react
git checkout start
npm install
```

O projeto já está criado. Cada integrante deve instalar as dependências na sua
máquina; a pasta `node_modules` não acompanha o repositório.

## Executar o projeto

Abra dois terminais, ambos na pasta que contém `package.json`.

### Terminal 1: API simulada

```bash
npm run api
```

Os dados ficam em `api/db.json`. A API estará disponível em
<http://localhost:3000/eventos>.

### Terminal 2: aplicação React

```bash
npm run dev
```

Abra o endereço informado pelo Vite, normalmente <http://localhost:5173>.
Se a porta estiver ocupada, use o endereço mostrado no terminal.

Mantenha os dois processos em execução para usar a aplicação com a API.
Para encerrar, pressione `Ctrl+C` em cada terminal.

Ao reabrir o projeto, execute novamente os dois comandos. O `npm install`
só precisa ser repetido em uma instalação nova ou após mudanças nas dependências.

## Organização e andamento do projeto

| Branch | Finalidade e conteúdo | Andamento |
| --- | --- | --- |
| `main` | Versão principal, que recebe as etapas revisadas e reunirá a solução final. | Em desenvolvimento. |
| `live-coding` | Ponto de partida da demonstração, com ambiente, API, roteamento e CSS preparados. | Preparada, sem RF1 e RF2. |
| `start` | Base da oficina: listagem de eventos (RF1), busca e filtro por categoria (RF2), com componentes vazios para as próximas atividades. | RF1 e RF2 concluídos. |
| `checkpoint-1` | Base da oficina mais o cadastro de eventos (RF3). | Planejada. |
| `checkpoint-2` | Cadastro e página de detalhes (RF3 e RF4). | Planejada. |
| `checkpoint-3` | Cadastro, detalhes e interesses compartilhados (RF3, RF4 e RF5). | Planejada. |

As branches de checkpoint serão disponibilizadas para apoiar a turma durante
a oficina. Cada uma terá a solução acumulada até aquele ponto.

## Integrantes e apresentação

| Integrante | Bloco principal e orientação na oficina |
| --- | --- |
| Luis | A definir |
| Pedro | A definir |
| Victor | A definir |

A divisão dos blocos e a participação na oficina serão definidas pelo grupo
antes da entrega.
