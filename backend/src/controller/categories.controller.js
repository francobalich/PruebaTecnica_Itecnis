import { response } from "express"

export const getCategories =async(req, res = response)=>{
  try{

    return res.status(200).json({
      status:"Ok",
      data:''
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}