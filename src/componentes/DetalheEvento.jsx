import { Link, useParams } from 'react-router-dom'

// Primeiro ligamos a rota. A consulta à API entra no próximo commit.
export default function DetalheEvento() {
  const { id } = useParams()

  return (
    <section>
      <h2>Detalhes do evento</h2>
      <p>Identificador recebido pela rota: {id}</p>
      <Link to="/">Voltar</Link>
    </section>
  )
}