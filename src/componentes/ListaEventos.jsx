import { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { CATEGORIAS } from '../categorias'
import CardEvento from './CardEvento'

export default function ListaEventos() {
  const [eventos, setEventos] = useState([])
  // Começa true para mostrar o carregamento enquanto esperamos a resposta da API.
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('')

  // Busca os eventos ao abrir a lista. Mudar os filtros não refaz essa consulta.
  useEffect(() => {
    const controle = new AbortController()

    fetch(API_URL, { signal: controle.signal })
      .then((resposta) => {
        // fetch não cai no catch só por receber um erro HTTP, como 404 ou 500.
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

    // Cancela a consulta ao sair da lista. Esse cancelamento é o AbortError do catch.
    return () => controle.abort()
  }, [])

  
  // Calculamos os resultados pelos filtros, sem outro useState ou consulta à API.
  // filter cria um novo array. Assim, sort não altera os eventos originais.
  const visiveis = eventos
    .filter(
      (evento) =>
        (!categoria || evento.categoria === categoria) &&
        evento.titulo.toLowerCase().includes(busca.toLowerCase()),
    )
    .sort((a, b) => a.data.localeCompare(b.data))

  return (
    <section aria-labelledby="titulo-lista">
      <h2 id="titulo-lista">Próximos eventos</h2>

      {/* value e onChange ligam os campos aos estados de busca e categoria. */}
      <div className="filtros" role="search">
        <div className="campo">
          <label htmlFor="busca">Buscar por título</label>
          <input
            id="busca"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas</option>
            {CATEGORIAS.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>

      {carregando && (
        <p className="mensagem" role="status">Carregando eventos…</p>
      )}
      {erro && (
        <p className="mensagem mensagem--erro" role="alert">{erro}</p>
      )}
      {!carregando && !erro && visiveis.length === 0 && (
        <p className="mensagem" role="status">Nenhum evento encontrado</p>
      )}

      {/* O id identifica cada card para o React, mesmo quando a lista é filtrada. */}
      <ul className="lista-eventos">
        {visiveis.map((evento) => (
          <li key={evento.id}>
            <CardEvento evento={evento} />
          </li>
        ))}
      </ul>
    </section>
  )
}
