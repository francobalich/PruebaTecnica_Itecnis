import { useState } from "react"
import { ProductsContext } from "./ProductsContext"

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  return (
    <ProductsContext.Provider value={{ products, setProducts,page, setPage }}>
      {children}
    </ProductsContext.Provider>
  )
}
