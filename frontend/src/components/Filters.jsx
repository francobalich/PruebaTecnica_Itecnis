import { useEffect, useState } from 'react'
import './Filters.css'
import { useProducts } from '../hooks/useProducts'

export const Filters = ({ initialItem = 1, lastItem = 12, total = 100, page = 1 }) => {
  const [categories, setCategories] = useState(<></>)
  const { getCategories } = useProducts()
  const handleOptCategories = (ev) => {
    const cat = ev.target.value
    console.log(`Se hizo clic en ${cat}`);
  }

  const loadCategories = async () => {
    const categoriesList = await getCategories()
    let optCatList = []
    for (let i = 0; i < categoriesList.length; i++) {
      const cat = categoriesList[i];
      optCatList.push(<option onClick={handleOptCategories} key={i} value={cat}>{cat}</option>)
    }
    setCategories(optCatList)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {

  }, [categories])

  return (
    <section className='filters'>
      <div className='filters__container'>
        <div className='filters__message'>
          <p>Mostrando {(lastItem * page - 11)}–{lastItem * page} de {total} resultados</p>
        </div>
        <div className='filters__order'>
          <p>Ordenar por: </p>
          <select id="optPrice" name="options" className="filters__options">
            <option value="mayorPrecio">Mayor precio</option>
            <option value="menorPrecio">Menor precio</option>
          </select>
          <select id="optCategories" name="options" className="filters__options">
            {categories}
          </select>
        </div>
      </div>
    </section>
  )
}
