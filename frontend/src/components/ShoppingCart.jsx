import "./ShoppingCart.css"
import svgDelete from '../assets/delete.svg'
import { Link } from "react-router-dom";

export const ShoppingCart = ({ product, amount=1}) => {
  console.log(product);
  return (
    <section className="shoppingcart__container">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table__productContainer">
                <img className="imgProduct" src={product.imageUrl} alt={product.title} />
                <p>{product.title}</p>
              </div>
            </td>
            <td>${product.price}</td>
            <td>{amount}</td>
            <td>${product.price}</td>
            <td className="btnDelete"><Link to='/1'><img src={svgDelete} alt="boton de eliminar" /></Link></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
