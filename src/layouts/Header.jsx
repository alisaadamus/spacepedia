import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { currentUser, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="icons/logo-icon.png" alt="spacepedia" className="logo-icon" />
          <span className="logo-text">Spacepedia</span>
        </div>

        <nav className="navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Головна
          </NavLink>
          <NavLink to="/category" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Категорії
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Контакти
          </NavLink>
        </nav>

        <div className="user-menu" ref={dropdownRef}>
          {isAuthenticated ? (
            <>
              <div className="user-info" onClick={toggleDropdown}>
                <img src="icons/user-icon.png" alt="user" className="user-avatar" />
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
                  <a href="/login" className="dropdown-item">Вхід</a>
                  <a href="/signup" className="dropdown-item">Реєстрація</a>
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
