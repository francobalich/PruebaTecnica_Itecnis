import { useParams } from "react-router-dom"
import { Banner } from "../components/Banner"
import { Catalog } from "../components/Catalog"
import { Filters } from "../components/Filters"

export const Home = () => {
  const { page } = useParams()
  return (
    <>
      <Banner />
      <Filters page={page} />
      <Catalog />
    </>
  )
}
