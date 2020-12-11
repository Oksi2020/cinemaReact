import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ADD_TO_CART } from '../../constants';
import './place.css';


const Place = ( { id, className, children, active, bought }) => {
    let dispatch = useDispatch();
    return(
        <div className = {className} onClick = {() => {
            if(active===false && bought===false) {
                dispatch({ type: ADD_TO_CART, payload: id}) 
            }            
            }}>
            { bought?'':children }
        </div>
    )
}

Place.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,     
    children: PropTypes.number, 
    active: PropTypes.bool,
    bought: PropTypes.bool
}

export default Place;