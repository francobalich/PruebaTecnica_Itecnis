import { response } from "express"
import { getAllProductsOfDB, getProductsOfDB, saveProducts } from "./database.controller.js"
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
    const page = parseInt(req.params.page) || 1;
    const resp = await getProductsOfDB(page)
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