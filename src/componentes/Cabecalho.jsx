import { Link } from 'react-router-dom'

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <h1 className="cabecalho__titulo">
                <Link to="/">Mural de Eventos</Link>
            </h1>
            {/* Link troca de tela sem recarregar a página inteira. */}
            <nav className="cabecalho__nav" aria-label="Principal">
                <Link to="/">Eventos</Link>
                <Link to="/eventos/novo">Novo evento</Link>
            </nav>
        </header>
    )
}