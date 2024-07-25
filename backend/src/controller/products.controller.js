import { response } from "express"
import { getAllProducts, saveProducts } from "./database.controller.js"
import { isObjectEmpty } from "../utils/isObjectEmpty.js"

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
    const product = req.body;
    console.log(product);
    if (!isObjectEmpty(product)) {
      const resp = await saveProducts(product)
      return res.status(200).json({
        status: "Ok",
        data: resp
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