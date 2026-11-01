import { Route, Routes } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import ListaEventos from './componentes/ListaEventos'

function App() {
  return (
    <>
      <Cabecalho />
      <main className="pagina">
        <Routes>
          <Route path="/" element={<ListaEventos />} />
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
