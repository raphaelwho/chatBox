import React from 'react';
import style from './TxtBox.css'

const TxtBox = ({label}) => {
  return (
    <div className="txtBox">
      <div className="txtBoxContainer">
        <label>{label}</label>
        <input type="text" id={label} className="txtBoxInput"></input>
      </div>
    </div>
  );
}

export default TxtBox;