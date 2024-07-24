import { response } from "express"

export const getCategories = (req, res = response)=>{
  try{
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