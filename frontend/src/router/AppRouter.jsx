import { Navigate, Route, Routes } from "react-router-dom"
import { Buy, Details, Home } from "../pages"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buy" element={<Buy/>} />
      <Route path="/details" element={<Details/>} />
      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
