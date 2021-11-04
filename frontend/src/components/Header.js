import headerLogo from '../images/icons/mesto.svg';

function Header ({loggedIn, isClicked, handleClick, children}) {

  return(
    <header className={`header root__header ${loggedIn && "header_logined"}`}>
      <div className="header__logo-container">
        <img src={headerLogo} alt="Место. Россия" className={`header__logo ${loggedIn && "header__logo_logined"}`} />
        <button className={`header__button ${isClicked && "header__button_clicked"} ${loggedIn && "header__button_logined"}`} onClick={handleClick} type="button" aria-label="Открыть панель с информацией и кнопкой выхода"></button>
      </div>
      {children}
    </header>
  )
}

export default Header;