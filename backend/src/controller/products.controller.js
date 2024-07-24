import { response } from "express"
import {Pool} from 'pg'
import dotenv from 'dotenv'
dotenv.config()

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PWS,
  port: process.env.DB_PORT,
});

export const getProducts = (req, res = response)=>{
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