import { Link } from 'react-router-dom'
import { formatarData } from '../utils/formatarData'

export default function CardEvento({ evento }) {
    return (
        <article className="card">
            <span className="categoria">{evento.categoria}</span>
            <h3>
                <Link to={`/eventos/${evento.id}`}>{evento.titulo}</Link>
            </h3>
            <p>
                <time dateTime={evento.data}>{formatarData(evento.data)}</time>
            </p>
            <p>{evento.local}</p>
        </article>
    )
}