import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Cart from '../Cart/cart';
import Scheme from '../Scheme/scheme'

import './Hall.css';
import { WRITE_HALL_CONFIG } from '../../constants/index';


let uniqid = require('uniqid');

const generateConfig = ( count ) => {
  const arr = Array.from({length:count}, (item, index) => {
    let type, seatsCount;
    let number = index+1;
    let rowID = uniqid();
    let price = 75;
    if(index <2) {
      type = 'econom';
      price -= 15;
      seatsCount = 18
    } else if(index+1 === count) {
      type = 'premium';
      price += 25;
      seatsCount = 22;
    } else {
      type = 'classic';
      seatsCount = 20;
    }
  
    return({
      id: rowID,
      number: number,
      type: type,
      seats: Array.from({length: seatsCount}, ( item, index )=>{
        return({
        id: uniqid(),
        price: price,
        number: index+1,
        row: number,
        rowID: rowID,
        active: false,
        bought: false}) 
      })})
  });
  return arr;
}

const Hall = () => {
  let hall = generateConfig(10);
  // let hallConfig = useSelector(state => state.hallConfig);

  let [ id, setId ]  = useState('first-hall');
  // localStorage.setItem( id, hallConfig );

  let dispatch = useDispatch();
  dispatch({type:WRITE_HALL_CONFIG, payload: hall})
  return (
      <div className="Hall">
        <Cart />
        <Scheme />
      </div>
  );
}

export default Hall;
