import React from 'react';
import './style.css';
import Nav from '../Nav';

const MainPageBody = ({cheesecakes}) => {
  return (
    <div className="MainPageBody">
      <Nav cheesecakes={cheesecakes}/>
    </div>
  );
};

export default MainPageBody;
