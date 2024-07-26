import { Link } from "react-router-dom"
import './Pages.css'

export const Pages = () => {
  return (
    <ul className="pages__container">
      <Link className="active" to='/1'><li>1</li></Link>
      <Link to='/2'><li>2</li></Link>
      <Link to='/3'><li>3</li></Link>
      <Link to='/4'><li>4</li></Link>
      <Link to='/1'><li>Siguiente</li></Link>
    </ul>
  )
}
