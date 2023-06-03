import React from 'react';

const MyButton = ({className, onSendData, children}) => {
  return (
    <div>
      <button className={className} onClick={onSendData}>{children}</button>
    </div>
  );
};

export default MyButton;
