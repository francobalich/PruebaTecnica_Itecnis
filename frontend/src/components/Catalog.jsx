import { useEffect, useState } from 'react'
import { Card } from './Card'
import './Catalog.css'
import data from '../data/dataDemo.json'

export const Catalog = () => {
  const [cards, setCards] = useState(<></>)
  useEffect(() => {
    setCards(() => {
      return data.map(element => {
        return <Card
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
