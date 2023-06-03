import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const CakeCard = ({cake}) => {
  return (
    <div className="CakeCard">
      <img className="CakeCard__img" src={`http://localhost:5000/${cake.img}`} />
      <p className="CakeCard__title">{cake.name}</p>
      <p className={cake.discount > 0 ? "CakeCard__price_discount" : "CakeCard__price"}>{cake.price}</p>
      <Link to="/cake" state={{cake}}><p className="CakeCard__more">подробнее...</p></Link>
      {cake.discount > 0 ? <div className="CakeCard__new-price">
        <p>{cake.price * (100-cake.discount)/100}</p>
      </div> : null}
    </div>
  );
};

export default CakeCard;
