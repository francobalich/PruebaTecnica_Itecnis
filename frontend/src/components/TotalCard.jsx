import { Link } from 'react-router-dom'
import './TotalCard.css'

export const TotalCard = () => {
  return (
    <section className="totalCard__container">
      <h2>Total</h2>
      <div className="grid-container">
        <div className="grid-item">Subtotal</div>
        <div className="grid-item subtotal">$50000</div>
        <div className="grid-item">Total</div>
        <div className="grid-item total">$50000</div>
      </div>
      <Link className='btnBuy' to={`/`}>Comprar</Link>
    </section>
  )
}
