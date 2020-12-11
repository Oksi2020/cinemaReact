import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { DELETE_FROM_CART } from '../../constants/index';

import './ticket.css';

const Ticket = ({id, number, row, sum }) => {
    let dispatch = useDispatch();
    return(
        <div className = 'ticket'>
            {number} место {row} ряд { sum } грн
            <button 
                type='button' 
                className='delTicket' 
                onClick={()=>{
                    dispatch({type:DELETE_FROM_CART, payload:id})
                }}>
                x
            </button>
        </div>
    )
}

Ticket.propTypes = {
    id: PropTypes.string,
    number: PropTypes.number,
    row: PropTypes.number,
    sum: PropTypes.number
}

export default Ticket;