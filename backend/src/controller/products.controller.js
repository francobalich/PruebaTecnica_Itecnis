import { response } from "express"
import { getAllProducts, saveProducts } from "./database.controller.js"

export const getProducts = async (req, res = response) => {
  try {
    const resp = await getAllProducts()
    return res.status(200).json({
      status: "Ok",
      data: resp
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}

export const postProduct = async (req, res = response) => {
  try {
    const product = {
      id: 11,
      titulo: "Router TP-Link Archer AX50",
      precio: 149.99,
      categoria: "Redes",
      imagen: "https://static.tp-link.com/Archer-AX50_01_normal_1616726600988r.jpg",
      descripcion: "Router WiFi 6 con velocidad de hasta 3 Gbps, cobertura amplia y múltiples funciones de seguridad."
    }
    const resp = await saveProducts(product)
    return res.status(200).json({
      status: "Ok",
      data: resp
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}