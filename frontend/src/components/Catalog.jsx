import { Card } from './Card'
import './Catalog.css'

export const Catalog = () => {
  return (
    <section className='catalog'>
      <div className='catalog_container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
