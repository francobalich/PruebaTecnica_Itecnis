import './App.css'
import { Banner } from './components/Banner'
import { Catalog } from './components/Catalog'
import { Filters } from './components/Filters'
import { Menu } from './components/Menu'

function App() {
  return (
    <>
     <Menu />
     <Banner />
     <Filters />
     <Catalog />
    </>
  )
}

export default App
