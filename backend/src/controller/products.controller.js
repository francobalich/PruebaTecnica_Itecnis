import { response } from "express"
import { buyProductOfDB, getAllProductsOfDB, getProductsByCategoryOfDB, getProductsOfDB, saveProducts } from "./database.controller.js"
import { isObjectEmpty } from "../utils/isObjectEmpty.js"

export const getAllProducts = async (req, res = response) => {
  try {
    const resp = await getAllProductsOfDB()
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
export const getProducts = async (req, res = response) => {
  try {
    const page = parseInt(req.params.page) || 0;
    const order = parseInt(req.params.order);
    const resp = await getProductsOfDB(page,order)
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
export const getProductsByCategory = async (req, res = response) => {
  try {
    const {page,category} = req.body;
    const resp = await getProductsByCategoryOfDB(page,category)
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
export const postProducts = async (req, res = response) => {
  try {
    const products = req.body;
    console.log(products);
    if (!isObjectEmpty(products)) {
      if (products.length > 0) {
        products.forEach(async (element) => {
          await saveProducts(element)
        });
        return res.status(200).json({
          status: "Ok"
        })
      }
      return res.status(404).json({
        status: "Error",
        message: "Array is empty"
      })
    }
    return res.status(404).json({
      status: "Error",
      message: "Data not sent"
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}
export const buyProduct = async (req, res = response) => {
  try {
    const {id,amount=1} = req.body
    console.log(`Producto a comprar - ${id}`);
    if (id !== undefined) {
      let resp=await buyProductOfDB(id)
      return res.status(200).json({
        status: "Ok",
        message:resp
      })
    }
    return res.status(404).json({
      status: "Error",
      message: "Array is empty"
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}