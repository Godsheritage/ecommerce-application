import React from "react";

const Input: React.FC<any> = ({
  id,
  type,
  onChange,
  className,
  validators,
  placeholder,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
