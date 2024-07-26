import { Router } from 'express'
import {  buyProduct, getAllProducts, getProducts, postProducts } from '../controller/products.controller.js'

export const productsRouter = Router()

productsRouter.get('/getAllProducts',getAllProducts)
productsRouter.get('/getProducts/:page',getProducts)
productsRouter.post('/postProducts',postProducts)
productsRouter.post('/buyProducts',buyProduct)