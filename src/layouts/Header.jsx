import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src="icons/logo-icon.png"
            alt="spacepedia"
            className="logo-icon"
          />
          <span className="logo-text">Spacepedia</span>
        </div>

        <nav className="navigation">
          <a href="/" className="nav-link active">
            Головна
          </a>
          <a href="/" className="nav-link">
            Категорії
          </a>
          <a href="/" className="nav-link">
            Контакти
          </a>
        </nav>

        <img className="user-avatar" src="icons/user-icon.png" alt="user" />
      </div>
    </header>
  );
};

export default Header;
