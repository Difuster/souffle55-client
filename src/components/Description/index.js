import React from 'react';
import './style.css';
import Rating from '../Rating';

const Card = ({cake}) => {
  return (
    <div className="Card">
      <h1 className="Card__title">{cake.name}</h1>
      <article className="Card__description">{cake.description}</article>
      <p className="Card__info">
        <span>Калорийность: {cake.calories} ккал на 100 гр</span><br />
        <span>Вес: {cake.weight} грамм</span>
      </p>
      <p className="Card__price">
        <span>Цена: {cake.price} руб за штуку</span>
      </p>
      <Rating rating={cake.rating} />
    </div>
  );
};

export default Card;
