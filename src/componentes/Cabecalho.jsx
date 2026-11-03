import { Link } from 'react-router-dom'
import { useInteresses } from '../contexto/InteressesContext'

export default function Cabecalho() {
  const { interesses } = useInteresses()

  return (
    <header className="cabecalho">
      <h1 className="cabecalho__titulo">
        <Link to="/">Mural de Eventos</Link>
      </h1>

      <nav className="cabecalho__nav" aria-label="Principal">
        <Link to="/">Eventos</Link>
        <Link to="/eventos/novo">Novo evento</Link>

        <p className="cabecalho__interesses" aria-live="polite">
          Meus interesses: {interesses.length}
        </p>
      </nav>
    </header>
  )
}
