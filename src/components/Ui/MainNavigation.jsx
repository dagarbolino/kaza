import { Link } from 'react-router-dom'

import img from '../../assets/logo.png'

const MainNavigation = () => {
      return (
            <>
                  <nav className="navBar">
                        <div className="logo">
                              <img src={img} alt="logo" />
                        </div>

                        <div className="menu">
                              <Link to="/">Accueil</Link>
                              <Link to="/about">A Propos</Link>
                        </div>
                  </nav>
            </>
      )
}

export default MainNavigation
