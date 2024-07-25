import { useParams } from "react-router-dom";
import { DetailsData } from "../components/DetailsData";
import data from '../data/dataDemo.json'

export const Buy = () => {
  const { id } = useParams();
  const product = data[id]
  return (
    <>
      <DetailsData category={product.categoria} title={product.titulo} />
      <div>Buy {id}</div>
    </>
  )
}
