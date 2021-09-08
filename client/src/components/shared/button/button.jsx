import React from 'react';
import './button.css';

const Button = ({color='#CDC4F2', textColor, text, func}) => (
  <button onClick={func} className='button' style={{backgroundColor: color, color: textColor}}>{text}</button>
);


export default Button;