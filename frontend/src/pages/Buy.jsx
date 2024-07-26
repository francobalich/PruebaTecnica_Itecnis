import { useParams } from "react-router-dom";
import { DetailsData } from "../components/DetailsData";
import { ProductsContext } from "../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { TotalCard } from "../components/TotalCard";
import { ShoppingCart } from "../components/ShoppingCart";

export const Buy = () => {
  const { id } = useParams();
  const { products, setProducts } = useContext(ProductsContext)
  const { loadInContext } = useProducts()
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (products.length === 0) {
      loadInContext();
    }
  }, [])

  useEffect(() => {
    console.log(products);
  }, [products])

  return (
    <>
      <DetailsData category={product.categoria} title={product.titulo} />
      <section>
        <ShoppingCart />
        <TotalCard />
      </section>
    </>
  )
}
