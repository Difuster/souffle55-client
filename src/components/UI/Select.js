import React from 'react';

const Select = ({className, id, onChange, options, title}) => {
  return (
    <div>
      <label htmlFor={`category-${id}`}>{title}:</label><br />
      <select
        className={className}
        name={id}
        id={id}
        onChange={onChange}
      >
        {options.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default Select;
