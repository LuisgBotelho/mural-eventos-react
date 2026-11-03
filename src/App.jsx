import { Route, Routes } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import ListaEventos from './componentes/ListaEventos'
import FormEvento from './componentes/FormEvento'
import DetalheEvento from './componentes/DetalheEvento'

function App() {
  return (
    <>
      <Cabecalho />
      <main className="pagina">
        {/* As rotas mudam o conteúdo principal; o cabeçalho continua na tela. */}
        <Routes>
          <Route path="/" element={<ListaEventos />} />
          {/* RF3: rota do cadastro de eventos. */}
          <Route path="/eventos/novo" element={<FormEvento />} />
          <Route path="/eventos/:id" element={<DetalheEvento />} />
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App