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
  const { products, setProducts } = useContext(ProductsContext)
  const { loadInContext } = useProducts()

  useEffect(() => {
    if (products.length===0) {
      loadInContext();
    }
  }, [])

  useEffect(()=>{
    console.log(products);
  },[products])

  return (
    <>
      <DetailsData category={product.categoria} title={product.titulo} />
      <section className="details">
        <div className="details__container">
          <img src={product.imagen} alt='producto' />
          <div className='details__data'>
            <h5>{product.titulo}</h5>
            <p className='card__category' >{product.categoria}</p>
            <p>{product.descripcion}</p>
            <p className="details__price">${product.precio}</p>
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
