import { Link, useParams } from "react-router-dom";
import './Details.css'
import { DetailsData } from "../components/DetailsData";
import { NumberSelect } from "../components/NumberSelect";
import { ProductsContext } from "../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

export const Details = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { products } = useContext(ProductsContext)
  const { loadInContext } = useProducts()

  useEffect(() => {
    if (products.length===0) {
      loadInContext();
    }
  }, [])

  useEffect(()=>{
    const newProduct = products.find(item => item.id == id) ||{}
    setProduct(newProduct)
    console.log(newProduct);
  },[products])

  return (
    <>
      <DetailsData category={product.category} title={product.title} />
      <section className="details">
        <div className="details__container">
          <img src={product.imageUrl} alt='producto' />
          <div className='details__data'>
            <h5>{product.title}</h5>
            <p className='card__category' >{product.category}</p>
            <p>{product.description}</p>
            <p className="details__price">${product.price}</p>
            <p className='card__category' >Stock: {product.stock}</p>
            <div className="details__actions">
              <NumberSelect initialValue={1} />
              <Link className='btnBuy' to={`/buy/${id}`}>Comprar</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
