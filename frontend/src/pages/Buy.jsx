import { useParams } from "react-router-dom";
import { DetailsData } from "../components/DetailsData";
import { ProductsContext } from "../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { TotalCard } from "../components/TotalCard";
import { ShoppingCart } from "../components/ShoppingCart";
import './Buy.css'
import { Banner } from "../components/Banner";

export const Buy = () => {
  const { id,amount } = useParams();
  const { products, setProducts } = useContext(ProductsContext)
  const { loadInContext } = useProducts()
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (products.length === 0) {
      loadInContext();
    }
  }, [])

  useEffect(() => {
    const newProduct = products.find(item => item.id == id) || {}
    setProduct(newProduct)
  }, [products])

  return (
    <>
      <Banner text="Compra"/>
      <DetailsData category={product.category} title={product.title} />
      <section className="buy__container">
        <ShoppingCart product={product} amount={amount} />
        <TotalCard product={product } amount={amount}/>
      </section>
    </>
  )
}
