import { Link } from 'react-router-dom'
import './Filters.css'

export const DetailsData = ({ category = "Sin categoria", title = "Titulo" }) => {
  return (
    <section className='filters'>
      <div className='filters__container'>
        <div className='filters__message'>
          <p>{category} | {title} </p>
        </div>
        <Link className='btnReturn' to='/'>Volver</Link>
      </div>
    </section>
  )
}
