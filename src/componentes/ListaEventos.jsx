import { useEffect, useState } from 'react'
import { API_URL } from '../api'
import CardEvento from './CardEvento'

export default function ListaEventos() {
  const [eventos, setEventos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const controle = new AbortController()

    fetch(API_URL, { signal: controle.signal })
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`)
        return resposta.json()
      })
      .then((dados) => {
        setEventos(dados)
        setCarregando(false)
      })
      .catch((e) => {
        if (e.name === 'AbortError') return
        setErro('Não foi possível carregar os eventos. Verifique a API.')
        setCarregando(false)
      })

    return () => controle.abort()
  }, [])

  const ordenados = [...eventos].sort((a, b) => a.data.localeCompare(b.data))

  return (
    <section aria-labelledby="titulo-lista">
      <h2 id="titulo-lista">Próximos eventos</h2>

      {carregando && (
        <p className="mensagem" role="status">Carregando eventos…</p>
      )}
      {erro && (
        <p className="mensagem mensagem--erro" role="alert">{erro}</p>
      )}
      {!carregando && !erro && ordenados.length === 0 && (
        <p className="mensagem" role="status">Nenhum evento encontrado</p>
      )}

      <ul className="lista-eventos">
        {ordenados.map((evento) => (
          <li key={evento.id}>
            <CardEvento evento={evento} />
          </li>
        ))}
      </ul>
    </section>
  )
}
