import "./ShoppingCart.css"

export const ShoppingCart = () => {
  return (
    <section className="shoppingcart__container">
      <table border="1">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Producto 1</td>
            <td>$10.00</td>
            <td>2</td>
            <td>$20.00</td>
            <td><button>X</button></td>
          </tr>
          <tr>
            <td>Producto 2</td>
            <td>$15.00</td>
            <td>1</td>
            <td>$15.00</td>
            <td><button>X</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
