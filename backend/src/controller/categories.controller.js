import { response } from "express"
import { queryProductTemplatesWithCategoryNames } from "./odoo.controller.cjs"

export const getCategories = (req, res = response)=>{
  try{
    queryProductTemplatesWithCategoryNames()
    return res.status(400).json({
      status:"Ok",
      message:"Code not implemented"
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}