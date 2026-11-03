# Oficina React — Mural de Eventos

**Atividade em duplas · Duração: 45 minutos · Ponto de partida: branch `start`**

A listagem, a busca por título e o filtro por categoria já estão prontos. Agora vocês vão completar o cadastro, a página de detalhes e os interesses. Este roteiro apresenta as tarefas e os testes; a implementação fica com a dupla.

Usem componentes funcionais, hooks, React Router e o CSS do projeto. A validação será própria e os interesses usarão Context, sem bibliotecas adicionais de formulários, estado ou componentes visuais.

Uma pessoa digita e a outra acompanha a lógica e testa. Troquem os papéis a cada checkpoint. Se surgir uma dúvida, chamem Luis, Pedro ou Vitor e mostrem o que esperavam que acontecesse.

## Antes de começar

O ambiente deve estar instalado conforme o [README do projeto](../README.md). Abram no VS Code a pasta que contém `package.json`.

Com o repositório clonado e sem alterações pendentes, preparem a base antes do início da oficina:

```bash
git checkout start
npm install
```

Não é necessário criar outro projeto React. Se houver alterações locais, chamem um integrante do grupo antes de trocar de branch.

Mantenham dois terminais abertos na pasta do projeto:

**Terminal 1 — API:**

```bash
npm run api
```

**Terminal 2 — aplicação:**

```bash
npm run dev
```

Abram o endereço informado pelo Vite, normalmente `http://localhost:5173`. A API responde em `http://localhost:3000/eventos`. Cada dupla usa sua própria API local; um cadastro não aparece nos outros computadores.

Confiram se a lista, a busca e o filtro funcionam. A `start` já contém os componentes das próximas atividades, ainda sem suas implementações. Reutilizem `API_URL`, `CATEGORIAS`, `formatarData` e os estilos existentes.

## Caminho da oficina

| Etapa | Tempo total | Resultado esperado |
| --- | --- | --- |
| Checkpoint 1 — RF3 | 18 minutos | Cadastrar um evento válido e voltar à lista. |
| Checkpoint 2 — RF4 | 12 minutos | Abrir os detalhes de um evento pelo título do card. |
| Checkpoint 3 — RF5 | 15 minutos | Compartilhar interesses entre cards, detalhe e cabeçalho. |

Esses tempos incluem orientação, implementação e conferência. Acompanhem os avisos e o cronômetro projetado. Ao concluir uma etapa, continuem no próprio código, sem trocar de branch.

## Checkpoint 1 — Formulário de cadastro (RF3)

**Tempo:** 18 minutos. **Base:** `start`.

**Objetivo:** completar `FormEvento` com campos controlados, validação e envio à API.

**Arquivo principal:** `src/componentes/FormEvento.jsx`.

### Regras do formulário

| Campo | Regra |
| --- | --- |
| `titulo` | Obrigatório, com pelo menos 5 caracteres após remover espaços das pontas. |
| `descricao` | Opcional. |
| `data` | Obrigatória e posterior ao dia da atividade. Hoje e datas passadas são inválidos. |
| `local` | Obrigatório; apenas espaços não valem. |
| `categoria` | Uma destas opções: Palestra, Workshop, Minicurso ou Hackathon. |

A data enviada usa o formato `AAAA-MM-DD`. O `id` é gerado pela API, não é um campo do formulário. Todos os cinco campos devem ter uma `label` associada.

### O que implementar

1. Criem um estado `form`, como objeto, com os cinco campos. Liguem cada controle ao estado usando `value` e `onChange`.
2. Usem um único manipulador `atualizar` para os campos. O atributo `name` deve indicar qual propriedade mudar, preservando as demais.
3. Escrevam `validar(form)`, que devolve um objeto de erros por campo. Sem erros, esse objeto deve ficar vazio.
4. Exibam os erros abaixo dos respectivos campos. Associem `label` e controle com `htmlFor`/`id`, e a mensagem com `aria-describedby`.
5. No envio, impeçam a submissão tradicional com `preventDefault`, validem e interrompam o cadastro se houver erros.
6. Enviem os dados válidos com `fetch`, método `POST`, para o endereço definido em `API_URL`. O corpo deve ser JSON e o cabeçalho deve informar esse formato.
7. Verifiquem o sucesso da resposta antes de navegar. Durante o envio, indiquem que o cadastro está em andamento e evitem envios repetidos. Se falhar, mostrem uma mensagem e permitam tentar novamente.
8. Após o sucesso, usem `useNavigate` para voltar a `/`. Confiram se o novo evento aparece na lista.

