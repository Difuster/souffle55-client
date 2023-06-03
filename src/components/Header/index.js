import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="Суфле55" onClick={() => navigate("/")}/>
      <div className="Header__links">
        <p className="Header__whatsup"></p>
        <p className="Header__instagram"></p>
        <p className="Header__phone"></p>
      </div>
    </header>
  );
};

export default Header;
