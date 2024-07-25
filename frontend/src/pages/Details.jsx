import { Link, useParams } from "react-router-dom";
import data from '../data/dataDemo.json'
import './Details.css'
import { DetailsData } from "../components/DetailsData";
import { NumberSelect } from "../components/NumberSelect";

export const Details = () => {
  const { id } = useParams();
  const product = data[id]
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
