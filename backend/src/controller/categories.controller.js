import { response } from "express"
import { getAllCategoriesOfDB } from "./database.controller.js"

export const getCategories = async (req, res = response) => {
  try {
    const resp = await getAllCategoriesOfDB()
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