import { useState } from 'react'
import { CATEGORIAS } from '../categorias'

const FORM_INICIAL = {
  titulo: '',
  descricao: '',
  data: '',
  local: '',
  categoria: '',
}

// Usamos a data local para comparar com a data escolhida no formulário.
function hoje() {
  const agora = new Date()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${agora.getFullYear()}-${mes}-${dia}`
}

// Cada campo inválido ganha uma mensagem. Sem mensagens, o formulário está válido.
function validar(form) {
  const erros = {}

  if (form.titulo.trim().length < 5) {
    erros.titulo = 'O título é obrigatório e deve ter pelo menos 5 caracteres.'
  }

  if (!form.data) {
    erros.data = 'Informe a data do evento.'
  } else if (form.data <= hoje()) {
    // aaaa-mm-dd pode ser comparado como texto
    erros.data = 'A data deve ser futura.'
  }

  if (!form.local.trim()) {
    erros.local = 'Informe o local do evento.'
  }

  if (!CATEGORIAS.includes(form.categoria)) {
    erros.categoria = 'Escolha uma categoria.'
  }

  return erros
}

export default function FormEvento() {
  const [form, setForm] = useState(FORM_INICIAL)
  const [tentouEnviar, setTentouEnviar] = useState(false)

  const erros = tentouEnviar ? validar(form) : {}
  const atualizar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  function enviar(e) {
    e.preventDefault()
    setTentouEnviar(true) // neste passo só conferimos os campos; ainda não há POST
  }

  return (
    <section aria-labelledby="titulo-form">
      <h2 id="titulo-form">Novo evento</h2>

      {/* noValidate permite mostrar as mensagens de validação de cada campo. */}
      <form className="formulario" onSubmit={enviar} noValidate>
        <div className="campo">
          <label htmlFor="titulo">Título (obrigatório)</label>
          <input
            id="titulo"
            name="titulo"
            value={form.titulo}
            onChange={atualizar}
            aria-invalid={erros.titulo ? 'true' : undefined}
            aria-describedby={erros.titulo ? 'erro-titulo' : undefined}
          />
          {erros.titulo && (
            <p id="erro-titulo" className="campo__erro">
              {erros.titulo}
            </p>
          )}
        </div>

        <div className="campo">
          <label htmlFor="descricao">Descrição (opcional)</label>
          <textarea
            id="descricao"
            name="descricao"
            rows={3}
            value={form.descricao}
            onChange={atualizar}
          />
        </div>

        <div className="campo">
          <label htmlFor="data">Data (obrigatória)</label>
          <input
            id="data"
            name="data"
            type="date"
            value={form.data}
            onChange={atualizar}
            aria-invalid={erros.data ? 'true' : undefined}
            aria-describedby={erros.data ? 'erro-data' : undefined}
          />
          {erros.data && (
            <p id="erro-data" className="campo__erro">
              {erros.data}
            </p>
          )}
        </div>

        <div className="campo">
          <label htmlFor="local">Local (obrigatório)</label>
          <input
            id="local"
            name="local"
            value={form.local}
            onChange={atualizar}
            aria-invalid={erros.local ? 'true' : undefined}
            aria-describedby={erros.local ? 'erro-local' : undefined}
          />
          {erros.local && (
            <p id="erro-local" className="campo__erro">
              {erros.local}
            </p>
          )}
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria (obrigatória)</label>
          <select
            id="categoria"
            name="categoria"
            value={form.categoria}
            onChange={atualizar}
            aria-invalid={erros.categoria ? 'true' : undefined}
            aria-describedby={erros.categoria ? 'erro-categoria' : undefined}
          >
            <option value="">Selecione…</option>
            {CATEGORIAS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {erros.categoria && (
            <p id="erro-categoria" className="campo__erro">
              {erros.categoria}
            </p>
          )}
        </div>

        <button type="submit" className="botao">
          Cadastrar evento
        </button>
      </form>
    </section>
  )
}