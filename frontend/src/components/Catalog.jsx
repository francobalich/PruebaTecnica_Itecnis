import { useContext, useEffect, useState } from 'react'
import { Card } from './Card'
import './Catalog.css'
import { ProductsContext } from '../context/ProductsContext'

export const Catalog = () => {
  const { products } = useContext(ProductsContext)
  const [cards, setCards] = useState(<></>)
  useEffect(() => {
    setCards(() => {
      return products.map(element => {
        return <Card
          id={element.id}
          title={element.titulo}
          category={element.categoria}
          price={element.precio}
          img={element.imagen}
        />
      });
    })
  }, [])

  return (
    <section className='catalog'>
      <div className='catalog_container'>
        {cards}
      </div>
    </section>
  )
}
