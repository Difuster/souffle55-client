import React from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../Description';
import './style.css';
import Feedbacks from '../Feedbacks';

const CakePageBody = ({cake, feedbacks}) => {
  const navigate = useNavigate();
  const feeds = feedbacks.filter(feed => feed.cakeId === cake.id);

  return (
    <div className="CakePageBody">
      <div className="CakePageBody__info">
        <div className="CakePageBody__img">
          <img src={`http://localhost:5000/${cake.img}`} alt={cake.name} />
        </div>
        <div>
          <Description cake={cake} />
          <div className="CakePageBody__arrow" onClick={() => navigate(-1)}>
            <span>&#8249;</span>
            <span>вернуться назад</span>
          </div>
        </div>
      </div>
      <Feedbacks feedbacks={feeds} cakeId={cake.id} />
    </div>
  );
};

export default CakePageBody;
