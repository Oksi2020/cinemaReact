import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ADD_TO_CART } from '../../constants';
import './place.css';

import { addToCart } from '../../actions';


const Place = ( { id, className, children, active, bought }) => {
    let dispatch = useDispatch();
    const addHandler = () => {
        if(active===false && bought===false) {
            dispatch( addToCart(id) );
        }
    }
    
    return(
        <div className = {className} onClick = {addHandler}>
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