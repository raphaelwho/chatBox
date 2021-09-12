import React from 'react';
import Button from '../shared/button/button.jsx'

export default ({ address, price, photo }) => (
  <div>
    <img src={photo}/>
    <div>{address}</div>
    <div>{price}</div>
    <Button text={'BOOK NOW'} func={() => console.log('link to booking page...')}/>
  </div>
);