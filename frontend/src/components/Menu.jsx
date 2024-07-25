import { Link } from 'react-router-dom'
import imgLogo from '../assets/itecnis_logo.png'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'><img src={imgLogo} alt='itecnis logo' /></Link></li>
      </ul>
    </nav>
  )
}
