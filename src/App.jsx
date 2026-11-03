//PERGUNTA:
//Por que alterar um array do estado com push() não atualiza a tela?

import { useState } from 'react'

function App() {
  const [eventos, setEventos] = useState([
    { id: 1, titulo: 'Evento inicial' },
  ])

  function adicionarComPush() {
    const novo = {
      id: eventos.length + 1,
      titulo: 'Novo evento',
    }

    eventos.push(novo)
    setEventos(eventos)
  }
















  
  function adicionarComCopia() {
    const novo = {
      id: eventos.length + 1,
      titulo: 'Novo evento',
    }

    setEventos([...eventos, novo])
  }

  return (
    <main className="pagina">
      <h1>Pergunta-chave: por que a tela não mudou?</h1>

      <p>
        O que acontece quando alteramos um array e passamos
        esse mesmo array para o setter?
      </p>

      <div className="filtros">
        <button
          type="button"
          className="botao"
          onClick={adicionarComPush}
        >
          Adicionar com push
        </button>

        <button
          type="button"
          className="botao"
          onClick={adicionarComCopia}
        >
          Adicionar com novo array
        </button>

        <button
          type="button"
          className="botao botao--secundario"
          onClick={() => window.location.reload()}
        >
          Reiniciar exemplo
        </button>
      </div>

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