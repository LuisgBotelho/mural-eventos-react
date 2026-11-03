# Quiz — Seminário React

**Tema:** Fundamentos do React e Mural de Eventos  

## Questão 1 — O que é React?

**Pergunta:** Qual alternativa descreve corretamente o React?

- **A)** Uma linguagem de programação que substitui o JavaScript.
- **B)** Uma biblioteca JavaScript para construir interfaces de usuário.
- **C)** Um banco de dados para armazenar informações de sites.
- **D)** Um servidor que processa requisições de APIs.

**Gabarito: B.**

**Justificativa:** React é uma biblioteca JavaScript voltada à construção de interfaces. Ele ajuda a organizar a tela em componentes reutilizáveis e a atualizar o que aparece quando os dados mudam. Não é uma linguagem, um banco de dados ou um servidor.

## Questão 2 — Componentes e props

**Pergunta:** Para que servem as *props* em um componente React?

- **A)** Para passar informações de um componente pai para um filho.
- **B)** Para fazer requisições HTTP automaticamente.
- **C)** Para substituir todos os estados da aplicação.
- **D)** Para modificar diretamente o HTML de qualquer página.

**Gabarito: A.**

**Justificativa:** Props são entradas recebidas por um componente. Por exemplo, o mesmo `CardEvento` pode receber títulos de eventos diferentes e exibi-los sem duplicar código. O componente que recebe as props deve tratá-las como somente leitura.

## Questão 3 — Estado com useState

**Pergunta:** O que normalmente acontece quando um componente atualiza seu estado com `useState`?

- **A)** O navegador precisa recarregar toda a página.
- **B)** O React apaga todos os componentes existentes.
- **C)** O React solicita uma nova renderização com o estado atualizado.
- **D)** O estado é enviado automaticamente ao banco de dados.

**Gabarito: C.**

**Justificativa:** A função de atualização fornecida por `useState`, como `setTotal`, solicita uma nova renderização. Assim, a interface pode refletir o valor atualizado, por exemplo, um contador de interessados após o clique. Isso não exige recarregar toda a página nem salva os dados automaticamente em um banco.

## Questão 4 — useEffect e API

**Pergunta:** No Mural de Eventos, qual é um uso adequado de `useEffect`?

- **A)** Calcular sempre a lista filtrada que já depende de estados existentes.
- **B)** Criar automaticamente uma nova rota para cada evento.
- **C)** Alterar diretamente todas as props recebidas pelo componente.
- **D)** Sincronizar o componente com uma API para buscar eventos.

**Gabarito: D.**

**Justificativa:** `useEffect` pode sincronizar um componente com sistemas externos, como uma API. No seminário, ele é usado com `fetch` para obter os eventos e tratar a limpeza da requisição. Já uma lista filtrada a partir de eventos, busca e categoria é, em geral, um valor derivado que pode ser calculado durante a renderização, sem `useEffect`.

## Questão 5 — Context API

**Pergunta:** Qual problema a Context API ajuda a resolver no Mural de Eventos?

- **A)** Converter JSX em JavaScript antes de executar no navegador.
- **B)** Compartilhar os interesses entre cabeçalho, cards e detalhes sem repassar props por muitos níveis.
- **C)** Salvar permanentemente os interesses no navegador, mesmo após F5, sem nenhum recurso adicional.
- **D)** Substituir o React Router na navegação entre páginas.

**Gabarito: B.**

**Justificativa:** Um `Provider` pode disponibilizar os interesses aos componentes que estão abaixo dele, e `useContext` permite que esses componentes consultem os valores compartilhados. Isso evita repassar a mesma informação por vários intermediários. A Context API não oferece persistência automática após recarregar a página e não substitui o roteamento.

---

## Gabarito rápido

| Questão | Resposta correta | Tema |
|---|---|---|
| 1 | **B** | O que é React |
| 2 | **A** | Props |
| 3 | **C** | useState |
| 4 | **D** | useEffect |
| 5 | **B** | Context API |