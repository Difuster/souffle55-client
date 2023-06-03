import React from 'react';

const TextArea = ({className, rows, placeholder, onChange}) => {
  return (
    <div>
      <textarea
        className={className}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
