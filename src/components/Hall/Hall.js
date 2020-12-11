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
  let dispatch = useDispatch();
  let hallConfig = useSelector(state => state.hallConfig);
  let savedConfig = JSON.parse(localStorage.getItem('first-hall'));

  if(savedConfig&&hallConfig.length===0) {
    dispatch({type:WRITE_HALL_CONFIG, payload: savedConfig})
  } else {
    if(hallConfig.length===0){
      console.log('hello')
      dispatch({type:WRITE_HALL_CONFIG, payload: hall})
    } else {
      localStorage.setItem( 'first-hall', JSON.stringify(hallConfig) );
    }
  }
  
  


  

  return (
      <div className="Hall">
        <Cart />
        <Scheme />
      </div>
  );
}

export default Hall;
