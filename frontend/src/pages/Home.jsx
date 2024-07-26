import { useParams } from "react-router-dom"
import { Banner } from "../components/Banner"
import { Catalog } from "../components/Catalog"
import { Filters } from "../components/Filters"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../context/ProductsContext"

export const Home = () => {
  const { page:numPage } = useParams()
  const { page, setPage } = useContext(ProductsContext)
  useEffect(() => {
    setPage(numPage)
  }, [numPage])
  
  return (
    <>
      <Banner />
      <Filters page={numPage} />
      <Catalog />
    </>
  )
}
