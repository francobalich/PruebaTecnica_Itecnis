import './App.css'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import { BrowserRouter,  } from "react-router-dom"

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