### Pistas para pensar

- Ao atualizar o título, o que precisa ser preservado no objeto para não apagar o local?
- Qual é a diferença entre o `name` do campo e seu `id`?
- Em que ponto o envio precisa parar para que dados inválidos não cheguem à API?

### Está pronto quando

- [ ] Digitar em um campo não apaga os outros.
- [ ] Enviar vazio mostra os erros dos campos obrigatórios e não faz `POST`.
- [ ] Título com 4 caracteres, local só com espaços e data de hoje ou passada são rejeitados.
- [ ] Todos os campos têm `label`, e cada erro está associado ao seu campo.
- [ ] Um cadastro válido com descrição vazia é salvo, retorna à lista e aparece em um novo card.
- [ ] Uma falha da API mostra uma mensagem e não é tratada como sucesso.

Usem a aba **Rede/Network** para conferir se os envios inválidos realmente ficaram sem `POST`. Antes de avançar, avisem ao grupo que concluíram os testes.

## Checkpoint 2 — Página de detalhe (RF4)

**Tempo:** 12 minutos. **Base:** código da dupla com RF3 concluído.

**Objetivo:** usar o identificador da URL para buscar e mostrar um evento.

**Arquivos:** `src/App.jsx` e `src/componentes/DetalheEvento.jsx`.

### O que implementar

1. Registrem a rota `/eventos/:id`, apontando para `DetalheEvento`. O título do card já contém o link para esse endereço.
2. Leiam `id` com `useParams`.
3. Busquem `GET /eventos/:id` em um `useEffect` que acompanhe a mudança de `id`. Reutilizem o endereço da API e preparem a limpeza para cancelar ou ignorar uma resposta que deixou de ser necessária.
4. Mostrem uma mensagem enquanto a consulta estiver pendente.
5. No sucesso, apresentem título, descrição quando houver, data em `DD/MM/AAAA`, local, categoria e identificador. Reutilizem `formatarData`.
6. Para resposta `404`, mostrem **“Evento não encontrado”**. Para outras falhas, mostrem uma mensagem adequada; API desligada não significa que o evento não existe.
7. Incluam um `Link` de retorno à lista nos estados de sucesso e erro, sem recarregar o documento.

O botão de interesse pode continuar sem implementação até o próximo checkpoint.

### Pistas para pensar

- Se apenas o `id` da URL mudar, o que precisa fazer a consulta acontecer novamente?
- Como distinguir um evento ausente de uma falha de conexão?
- O que pode acontecer se a resposta do evento anterior chegar depois da resposta do atual?

### Está pronto quando

- [ ] Clicar em um título abre os detalhes sem recarregar o documento.
- [ ] Dois eventos diferentes mostram os dados correspondentes aos ids de suas URLs.
- [ ] Todos os campos do evento, inclusive o identificador, aparecem no detalhe.
- [ ] Um id ausente mostra “Evento não encontrado” e oferece retorno à lista.
- [ ] Carregamento e falha de conexão recebem mensagens distintas do sucesso.
- [ ] O retorno à lista funciona por `Link`.

Testem `/eventos/999` se esse id não existir na API; caso exista, escolham outro ausente. Para observar o carregamento, usem a simulação de rede lenta do navegador. Para testar falha de conexão, parem a API e abram novamente o detalhe; depois religuem a API e recarreguem a tela.

## Checkpoint 3 — Interesses com Context API (RF5)

