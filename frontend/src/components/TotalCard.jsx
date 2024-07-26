import { Link } from 'react-router-dom'
import './TotalCard.css'
import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'

export const TotalCard = ({ product }) => {
  const { buyProduct } = useProducts()
  useEffect(() => {
    console.log(product);
  }, [])
  const handleBuy = async() => {
    const resp = await buyProduct(product.id)
    console.log(resp);
  }
  return (
    <section className="totalCard__container">
      <h2>Total</h2>
      <div className="grid-container">
        <div className="grid-item">Subtotal</div>
        <div className="grid-item subtotal">$50000</div>
        <div className="grid-item">Total</div>
        <div className="grid-item total">$50000</div>
      </div>
      <button className='btnBuy' onClick={handleBuy}>Comprar</button>
    </section>
  )
}
