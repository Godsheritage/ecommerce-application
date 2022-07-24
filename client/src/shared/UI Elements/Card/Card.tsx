import React from "react";
import "./card.scss";

const Card: React.FC<any> = ({ className, style, children }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
