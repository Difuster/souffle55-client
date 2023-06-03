import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import cheesecake from '../../assets/images/cheesecake-link.jpg';
import moti from '../../assets/images/moti-link.jpg';
import cake from '../../assets/images/cake-link.jpg';

const Nav = ({cheesecakes}) => {
  console.log(cheesecakes)
  return (
    <nav className="Nav">
      <div className="Nav__item">
        <Link to="/cakes" state={{ data: cheesecakes }}>
          <img src={cheesecake} alt="Чизкейки" />
        </Link>
      </div>
      <div className="Nav__item">
        <Link to="/cakes" state={{ data: cheesecakes }}>
          <img src={moti} alt="Моти" />
        </Link>
      </div>
      <div className="Nav__item">
        <Link to="/cakes" state={{ data: cheesecakes }}>
          <img src={cake} alt="Кексы" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
