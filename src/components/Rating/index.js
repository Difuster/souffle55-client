import React from 'react';
import './style.css';

const Rating = ({rating}) => {
  return (
    <div className="Rating">
      <h2>Рейтинг:</h2>
      <div className="Rating__body" data-total-value={rating}>
        <div className="Rating__item" data-item-value="5">&#129473;</div>
        <div className="Rating__item" data-item-value="4">&#129473;</div>
        <div className="Rating__item" data-item-value="3">&#129473;</div>
        <div className="Rating__item" data-item-value="2">&#129473;</div>
        <div className="Rating__item" data-item-value="1">&#129473;</div>
      </div>
    </div>
  );
};

export default Rating;
