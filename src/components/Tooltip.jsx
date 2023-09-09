import React from 'react'
import './Tooltip.css'

const Tooltip = ({ position, content, children }) => {
  return (
    <div className={`tooltip tooltip-${position}`}>
      {children}
      <span className="tooltip-text">{content}</span>
    </div>
  );
};

export default Tooltip