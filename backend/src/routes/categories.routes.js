import { Router } from 'express'
import { getCategories } from '../controller/categories.controller.js'

export const categoriesRouter = Router()

categoriesRouter.get('/getCategories',getCategories)