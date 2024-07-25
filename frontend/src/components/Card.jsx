import pngProduct from '../assets/producto.jpg'
import './Card.css'

export const Card = () => {
  return (
    <div className='card'>
      <img src={pngProduct} alt='producto'/>
      <div className='card__data'>
        <h5>Titulo</h5>
        <p className='card__category' >Categoria</p>
        <p>$60000</p>
        <button>Comprar</button>
      </div>
    </div>
  )
}
