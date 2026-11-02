// RF5: criar o contexto, o InteressesProvider e o hook useInteresses na oficina. Eles vão compartilhar os interesses entre cabeçalho, cards e detalhes.

import { createContext, useContext, useState } from 'react'

const InteressesContext = createContext(null)

export function InteressesProvider({ children }) {
  // Guardamos somente os IDs dos eventos de interesse.
  const [interesses, setInteresses] = useState([])

  const temInteresse = (id) => interesses.includes(id)

  // Adiciona ou remove o interesse sem modificar o array original.
  const alternar = (id) =>
    setInteresses((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((outro) => outro !== id)
        : [...anteriores, id],
    )

  return (
    <InteressesContext.Provider
      value={{ interesses, alternar, temInteresse }}
    >
      {children}
    </InteressesContext.Provider>
  )
}

// Provider e hook ficam juntos para facilitar a oficina.
// eslint-disable-next-line react-refresh/only-export-components
export function useInteresses() {
  const contexto = useContext(InteressesContext)

  if (contexto === null) {
    throw new Error(
      'useInteresses deve ser usado dentro de <InteressesProvider>'
    )
  }

  return contexto
}
