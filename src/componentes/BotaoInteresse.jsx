// RF5: usar o contexto para marcar e remover o interesse neste evento.

import { useInteresses } from '../contexto/InteressesContext'

// Card e detalhe compartilham o mesmo estado de interesses.
export default function BotaoInteresse({ evento }) {
  const { alternar, temInteresse } = useInteresses()

  const marcado = temInteresse(evento.id)

  const texto = marcado
    ? 'Remover interesse'
    : 'Tenho interesse'

  return (
    <button
      type="button"
      className={
        marcado ? 'botao botao--secundario' : 'botao'
      }
      onClick={() => alternar(evento.id)}
      aria-label={`${texto} no evento ${evento.titulo}`}
    >
      {texto}
    </button>
  )
}

