// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#home">Logo</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode untuk garis tiga */}
      </button>
      <nav className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
        <ul>
          <li>
            <a href="#about">Tentang Saya</a>
          </li>
          <li>
            <a href="#projects">Proyek</a>
          </li>
          <li>
            <a href="#contact">Kontak</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
