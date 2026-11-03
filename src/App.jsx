// PERGUNTA:
// Por que alterar um array do estado com push() não atualiza a tela?

import { useState } from 'react'

function App() {
  const [eventos, setEventos] = useState([
    { id: 1, titulo: 'Evento inicial' },
  ])

  function adicionarEvento() {
    const novo = {
      id: eventos.length + 1,
      titulo: 'Novo evento',
    }

    eventos.push(novo)
    setEventos(eventos)
  }

  return (
    <main className="pagina">
      <h1>Pergunta-chave: por que a tela não mudou?</h1>

      <button
        type="button"
        className="botao"
        onClick={adicionarEvento}
      >
        Adicionar evento
      </button>

      <h2>Eventos exibidos: {eventos.length}</h2>

      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.id} — {evento.titulo}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App

/*
  setEventos([...eventos, novo])
*/