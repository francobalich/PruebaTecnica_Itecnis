import pngProduct from '../assets/producto.jpg'
import './Card.css'

export const Card = ({
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
        <button>Comprar</button>
      </div>
    </div>
  )
}
