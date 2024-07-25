import pngProduct from '../assets/producto.jpg'
import './Card.css'
import {Link} from 'react-router-dom'

export const Card = ({
  id=0,
  title="Sin titulo",
  category="Sin categoria",
  price="X.XX",
  img=pngProduct
}) => {
  return (
    <div className='card'>
      <img src={img} alt='producto'/>
      <div className='card__data'>
        <h5>{title}</h5>
        <p className='card__category' >{category}</p>
        <p>${price}</p>
        <Link className='btnBuy' to={`/details/${id}`}>Comprar</Link>
      </div>
    </div>
  )
}
