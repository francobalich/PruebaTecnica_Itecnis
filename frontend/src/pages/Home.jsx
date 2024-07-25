import { Banner } from "../components/Banner"
import { Catalog } from "../components/Catalog"
import { Filters } from "../components/Filters"

export const Home = () => {
  return (
    <>
      <Banner />
      <Filters />
      <Catalog />
    </>
  )
}
