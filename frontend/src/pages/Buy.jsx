import { useParams } from "react-router-dom";
import { DetailsData } from "../components/DetailsData";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export const Buy = () => {
  const { products } = useContext(ProductsContext)
  const { id } = useParams();
  const product = products[id]
  return (
    <>
      <DetailsData category={product.categoria} title={product.titulo} />
      <div>Buy {id}</div>
    </>
  )
}