**Tempo:** 15 minutos. **Base:** código da dupla com RF3 e RF4 concluídos.

**Objetivo:** fazer card, detalhe e cabeçalho usarem a mesma lista de interesses.

**Arquivos envolvidos:**

- `src/contexto/InteressesContext.jsx`
- `src/main.jsx`
- `src/componentes/BotaoInteresse.jsx`
- `src/componentes/Cabecalho.jsx`
- `src/componentes/CardEvento.jsx`
- `src/componentes/DetalheEvento.jsx`

### O que implementar

1. Criem `InteressesContext` e `InteressesProvider`. O Provider deve guardar em estado um array de ids dos eventos marcados, inicialmente vazio.
2. Implementem `temInteresse(id)` para consultar a marcação e `alternar(id)` para marcar ou desmarcar. As atualizações devem produzir um novo array.
3. Disponibilizem `interesses`, `temInteresse` e `alternar` pelo contexto. Criem `useInteresses` para encapsular seu acesso com `useContext`.
4. Envolvam `App` com o Provider em `main.jsx`. Todos os consumidores precisam estar abaixo do mesmo Provider, que deve permanecer montado na troca de rota.
5. Completem `BotaoInteresse`, recebendo o evento por props. O texto deve alternar entre **“Tenho interesse”** e **“Remover interesse”**.
6. Usem esse mesmo componente nos cards e no detalhe.
7. No cabeçalho, mostrem **“Meus interesses: N”**, calculando o total a partir da lista compartilhada.

### Pistas para pensar

- Se cada botão guardar sua própria lista, como o cabeçalho saberá o que mudou?
- O total precisa de outro estado ou pode ser calculado a partir dos ids?
- Onde o Provider pode ficar para continuar existindo ao mudar de tela?

### Está pronto quando

- [ ] Marcar dois eventos diferentes mostra total 2 no cabeçalho.
- [ ] O detalhe de um evento marcado mostra “Remover interesse”.
- [ ] Remover o interesse no detalhe atualiza o total e a marcação do card.
- [ ] Marcar e desmarcar o mesmo evento não duplica seu id.
- [ ] Navegar entre lista, cadastro e detalhe preserva os interesses.
- [ ] Os botões podem ser alcançados e acionados pelo teclado.

Façam o ciclo: **marcar dois → abrir um detalhe → remover um → voltar à lista**. O contador deve terminar em 1, com os botões concordando com a marcação.

Manter os interesses após atualizar a página com F5 não é exigido. Nesta atividade, o estado deve permanecer durante a navegação entre rotas.

## Se a dupla precisar retomar por uma branch

Continuem no próprio código quando concluírem uma etapa. As branches abaixo são soluções acumuladas para ajudar uma dupla que não conseguiu terminar a etapa anterior:

| Para continuar em… | Base de retomada |
| --- | --- |
| Checkpoint 2 — RF4 | `checkpoint-1`, com RF1, RF2 e RF3 prontos. |
| Checkpoint 3 — RF5 | `checkpoint-2`, com RF1 a RF4 prontos. |
| Consulta da solução final | `checkpoint-3`, com RF1 a RF5 prontos. |

Chamem um integrante do grupo antes da troca para preservar o trabalho local e conferir a base necessária. Depois da troca, testem a aplicação antes de continuar. Apenas abrir a solução pronta é uma retomada; a conferência da implementação da dupla usa os testes de cada etapa.

## Concluíram os três checkpoints?

Confiram se lista, busca e categoria continuam funcionando. Naveguem pelo formulário e pelos botões usando o teclado e anotem uma dúvida ou decisão que gostariam de discutir no fechamento.

## Documentação para consulta

- [React — atualizar objetos no estado](https://react.dev/learn/updating-objects-in-state)
- [React — efeitos, dependências e limpeza](https://react.dev/reference/react/useEffect)
- [React — compartilhar dados com Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React Router 7.18.5 — parâmetros da URL com useParams](https://reactrouter.com/7.18.5/api/hooks/useParams)
