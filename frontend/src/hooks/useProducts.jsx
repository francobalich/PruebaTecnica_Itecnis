import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProducts = () => {

  const { products, setProducts } = useContext(ProductsContext)

  const getProducts = async (page=1) => {
    const resp = await fetch(`http://localhost:4000/api/getProducts/${page}`)
    const { data } = await resp.json()
    return data;
  }

  const loadInContext=()=>{
    if (products.length === 0) {
      console.log("Cargando context");
      getProducts().then((resp) => {
        setProducts(resp)
      })
    }
  }
  return {
    getProducts,
    loadInContext
  }
}
