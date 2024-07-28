import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProducts = () => {

  const { products, setProducts } = useContext(ProductsContext)

  const getProducts = async (page=1) => {
    const resp = await fetch(`http://localhost:4000/api/getProducts/${page}`)
    const { data } = await resp.json()
    return data;
  }
  const getCategories = async (page=1) => {
    const resp = await fetch(`http://localhost:4000/api/getCategories`)
    const { data } = await resp.json()
    return data;
  }
  const loadInContext=(page=1)=>{
      console.log("Cargando context");
      getProducts(page).then((resp) => {
        setProducts(resp)
      })
  }
  const buyProduct = async (productId) => {
    try {
        const response = await fetch('http://localhost:4000/api/buyProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: productId }),
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
    getCategories
  }
}
