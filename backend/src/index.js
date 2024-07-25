import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { categoriesRouter } from './routes/categories.routes.js'
import { productsRouter } from './routes/products.routes.js'
import { corsConfig } from './middleware/corsConfig.js'
dotenv.config()

const PORT = process.env.PORT || 3000

// Configuración del server
const app = express()
app.use(express.json())

// Configuración del cors
app.use(cors())
app.use(corsConfig)

// Rutas
app.use('/api/', categoriesRouter)
app.use('/api/', productsRouter)

// Endpoints
app.use('/', (req, res) => {
  return res.status(200).json({
    msg: 'Welcome to the backend of products and categories'
  })
})
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})
app.listen(PORT, () =>
  console.log(`Server running in ${PORT} port.`)
)
