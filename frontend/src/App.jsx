import './App.css'
import { Menu } from './components/Menu'
import { BrowserRouter,  } from "react-router-dom"
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
