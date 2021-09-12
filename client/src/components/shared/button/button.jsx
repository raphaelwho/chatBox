import React from 'react';
import './button.css';

const Button = ({color='#CDC4F2', textColor='white', text, func, width='70%', height='100px'}) => (
  <button onClick={func} className='button' style={{backgroundColor: color, color: textColor, width: width, height: height}}>{text}</button>
);


export default Button;