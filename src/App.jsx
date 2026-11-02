import { Route, Routes } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import ListaEventos from './componentes/ListaEventos'
import FormEvento from './componentes/FormEvento'

function App() {
  return (
    <>
      <Cabecalho />
      <main className="pagina">
        {/* As rotas mudam o conteúdo principal; o cabeçalho continua na tela. */}
        <Routes>
          <Route path="/" element={<ListaEventos />} />
          {/* RF3: a rota existe, mas o formulário será feito na oficina. */}
          <Route path="/eventos/novo" element={<FormEvento />} />
          {/* RF4: criar a rota /eventos/:id para os detalhes no checkpoint 2. */}
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
