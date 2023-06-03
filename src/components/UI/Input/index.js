import React from 'react';
import './style.css';

const Input = ({id, type, placeholder, value, onChange}) => {
  return (
    <div>
      <label className="label" htmlFor={id}>{id}</label>
      <input
        id={id}
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
