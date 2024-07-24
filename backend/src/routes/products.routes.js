import { Router } from 'express'
import { getProducts } from '../controller/products.controller.js'

export const productsRouter = Router()

productsRouter.get('/getProducts',getProducts)