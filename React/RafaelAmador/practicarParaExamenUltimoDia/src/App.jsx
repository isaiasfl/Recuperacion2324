import './App.css'
import ObjetosProvider from './components/context/ObjetosProvider'
import PaginaPrincipal from './page/PaginaPrincipal'

function App() {
  

  return (
    <ObjetosProvider>
      <PaginaPrincipal />
    </ObjetosProvider>
  )
}

export default App
