import React from 'react';
import './style.css';
import CakeCard from '../CakeCard';

const CakesPageBody = ({data}) => {
  console.log("data", data)
  return (
    <main className="CakesPageBody">
      {data.map(item =>
        <CakeCard cake={item} />
      )}
    </main>
  );
};

export default CakesPageBody;
