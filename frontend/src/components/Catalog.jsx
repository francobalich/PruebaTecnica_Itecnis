import { useContext, useEffect, useState } from 'react'
import { Card } from './Card'
import './Catalog.css'
import { ProductsContext } from '../context/ProductsContext'

export const Catalog = () => {
  const { products,setProducts } = useContext(ProductsContext)
  const [cards, setCards] = useState(<></>)

  const getProducts= async()=>{
    const resp = await fetch(`http://localhost:4000/api/getProducts`)
    const {data} = await resp.json()
    return data;
  }
  useEffect(()=>{
    if(products.length===0){
      console.log("Cargando context");
      getProducts().then((resp)=>{
        setProducts(resp)
      })
    }
  },[])
  useEffect(() => {
    console.log(products);
    setCards(() => {
      return products.map(element => {
        return <Card
          id={element.id}
          title={element.titulo}
          category={element.categoria}
          price={element.precio}
          img={element.imagen}
        />
      });
    })
  }, [products])

  return (
    <section className='catalog'>
      <div className='catalog_container'>
        {cards}
      </div>
    </section>
  )
}
