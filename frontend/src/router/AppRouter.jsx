import { Navigate, Route, Routes } from "react-router-dom"
import { Buy, Details, Home } from "../pages"
import { ProductsProvider } from "../context/ProductsProvider"

export const AppRouter = () => {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </ProductsProvider>

  )
}
