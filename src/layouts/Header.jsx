import { useEffect, useRef, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
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
        </div>
      </div>
    </header>
  );
};

export default Header;
