import { Router } from 'express'
import { getProducts, postProduct } from '../controller/products.controller.js'

export const productsRouter = Router()

productsRouter.get('/getProducts',getProducts)
productsRouter.post('/postProducts',postProduct)