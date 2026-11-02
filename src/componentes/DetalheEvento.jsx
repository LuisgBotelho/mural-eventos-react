import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../api'
import { formatarData } from '../utils/formatarData'
import BotaoInteresse from './BotaoInteresse'

export default function DetalheEvento() {
  const { id } = useParams() // o parâmetro da rota /eventos/:id
  // O id junto do resultado evita mostrar o evento anterior ao trocar a URL.
  const [resultado, setResultado] = useState(null)

  useEffect(() => {
    const controle = new AbortController()
    fetch(`${API_URL}/${id}`, { signal: controle.signal })
      .then((resposta) => {
        if (resposta.status === 404) {
          setResultado({ id, erro: 'nao-encontrado' })
          return
        }
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`)
        return resposta.json().then((evento) => setResultado({ id, evento }))
      })
      .catch((e) => {
        if (e.name === 'AbortError') return
        setResultado({ id, erro: 'falha' })
      })
    return () => controle.abort()
  }, [id]) // busca de novo sempre que o id da URL mudar

  const carregando = resultado === null || resultado.id !== id

  if (carregando) {
    return (
      <p className="mensagem" role="status">
        Carregando evento…
      </p>
    )
  }

  if (resultado.erro === 'nao-encontrado') {
    return (
      <section>
        <h2>Evento não encontrado</h2>
        <p>
          <Link to="/">Voltar para a lista de eventos</Link>
        </p>
      </section>
    )
  }

  if (resultado.erro === 'falha') {
    return (
      <section>
        <p className="mensagem mensagem--erro" role="alert">
          Não foi possível carregar o evento. Verifique se a API está em execução (npm run api).
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </section>
    )
  }

  const { evento } = resultado

  return (
    <section>
      <Link to="/" className="voltar">
        Voltar
      </Link>
      <article className="detalhe">
        <span className="categoria">{evento.categoria}</span>
        <h2>{evento.titulo}</h2>
        {evento.descricao && <p>{evento.descricao}</p>}
        <dl>
          <dt>Identificador</dt>
          <dd>{evento.id}</dd>
          <dt>Data</dt>
          <dd>
            <time dateTime={evento.data}>{formatarData(evento.data)}</time>
          </dd>
          <dt>Local</dt>
          <dd>{evento.local}</dd>
        </dl>
        <BotaoInteresse evento={evento} />
      </article>
    </section>
  )
}