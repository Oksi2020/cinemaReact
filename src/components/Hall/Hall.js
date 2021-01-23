import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import Cart from '../Cart/cart';
import Scheme from '../Scheme/scheme'

import { saveHallConfig, initHallData } from '../../actions';

import { loadState, saveState } from '../../helpers/localStorage';

import './Hall.css';


const Hall = () => {
  let dispatch = useDispatch();
  let hallConfig = useSelector(state => state.hallConfig);

  // console.log('[hall]', hall);

  useEffect( () => {
    dispatch( initHallData() );
  }, [] );

  // 
  // let savedConfig = JSON.parse(localStorage.getItem('first-hall'));

  // if(savedConfig&&hallConfig.length===0) {
  //   dispatch( saveHallConfig(savedConfig) );
  // } else {
  //   if(hallConfig.length===0){
  //     console.log('hello')
  //     dispatch( saveHallConfig(hall) );
  //   } else {
  //     localStorage.setItem( 'first-hall', JSON.stringify(hallConfig) );
  //   }
  // }

  return (
      <div className="App">
        <div className="Hall">
          <Cart />
          <Scheme />
        </div>
      </div>
  );
}

export default Hall;
