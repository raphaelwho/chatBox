import React from 'react';
import './TxtBox.css';

const TxtBox = ({ label, handleInput }) => {
  return (
    <div className="txtBox">
      <div className="txtBoxContainer">
        <label>{label}</label>
        <input type="text" id={label} className="txtBoxInput" onChange={handleInput}></input>
      </div>
    </div>
  );
}

export default TxtBox;