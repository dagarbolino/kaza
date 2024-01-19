import { NavLink } from 'react-router-dom'

function Error() {
      return (
            <>
                  <div>
                        <h1>404</h1>
                        <h2>Oups! La page que vous demandez n'existe pas.</h2>

                        <NavLink to="/" className="__acceuil">
                              Retourner sur la page d’accueil
                        </NavLink>
                  </div>
            </>
      )
}

export default Error
