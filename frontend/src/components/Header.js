import { Link } from "react-router-dom";

function Header({ name, userEmail }) {

  function onSignOut() {
    localStorage.removeItem('jwt')
  }

    return (
        <header className="header">
          <div className="header__logo" />
          {name !== 'signup' && name !== 'signin' ?
            <div className="header__conteiner">
              <p className="header__email">{userEmail}</p>
              <Link to={`/sign-in`} className="header__link-out" onClick={onSignOut}>Выйти</Link>
            </div>
          :
          <Link to={name === 'signup' ? '/sign-in' : '/sign-up'} className="header__link">
          {name === 'signup' ? 'Войти' : 'Регистрация'}</Link> 
          }
        </header>
    )
}

export default Header;