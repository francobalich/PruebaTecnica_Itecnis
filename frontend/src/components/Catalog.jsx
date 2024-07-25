import { useContext, useEffect, useState } from 'react'
import { Card } from './Card'
import './Catalog.css'
import { ProductsContext } from '../context/ProductsContext'
import { useProducts } from '../hooks/useProducts'

export const Catalog = () => {
  const { products } = useContext(ProductsContext)
  const [cards, setCards] = useState(<></>)
  const { loadInContext } = useProducts()

  useEffect(() => {
    loadInContext()
  }, [])

  useEffect(() => {
    setCards(() => {
      return products.map(element => {
        return <Card
          key={element.id}
          id={element.id}
          title={element.titulo}
          category={element.categoria}
          price={element.precio}
          img={element.imagen}
        />
      });
    })
  }, [products])

  return (
    <section className='catalog'>
      <div className='catalog_container'>
        {cards}
      </div>
    </section>
  )
}
