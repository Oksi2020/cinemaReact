import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteReservedTicket } from '../../actions';

import './ticket.css';

const Ticket = ({id, number, row, sum }) => {
    let dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch( deleteReservedTicket(id) );
    }

    return(
        <div className = 'ticket'>
            {number} место {row} ряд { sum } грн
            <button 
                type='button' 
                className='delTicket' 
                onClick={deleteHandler}>
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