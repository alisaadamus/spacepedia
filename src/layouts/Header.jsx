import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { currentUser, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

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
          <a href="/category" className="nav-link">
            Категорії
          </a>
          <a href="/" className="nav-link">
            Контакти
          </a>
        </nav>

        <div className="user-menu" ref={dropdownRef}>
          {isAuthenticated ? (
            <>
              <div className="user-info" onClick={toggleDropdown}>
                <img
                  className="user-avatar"
                  src="icons/user-icon.png"
                  alt="user"
                />
              </div>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-user-info">
                    <span>{currentUser?.login}</span>
                    <span>{currentUser?.email}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Вийти
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <img
                className="user-avatar"
                src="icons/user-icon.png"
                alt="user"
                onClick={toggleDropdown}
              />

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="/login" className="dropdown-item">
                    Вхід
                  </a>
                  <a href="/signup" className="dropdown-item">
                    Реєстрація
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
