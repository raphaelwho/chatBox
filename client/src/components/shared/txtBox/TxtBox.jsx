import React from 'react';
import style from './TxtBox.css'

const TxtBox = ({label, handleInput}) => {
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