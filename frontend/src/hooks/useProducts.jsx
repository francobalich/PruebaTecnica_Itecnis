import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProducts = () => {

  const { products, setProducts } = useContext(ProductsContext)

  const getProducts = async (page = 1, order = 0) => {

    const resp = await fetch(`http://localhost:4000/api/getProducts/${page}/${order}`)
    const { data } = await resp.json()

    return data;
  }
  const getProductsByCategory = async (page = 0, category) => {
    const resp = await fetch('http://localhost:4000/api/getProductsByCategory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: page,
        category: category
      }),
    });
    const { data } = await resp.json()
    console.log(resp);
    return data;
  }
  const getCategories = async (page = 1) => {
    const resp = await fetch(`http://localhost:4000/api/getCategories`)
    const { data } = await resp.json()
    return data;
  }
  const loadInContext = (page = 1, order = 0) => {
    console.log("Cargando context");
    getProducts(page, order).then((resp) => {
      setProducts(resp)
    })
  }
  const loadInContextByCategory = (page, category) => {
    console.log("Cargando context");
    getProductsByCategory(page, category).then((resp) => {
      setProducts(resp)
    })
  }
  const buyProduct = async (productId,amount=1) => {
    try {
      const response = await fetch('http://localhost:4000/api/buyProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId,amount:amount }),
      });

      if (!response.ok) {
        throw new Error('Error en la compra del producto');
      }

      const result = await response.json();
      return result.message
    } catch (err) {
      console.error('Error al comprar producto: ' + err.message);
    }
  };
  return {
    getProducts,
    loadInContext,
    buyProduct,
    getCategories,
    loadInContextByCategory
  }
}
