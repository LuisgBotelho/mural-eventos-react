import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="cabecalho">
        <h1 className="cabecalho__titulo">
        <Link to="/">Mural de Eventos</Link>
        </h1>
      </header>

      <main className="pagina">
        <h2>Próximos eventos</h2>
        <p>Aqui vai a lista de eventos.</p>
      </main>
    </>
  )
}

export default App